import React, { useMemo, useRef, useState } from "react";
import { Bot, MessageCircle, RotateCcw, Send, Sparkles, X } from "lucide-react";
import api from "../api/axiosInstance";
import {
  consultationDaysByMode,
  consultationTimes,
  createSecureConversationId,
  getBookingPrefill,
  getDateDay,
  getNextMissingBookingStep,
  isAgentIntent,
  isDirectBookingCommand,
} from "../utils/aiChatUtils";

const greeting = {
  role: "assistant",
  text: "Namaste! Aaj main aapki kya madad kar sakta hoon?",
};

const quickQuestions = [
  "Book consultation",
  "Connect with agent",
  "Tell me about autism support",
  "How does Neuro-Ayurveda help?",
  "Can I book an online consultation?",
];

const clinicPhone = "7823838638";
const clinicPhoneDisplay = "+91 78238 38638";
const consultationFee = "599";

const bookingSteps = [
  {
    key: "name",
    prompt: "Please share your full name.",
  },
  {
    key: "phone",
    prompt: "Please share your mobile number.",
  },
  {
    key: "location",
    prompt: "Please share your city or location.",
  },
  {
    key: "consultationMode",
    prompt: "How would you like to consult?",
    inputType: "select",
    options: [
      { label: "Online", value: "online" },
      { label: "Clinic Visit", value: "clinic" },
    ],
  },
  {
    key: "preferredDate",
    prompt: "Please choose your preferred date.",
    inputType: "date",
  },
  {
    key: "preferredTime",
    prompt: "Please choose a preferred time.",
    inputType: "select",
    options: consultationTimes.map((time) => ({ label: time, value: time })),
  },
];

const agentLeadSteps = [
  { key: "name", prompt: "Before connecting you to an agent, please share your full name." },
  { key: "phone", prompt: "Please share your mobile number." }
];

const normalizeQuestion = (value) =>
  String(value || "")
    .toLowerCase()
    .replace(/[^\p{L}\p{N}]+/gu, " ")
    .replace(/\s+/g, " ")
    .trim();

const sanitizeMobileNumber = (value) => String(value || "").replace(/\D/g, "").slice(0, 10);

const hasAnyTerm = (value, terms) => terms.some((term) => value.includes(term));

const isBookingCancelIntent = (value) => {
  const cleanValue = normalizeQuestion(value);
  const negativePhrases = [
    "nahi",
    "nhi",
    "nahin",
    "na chahiye",
    "nahi chahiye",
    "nhi chahiye",
    "nahin chahiye",
    "abhi nahi",
    "abhi nhi",
    "cancel",
    "stop",
    "mat karo",
    "no",
  ];
  return negativePhrases.some(
    (phrase) => cleanValue === phrase || cleanValue.startsWith(`${phrase} `)
  );
};

const isFillerReply = (value) =>
  ["ok", "okay", "okk", "haan", "han", "yes", "hmm", "hm", "theek hai", "thik hai"].includes(normalizeQuestion(value));

const isLikelyVisitorQuestion = (value) => {
  const cleanValue = normalizeQuestion(value);
  return (
    /[?؟]/.test(value) ||
    hasAnyTerm(cleanValue, [
      "how",
      "why",
      "what",
      "when",
      "where",
      "kaise",
      "kese",
      "kyu",
      "kyo",
      "kya",
      "kab",
      "kaha",
      "kaun",
      "kon",
      "fee",
      "fees",
      "pay",
      "payment",
      "cash",
      "upi",
      "card",
      "slot",
      "confirm",
      "aake",
      "aaunga",
      "aaungi",
      "price",
      "cost",
      "charge",
      "doctor",
      "dr",
      "medicine",
      "dawa",
      "dawai",
      "result",
      "review",
      "rating",
      "online",
      "clinic",
      "query",
      "doubt",
      "problem",
      "कैसे",
      "क्यों",
      "क्या",
      "कब",
      "कहाँ",
      "कौन",
    ])
  );
};

