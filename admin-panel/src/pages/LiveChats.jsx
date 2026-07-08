import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { CheckCircle2, Clock3, MessageCircle, RefreshCw, Send, UserRound } from 'lucide-react';
import api from '../api/axiosInstance';

const statusStyles = {
  waiting: 'bg-amber-50 text-amber-700 ring-amber-100',
  active: 'bg-emerald-50 text-emerald-700 ring-emerald-100',
  closed: 'bg-slate-100 text-slate-600 ring-slate-200',
};

const formatTime = (value) => {
  if (!value) return '';
  return new Date(value).toLocaleString('en-IN', {
    day: '2-digit',
    month: 'short',
    hour: '2-digit',
    minute: '2-digit',
  });
};

const getUnreadCount = (session) =>
  (session?.messages || []).filter((message) => !message.readByAdmin && (message.sender === 'visitor' || message.sender === 'system')).length;

const getLastMessage = (session) => {
  const last = session?.messages?.[session.messages.length - 1];
  return last?.text || 'No messages yet';
};

const getInitials = (name) => {
  if (!name || name.toLowerCase() === 'website visitor') return 'WV';
  const parts = name.trim().split(' ');
  if (parts.length >= 2) {
    return (parts[0][0] + parts[1][0]).toUpperCase();
  }
  return name.substring(0, 2).toUpperCase();
};

