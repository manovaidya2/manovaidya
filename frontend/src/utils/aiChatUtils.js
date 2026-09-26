export const consultationTimes = [
  "10:30 AM - 11:00 AM",
  "11:00 AM - 11:30 AM",
  "11:30 AM - 12:00 PM",
  "12:00 PM - 12:30 PM",
  "05:00 PM - 05:30 PM",
  "05:30 PM - 06:00 PM",
  "06:00 PM - 06:30 PM",
];

export const consultationDaysByMode = {
  clinic: ["Tuesday", "Saturday", "Sunday"],
  online: ["Monday", "Thursday"],
};

const normalize = (value) => String(value || "")
  .toLowerCase()
  .replace(/[^\p{L}\p{N}]+/gu, " ")
  .replace(/\s+/g, " ")
  .trim();

export const createSecureConversationId = () => {
  if (typeof globalThis.crypto?.getRandomValues !== "function") return null;
  const bytes = globalThis.crypto.getRandomValues(new Uint8Array(24));
  return Array.from(bytes, (byte) => byte.toString(16).padStart(2, "0")).join("");
};

export const getDateDay = (dateValue) => new Intl.DateTimeFormat("en-US", {
  weekday: "long",
  timeZone: "UTC",
}).format(new Date(`${dateValue}T12:00:00.000Z`));

export const getNextMissingBookingStep = (steps, data, startIndex = 0) => {
  for (let index = startIndex; index < steps.length; index += 1) {
    if (!data[steps[index].key]) return index;
  }
  return steps.length;
};

export const getBookingPrefill = (state) => ({
  consultationMode: state?.consultation?.mode === "offline"
    ? "clinic"
    : state?.consultation?.mode || "",
  preferredDate: state?.consultation?.date || "",
  preferredTime: state?.consultation?.time || "",
  patient: state?.patient || null,
});

export const isDirectBookingCommand = (value) => {
  const cleanValue = normalize(value);
  if (cleanValue === "book consultation") return true;
  if (/\b(can|kya|kaise|how|fee|fees|cost|price|online|clinic|timing|available)\b/.test(cleanValue) || /\?/.test(value)) {
    return false;
  }
  return /book appointment|appointment book|book my appointment|book slot|slot book|schedule appointment|consultation book|consult book|appointment chahiye|consultation chahiye/.test(cleanValue);
};

export const isAgentIntent = (value) => {
  const cleanValue = normalize(value);
  if (/\b(agent|human|live chat|livechat|representative|insaan|customer support|support team|live support|helpline|real person)\b/.test(cleanValue)) {
    return true;
  }
  return /\b(connect|talk|baat|bat|chat|speak)\b[\s\S]{0,15}\b(agent|team|support|someone|admin|human|person|staff|insaan)\b/.test(cleanValue);
};
