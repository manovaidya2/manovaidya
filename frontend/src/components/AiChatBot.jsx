import React, { useMemo, useRef, useState } from "react";
import { Bot, Loader2, MessageCircle, RotateCcw, Send, Sparkles, X } from "lucide-react";
import api from "../api/axiosInstance";

const greeting = {
  role: "assistant",
  text: "Namaste. Ask me about Manovaidya services, conditions, consultations, care approach, or available support options.",
};

const quickQuestions = [
  "Book consultation",
  "Tell me about autism support",
  "How does Neuro-Ayurveda help?",
  "Can I book an online consultation?",
];

const consultationTimes = [
  "10:30 AM - 11:00 AM",
  "11:00 AM - 11:30 AM",
  "11:30 AM - 12:00 PM",
  "12:00 PM - 12:30 PM",
  "05:00 PM - 05:30 PM",
  "05:30 PM - 06:00 PM",
  "06:00 PM - 06:30 PM",
];

const reviewNote = "Consultation with Dr. Ankush Garg. Google rating 4.9/5 from positive patient reviews.";
const clinicPhone = "7823838638";

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

const isBookingIntent = (value) =>
  /book|appointment|consultation|consult|doctor|schedule|call\s?back/i.test(value);

const knowledgeBase = [
  {
    title: "Autism Support",
    terms: ["autism", "asd", "spectrum", "eye", "speech", "social", "repetitive"],
    text: "Manovaidya provides autism support for children and families through structured developmental understanding, assessment, personalised guidance, parent support and the Neuro-Ayurveda Development System. Autism-related concerns may include delayed speech, reduced eye contact, difficulty with social interaction, repetitive behaviours, sensory sensitivities, behaviour concerns, attention or learning differences. The focus is not on labels alone, but on understanding the child's communication, behaviour, sensory profile, development, sleep, lifestyle and family needs. Families can book a consultation when they notice developmental concerns, speech delay, social communication difficulty, behaviour changes or uncertainty about next steps."
  },
  {
    title: "ADHD and Child Development",
    terms: ["adhd", "attention", "hyperactive", "impulsive", "learning", "child", "development"],
    text: "Manovaidya supports ADHD, learning, attention and child development concerns through structured assessment and personalised guidance. Concerns may include poor focus, hyperactivity, impulsive behaviour, difficulty waiting, academic pressure, emotional outbursts, learning challenges, speech delay or behavioural concerns. Care focuses on understanding the child's development, behaviour, emotional wellbeing, routines, family environment and support needs."
  },
  {
    title: "Neuro-Ayurveda Development System",
    terms: ["neuro", "ayurveda", "system", "approach", "holistic", "brain", "gut"],
    text: "The Neuro-Ayurveda Development System at Manovaidya looks at wellbeing through connected pillars such as brain nourishment, gut response, neural networks, sensory integration and behaviour guidance. The approach considers emotional wellbeing, sleep, lifestyle, nutrition, digestion, sensory needs, behaviour and family support instead of focusing only on symptoms."
  },
  {
    title: "Consultation and Online Support",
    terms: ["consultation", "book", "online", "appointment", "clinic", "assessment"],
    text: "Manovaidya offers structured consultations and guidance for children, teenagers, adults, women and seniors. Online consultations are available for many concerns, with assessment, history-taking, personalised guidance and follow-up planning. A consultation can help families understand the concern, decide the right support direction and create a practical care plan."
  },
  {
    title: "Teen, Adult, Women and Senior Mental Health",
    terms: ["teen", "adult", "women", "senior", "anxiety", "depression", "stress", "sleep", "memory"],
    text: "Manovaidya supports mental wellbeing across life stages. Teen support includes stress, anxiety, depression, screen addiction, confidence and parent-teen relationship concerns. Adult support includes anxiety, depression, stress, burnout, sleep issues, self-esteem, relationships and unhealthy habits. Women's care includes stress, hormonal concerns, pregnancy and postpartum wellbeing, body image and relationship support. Senior care includes memory concerns, confusion, dementia and Alzheimer's support, depression and sleep issues."
  },
  {
    title: "Mind Body Wellbeing",
    terms: ["mind", "body", "stress", "tension", "fatigue", "sleep", "digestion"],
    text: "Manovaidya explains mind-body wellbeing as the connection between emotional stress, physical symptoms, sleep, digestion, fatigue, tension and lifestyle patterns. Support focuses on understanding the whole person and improving emotional balance, routines, sleep quality, brain health and long-term wellbeing."
  }
];

