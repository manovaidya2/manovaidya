import Consultation from '../models/Consultation.js';

export const CONSULTATION_SCHEDULE = Object.freeze({
  offline: ['Tuesday', 'Saturday', 'Sunday'],
  online: ['Monday', 'Thursday']
});

export const CONSULTATION_TIMES = Object.freeze([
  '10:30 AM - 11:00 AM',
  '11:00 AM - 11:30 AM',
  '11:30 AM - 12:00 PM',
  '12:00 PM - 12:30 PM',
  '05:00 PM - 05:30 PM',
  '05:30 PM - 06:00 PM',
  '06:00 PM - 06:30 PM'
]);

const modeToStoredValue = (mode) => mode === 'offline' ? 'clinic' : mode;

export const getDayName = (dateString) => {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(String(dateString || ''))) return '';
  return new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    timeZone: 'UTC'
  }).format(new Date(`${dateString}T12:00:00.000Z`));
};

export const isValidConsultationDay = (mode, dateOrDay) => {
  const day = /^\d{4}-\d{2}-\d{2}$/.test(String(dateOrDay || ''))
    ? getDayName(dateOrDay)
    : String(dateOrDay || '');
  return Boolean(CONSULTATION_SCHEDULE[mode]?.includes(day));
};

export const checkConsultationAvailability = async ({ mode, date, time }) => {
  if (!CONSULTATION_SCHEDULE[mode]) {
    return { available: false, reason: 'INVALID_MODE' };
  }
  if (!isValidConsultationDay(mode, date)) {
    return { available: false, reason: 'INVALID_DAY' };
  }
  if (!CONSULTATION_TIMES.includes(time)) {
    return { available: false, reason: 'INVALID_TIME' };
  }

  const start = new Date(`${date}T00:00:00.000Z`);
  const end = new Date(`${date}T23:59:59.999Z`);
  const capacity = Math.max(1, Number.parseInt(process.env.CONSULTATION_SLOT_CAPACITY || '1', 10) || 1);
  const booked = await Consultation.countDocuments({
    consultationMode: modeToStoredValue(mode),
    preferredDate: { $gte: start, $lte: end },
    preferredTime: time,
    status: { $in: ['new', 'contacted'] }
  });

  return {
    available: booked < capacity,
    reason: booked < capacity ? 'AVAILABLE' : 'FULL',
    booked,
    capacity
  };
};
