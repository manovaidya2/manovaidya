import { useEffect, useMemo, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import {
  CalendarCheck,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  Clock,
  ExternalLink,
  LayoutGrid,
  List,
  MailWarning,
  MessageSquare,
  Phone,
  RefreshCw,
  Rows3,
  Send,
  Trash2,
  UserRound,
  X,
} from 'lucide-react';
import api from '../api/axiosInstance';
import { getAdminQuickOptions } from '../utils/adminSettings';

const statusStyles = {
  new: 'bg-blue-50 text-blue-700 ring-blue-100',
  contacted: 'bg-amber-50 text-amber-700 ring-amber-100',
  completed: 'bg-emerald-50 text-emerald-700 ring-emerald-100',
};

const statusDots = {
  new: 'bg-blue-500',
  contacted: 'bg-amber-500',
  completed: 'bg-emerald-500',
};

const modeLabels = {
  online: 'Online Consultation',
  clinic: 'Clinic Visit',
};

const viewOptions = [
  { id: 'table', label: 'Table', icon: List },
  { id: 'cards', label: 'Cards', icon: LayoutGrid },
  { id: 'timeline', label: 'Timeline', icon: Rows3 },
  { id: 'calendar', label: 'Calendar', icon: CalendarDays },
];

const DEFAULT_KRAYA_WEBHOOK_URL = 'https://api.kraya-ai.com/api/external/6Vjm8XVH/leads';

const formatDate = (date) => {
  if (!date) return 'N/A';
  return new Date(date).toLocaleDateString('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
};

const formatDay = (date) =>
  new Date(date).toLocaleDateString('en-IN', {
    weekday: 'short',
    day: '2-digit',
    month: 'short',
  });

const getAppointmentDate = (item) => item.preferredDate || item.createdAt;

const getSubmittedTime = (item) => {
  const submittedAt = new Date(item?.createdAt || item?.updatedAt || 0).getTime();
  return Number.isNaN(submittedAt) ? 0 : submittedAt;
};

const getDateKey = (date) => {
  if (!date) return 'no-date';
  const value = new Date(date);
  value.setHours(0, 0, 0, 0);
  return value.toISOString().slice(0, 10);
};

const getMonthLabel = (date) =>
  date.toLocaleDateString('en-IN', {
    month: 'long',
    year: 'numeric',
  });

const getCalendarDays = (monthDate) => {
  const year = monthDate.getFullYear();
  const month = monthDate.getMonth();
  const firstDay = new Date(year, month, 1);
  const start = new Date(firstDay);
  start.setDate(firstDay.getDate() - firstDay.getDay());

  return Array.from({ length: 42 }, (_, index) => {
    const date = new Date(start);
    date.setDate(start.getDate() + index);
    return {
      date,
      key: getDateKey(date),
      inMonth: date.getMonth() === month,
      isToday: getDateKey(date) === getDateKey(new Date()),
    };
  });
};

function StatusSelect({ item, updatingId, updateStatus }) {
  return (
    <select
      value={item.status}
      disabled={updatingId === item._id}
      onChange={(event) => updateStatus(item._id, event.target.value)}
      className={`rounded-full px-3 py-1.5 text-xs font-bold capitalize ring-1 ${statusStyles[item.status] || statusStyles.new}`}
    >
      <option value="new">New</option>
      <option value="contacted">Contacted</option>
      <option value="completed">Completed</option>
    </select>
  );
}

function DeleteButton({ item, updatingId, deleteConsultation }) {
  return (
    <button
      type="button"
      disabled={updatingId === item._id}
      onClick={() => deleteConsultation(item._id)}
      className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-red-600 transition hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-50"
      title="Delete request"
    >
      <Trash2 className="h-4 w-4" />
    </button>
  );
}

function EmptyState({ colSpan = 8 }) {
  return (
    <tr>
      <td colSpan={colSpan} className="px-5 py-10 text-center text-slate-500">
        No consultation requests found.
      </td>
    </tr>
  );
}

function KrayaLeadModal({ open, selectedCount, sending, result, error, onClose, onSend }) {
  const savedKrayaSettings = getAdminQuickOptions();
  const [stage, setStage] = useState(savedKrayaSettings.krayaStage || 'New Lead');
  const [pipeline, setPipeline] = useState(savedKrayaSettings.krayaPipeline || 'Leads');
  const [notes, setNotes] = useState(savedKrayaSettings.krayaNotes || '');
  const [apiKey, setApiKey] = useState(savedKrayaSettings.krayaApiKey || '');
  const [source, setSource] = useState(savedKrayaSettings.krayaSource || 'Manovaidya admin appointments');
  const [webhookUrl, setWebhookUrl] = useState(savedKrayaSettings.krayaWebhookUrl || DEFAULT_KRAYA_WEBHOOK_URL);
  const [includeSequence, setIncludeSequence] = useState(Boolean(savedKrayaSettings.krayaEnableSequence));
  const [sequence, setSequence] = useState(savedKrayaSettings.krayaSequence || '');

  useEffect(() => {
    if (!open) return;
    const current = getAdminQuickOptions();
    setStage(current.krayaStage || 'New Lead');
    setPipeline(current.krayaPipeline || 'Leads');
    setNotes(current.krayaNotes || '');
    setApiKey(current.krayaApiKey || '');
    setSource(current.krayaSource || 'Manovaidya admin appointments');
    setWebhookUrl(current.krayaWebhookUrl || DEFAULT_KRAYA_WEBHOOK_URL);
    setIncludeSequence(Boolean(current.krayaEnableSequence));
    setSequence(current.krayaSequence || '');
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[90] flex items-center justify-center bg-slate-950/45 p-4 backdrop-blur-sm">
      <button type="button" aria-label="Close Kraya modal" className="absolute inset-0 cursor-default" onClick={onClose} />
      <form
        onSubmit={(event) => {
          event.preventDefault();
          onSend({ stage, pipeline, notes, apiKey, source, webhookUrl, includeSequence, sequence });
        }}
        className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl"
      >
        <div className="flex items-start justify-between gap-4 border-b border-slate-200 p-5">
          <div>
            <h2 className="text-lg font-black text-slate-950">Send leads to Kraya</h2>
            <p className="mt-1 text-sm font-semibold text-slate-500">{selectedCount} selected appointment lead{selectedCount === 1 ? '' : 's'}</p>
          </div>
          <button type="button" onClick={onClose} className="rounded-xl p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-800">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="grid max-h-[72vh] gap-4 overflow-y-auto p-5 md:grid-cols-2">
          <label className="block">
            <span className="mb-2 block text-sm font-bold text-slate-700">Stage</span>
            <input
              value={stage}
              onChange={(event) => setStage(event.target.value)}
              placeholder="New Lead"
              className="h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm font-semibold text-slate-900 outline-none focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10"
            />
            <span className="mt-1 block text-xs font-semibold text-slate-400">New stage name yahi likho; Kraya lead payload me same stage jayega.</span>
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-bold text-slate-700">Pipeline</span>
            <input
              value={pipeline}
              onChange={(event) => setPipeline(event.target.value)}
              placeholder="Leads"
              className="h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm font-semibold text-slate-900 outline-none focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10"
            />
          </label>

          <label className="flex items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 md:col-span-2">
            <span>
              <span className="block text-sm font-black text-slate-800">Send sequence</span>
              <span className="mt-1 block text-xs leading-5 text-slate-500">Enable only if this sequence exists in Kraya.</span>
            </span>
            <input
              type="checkbox"
              checked={includeSequence}
              onChange={(event) => setIncludeSequence(event.target.checked)}
              className="h-5 w-5 accent-primary"
            />
          </label>

          {includeSequence ? (
            <label className="block md:col-span-2">
              <span className="mb-2 block text-sm font-bold text-slate-700">Sequence</span>
              <input
                value={sequence}
                onChange={(event) => setSequence(event.target.value)}
                placeholder="Sequence name exactly as in Kraya"
                className="h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm font-semibold text-slate-900 outline-none focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10"
              />
            </label>
          ) : null}

          <label className="block md:col-span-2">
            <span className="mb-2 block text-sm font-bold text-slate-700">Extra notes</span>
            <textarea
              value={notes}
              onChange={(event) => setNotes(event.target.value)}
              rows={4}
              placeholder="Any note that should be added to every selected Kraya lead"
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-900 outline-none focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10"
            />
          </label>

          {error ? <p className="rounded-xl border border-red-100 bg-red-50 p-3 text-sm font-bold text-red-700 md:col-span-2">{error}</p> : null}
          {result ? <p className="rounded-xl border border-emerald-100 bg-emerald-50 p-3 text-sm font-bold text-emerald-700 md:col-span-2">{result}</p> : null}
        </div>

        <div className="flex flex-wrap justify-end gap-3 border-t border-slate-200 p-5">
          <button type="button" onClick={onClose} className="rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-bold text-slate-700 hover:border-primary hover:text-primary">
            Cancel
          </button>
          <button
            type="submit"
            disabled={sending || selectedCount === 0}
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-black text-white shadow-sm transition hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-60"
          >
            <Send className="h-4 w-4" />
            {sending ? 'Sending...' : 'Send to Kraya'}
          </button>
        </div>
      </form>
    </div>
  );
}

function SelectBox({ checked, onChange, title = 'Select lead' }) {
  return (
    <input
      type="checkbox"
      checked={checked}
      onChange={(event) => onChange(event.target.checked)}
      title={title}
      className="h-4 w-4 rounded border-slate-300 accent-primary"
    />
  );
}

function TableView({ consultations, loading, updatingId, updateStatus, deleteConsultation, selectedIds, toggleSelected, selectAllVisible }) {
  const allSelected = consultations.length > 0 && consultations.every((item) => selectedIds.includes(item._id));

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[960px] text-left text-sm text-slate-600">
          <thead className="bg-slate-50 text-xs uppercase text-slate-500">
            <tr>
              <th className="px-5 py-4 font-semibold">
                <SelectBox checked={allSelected} onChange={selectAllVisible} title="Select all visible" />
              </th>
              <th className="px-5 py-4 font-semibold">Patient</th>
              <th className="px-5 py-4 font-semibold">Phone</th>
              <th className="px-5 py-4 font-semibold">Mode</th>
              <th className="px-5 py-4 font-semibold">Preferred Slot</th>
              <th className="px-5 py-4 font-semibold">Message</th>
              <th className="px-5 py-4 font-semibold">Status</th>
              <th className="px-5 py-4 text-right font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {loading ? (
              <tr>
                <td colSpan="8" className="px-5 py-10 text-center text-slate-500">Loading consultation requests...</td>
              </tr>
            ) : consultations.length === 0 ? (
              <EmptyState />
            ) : (
              consultations.map((item) => (
                <tr key={item._id} className="hover:bg-slate-50/70">
                  <td className="px-5 py-4">
                    <SelectBox checked={selectedIds.includes(item._id)} onChange={(checked) => toggleSelected(item._id, checked)} />
                  </td>
                  <td className="px-5 py-4">
                    <p className="font-semibold text-slate-900">{item.name}</p>
                    <p className="mt-1 text-xs text-slate-400">Submitted {formatDate(item.createdAt)}</p>
                  </td>
                  <td className="px-5 py-4">
                    <a href={`tel:${item.phone}`} className="inline-flex items-center gap-2 font-medium text-primary hover:underline">
                      <Phone className="h-4 w-4" />
                      {item.phone}
                    </a>
                  </td>
                  <td className="px-5 py-4">{modeLabels[item.consultationMode] || item.consultationMode}</td>
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-2 font-medium text-slate-800">
                      <CalendarCheck className="h-4 w-4 text-slate-400" />
                      {formatDate(item.preferredDate)}
                    </div>
                    <div className="mt-1 flex items-center gap-2 text-xs text-slate-500">
                      <Clock className="h-3.5 w-3.5" />
                      {item.preferredTime || 'Time not set'}
                    </div>
                  </td>
                  <td className="max-w-xs px-5 py-4">
                    <p className="line-clamp-3 whitespace-pre-line text-slate-600">{item.message || 'N/A'}</p>
                  </td>
                  <td className="px-5 py-4">
                    <StatusSelect item={item} updatingId={updatingId} updateStatus={updateStatus} />
                  </td>
                  <td className="px-5 py-4 text-right">
                    <DeleteButton item={item} updatingId={updatingId} deleteConsultation={deleteConsultation} />
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function CardsView({ consultations, loading, updatingId, updateStatus, deleteConsultation, selectedIds, toggleSelected }) {
  if (loading) return <div className="rounded-2xl border border-slate-200 bg-white p-10 text-center text-slate-500">Loading consultation requests...</div>;
  if (consultations.length === 0) return <div className="rounded-2xl border border-slate-200 bg-white p-10 text-center text-slate-500">No consultation requests found.</div>;

  return (
    <div className="grid gap-4 md:grid-cols-2 2xl:grid-cols-3">
      {consultations.map((item) => (
        <article key={item._id} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-start gap-3">
              <SelectBox checked={selectedIds.includes(item._id)} onChange={(checked) => toggleSelected(item._id, checked)} />
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <UserRound className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-black text-slate-900">{item.name}</h3>
                <a href={`tel:${item.phone}`} className="mt-1 inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline">
                  <Phone className="h-3.5 w-3.5" />
                  {item.phone}
                </a>
              </div>
            </div>
            <DeleteButton item={item} updatingId={updatingId} deleteConsultation={deleteConsultation} />
          </div>

          <div className="mt-4 grid gap-3 rounded-xl bg-slate-50 p-4 text-sm">
            <p className="flex items-center gap-2 font-semibold text-slate-700">
              <CalendarCheck className="h-4 w-4 text-slate-400" />
              {formatDate(item.preferredDate)}
            </p>
            <p className="flex items-center gap-2 text-slate-500">
              <Clock className="h-4 w-4 text-slate-400" />
              {item.preferredTime || 'Time not set'} - {modeLabels[item.consultationMode] || item.consultationMode}
            </p>
            <p className="line-clamp-3 flex gap-2 text-slate-500">
              <MessageSquare className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
              {item.message || 'No message provided.'}
            </p>
          </div>

          <div className="mt-4 flex items-center justify-between gap-3">
            <StatusSelect item={item} updatingId={updatingId} updateStatus={updateStatus} />
            <span className="text-xs font-semibold text-slate-400">Submitted {formatDate(item.createdAt)}</span>
          </div>
        </article>
      ))}
    </div>
  );
}

function TimelineView({ consultations, loading, updatingId, updateStatus, deleteConsultation, selectedIds, toggleSelected }) {
  const grouped = consultations.reduce((acc, item) => {
    const key = getDateKey(getAppointmentDate(item));
    if (!acc[key]) acc[key] = [];
    acc[key].push(item);
    return acc;
  }, {});

  const dates = Object.keys(grouped).sort();

  if (loading) return <div className="rounded-2xl border border-slate-200 bg-white p-10 text-center text-slate-500">Loading consultation requests...</div>;
  if (consultations.length === 0) return <div className="rounded-2xl border border-slate-200 bg-white p-10 text-center text-slate-500">No consultation requests found.</div>;

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="space-y-6">
        {dates.map((dateKey) => (
          <section key={dateKey} className="relative pl-8">
            <span className="absolute left-2 top-1 h-full w-px bg-slate-200" />
            <span className="absolute left-0 top-1 flex h-4 w-4 rounded-full bg-primary ring-4 ring-primary/10" />
            <h3 className="text-sm font-black uppercase tracking-wide text-slate-500">{formatDay(dateKey)}</h3>
            <div className="mt-3 space-y-3">
              {grouped[dateKey].map((item) => (
                <article key={item._id} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <SelectBox checked={selectedIds.includes(item._id)} onChange={(checked) => toggleSelected(item._id, checked)} />
                        <p className="font-black text-slate-900">{item.name}</p>
                      </div>
                      <p className="mt-1 text-xs font-semibold text-slate-500">
                        {item.preferredTime || 'Time not set'} - {modeLabels[item.consultationMode] || item.consultationMode}
                      </p>
                      <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-600">{item.message || 'No message provided.'}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <StatusSelect item={item} updatingId={updatingId} updateStatus={updateStatus} />
                      <DeleteButton item={item} updatingId={updatingId} deleteConsultation={deleteConsultation} />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

function CalendarView({ consultations, loading, updatingId, updateStatus, deleteConsultation, monthDate, setMonthDate, selectedIds, toggleSelected }) {
  const calendarDays = useMemo(() => getCalendarDays(monthDate), [monthDate]);
  const grouped = useMemo(() => consultations.reduce((acc, item) => {
    const key = getDateKey(getAppointmentDate(item));
    if (!acc[key]) acc[key] = [];
    acc[key].push(item);
    return acc;
  }, {}), [consultations]);

  const moveMonth = (amount) => {
    setMonthDate((current) => new Date(current.getFullYear(), current.getMonth() + amount, 1));
  };

  return (
    <section className="overflow-visible rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="flex flex-col gap-3 border-b border-slate-200 p-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-lg font-black text-slate-900">{getMonthLabel(monthDate)}</h2>
          <p className="mt-1 text-xs font-semibold text-slate-500">Google Calendar style month view</p>
        </div>
        <div className="flex items-center gap-2">
          <button type="button" onClick={() => moveMonth(-1)} className="rounded-xl border border-slate-200 bg-white p-2 text-slate-600 hover:text-primary">
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button type="button" onClick={() => setMonthDate(new Date())} className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-black text-slate-600 hover:text-primary">
            Today
          </button>
          <button type="button" onClick={() => moveMonth(1)} className="rounded-xl border border-slate-200 bg-white p-2 text-slate-600 hover:text-primary">
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-7 border-b border-slate-200 bg-slate-50 text-center text-xs font-black uppercase tracking-wide text-slate-500">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
          <div key={day} className="px-2 py-3">{day}</div>
        ))}
      </div>

      <div className="grid grid-cols-7">
        {calendarDays.map((day) => {
          const items = grouped[day.key] || [];
          return (
            <div
              key={day.key}
              className={`min-h-[132px] border-b border-r border-slate-100 p-2 ${day.inMonth ? 'bg-white' : 'bg-slate-50/70'} ${day.isToday ? 'ring-2 ring-inset ring-primary/30' : ''}`}
            >
              <div className="mb-2 flex justify-end">
                <span className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-black ${day.isToday ? 'bg-primary text-white' : day.inMonth ? 'text-slate-700' : 'text-slate-300'}`}>
                  {day.date.getDate()}
                </span>
              </div>
              <div className="space-y-1.5">
                {loading ? (
                  <span className="block rounded bg-slate-100 px-2 py-1 text-[10px] font-bold text-slate-400">Loading</span>
                ) : items.slice(0, 3).map((item) => (
                  <div key={item._id} className="group relative rounded-lg border border-slate-200 bg-slate-50 px-2 py-1.5 shadow-sm transition hover:z-30 hover:border-primary/40 hover:bg-white hover:shadow-lg">
                    <div className="flex items-center gap-1.5">
                      <span className={`h-2 w-2 shrink-0 rounded-full ${statusDots[item.status] || statusDots.new}`} />
                      <p className="truncate text-[11px] font-black text-slate-800">{item.preferredTime || 'Any time'} {item.name}</p>
                    </div>
                    <div className="pointer-events-none absolute left-0 top-full z-40 mt-2 hidden w-[290px] rounded-2xl border border-slate-200 bg-white p-4 text-left shadow-2xl ring-1 ring-slate-900/5 group-hover:block">
                      <div className="mb-3 flex items-start justify-between gap-3">
                        <div className="min-w-0">
                          <p className="truncate text-sm font-black text-slate-950">{item.name || 'Name not provided'}</p>
                          <p className="mt-1 text-[11px] font-semibold text-slate-400">Submitted {formatDate(item.createdAt)}</p>
                        </div>
                        <span className={`rounded-full px-2.5 py-1 text-[10px] font-black capitalize ring-1 ${statusStyles[item.status] || statusStyles.new}`}>
                          {item.status || 'new'}
                        </span>
                      </div>

                      <div className="space-y-2 text-xs font-semibold text-slate-600">
                        <p className="flex justify-between gap-3">
                          <span className="text-slate-400">Phone</span>
                          <span className="text-right font-black text-primary">{item.phone || 'N/A'}</span>
                        </p>
                        <p className="flex justify-between gap-3">
                          <span className="text-slate-400">Mode</span>
                          <span className="text-right text-slate-800">{modeLabels[item.consultationMode] || item.consultationMode || 'N/A'}</span>
                        </p>
                        <p className="flex justify-between gap-3">
                          <span className="text-slate-400">Date</span>
                          <span className="text-right text-slate-800">{formatDate(item.preferredDate)}</span>
                        </p>
                        <p className="flex justify-between gap-3">
                          <span className="text-slate-400">Time</span>
                          <span className="text-right text-slate-800">{item.preferredTime || 'Time not set'}</span>
                        </p>
                      </div>

                      <div className="mt-3 rounded-xl bg-slate-50 p-3">
                        <p className="text-[10px] font-black uppercase tracking-wide text-slate-400">Message</p>
                        <p className="mt-1 max-h-24 overflow-y-auto whitespace-pre-line text-xs font-semibold leading-5 text-slate-700">
                          {item.message || 'No message provided.'}
                        </p>
                      </div>
                    </div>
                    <div className="mt-1 hidden items-center justify-between gap-1 group-hover:flex">
                      <StatusSelect item={item} updatingId={updatingId} updateStatus={updateStatus} />
                      <SelectBox checked={selectedIds.includes(item._id)} onChange={(checked) => toggleSelected(item._id, checked)} title="Select Kraya lead" />
                      <DeleteButton item={item} updatingId={updatingId} deleteConsultation={deleteConsultation} />
                    </div>
                  </div>
                ))}
                {items.length > 3 ? (
                  <span className="block rounded bg-primary/10 px-2 py-1 text-[10px] font-black text-primary">+{items.length - 3} more</span>
                ) : null}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default function Appointments() {
  const notificationContext = useOutletContext();
  const hasSharedConsultations = Boolean(notificationContext?.refreshConsultations);
  const [localConsultations, setLocalConsultations] = useState([]);
  const [localLoading, setLocalLoading] = useState(true);
  const [localError, setLocalError] = useState('');
  const [updatingId, setUpdatingId] = useState('');
  const [activeView, setActiveView] = useState('table');
  const [calendarMonth, setCalendarMonth] = useState(() => new Date());
  const [selectedIds, setSelectedIds] = useState([]);
  const [krayaModalOpen, setKrayaModalOpen] = useState(false);
  const [krayaSending, setKrayaSending] = useState(false);
  const [krayaResult, setKrayaResult] = useState('');
  const [krayaError, setKrayaError] = useState('');
  const consultations = hasSharedConsultations ? notificationContext.consultations : localConsultations;
  const loading = hasSharedConsultations ? notificationContext.consultationsLoading : localLoading;
  const error = hasSharedConsultations ? notificationContext.consultationsError : localError;
  const setConsultations = hasSharedConsultations ? notificationContext.setConsultations : setLocalConsultations;

  const fetchConsultations = async () => {
    if (hasSharedConsultations) {
      await notificationContext.refreshConsultations();
      return;
    }

    try {
      setLocalLoading(true);
      setLocalError('');
      const { data } = await api.get('/consultations');

      if (!data.success) {
        throw new Error(data.message || 'Failed to fetch consultation requests');
      }

      setLocalConsultations(data.data || []);
    } catch (err) {
      setLocalError(err.response?.data?.message || err.message || 'Failed to fetch consultation requests');
    } finally {
      setLocalLoading(false);
    }
  };

  useEffect(() => {
    if (!hasSharedConsultations) void fetchConsultations();
  }, [hasSharedConsultations]);

  const sortedConsultations = useMemo(
    () => [...consultations].sort((a, b) => getSubmittedTime(b) - getSubmittedTime(a)),
    [consultations]
  );

  const stats = useMemo(() => ({
    total: consultations.length,
    new: consultations.filter((item) => item.status === 'new').length,
    contacted: consultations.filter((item) => item.status === 'contacted').length,
    completed: consultations.filter((item) => item.status === 'completed').length,
  }), [consultations]);

  useEffect(() => {
    setSelectedIds((current) => current.filter((id) => consultations.some((item) => item._id === id)));
  }, [consultations]);

  const toggleSelected = (id, checked) => {
    setSelectedIds((current) => {
      if (checked) return current.includes(id) ? current : [...current, id];
      return current.filter((item) => item !== id);
    });
  };

  const selectAllVisible = (checked) => {
    setSelectedIds((current) => {
      const visibleIds = sortedConsultations.map((item) => item._id);
      if (checked) return Array.from(new Set([...current, ...visibleIds]));
      return current.filter((id) => !visibleIds.includes(id));
    });
  };

  const openKrayaModal = () => {
    setKrayaError('');
    setKrayaResult('');
    setKrayaModalOpen(true);
  };

  const sendSelectedToKraya = async (options) => {
    try {
      setKrayaSending(true);
      setKrayaError('');
      setKrayaResult('');
      const { data } = await api.post('/consultations/kraya-sync', {
        ids: selectedIds,
        ...options,
      });

      if (data.success) {
        setKrayaResult(data.message || 'Selected leads sent to Kraya successfully.');
        setSelectedIds([]);
      } else {
        const firstFailure = data.data?.results?.find((item) => !item.success);
        setKrayaError(firstFailure?.response?.message || data.message || 'Some selected leads failed to send.');
      }
    } catch (err) {
      const responseData = err.response?.data;
      const firstFailure = responseData?.data?.results?.find((item) => !item.success);
      setKrayaError(firstFailure?.response?.message || responseData?.message || err.message || 'Failed to send selected leads to Kraya');
    } finally {
      setKrayaSending(false);
    }
  };

  const updateStatus = async (id, status) => {
    try {
      setUpdatingId(id);
      const { data } = await api.patch(`/consultations/${id}/status`, { status });

      if (!data.success) {
        throw new Error(data.message || 'Failed to update status');
      }

      setConsultations((current) => current.map((item) => item._id === id ? data.data : item));
    } catch (err) {
      alert(err.response?.data?.message || err.message || 'Failed to update status');
    } finally {
      setUpdatingId('');
    }
  };

  const deleteConsultation = async (id) => {
    if (!window.confirm('Delete this consultation request?')) return;

    try {
      setUpdatingId(id);
      const { data } = await api.delete(`/consultations/${id}`);

      if (!data.success) {
        throw new Error(data.message || 'Failed to delete request');
      }

      setConsultations((current) => current.filter((item) => item._id !== id));
    } catch (err) {
      alert(err.response?.data?.message || err.message || 'Failed to delete request');
    } finally {
      setUpdatingId('');
    }
  };

  return (
    <div className="appointments-page space-y-6">
      <div className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h1 className="text-2xl font-black text-slate-900">Consultation Requests</h1>
          <p className="mt-1 text-sm font-semibold text-slate-500">Bookings submitted from the website header form.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            onClick={openKrayaModal}
            disabled={selectedIds.length === 0}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-black text-white shadow-sm transition hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <Send className="h-4 w-4" />
            Send to Kraya ({selectedIds.length})
          </button>
          <a
            href={getAdminQuickOptions().krayaWebhookUrl || DEFAULT_KRAYA_WEBHOOK_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-bold text-slate-700 shadow-sm transition hover:border-primary hover:text-primary"
          >
            <ExternalLink className="h-4 w-4" />
            Kraya API
          </a>
          <button
            type="button"
            onClick={fetchConsultations}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-bold text-slate-700 shadow-sm transition hover:border-primary hover:text-primary"
          >
            <RefreshCw className={`h-4 w-4 ${loading ? 'animate-spin' : ''}`} />
            Refresh
          </button>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-sm font-bold text-slate-500">Total Requests</p>
          <p className="mt-2 text-3xl font-black text-slate-900">{stats.total}</p>
        </div>
        <div className="rounded-2xl border border-blue-100 bg-blue-50 p-5 shadow-sm">
          <p className="text-sm font-bold text-blue-700">New</p>
          <p className="mt-2 text-3xl font-black text-blue-900">{stats.new}</p>
        </div>
        <div className="rounded-2xl border border-amber-100 bg-amber-50 p-5 shadow-sm">
          <p className="text-sm font-bold text-amber-700">Contacted</p>
          <p className="mt-2 text-3xl font-black text-amber-900">{stats.contacted}</p>
        </div>
        <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-5 shadow-sm">
          <p className="text-sm font-bold text-emerald-700">Completed</p>
          <p className="mt-2 text-3xl font-black text-emerald-900">{stats.completed}</p>
        </div>
      </div>

      <div className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-3 shadow-sm sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-2">
          {viewOptions.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              type="button"
              onClick={() => setActiveView(id)}
              className={`inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-black transition ${
                activeView === id
                  ? 'bg-primary text-white shadow-sm'
                  : 'bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              <Icon className="h-4 w-4" />
              {label}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-3">
          {selectedIds.length > 0 ? (
            <button type="button" onClick={() => setSelectedIds([])} className="text-xs font-black text-primary hover:underline">
              Clear selected
            </button>
          ) : null}
          <p className="text-xs font-bold text-slate-400">
            {selectedIds.length} selected / {sortedConsultations.length} request{sortedConsultations.length === 1 ? '' : 's'}
          </p>
        </div>
      </div>

      {error ? (
        <div className="flex items-start gap-3 rounded-xl border border-red-100 bg-red-50 p-4 text-sm text-red-700">
          <MailWarning className="mt-0.5 h-5 w-5 shrink-0" />
          <span>{error}</span>
        </div>
      ) : null}

      {activeView === 'table' ? (
        <TableView
          consultations={sortedConsultations}
          loading={loading}
          updatingId={updatingId}
          updateStatus={updateStatus}
          deleteConsultation={deleteConsultation}
          selectedIds={selectedIds}
          toggleSelected={toggleSelected}
          selectAllVisible={selectAllVisible}
        />
      ) : null}

      {activeView === 'cards' ? (
        <CardsView
          consultations={sortedConsultations}
          loading={loading}
          updatingId={updatingId}
          updateStatus={updateStatus}
          deleteConsultation={deleteConsultation}
          selectedIds={selectedIds}
          toggleSelected={toggleSelected}
        />
      ) : null}

      {activeView === 'timeline' ? (
        <TimelineView
          consultations={sortedConsultations}
          loading={loading}
          updatingId={updatingId}
          updateStatus={updateStatus}
          deleteConsultation={deleteConsultation}
          selectedIds={selectedIds}
          toggleSelected={toggleSelected}
        />
      ) : null}

      {activeView === 'calendar' ? (
        <CalendarView
          consultations={sortedConsultations}
          loading={loading}
          updatingId={updatingId}
          updateStatus={updateStatus}
          deleteConsultation={deleteConsultation}
          monthDate={calendarMonth}
          setMonthDate={setCalendarMonth}
          selectedIds={selectedIds}
          toggleSelected={toggleSelected}
        />
      ) : null}

      <KrayaLeadModal
        open={krayaModalOpen}
        selectedCount={selectedIds.length}
        sending={krayaSending}
        result={krayaResult}
        error={krayaError}
        onClose={() => setKrayaModalOpen(false)}
        onSend={sendSelectedToKraya}
      />
    </div>
  );
}