const stripHtml = (value) =>
  String(value || "")
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/\s+/g, " ")
    .trim();

let blogKnowledgeCache = null;

const fetchBlogKnowledge = async () => {
  if (blogKnowledgeCache) return blogKnowledgeCache;

  try {
    const response = await api.get("/blogs");
    const blogs = Array.isArray(response.data?.data) ? response.data.data : [];

    blogKnowledgeCache = blogs
      .filter((blog) => !blog.status || blog.status === "published")
      .slice(0, 30)
      .map((blog) => ({
        title: blog.title || "Manovaidya Blog",
        slug: blog.slug,
        text: stripHtml(
          [
            blog.title,
            blog.category,
            blog.focusKeyword,
            blog.shortDescription,
            blog.metaDescription,
            blog.content,
            ...(Array.isArray(blog.faq)
              ? blog.faq.map((item) => `${item.question || ""} ${item.answer || ""}`)
              : []),
          ].filter(Boolean).join(" ")
        ).slice(0, 2200),
      }))
      .filter((blog) => blog.text.length > 80);
  } catch {
    blogKnowledgeCache = [];
  }

  return blogKnowledgeCache;
};

const getTokens = (question) =>
  String(question || "")
    .toLowerCase()
    .split(/[^a-z0-9]+/i)
    .filter((token) => token.length > 2);

const scoreText = (text, tokens) => {
  const lowerText = text.toLowerCase();
  return tokens.reduce((score, token) => {
    const matches = lowerText.split(token).length - 1;
    return score + matches * (token.length > 5 ? 2 : 1);
  }, 0);
};

const getRelevantChunks = async (question) => {
  const tokens = getTokens(question);
  const rankedKnowledge = knowledgeBase
    .map((item) => ({
      ...item,
      score:
        scoreText(`${item.title} ${item.terms.join(" ")} ${item.text}`, tokens) +
        item.terms.filter((term) => tokens.includes(term)).length * 5,
    }))
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);

  const selectedKnowledge = rankedKnowledge.length
    ? rankedKnowledge
    : knowledgeBase.slice(0, 4);

  const blogs = await fetchBlogKnowledge();
  const rankedBlogs = blogs
    .map((blog) => ({
      ...blog,
      score: scoreText(`${blog.title} ${blog.text}`, tokens),
    }))
    .filter((blog) => blog.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);

  return [
    selectedKnowledge
    .map((item) => `${item.title}: ${item.text}`)
      .join("\n\n---\n\n"),
    rankedBlogs.length
      ? rankedBlogs
          .map((blog) => `Related blog: ${blog.title}\n${blog.text}`)
          .join("\n\n---\n\n")
      : "",
  ].filter(Boolean).join("\n\n---\n\n")
    .slice(0, 4200);
};

async function askWebsiteAi(question) {
  const context = await getRelevantChunks(question);
  const response = await api.post("/ai-chat", { question, context }, { timeout: 5500 });
  const answer = response.data?.data?.answer?.trim();

  if (!answer) {
    throw new Error("AI did not return an answer.");
  }

  return answer;
}

const getFastFallbackAnswer = (question) => {
  if (/autism|asd|spectrum/i.test(question)) {
    return "Manovaidya supports autism-related concerns through structured developmental assessment, personalised guidance and family-centred support.\n\nAutism concerns may include delayed speech, reduced eye contact, social communication difficulty, repetitive behaviours, sensory sensitivity, attention or behaviour challenges.\n\nThe care approach focuses on understanding the child as an individual: communication, behaviour, sensory needs, sleep, routines, family concerns and development stage.\n\nA consultation can help families understand what may be happening, what support direction is suitable, and how to plan the next steps with professional guidance.";
  }

  return "Manovaidya can help with child, teen, adult, women, senior and mind-body wellbeing concerns through structured assessment and personalised guidance.\n\nFor a more personalised answer, please book a consultation or speak with the Manovaidya team.";
};