const looksLikeBookingSideQuery = (value, stepKey) => {
  const cleanValue = normalizeQuestion(value);
  const wordCount = cleanValue.split(" ").filter(Boolean).length;
  if (isLikelyVisitorQuestion(value)) return true;

  const sideQueryTerms = [
    "main",
    "mujhe",
    "mera",
    "meri",
    "pay",
    "payment",
    "cash",
    "upi",
    "card",
    "clinic",
    "online",
    "aake",
    "aaunga",
    "aaungi",
    "slot",
    "confirm",
    "query",
    "doubt",
    "problem",
    "chahiye",
  ];

  if (hasAnyTerm(cleanValue, sideQueryTerms)) return true;
  return stepKey === "name" && wordCount > 4;
};

async function askWebsiteAi(question, conversationId) {
  const response = await api.post("/ai-chat", { question, conversationId }, { timeout: 65000 });
  const result = response.data?.data;
  const answer = result?.answer?.trim();
  if (!answer) throw new Error("AI did not return an answer.");
  return { ...result, answer };
}

const formatAssistantText = (text) =>
  String(text || "")
    .replace(/\r\n/g, "\n")
    .replace(/â€¢/g, "•")
    .replace(/\s+\*\s+/g, "\n• ")
    .replace(/\*\*/g, "")
    .replace(/\*/g, "")
    .replace(/^\s*[-*]\s+/gm, "• ")
    .replace(/\n{3,}/g, "\n\n")
    .trim();

const renderLinkedText = (text) => String(text || "").split(/(https?:\/\/[^\s]+)/g).map((part) =>
  /^https?:\/\//.test(part) ? (
    <a
      key={part}
      href={part}
      target="_blank"
      rel="noreferrer"
      className="break-all font-black text-[#7b36a8] underline underline-offset-2"
    >
      {/google\.[^/]+\/maps|maps\.google/i.test(part) ? "Open in Google Maps" : "Open source"}
    </a>
  ) : part
);

function AssistantMessage({ text }) {
  const cleanText = formatAssistantText(text);
  const blocks = cleanText.split(/\n{2,}/).filter(Boolean);

  return (
    <div className="grid gap-2">
      {blocks.map((block, index) => {
        const lines = block.split("\n").filter(Boolean);
        const bulletLines = lines.filter((line) => line.trim().startsWith("• "));

        if (bulletLines.length >= Math.max(2, lines.length - 1)) {
          return (
            <ul key={`${block}-${index}`} className="list-disc space-y-1 pl-4">
              {bulletLines.map((line) => (
                <li key={line}>{renderLinkedText(line.replace(/^•\s*/, ""))}</li>
              ))}
            </ul>
          );
        }

        return (
          <p key={`${block}-${index}`} className="leading-6">
            {renderLinkedText(block.replace(/^•\s*/, ""))}
          </p>
        );
      })}
    </div>
  );
}

function ConsultationCta() {
  return (
    <div className="mt-3 rounded-xl border border-[#8B43BA]/14 bg-[#8B43BA]/5 p-3">
      <p className="text-[12px] font-black uppercase tracking-[0.06em] text-[#8B43BA]">
        Manovaidya
      </p>
      <p className="mt-1 text-[13px] font-bold leading-5 text-[#312448]">
        Need personalised guidance? Book a consultation or call our team.
      </p>
      <p className="mt-2 text-[12px] font-bold leading-5 text-[#5f4d73]">
        Rs. {consultationFee} consultation fee. Clinic: Tue, Sat, Sun. Online: Mon, Thu.
      </p>
      <div className="mt-3 grid gap-2 sm:grid-cols-2">
        <button
          type="button"
          className="rounded-lg bg-[#8B43BA] px-3 py-2 text-[12px] font-black text-white transition hover:bg-[#7434a0]"
          onClick={() => window.dispatchEvent(new CustomEvent("manovaidya:start-chat-booking"))}
        >
          Book Consultation
        </button>
        <button
          type="button"
          className="rounded-lg border border-[#8B43BA]/25 bg-white px-3 py-2 text-center text-[12px] font-black text-[#8B43BA] transition hover:bg-[#f7effc]"
          onClick={() => window.dispatchEvent(new CustomEvent("manovaidya:start-agent-chat"))}
        >
          Connect with Agent
        </button>
        <a
          href={`tel:+91${clinicPhone}`}
          className="rounded-lg border border-[#8B43BA]/25 bg-white px-3 py-2 text-center text-[12px] font-black text-[#8B43BA] transition hover:bg-[#f7effc] sm:col-span-2"
        >
          Call {clinicPhoneDisplay}
        </a>
      </div>
    </div>
  );
}

function AiChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([greeting]);
  const [question, setQuestion] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [bookingStep, setBookingStep] = useState(null);
  const [bookingData, setBookingData] = useState({});
  const [agentLeadStep, setAgentLeadStep] = useState(null);
  const [agentLeadData, setAgentLeadData] = useState({});
  const [agentSession, setAgentSession] = useState(null);
  const [agentMode, setAgentMode] = useState(false);
  const conversationIdRef = useRef(createSecureConversationId());
  const requestEpochRef = useRef(0);
  const chatScrollRef = useRef(null);
  const chatEndRef = useRef(null);
  const seenLiveMessageIds = useRef(new Set());
  const activeStep =
    bookingStep !== null
      ? bookingSteps[bookingStep]
      : agentLeadStep !== null
        ? agentLeadSteps[agentLeadStep]
        : null;
  const isPhoneStep = activeStep?.key === "phone";

  const canSend = useMemo(
    () => {
      if (isLoading) return false;
      const step = bookingStep !== null ? bookingSteps[bookingStep] : agentLeadStep !== null ? agentLeadSteps[agentLeadStep] : null;
      if (step?.key === "phone") return sanitizeMobileNumber(question).length === 10;
      if (step?.inputType === "date") return Boolean(question);
      if (step?.inputType === "select") return Boolean(question);
      return question.trim().length > 1;
    },
    [agentLeadStep, bookingStep, isLoading, question]
  );

  const openChat = () => {
    setIsOpen((open) => {
      const nextOpen = !open;
      return nextOpen;
    });
  };

  const resetChat = () => {
    requestEpochRef.current += 1;
    setMessages([greeting]);
    setQuestion("");
    setIsLoading(false);
    setBookingStep(null);
    setBookingData({});
    setAgentLeadStep(null);
    setAgentLeadData({});
    setAgentMode(false);
    setAgentSession(null);
    conversationIdRef.current = createSecureConversationId();
    seenLiveMessageIds.current = new Set();
  };

  const scrollChatToBottom = () => {
    window.setTimeout(() => {
      const container = chatScrollRef.current;
      if (!container) return;
      container.scrollTo({
        top: container.scrollHeight,
        behavior: "smooth",
      });
    }, 50);
  };

  const pushAssistantMessage = (text) => {
    setMessages((current) => [...current, { role: "assistant", text }]);
    scrollChatToBottom();
  };

  const appendLiveMessages = (session) => {
    const nextMessages = (session?.messages || []).filter((message) => {
      if (!message._id || seenLiveMessageIds.current.has(message._id)) return false;
      seenLiveMessageIds.current.add(message._id);
      return message.sender === "agent" || message.sender === "system";
    });

    if (!nextMessages.length) return;

    setMessages((current) => [
      ...current,
      ...nextMessages.map((message) => ({
        role: message.sender === "agent" ? "agent" : "assistant",
        text: message.text,
      })),
    ]);
    scrollChatToBottom();
  };

  const startAgentChat = async (initialText = "I want to connect with an agent.", visitorName, visitorPhone, appendUserMessage = true) => {
    setIsOpen(true);
    setQuestion("");
    setBookingStep(null);
    setBookingData({});
    setAgentLeadStep(null);
    setAgentLeadData({});
    setAgentMode(true);
    setIsLoading(true);
    if (appendUserMessage) {
      setMessages((current) => [...current, { role: "user", text: initialText }]);
    }

    try {
      const response = await api.post("/live-chat/sessions", { message: initialText, visitorName, visitorPhone });
      const session = response.data?.data;
      if (!session?.sessionKey) throw new Error("Unable to start live chat.");

      (session.messages || []).forEach((message) => {
        if (message._id) seenLiveMessageIds.current.add(message._id);
      });
      setAgentSession(session);
      pushAssistantMessage(
        "Aapki detail successfully submit ho gayi hai aur ab aap Manovaidya support team se directly connected hain. Kripya apna sawal yahan likhein, humari team jald hi aapko reply karegi."
      );
    } catch (error) {
      setAgentMode(false);
      pushAssistantMessage(
        error.response?.data?.message || "Sorry, agent se connect nahi ho pa raha. Please thodi der baad try karein."
      );
    } finally {
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    if (!agentMode || !agentSession?.sessionKey) return undefined;

    const fetchAgentSession = async () => {
      try {
        const response = await api.get(`/live-chat/sessions/${agentSession.sessionKey}`);
        const session = response.data?.data;
        if (!session) return;
        setAgentSession(session);
        appendLiveMessages(session);
      } catch {
        // Keep the visitor in the chat; the next poll can recover.
      }
    };

    const intervalId = window.setInterval(fetchAgentSession, 4000);
    void fetchAgentSession();
    return () => window.clearInterval(intervalId);
  }, [agentMode, agentSession?.sessionKey]);

  const startBookingFlow = (conversationState = null) => {
    const prefill = getBookingPrefill(conversationState);
    const firstStep = getNextMissingBookingStep(bookingSteps, prefill);
    setIsOpen(true);
    setBookingData(prefill);
    setBookingStep(firstStep < bookingSteps.length ? firstStep : null);
    setAgentLeadStep(null);
    pushAssistantMessage(
      `Bilkul. Consultation fee Rs. ${consultationFee} hai. Checked slot ke saath request complete karte hain; final confirmation successful submission ke baad hi hogi.`
    );
    if (firstStep < bookingSteps.length) {
      window.setTimeout(() => {
        pushAssistantMessage(bookingSteps[firstStep].prompt);
      }, 350);
    }
  };

  const startAgentLeadFlow = () => {
    setIsOpen(true);
    setAgentLeadData({});
    setAgentLeadStep(0);
    setBookingStep(null);
    pushAssistantMessage(agentLeadSteps[0].prompt);
  };

  React.useEffect(() => {
    const handleStartBooking = () => {
      startBookingFlow();
    };
    const handleStartAgentChat = () => {
      startAgentLeadFlow();
    };

    window.addEventListener("manovaidya:start-chat-booking", handleStartBooking);
    window.addEventListener("manovaidya:start-agent-chat", handleStartAgentChat);
    return () => {
      window.removeEventListener("manovaidya:start-chat-booking", handleStartBooking);
      window.removeEventListener("manovaidya:start-agent-chat", handleStartAgentChat);
    };
  }, []);

  const syncConversationDetails = (details) => {
    if (!conversationIdRef.current) return Promise.resolve();
    return api.post("/ai-chat/conversation-details", {
      conversationId: conversationIdRef.current,
      ...details,
    });
  };

  const submitConsultation = async (data) => {
    const availability = await api.post("/ai-chat/availability", {
      mode: data.consultationMode === "clinic" ? "offline" : data.consultationMode,
      date: data.preferredDate,
      time: data.preferredTime,
    });
    if (!availability.data?.data?.available) {
      throw new Error("Selected slot is no longer available. Please choose another date or time.");
    }

    await api.post("/consultations", {
      name: data.name,
      phone: data.phone,
      consultationMode: data.consultationMode,
      preferredDate: data.preferredDate,
      preferredTime: data.preferredTime,
      message: [
        `Location: ${data.location}`,
        "Consultation with: Dr. Ankush Garg",
        `Consultation fee: Rs. ${consultationFee}`,
        "Offline schedule: Tuesday, Saturday and Sunday. Online schedule: Monday and Thursday.",
        data.patient?.name ? `Patient: ${data.patient.name}` : "",
        data.patient?.age !== null && data.patient?.age !== undefined ? `Patient age: ${data.patient.age}` : "",
        data.patient?.relation ? `Relation: ${data.patient.relation}` : "",
        data.patient?.concern ? `Concern: ${data.patient.concern}` : "",
        "Source: AI chat assistant",
      ].filter(Boolean).join("\n"),
    });
    await syncConversationDetails({
      name: data.name,
      phone: data.phone,
      city: data.location,
      submitted: true,
    }).catch(() => {});
  };

  const handleBookingResponse = async (rawValue) => {
    const step = bookingSteps[bookingStep];
    const value = String(rawValue || "").trim();
    if (!step || !value) return;

    if (isBookingCancelIntent(value)) {
      setMessages((current) => [...current, { role: "user", text: value }]);
      setQuestion("");
      setBookingStep(null);
      setBookingData({});
      pushAssistantMessage(
        "Koi baat nahi. Kya main jaan sakta hu abhi appointment kyu nahi lena chahte? Aap apni query bata dijiye, main help karta hu."
      );
      return;
    }

    const isExactOptionMatch = step.options?.some(
      (opt) =>
        opt.value.toLowerCase() === value.toLowerCase() ||
        opt.label.toLowerCase() === value.toLowerCase()
    );

    if (!isExactOptionMatch) {
      if (looksLikeBookingSideQuery(value, step.key)) {
        setMessages((current) => [...current, { role: "user", text: value }]);
        setQuestion("");

        setIsLoading(true);
        try {
          const result = await askWebsiteAi(value, conversationIdRef.current);
          conversationIdRef.current = result.conversationId || conversationIdRef.current;
          pushAssistantMessage(`${result.answer}\n\n${step.prompt}`);
        } catch {
          pushAssistantMessage(
            `Main samajh raha hu. Is query ke liye Manovaidya team aapko better guide kar sakti hai.\n\n${step.prompt}`
          );
        } finally {
          setIsLoading(false);
        }
        return;
      }
    }

    if (isFillerReply(value) && ["name", "phone", "location"].includes(step.key)) {
      setMessages((current) => [...current, { role: "user", text: value }]);
      setQuestion("");
      pushAssistantMessage(`Thik hai. ${step.prompt}`);
      return;
    }

    const finalValue = step.key === "phone" ? sanitizeMobileNumber(value) : value;

    if (step.key === "phone" && finalValue.length !== 10) {
      pushAssistantMessage("Please enter a valid 10 digit mobile number.");
      return;
    }

    if (step.key === "preferredDate" && !/^\d{4}-\d{2}-\d{2}$/.test(value)) {
      pushAssistantMessage("Please choose a date from the date picker.");
      return;
    }

    if (step.key === "preferredDate") {
      const validDays = consultationDaysByMode[bookingData.consultationMode] || [];
      const selectedDay = getDateDay(value);
      if (!validDays.includes(selectedDay)) {
        pushAssistantMessage(
          bookingData.consultationMode === "clinic"
            ? "Noida clinic visit Tuesday, Saturday ya Sunday ko available hai. Please inmein se kisi din ki date choose karein."
            : "Online consultation Monday ya Thursday ko available hai. Please inmein se kisi din ki date choose karein."
        );
        return;
      }
    }

    const nextData = { ...bookingData, [step.key]: finalValue };
    setBookingData(nextData);
    setMessages((current) => [...current, { role: "user", text: step.options?.find((option) => option.value === value)?.label || finalValue }]);
    setQuestion("");

    if (["name", "phone", "location"].includes(step.key)) {
      const detailKey = step.key === "location" ? "city" : step.key;
      void syncConversationDetails({ [detailKey]: finalValue }).catch(() => {});
    }

    const nextStep = getNextMissingBookingStep(bookingSteps, nextData, bookingStep + 1);
    if (nextStep < bookingSteps.length) {
      setBookingStep(nextStep);
      pushAssistantMessage(bookingSteps[nextStep].prompt);
      return;
    }

    setIsLoading(true);
    try {
      await submitConsultation(nextData);
      setBookingStep(null);
      setBookingData({});
      pushAssistantMessage(
        `Your consultation request has been submitted successfully.\n\nDoctor: Dr. Ankush Garg\nConsultation fee: Rs. ${consultationFee}\nMode: ${nextData.consultationMode === "clinic" ? "Clinic Visit" : "Online Consultation"}\nDate: ${nextData.preferredDate}\nTime: ${nextData.preferredTime}\n\nOur team will contact you to complete the final confirmation.`
      );
    } catch (error) {
      pushAssistantMessage(
        error.response?.data?.message ||
        "Sorry, the consultation request could not be submitted right now. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const sendAgentMessage = async (rawValue) => {
    const value = String(rawValue || "").trim();
    if (!value || isLoading) return;

    if (!agentSession?.sessionKey) {
      await startAgentChat(value);
      return;
    }

    setQuestion("");
    setMessages((current) => [...current, { role: "user", text: value }]);
    setIsLoading(true);

    try {
      const response = await api.post(`/live-chat/sessions/${agentSession.sessionKey}/messages`, {
        message: value,
      });
      const session = response.data?.data;
      if (session) {
        (session.messages || []).forEach((message) => {
          if (message._id && message.sender === "visitor") seenLiveMessageIds.current.add(message._id);
        });
        setAgentSession(session);
        appendLiveMessages(session);
      }
    } catch (error) {
      pushAssistantMessage(
        error.response?.data?.message || "Message send nahi ho paya. Please dobara try karein."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleAgentLeadResponse = async (rawValue) => {
    const step = agentLeadSteps[agentLeadStep];
    const value = String(rawValue || "").trim();
    if (!step || !value) return;

    if (isBookingCancelIntent(value)) {
      setMessages((current) => [...current, { role: "user", text: value }]);
      setQuestion("");
      setAgentLeadStep(null);
      setAgentLeadData({});
      pushAssistantMessage(
        "Koi baat nahi. Aap apni query yaha bta sakte hain."
      );
      return;
    }

    const finalValue = step.key === "phone" ? sanitizeMobileNumber(value) : value;

    if (step.key === "phone" && finalValue.length !== 10) {
      pushAssistantMessage("Please enter a valid 10 digit mobile number.");
      return;
    }

    const nextData = { ...agentLeadData, [step.key]: finalValue };
    setAgentLeadData(nextData);
    setMessages((current) => [...current, { role: "user", text: finalValue }]);
    setQuestion("");

    const nextStep = agentLeadStep + 1;
    if (nextStep < agentLeadSteps.length) {
      setAgentLeadStep(nextStep);
      pushAssistantMessage(agentLeadSteps[nextStep].prompt);
      return;
    }

    await startAgentChat("Visitor completed lead form and wants to connect.", nextData.name, nextData.phone, false);
  };

  const closeChatbot = () => {
    setIsOpen(false);
    if (agentMode && agentSession?.sessionKey) {
      api.patch(`/live-chat/admin/sessions/${agentSession.sessionKey}/status`, { status: "closed" }).catch(() => {});
      resetChat();
    }
  };

  const submitQuestion = async (value = question, retryIndex = null) => {
    const trimmedQuestion = value.trim();
    if (!trimmedQuestion || isLoading) return;

    if (agentMode) {
      const lower = trimmedQuestion.toLowerCase();
      if (lower === "exit" || lower === "close") {
        api.patch(`/live-chat/admin/sessions/${agentSession.sessionKey}/status`, { status: "closed" }).catch(() => {});
        pushAssistantMessage("Chat session closed.");
        window.setTimeout(() => {
          resetChat();
          setIsOpen(false);
        }, 1500);
        return;
      }
      await sendAgentMessage(trimmedQuestion);
      return;
    }

    if (bookingStep !== null) {
      await handleBookingResponse(trimmedQuestion);
      return;
    }

    if (agentLeadStep !== null) {
      await handleAgentLeadResponse(trimmedQuestion);
      return;
    }

    setQuestion("");
    setIsOpen(true);
    setMessages((current) => retryIndex === null ? [...current, { role: "user", text: trimmedQuestion }] : current.filter((_, index) => index !== retryIndex));

    setIsLoading(true);
    const epoch = requestEpochRef.current;
    scrollChatToBottom();

    try {
      const result = await askWebsiteAi(trimmedQuestion, conversationIdRef.current);
      if (epoch !== requestEpochRef.current) return;
      conversationIdRef.current = result.conversationId || conversationIdRef.current;

      if (result.action === "BOOK_CONSULTATION") {
        startBookingFlow(result.state);
        return;
      }
      if (result.action === "CONNECT_AGENT") {
        startAgentLeadFlow();
        return;
      }

      setMessages((current) => [
        ...current,
        { role: "assistant", text: result.answer, sources: result.sources, retryQuestion: result.degraded ? trimmedQuestion : undefined, showCta: Boolean(result.showCta) },
      ]);
    } catch (error) {
      if (epoch !== requestEpochRef.current) return;
      if (isAgentIntent(trimmedQuestion)) {
        startAgentLeadFlow();
        return;
      }
      if (isDirectBookingCommand(trimmedQuestion)) {
        startBookingFlow();
        return;
      }

      const errorMessage = error.response?.status === 429
        ? "Please wait a moment before trying again."
        : "Reply abhi load nahi ho paya. Retry karein ya Connect with Agent se team se baat karein.";

      setMessages((current) => [
        ...current,
        {
          role: "assistant",
          text: errorMessage,
          retryQuestion: trimmedQuestion,
          showCta: true,
        },
      ]);
    } finally {
      if (epoch === requestEpochRef.current) {
        setIsLoading(false);
        scrollChatToBottom();
      }
    }
  };

  return (
    <div data-ai-chat="true" className="fixed bottom-4 right-4 z-[80] sm:bottom-6 sm:right-6">
      {isOpen ? (
        <section className="mb-3 flex h-[min(620px,calc(100vh-110px))] w-[calc(100vw-32px)] max-w-[390px] flex-col overflow-hidden rounded-2xl border border-[#8B43BA]/20 bg-white shadow-[0_24px_60px_rgba(38,20,72,0.24)]">
          <header className="flex items-center justify-between gap-3 bg-[#8B43BA] px-4 py-3 text-white">
            <div className="flex min-w-0 items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15">
                <Bot className="h-5 w-5" strokeWidth={2.4} />
              </span>
              <div className="min-w-0">
                <h2 className="truncate text-[15px] font-black">Mano Mitra</h2>
                <p className="truncate text-[12px] font-semibold text-white/78">
                  {agentMode ? "Connected with support team" : "Guided by Manovaidya information"}
                </p>
              </div>
            </div>
            <div className="flex shrink-0 items-center gap-1">
              <button
                type="button"
                className="flex h-9 w-9 items-center justify-center rounded-full text-white transition hover:bg-white/15"
                aria-label="Reset AI chat"
                title="Reset chat"
                onClick={resetChat}
              >
                <RotateCcw className="h-4.5 w-4.5" strokeWidth={2.4} />
              </button>
              <button
                type="button"
                className="flex h-9 w-9 items-center justify-center rounded-full text-white transition hover:bg-white/15"
                aria-label="Close AI chat"
                onClick={closeChatbot}
              >
                <X className="h-5 w-5" strokeWidth={2.4} />
              </button>
            </div>
          </header>

          <div ref={chatScrollRef} className="flex-1 overflow-y-auto bg-[#fbfaff] px-4 py-4">
            <div className="grid gap-3">
              {messages.map((message, index) => (
                <div
                  key={`${message.role}-${index}`}
                  className={`max-w-[88%] rounded-2xl px-4 py-3 text-[13.5px] font-semibold leading-6 ${message.role === "user"
                      ? "ml-auto bg-[#8B43BA] text-white"
                      : "mr-auto border border-[#8B43BA]/12 bg-white text-[#312448]"
                    }`}
                >
                  {message.role === "assistant" || message.role === "agent" ? (
                    <>
                      {message.role === "agent" ? (
                        <p className="mb-1 text-[11px] font-black uppercase tracking-[0.08em] text-[#8B43BA]">
                          Agent
                        </p>
                      ) : null}
                      <AssistantMessage text={message.text} />
                      {message.sources?.length ? (
                        <div className="mt-2 grid gap-1 text-[11px]">
                          {message.sources.filter((source) => /^https:\/\/manovaidya\.org\//.test(source.url)).map((source) => (
                            <a key={`${source.url}-${source.section}`} href={source.url} target="_blank" rel="noreferrer" className="text-[#7b36a8] underline underline-offset-2">
                              Source: {source.title}
                            </a>
                          ))}
                        </div>
                      ) : null}
                      {message.retryQuestion ? (
                        <button type="button" disabled={isLoading} onClick={() => submitQuestion(message.retryQuestion, index)} className="mt-2 text-[12px] font-bold text-[#7b36a8] underline disabled:opacity-50">Retry</button>
                      ) : null}
                      {message.showCta ? <ConsultationCta /> : null}
                    </>
                  ) : (
                    message.text
                  )}
                </div>
              ))}
              {isLoading ? (
                <div className="mr-auto inline-flex max-w-[88%] items-center gap-1.5 rounded-2xl border border-[#8B43BA]/12 bg-white px-4 py-3.5">
                  <span className="h-2 w-2 animate-bounce rounded-full bg-[#8B43BA]/70 [animation-delay:-0.3s]" />
                  <span className="h-2 w-2 animate-bounce rounded-full bg-[#8B43BA]/70 [animation-delay:-0.15s]" />
                  <span className="h-2 w-2 animate-bounce rounded-full bg-[#8B43BA]/70" />
                </div>
              ) : null}
              <div ref={chatEndRef} />
            </div>
          </div>

          <div className="border-t border-[#8B43BA]/12 bg-white p-3">
            <div className="mb-3 flex gap-2 overflow-x-auto pb-1">
              {(agentMode
                ? []
                : bookingStep !== null
                  ? bookingSteps[bookingStep]?.inputType === "select"
                    ? bookingSteps[bookingStep]?.options?.map((option) => option.label) || []
                    : []
                  : quickQuestions
              ).map((item) => (
                <button
                  key={item}
                  type="button"
                  className="shrink-0 rounded-full border border-[#8B43BA]/18 bg-[#8B43BA]/5 px-3 py-2 text-[12px] font-black text-[#6f34a0] transition hover:bg-[#8B43BA] hover:text-white"
                  onClick={() => {
                    const option = bookingStep !== null
                      ? bookingSteps[bookingStep]?.options?.find((entry) => entry.label === item)
                      : null;
                    submitQuestion(option?.value || item);
                  }}
                >
                  {item}
                </button>
              ))}
            </div>

            <form
              className="flex items-end gap-2"
              onSubmit={(event) => {
                event.preventDefault();
                submitQuestion();
              }}
            >
              {(bookingStep !== null && bookingSteps[bookingStep]?.inputType === "date") ? (
                <input
                  type="date"
                  value={question}
                  min={new Date().toISOString().split("T")[0]}
                  className="min-h-11 flex-1 rounded-xl border border-[#8B43BA]/18 bg-[#fbfaff] px-3 py-3 text-[14px] font-semibold leading-5 text-[#251553] outline-none transition placeholder:text-slate-400 focus:border-[#8B43BA]"
                  onChange={(event) => setQuestion(event.target.value)}
                />
              ) : bookingStep !== null && bookingSteps[bookingStep]?.inputType === "select" ? (
                <select
                  value={question}
                  className="min-h-11 flex-1 rounded-xl border border-[#8B43BA]/18 bg-[#fbfaff] px-3 py-3 text-[14px] font-semibold leading-5 text-[#251553] outline-none transition focus:border-[#8B43BA]"
                  onChange={(event) => setQuestion(event.target.value)}
                >
                  <option value="">{bookingSteps[bookingStep]?.prompt}</option>
                  {bookingSteps[bookingStep]?.options?.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              ) : (
                <textarea
                  value={question}
                  rows={1}
                  inputMode={isPhoneStep ? "numeric" : undefined}
                  maxLength={isPhoneStep ? 10 : undefined}
                  className="min-h-11 flex-1 resize-none rounded-xl border border-[#8B43BA]/18 bg-[#fbfaff] px-3 py-3 text-[14px] font-semibold leading-5 text-[#251553] outline-none transition placeholder:text-slate-400 focus:border-[#8B43BA]"
                  placeholder={agentMode ? "Message agent..." : bookingStep !== null ? bookingSteps[bookingStep]?.prompt || "Type your answer..." : "Ask your question..."}
                  onChange={(event) => setQuestion(isPhoneStep ? sanitizeMobileNumber(event.target.value) : event.target.value)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" && !event.shiftKey) {
                      event.preventDefault();
                      submitQuestion();
                    }
                  }}
                />
              )}
              <button
                type="submit"
                disabled={!canSend}
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#8B43BA] text-white shadow-[0_10px_22px_rgba(139,67,186,0.24)] transition hover:bg-[#7434a0] disabled:cursor-not-allowed disabled:opacity-45"
                aria-label="Send question"
              >
                <Send className="h-4.5 w-4.5" strokeWidth={2.5} />
              </button>
            </form>
          </div>
        </section>
      ) : null}

      <button
        type="button"
        className="flex h-15 min-h-[60px] items-center gap-3 rounded-full bg-[#8B43BA] px-5 text-white shadow-[0_18px_38px_rgba(93,40,128,0.32)] transition hover:-translate-y-0.5 hover:bg-[#7434a0]"
        aria-label="Open Mano Mitra chat assistant"
        onClick={openChat}
      >
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/14">
          {isOpen ? <X className="h-5 w-5" /> : <MessageCircle className="h-5 w-5" />}
        </span>
        <span className="hidden text-left sm:block">
          <span className="block text-[14px] font-black leading-4">Mano Mitra</span>
          <span className="flex items-center gap-1 text-[11px] font-bold text-white/76">
            <Sparkles className="h-3 w-3" />
            Smart guidance
          </span>
        </span>
      </button>
    </div>
  );
}

export default AiChatBot;