function ChatBubble({ message }) {
  const isAgent = message.sender === 'agent';
  const isSystem = message.sender === 'system';

  if (isSystem) {
    return (
      <div className="mx-auto my-3 max-w-[80%] rounded-full bg-slate-200/60 px-5 py-2 text-center text-[11px] font-bold tracking-widest uppercase text-slate-500 shadow-sm backdrop-blur-sm">
        {message.text}
      </div>
    );
  }

  return (
    <div className={`flex w-full mb-4 ${isAgent ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`relative max-w-[75%] px-5 py-3.5 text-[15px] leading-relaxed shadow-sm transition-all hover:shadow-md ${
          isAgent
            ? 'bg-gradient-to-br from-violet-600 to-indigo-600 text-white rounded-3xl rounded-tr-md'
            : 'bg-white border border-slate-100 text-slate-800 rounded-3xl rounded-tl-md'
        }`}
      >
        <p className="whitespace-pre-wrap font-medium">{message.text}</p>
        <p
          className={`mt-2 text-[10px] font-bold tracking-wider ${
            isAgent ? 'text-violet-200 text-right' : 'text-slate-400 text-left'
          }`}
        >
          {formatTime(message.createdAt)}
        </p>
      </div>
    </div>
  );
}

export default function LiveChats() {
  const [sessions, setSessions] = useState([]);
  const [selectedId, setSelectedId] = useState('');
  const [reply, setReply] = useState('');
  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');
  const endRef = useRef(null);

  const selectedSession = useMemo(
    () => sessions.find((session) => session.sessionKey === selectedId) || sessions[0],
    [sessions, selectedId]
  );

  const fetchSessions = useCallback(async ({ silent = false } = {}) => {
    try {
      if (!silent) setLoading(true);
      setError('');
      const { data } = await api.get('/live-chat/admin/sessions');
      if (!data.success) throw new Error(data.message || 'Failed to fetch live chats');
      setSessions(data.data || []);
      if (!selectedId && data.data?.[0]?.sessionKey) setSelectedId(data.data[0].sessionKey);
    } catch (err) {
      setError(err.response?.data?.message || err.message || 'Failed to fetch live chats');
    } finally {
      setLoading(false);
    }
  }, [selectedId]);

  useEffect(() => {
    void fetchSessions();
    const intervalId = window.setInterval(() => {
      void fetchSessions({ silent: true });
    }, 4000);
    return () => window.clearInterval(intervalId);
  }, [fetchSessions]);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [selectedSession?.messages?.length]);

  useEffect(() => {
    if (!selectedSession?.sessionKey) return;
    if (getUnreadCount(selectedSession) === 0) return;
    api.patch(`/live-chat/admin/sessions/${selectedSession.sessionKey}/read`).catch(() => { });
  }, [selectedSession?.sessionKey, selectedSession?.messages]);

  const sendReply = async (event) => {
    event.preventDefault();
    const message = reply.trim();
    if (!message || !selectedSession?.sessionKey || sending) return;

    setSending(true);
    try {
      const { data } = await api.post(`/live-chat/admin/sessions/${selectedSession.sessionKey}/messages`, { message });
      if (!data.success) throw new Error(data.message || 'Failed to send reply');
      setSessions((current) =>
        current.map((session) => (session.sessionKey === data.data.sessionKey ? data.data : session))
      );
      setReply('');
    } catch (err) {
      setError(err.response?.data?.message || err.message || 'Failed to send reply');
    } finally {
      setSending(false);
    }
  };

  const updateStatus = async (status) => {
    if (!selectedSession?.sessionKey) return;
    try {
      const { data } = await api.patch(`/live-chat/admin/sessions/${selectedSession.sessionKey}/status`, { status });
      if (!data.success) throw new Error(data.message || 'Failed to update status');
      setSessions((current) =>
        current.map((session) => (session.sessionKey === data.data.sessionKey ? data.data : session))
      );
    } catch (err) {
      setError(err.response?.data?.message || err.message || 'Failed to update status');
    }
  };

  return (
    <div className="flex h-[calc(100vh-110px)] flex-col bg-slate-50/30 p-2">
      <div className="mb-6 flex shrink-0 flex-col gap-4 sm:flex-row sm:items-center sm:justify-between px-2">
        <div>
          <p className="mb-1 text-xs font-black uppercase tracking-[0.2em] text-violet-600">Live support</p>
          <h1 className="text-3xl font-black tracking-tight text-slate-900">Live Chats</h1>
        </div>
        <button
          type="button"
          onClick={() => fetchSessions()}
          className="inline-flex items-center justify-center gap-2.5 rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-bold text-slate-700 shadow-sm transition-all hover:border-violet-200 hover:bg-violet-50 hover:text-violet-700 focus:outline-none focus:ring-4 focus:ring-violet-50"
        >
          <RefreshCw size={18} className="text-violet-500" />
          Refresh
        </button>
      </div>

      {error ? (
        <div className="mb-4 shrink-0 rounded-lg border border-red-100 bg-red-50 px-4 py-3 text-sm font-bold text-red-700">
          {error}
        </div>
      ) : null}

      <div className="grid flex-1 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg shadow-slate-200/50 lg:grid-cols-[380px_1fr]">
        <aside className="flex flex-col border-b border-slate-200 bg-slate-50/50 lg:border-b-0 lg:border-r">
          <div className="flex shrink-0 items-center justify-between border-b border-slate-200 bg-white px-6 py-5">
            <p className="text-base font-black text-slate-900">Recent Requests</p>
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-violet-100 text-xs font-black text-violet-700 shadow-sm">{sessions.length}</span>
          </div>

          <div className="flex-1 overflow-y-auto p-2">
            {loading ? (
              <p className="p-4 text-sm font-bold text-slate-500">Loading chats...</p>
            ) : sessions.length === 0 ? (
              <div className="m-3 rounded-lg border border-dashed border-slate-300 bg-white p-5 text-center">
                <MessageCircle className="mx-auto h-8 w-8 text-slate-300" />
                <p className="mt-2 text-sm font-bold text-slate-500">No live chat requests yet.</p>
              </div>
            ) : (
              sessions.map((session) => {
                const unread = getUnreadCount(session);
                const active = selectedSession?.sessionKey === session.sessionKey;
                return (
                  <button
                    key={session.sessionKey}
                    type="button"
                    onClick={() => setSelectedId(session.sessionKey)}
                    className={`mb-3 w-full rounded-2xl border p-4 text-left transition-all ${
                      active ? 'border-violet-500 bg-violet-50 shadow-md ring-1 ring-violet-500/20' : 'border-slate-100 bg-white shadow-sm hover:border-violet-200 hover:bg-slate-50 hover:shadow-md'
                    }`}
                  >
                    <div className="flex items-start gap-3.5">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-violet-100 to-indigo-100 text-[15px] font-black text-violet-700 shadow-inner">
                        {getInitials(session.visitorName)}
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-2">
                          <p className="truncate text-[15px] font-black text-slate-900">
                            {session.visitorName || 'Website visitor'}
                          </p>
                          <span className="shrink-0 text-[11px] font-bold text-slate-400">
                            {formatTime(session.lastMessageAt).split(',')[1] || formatTime(session.lastMessageAt)}
                          </span>
                        </div>
                        {session.visitorPhone && (
                          <p className="mt-0.5 text-[12px] font-bold text-slate-500">{session.visitorPhone}</p>
                        )}
                        <p className={`mt-1.5 line-clamp-1 text-[13px] ${unread ? 'font-bold text-slate-900' : 'font-medium text-slate-500'}`}>
                          {getLastMessage(session)}
                        </p>
                      </div>
                    </div>
                    <div className="mt-3 flex items-center justify-between gap-2 pl-[58px]">
                      <span className={`inline-flex items-center justify-center rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-widest shadow-sm ring-1 ring-inset ${statusStyles[session.status] || statusStyles.waiting}`}>
                        {session.status}
                      </span>
                      {unread ? (
                        <span className="flex h-6 min-w-[24px] items-center justify-center rounded-full bg-gradient-to-r from-red-500 to-rose-500 px-2 text-[11px] font-black text-white shadow-sm">{unread} new</span>
                      ) : null}
                    </div>
                  </button>
                );
              })
            )}
          </div>
        </aside>

        <section className="flex flex-col overflow-hidden">
          {selectedSession ? (
            <>
              <header className="relative z-10 flex shrink-0 flex-col gap-4 border-b border-slate-200 bg-white px-8 py-5 shadow-[0_4px_20px_-15px_rgba(0,0,0,0.1)] sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-5">
                  <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-100 to-indigo-100 text-xl font-black text-violet-700 shadow-inner">
                    {getInitials(selectedSession.visitorName)}
                    {selectedSession.status === 'active' && (
                      <span className="absolute -bottom-1.5 -right-1.5 h-5 w-5 rounded-full border-[3px] border-white bg-emerald-500"></span>
                    )}
                  </div>
                  <div>
                    <p className="text-xl font-black tracking-tight text-slate-900">
                      {selectedSession.visitorName || 'Website visitor'}
                    </p>
                    <div className="mt-1 flex items-center gap-3">
                      {selectedSession.visitorPhone && (
                        <p className="text-sm font-bold text-slate-500">{selectedSession.visitorPhone}</p>
                      )}
                      <span className="h-1.5 w-1.5 rounded-full bg-slate-300"></span>
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-400">ID: {selectedSession.sessionKey.slice(0, 8)}</p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => updateStatus('active')}
                    className="inline-flex items-center gap-2 rounded-xl bg-emerald-50 px-4 py-2.5 text-sm font-bold text-emerald-700 shadow-sm ring-1 ring-inset ring-emerald-200 transition-all hover:bg-emerald-100 hover:ring-emerald-300"
                  >
                    <CheckCircle2 size={16} />
                    Active
                  </button>
                  <button
                    type="button"
                    onClick={() => updateStatus('closed')}
                    className="inline-flex items-center gap-2 rounded-xl bg-slate-50 px-4 py-2.5 text-sm font-bold text-slate-600 shadow-sm ring-1 ring-inset ring-slate-200 transition-all hover:bg-slate-100 hover:ring-slate-300"
                  >
                    <Clock3 size={16} />
                    Close
                  </button>
                </div>
              </header>

              <div className="flex-1 overflow-y-auto bg-slate-50/50 px-6 py-6 md:px-10 md:py-8 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px]">
                <div className="grid gap-3">
                  {(selectedSession.messages || []).map((message) => (
                    <ChatBubble key={message._id || `${message.sender}-${message.createdAt}`} message={message} />
                  ))}
                  <div ref={endRef} />
                </div>
              </div>

              <form onSubmit={sendReply} className="relative z-10 flex shrink-0 items-end gap-4 border-t border-slate-200 bg-white p-5 shadow-[0_-4px_20px_-15px_rgba(0,0,0,0.1)]">
                <div className="flex-1 rounded-2xl border border-slate-200 bg-slate-50 p-1 shadow-inner transition-all focus-within:border-violet-400 focus-within:bg-white focus-within:ring-4 focus-within:ring-violet-500/10">
                  <textarea
                    value={reply}
                    onChange={(event) => setReply(event.target.value)}
                    rows={1}
                    placeholder="Type your reply here..."
                    className="max-h-32 min-h-[44px] w-full resize-none bg-transparent px-4 py-3 text-[15px] font-medium text-slate-800 placeholder-slate-400 outline-none"
                    onKeyDown={(event) => {
                      if (event.key === 'Enter' && !event.shiftKey) {
                        event.preventDefault();
                        sendReply(event);
                      }
                    }}
                  />
                </div>
                <button
                  type="submit"
                  disabled={!reply.trim() || sending}
                  className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-indigo-600 text-white shadow-lg shadow-violet-500/30 transition-all hover:-translate-y-0.5 hover:shadow-violet-500/40 disabled:pointer-events-none disabled:opacity-50"
                  aria-label="Send reply"
                >
                  <Send size={22} className="ml-0.5" />
                </button>
              </form>
            </>
          ) : (
            <div className="flex flex-1 items-center justify-center p-8 text-center">
              <div>
                <MessageCircle className="mx-auto h-10 w-10 text-slate-300" />
                <p className="mt-3 text-sm font-bold text-slate-500">Select a live chat request to start replying.</p>
              </div>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