const formatAssistantText = (text) =>
  String(text || "")
    .replace(/\s+\*\s+/g, "\n• ")
    .replace(/\*\*/g, "")
    .replace(/\*/g, "")
    .replace(/^\s*[-*]\s+/gm, "• ")
    .replace(/\n{3,}/g, "\n\n")
    .trim();

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
                <li key={line}>{line.replace(/^•\s*/, "")}</li>
              ))}
            </ul>
          );
        }

        return (
          <p key={`${block}-${index}`} className="leading-6">
            {block.replace(/^•\s*/, "")}
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
      <div className="mt-3 grid gap-2 sm:grid-cols-2">
        <button
          type="button"
          className="rounded-lg bg-[#8B43BA] px-3 py-2 text-[12px] font-black text-white transition hover:bg-[#7434a0]"
          onClick={() => window.dispatchEvent(new CustomEvent("manovaidya:start-chat-booking"))}
        >
          Book Consultation
        </button>
        <a
          href={`tel:+91${clinicPhone}`}
          className="rounded-lg border border-[#8B43BA]/25 bg-white px-3 py-2 text-center text-[12px] font-black text-[#8B43BA] transition hover:bg-[#f7effc]"
        >
          Call {clinicPhone}
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
  const chatEndRef = useRef(null);

  const canSend = useMemo(
    () => {
      if (isLoading) return false;
      const step = bookingStep !== null ? bookingSteps[bookingStep] : null;
      if (step?.inputType === "date") return Boolean(question);
      if (step?.inputType === "select") return Boolean(question);
      return question.trim().length > 1;
    },
    [bookingStep, isLoading, question]
  );

  const openChat = () => {
    setIsOpen((open) => {
      const nextOpen = !open;
      if (nextOpen) fetchBlogKnowledge();
      return nextOpen;
    });
  };

  const resetChat = () => {
    setMessages([greeting]);
    setQuestion("");
    setIsLoading(false);
    setBookingStep(null);
    setBookingData({});
  };

  const pushAssistantMessage = (text) => {
    setMessages((current) => [...current, { role: "assistant", text }]);
    window.setTimeout(() => {
      chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  };

  const startBookingFlow = () => {
    setIsOpen(true);
    setBookingData({});
    setBookingStep(0);
    pushAssistantMessage(
      `${reviewNote}\n\nI can help you book a consultation step by step.\n\n${bookingSteps[0].prompt}`
    );
  };

  React.useEffect(() => {
    const handleStartBooking = () => {
      startBookingFlow();
    };

    window.addEventListener("manovaidya:start-chat-booking", handleStartBooking);
    return () => {
      window.removeEventListener("manovaidya:start-chat-booking", handleStartBooking);
    };
  }, []);

  const submitConsultation = async (data) => {
    await api.post("/consultations", {
      name: data.name,
      phone: data.phone,
      consultationMode: data.consultationMode,
      preferredDate: data.preferredDate,
      preferredTime: data.preferredTime,
      message: [
        `Location: ${data.location}`,
        "Consultation with: Dr. Ankush Garg",
        "Source: AI chat assistant",
      ].join("\n"),
    });
  };

  const handleBookingResponse = async (rawValue) => {
    const step = bookingSteps[bookingStep];
    const value = String(rawValue || "").trim();
    if (!step || !value) return;

    if (step.key === "phone" && value.replace(/\D/g, "").length < 10) {
      pushAssistantMessage("Please enter a valid 10 digit mobile number.");
      return;
    }

    if (step.key === "preferredDate" && !/^\d{4}-\d{2}-\d{2}$/.test(value)) {
      pushAssistantMessage("Please choose a date from the date picker.");
      return;
    }

    const nextData = { ...bookingData, [step.key]: value };
    setBookingData(nextData);
    setMessages((current) => [...current, { role: "user", text: step.options?.find((option) => option.value === value)?.label || value }]);
    setQuestion("");

    const nextStep = bookingStep + 1;
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
        `Your consultation request has been submitted successfully.\n\nDoctor: Dr. Ankush Garg\nMode: ${nextData.consultationMode === "clinic" ? "Clinic Visit" : "Online Consultation"}\nDate: ${nextData.preferredDate}\nTime: ${nextData.preferredTime}\n\nOur team will contact you shortly.`
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

  const submitQuestion = async (value = question) => {
    const trimmedQuestion = value.trim();
    if (!trimmedQuestion || isLoading) return;

    if (bookingStep !== null) {
      await handleBookingResponse(trimmedQuestion);
      return;
    }

    setQuestion("");
    setIsOpen(true);
    setMessages((current) => [...current, { role: "user", text: trimmedQuestion }]);

    if (isBookingIntent(trimmedQuestion)) {
      startBookingFlow();
      return;
    }

    setIsLoading(true);

    try {
      const answer = await askWebsiteAi(trimmedQuestion);
      setMessages((current) => [...current, { role: "assistant", text: answer, showCta: true }]);
    } catch (error) {
      const errorMessage =
        error.response?.data?.message ||
        (error.code === "ECONNABORTED" || error.message === "Network Error"
          ? getFastFallbackAnswer(trimmedQuestion)
          : error.message) ||
        "Sorry, I could not answer right now. Please try again or contact the Manovaidya team.";

      setMessages((current) => [
        ...current,
        {
          role: "assistant",
          text: errorMessage,
          showCta: true,
        },
      ]);
    } finally {
      setIsLoading(false);
      window.setTimeout(() => {
        chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 50);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-[80] sm:bottom-6 sm:right-6">
      {isOpen ? (
        <section className="mb-3 flex h-[min(620px,calc(100vh-110px))] w-[calc(100vw-32px)] max-w-[390px] flex-col overflow-hidden rounded-2xl border border-[#8B43BA]/20 bg-white shadow-[0_24px_60px_rgba(38,20,72,0.24)]">
          <header className="flex items-center justify-between gap-3 bg-[#8B43BA] px-4 py-3 text-white">
            <div className="flex min-w-0 items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15">
                <Bot className="h-5 w-5" strokeWidth={2.4} />
              </span>
              <div className="min-w-0">
                <h2 className="truncate text-[15px] font-black">Manovaidya AI Assistant</h2>
                <p className="truncate text-[12px] font-semibold text-white/78">
                  Guided by Manovaidya information
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
                onClick={() => setIsOpen(false)}
              >
                <X className="h-5 w-5" strokeWidth={2.4} />
              </button>
            </div>
          </header>

          <div className="flex-1 overflow-y-auto bg-[#fbfaff] px-4 py-4">
            <div className="grid gap-3">
              {messages.map((message, index) => (
                <div
                  key={`${message.role}-${index}`}
                  className={`max-w-[88%] rounded-2xl px-4 py-3 text-[13.5px] font-semibold leading-6 ${
                    message.role === "user"
                      ? "ml-auto bg-[#8B43BA] text-white"
                      : "mr-auto border border-[#8B43BA]/12 bg-white text-[#312448]"
                  }`}
                >
                  {message.role === "assistant" ? (
                    <>
                      <AssistantMessage text={message.text} />
                      {message.showCta ? <ConsultationCta /> : null}
                    </>
                  ) : (
                    message.text
                  )}
                </div>
              ))}
              {isLoading ? (
                <div className="mr-auto inline-flex max-w-[88%] items-center gap-2 rounded-2xl border border-[#8B43BA]/12 bg-white px-4 py-3 text-[13.5px] font-bold text-[#312448]">
                  <Loader2 className="h-4 w-4 animate-spin text-[#8B43BA]" />
                  Preparing a detailed answer...
                </div>
              ) : null}
              <div ref={chatEndRef} />
            </div>
          </div>

          <div className="border-t border-[#8B43BA]/12 bg-white p-3">
            <div className="mb-3 flex gap-2 overflow-x-auto pb-1">
              {(bookingStep !== null
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
              {bookingStep !== null && bookingSteps[bookingStep]?.inputType === "date" ? (
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
                  className="min-h-11 flex-1 resize-none rounded-xl border border-[#8B43BA]/18 bg-[#fbfaff] px-3 py-3 text-[14px] font-semibold leading-5 text-[#251553] outline-none transition placeholder:text-slate-400 focus:border-[#8B43BA]"
                  placeholder={bookingStep !== null ? bookingSteps[bookingStep]?.prompt || "Type your answer..." : "Ask your question..."}
                  onChange={(event) => setQuestion(event.target.value)}
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
        aria-label="Open Manovaidya AI Assistant"
        onClick={openChat}
      >
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/14">
          {isOpen ? <X className="h-5 w-5" /> : <MessageCircle className="h-5 w-5" />}
        </span>
        <span className="hidden text-left sm:block">
          <span className="block text-[14px] font-black leading-4">Ask AI</span>
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
