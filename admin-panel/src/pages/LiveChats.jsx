import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { CheckCircle2, Clock3, MessageCircle, RefreshCw, Send, Search, MoreVertical, Paperclip, Smile, Bell, BellOff, Copy } from 'lucide-react';
import api from '../api/axiosInstance';

const statusStyles = {
  waiting: 'bg-amber-100 text-amber-700 border border-amber-200',
  active: 'bg-emerald-100 text-emerald-700 border border-emerald-200',
  closed: 'bg-slate-100 text-slate-600 border border-slate-200',
};

const formatTime = (value) => {
  if (!value) return '';
  return new Date(value).toLocaleTimeString('en-IN', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  });
};

const formatDate = (value) => {
  if (!value) return '';
  return new Date(value).toLocaleDateString('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
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
      <div className="flex justify-center my-4">
        <span className="bg-slate-200/60 backdrop-blur text-slate-600 text-[11px] font-semibold uppercase tracking-wider px-4 py-1.5 rounded-full border border-slate-200/50 shadow-sm">
          {message.text}
        </span>
      </div>
    );
  }

  return (
    <div className={`flex w-full mb-4 ${isAgent ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`relative max-w-[85%] md:max-w-[70%] px-4 py-2.5 text-[15px] shadow-sm flex flex-col gap-1 transition-all hover:shadow-md ${
          isAgent
            ? 'bg-indigo-600 text-white rounded-2xl rounded-tr-sm'
            : 'bg-white border border-slate-200 text-slate-800 rounded-2xl rounded-tl-sm'
        }`}
      >
        <p className="whitespace-pre-wrap leading-relaxed">{message.text}</p>
        <div className={`text-[10px] font-medium flex items-center justify-end gap-1 ${
          isAgent ? 'text-indigo-200' : 'text-slate-400'
        }`}>
          {formatTime(message.createdAt)}
        </div>
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
  const [searchQuery, setSearchQuery] = useState('');
  const [soundEnabled, setSoundEnabled] = useState(() => {
    return localStorage.getItem('liveChatSound') !== 'false';
  });
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [toastNotification, setToastNotification] = useState(null);
  const endRef = useRef(null);
  const settingsMenuRef = useRef(null);
  const toastTimeoutRef = useRef(null);

  // Close settings dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (settingsMenuRef.current && !settingsMenuRef.current.contains(event.target)) {
        setSettingsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Request browser notification permission
  useEffect(() => {
    if ('Notification' in window && Notification.permission === 'default') {
      Notification.requestPermission();
    }
  }, []);

  const toggleSound = () => {
    const nextState = !soundEnabled;
    setSoundEnabled(nextState);
    localStorage.setItem('liveChatSound', String(nextState));
    if (nextState && 'Notification' in window && Notification.permission === 'default') {
      Notification.requestPermission();
    }
  };

  const showToast = useCallback((title, description, sessionKey = null) => {
    console.log("showToast called with:", { title, description, sessionKey });
    console.log("document.hidden:", document.hidden);
    console.log("visibilityState:", document.visibilityState);
    console.log("Notification supported:", "Notification" in window);
    console.log("Notification permission:", Notification.permission);

    // Show in-app visual toast
    if (toastTimeoutRef.current) clearTimeout(toastTimeoutRef.current);
    setToastNotification({ title, description, id: Date.now() });
    toastTimeoutRef.current = setTimeout(() => setToastNotification(null), 4000);

    // Show system notification (Temporarily removed isHidden condition as requested in Step 4)
    if ('Notification' in window && Notification.permission === 'granted') {
      console.log("Creating desktop notification...");
      try {
        const sysNotification = new Notification(title, {
          body: description,
          icon: '/favicon.ico',
          tag: 'manovaidya-chat-notification',
        });
        
        sysNotification.onclick = () => {
          window.focus();
          if (sessionKey) {
            setSelectedId(sessionKey);
          }
          sysNotification.close();
        };
        
        setTimeout(() => sysNotification.close(), 5000);
      } catch (e) {
        console.error("System notification failed to create:", e);
      }
    } else if ('Notification' in window && Notification.permission !== 'denied' && Notification.permission !== 'granted') {
      console.log("Requesting notification permission...");
      Notification.requestPermission();
    }
  }, []);

  const selectedSession = useMemo(
    () => sessions.find((session) => session.sessionKey === selectedId) || null,
    [sessions, selectedId]
  );

  const filteredSessions = useMemo(() => {
    if (!searchQuery.trim()) return sessions;
    const query = searchQuery.toLowerCase();
    return sessions.filter(session => 
      (session.visitorName || '').toLowerCase().includes(query) ||
      (session.visitorPhone || '').toLowerCase().includes(query) ||
      (session.sessionKey || '').toLowerCase().includes(query)
    );
  }, [sessions, searchQuery]);

  const prevUnreadTotalRef = useRef(0);
  const prevSessionsCountRef = useRef(0);
  
  const playNotificationSound = useCallback(() => {
    if (!soundEnabled) return;
    try {
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      
      const playChime = (freq, startTime, duration) => {
        const oscillator = audioCtx.createOscillator();
        const gainNode = audioCtx.createGain();
        oscillator.connect(gainNode);
        gainNode.connect(audioCtx.destination);
        
        oscillator.type = 'triangle'; 
        oscillator.frequency.setValueAtTime(freq, startTime);
        
        gainNode.gain.setValueAtTime(0, startTime);
        gainNode.gain.linearRampToValueAtTime(0.5, startTime + 0.05); // Louder
        gainNode.gain.exponentialRampToValueAtTime(0.001, startTime + duration);
        
        oscillator.start(startTime);
        oscillator.stop(startTime + duration);
      };

      const now = audioCtx.currentTime;
      // Double chime (Ding-Ding)
      playChime(880, now, 0.4); 
      playChime(1108.73, now + 0.15, 0.6); 
    } catch (e) {
      console.log("Audio play failed", e);
    }
  }, [soundEnabled]);

  const fetchSessions = useCallback(async ({ silent = false } = {}) => {
    try {
      if (!silent) setLoading(true);
      setError('');
      const { data } = await api.get('/live-chat/admin/sessions');
      if (!data.success) throw new Error(data.message || 'Failed to fetch live chats');
      
      const newSessions = data.data || [];
      setSessions(newSessions);
      
      // Calculate total unread messages and find the latest unread session
      let currentUnreadTotal = 0;
      let latestUnreadSession = null;
      let latestUnreadMessage = null;
      
      newSessions.forEach(session => {
        const unreadCount = getUnreadCount(session);
        currentUnreadTotal += unreadCount;
        
        if (unreadCount > 0 && session.messages?.length > 0) {
          const lastMsg = session.messages[session.messages.length - 1];
          if (!latestUnreadMessage || new Date(lastMsg.createdAt) > new Date(latestUnreadMessage.createdAt)) {
            latestUnreadMessage = lastMsg;
            latestUnreadSession = session;
          }
        }
      });

      console.log("Polling started / fetchSessions completed");
      console.log("Unread count:", currentUnreadTotal);
      console.log("Previous unread:", prevUnreadTotalRef.current);
      console.log("Latest unread session:", latestUnreadSession ? latestUnreadSession.sessionKey : "none");

      // Play sound and show toast if unread count increased or new session created
      if (silent && (currentUnreadTotal > prevUnreadTotalRef.current || newSessions.length > prevSessionsCountRef.current)) {
        playNotificationSound();
        if (latestUnreadSession && latestUnreadMessage) {
          const name = latestUnreadSession.visitorName || 'Visitor';
          console.log("showToast called from fetchSessions");
          if (latestUnreadMessage.sender === 'system') {
            showToast('New Connection Established', `${name} has requested live support.`, latestUnreadSession.sessionKey);
          } else {
            showToast(`New message from ${name}`, latestUnreadMessage.text, latestUnreadSession.sessionKey);
          }
        }
      }
      
      prevUnreadTotalRef.current = currentUnreadTotal;
      prevSessionsCountRef.current = newSessions.length;
      
      // Auto select first session if none selected and not silent update
      if (!silent && !selectedId && newSessions?.[0]?.sessionKey) {
        setSelectedId(newSessions[0].sessionKey);
      }
    } catch (err) {
      if (!silent) setError(err.response?.data?.message || err.message || 'Failed to fetch live chats');
    } finally {
      if (!silent) setLoading(false);
    }
  }, [selectedId, playNotificationSound, showToast]);

  useEffect(() => {
    void fetchSessions();
    
    // Use Web Worker to bypass background tab interval throttling
    const workerCode = `
      let intervalId;
      self.onmessage = function(e) {
        if (e.data === 'start') {
          intervalId = setInterval(() => {
            self.postMessage('tick');
          }, 4000);
        } else if (e.data === 'stop') {
          clearInterval(intervalId);
        }
      };
    `;
    const blob = new Blob([workerCode], { type: 'application/javascript' });
    const workerUrl = URL.createObjectURL(blob);
    const worker = new Worker(workerUrl);
    
    worker.onmessage = () => {
      void fetchSessions({ silent: true });
    };
    
    worker.postMessage('start');

    return () => {
      worker.postMessage('stop');
      worker.terminate();
      URL.revokeObjectURL(workerUrl);
    };
  }, [fetchSessions]);

  useEffect(() => {
    if (endRef.current) {
      endRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [selectedSession?.messages?.length, selectedId]);

  useEffect(() => {
    if (!selectedSession?.sessionKey) return;
    if (getUnreadCount(selectedSession) === 0) return;
    api.patch(`/live-chat/admin/sessions/${selectedSession.sessionKey}/read`).catch(() => { });
    
    // Optimistically update read count
    setSessions(prev => prev.map(s => {
      if (s.sessionKey === selectedSession.sessionKey) {
        return {
          ...s,
          messages: s.messages.map(m => ({...m, readByAdmin: true}))
        };
      }
      return s;
    }));
  }, [selectedSession?.sessionKey, selectedSession?.messages]);

  const sendReply = async (event) => {
    event.preventDefault();
    const message = reply.trim();
    if (!message || !selectedSession?.sessionKey || sending) return;

    setSending(true);
    // Optimistic UI update
    const tempMessage = {
      _id: Date.now().toString(),
      sender: 'agent',
      text: message,
      createdAt: new Date().toISOString(),
      readByAdmin: true
    };
    
    setSessions(prev => prev.map(s => {
      if (s.sessionKey === selectedSession.sessionKey) {
        return { ...s, messages: [...s.messages, tempMessage] };
      }
      return s;
    }));
    setReply('');

    try {
      const { data } = await api.post(`/live-chat/admin/sessions/${selectedSession.sessionKey}/messages`, { message });
      if (!data.success) throw new Error(data.message || 'Failed to send reply');
      setSessions((current) =>
        current.map((session) => (session.sessionKey === data.data.sessionKey ? data.data : session))
      );
    } catch (err) {
      setError(err.response?.data?.message || err.message || 'Failed to send reply');
      // Re-fetch on error to sync state
      void fetchSessions({ silent: true });
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
    <div className="flex flex-col h-[calc(100vh-64px)] w-full relative">
      {/* Toast Notification */}
      {toastNotification && (
        <div className="absolute top-4 right-4 z-50 animate-in slide-in-from-top-2 fade-in duration-300">
          <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-4 flex gap-3 max-w-sm">
            <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
              <MessageCircle size={16} />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-800">{toastNotification.title}</h4>
              <p className="text-xs text-slate-500 mt-0.5 line-clamp-2">{toastNotification.description}</p>
            </div>
            <button 
              onClick={() => setToastNotification(null)}
              className="absolute top-2 right-2 text-slate-400 hover:text-slate-600"
            >
              &times;
            </button>
          </div>
        </div>
      )}

      {error && (
        <div className="m-4 shrink-0 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700 shadow-sm flex items-center justify-between">
          {error}
          <button onClick={() => setError('')} className="text-red-500 hover:text-red-700">✕</button>
        </div>
      )}

      {/* Main Interface */}
      <div className="flex-1 flex flex-col md:flex-row bg-white border-t border-slate-200 overflow-hidden h-full w-full">
        
        {/* Sidebar */}
        <aside className="w-full md:w-[340px] lg:w-[380px] border-b md:border-b-0 md:border-r border-slate-200 flex flex-col bg-slate-50/30 shrink-0 h-[40vh] md:h-auto">
          {/* Search bar */}
          <div className="p-4 border-b border-slate-200 bg-white">
            <div className="flex gap-2 mb-3">
              <button
                onClick={() => {
                  console.log("Manual test button clicked");
                  if ('Notification' in window && Notification.permission === 'granted') {
                    new Notification("Manual Test", { body: "This is a manual browser notification test.", icon: '/favicon.ico' });
                  } else {
                    alert("Notification permission is: " + Notification.permission);
                    Notification.requestPermission();
                  }
                }}
                className="px-2 py-1 bg-red-100 text-red-600 text-xs font-bold rounded border border-red-200 w-full"
              >
                Test Desktop Notification
              </button>
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 h-4 w-4" />
              <input 
                type="text" 
                placeholder="Search by name, phone or ID..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-100/80 text-sm border-none rounded-xl pl-9 pr-4 py-2.5 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all placeholder:text-slate-400"
              />
            </div>
          </div>
          
          {/* Chat List */}
          <div className="flex-1 overflow-y-auto p-3 space-y-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {loading && sessions.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-40 text-slate-400 gap-2">
                <RefreshCw className="animate-spin h-6 w-6 text-indigo-400" />
                <span className="text-sm font-medium">Loading chats...</span>
              </div>
            ) : filteredSessions.length === 0 ? (
              <div className="flex flex-col items-center justify-center p-8 text-center bg-white border border-dashed border-slate-200 rounded-xl m-2">
                <div className="h-12 w-12 rounded-full bg-slate-100 flex items-center justify-center mb-3">
                  <MessageCircle className="h-6 w-6 text-slate-400" />
                </div>
                <p className="text-sm font-semibold text-slate-700">No chats found</p>
                <p className="text-xs text-slate-500 mt-1">
                  {searchQuery ? "Try a different search term" : "Waiting for new visitors..."}
                </p>
              </div>
            ) : (
              filteredSessions.map((session) => {
                const unread = getUnreadCount(session);
                const isActive = selectedId === session.sessionKey;
                
                return (
                  <button
                    key={session.sessionKey}
                    onClick={() => setSelectedId(session.sessionKey)}
                    className={`w-full text-left p-3 rounded-xl transition-all border flex gap-3 ${
                      isActive 
                        ? 'bg-indigo-50/80 border-indigo-200 shadow-sm' 
                        : 'bg-white border-transparent hover:border-slate-200 hover:bg-slate-50 hover:shadow-sm'
                    }`}
                  >
                    <div className="relative shrink-0">
                      <div className={`flex h-12 w-12 items-center justify-center rounded-full text-sm font-bold shadow-sm ${
                        isActive 
                          ? 'bg-indigo-600 text-white' 
                          : 'bg-slate-100 text-slate-600 border border-slate-200'
                      }`}>
                        {getInitials(session.visitorName)}
                      </div>
                      {session.status === 'active' && (
                        <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-emerald-500 border-2 border-white"></span>
                      )}
                    </div>
                    
                    <div className="flex-1 min-w-0 flex flex-col justify-center">
                      <div className="flex items-center justify-between gap-1 mb-0.5">
                        <span className={`truncate text-[15px] font-semibold ${isActive ? 'text-indigo-900' : 'text-slate-800'}`}>
                          {session.visitorName || 'Website Visitor'}
                        </span>
                        <span className={`shrink-0 text-xs ${isActive ? 'text-indigo-500 font-medium' : 'text-slate-400'}`}>
                          {formatTime(session.lastMessageAt)}
                        </span>
                      </div>
                      
                      <div className="flex items-center justify-between gap-2">
                        <span className={`truncate text-sm line-clamp-1 ${
                          unread ? 'font-semibold text-slate-800' : 'text-slate-500'
                        }`}>
                          {getLastMessage(session)}
                        </span>
                        {unread > 0 && (
                          <span className="flex h-5 min-w-[20px] items-center justify-center rounded-full bg-indigo-600 px-1.5 text-[10px] font-bold text-white shadow-sm">
                            {unread}
                          </span>
                        )}
                      </div>
                    </div>
                  </button>
                );
              })
            )}
          </div>
        </aside>

        {/* Chat Area */}
        <section className="flex-1 flex flex-col min-w-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px] bg-slate-50/40 relative">
          {selectedSession ? (
            <>
              {/* Chat Header */}
              <header className="shrink-0 px-6 py-4 bg-white/80 backdrop-blur-md border-b border-slate-200 flex items-center justify-between z-10 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-indigo-100 to-violet-100 text-indigo-700 text-lg font-bold shadow-inner">
                      {getInitials(selectedSession.visitorName)}
                    </div>
                    <span className={`absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full border-2 border-white ${
                      selectedSession.status === 'active' ? 'bg-emerald-500' : 'bg-slate-300'
                    }`}></span>
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                      {selectedSession.visitorName || 'Website Visitor'}
                      <span className={`text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-full ${statusStyles[selectedSession.status] || statusStyles.waiting}`}>
                        {selectedSession.status}
                      </span>
                    </h2>
                    <div className="flex items-center gap-3 mt-0.5">
                      {selectedSession.visitorPhone && (
                        <p className="text-sm font-medium text-slate-500">{selectedSession.visitorPhone}</p>
                      )}
                      {selectedSession.visitorPhone && <span className="h-1 w-1 rounded-full bg-slate-300"></span>}
                      <p className="text-xs text-slate-400 font-mono">ID: {selectedSession.sessionKey.slice(0, 8)}</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  {selectedSession.status !== 'active' && (
                    <button
                      onClick={() => updateStatus('active')}
                      className="inline-flex items-center justify-center h-10 w-10 sm:w-auto sm:px-4 gap-2 rounded-xl bg-white border border-emerald-200 text-emerald-600 hover:bg-emerald-50 transition-colors shadow-sm focus:ring-2 focus:ring-emerald-500/20"
                      title="Mark as Active"
                    >
                      <CheckCircle2 size={18} />
                      <span className="hidden sm:inline font-semibold text-sm">Active</span>
                    </button>
                  )}
                  {selectedSession.status !== 'closed' && (
                    <button
                      onClick={() => updateStatus('closed')}
                      className="inline-flex items-center justify-center h-10 w-10 sm:w-auto sm:px-4 gap-2 rounded-xl bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 transition-colors shadow-sm focus:ring-2 focus:ring-slate-500/20"
                      title="Close Chat"
                    >
                      <Clock3 size={18} />
                      <span className="hidden sm:inline font-semibold text-sm">Close</span>
                    </button>
                  )}
                  <div className="relative" ref={settingsMenuRef}>
                    <button 
                      onClick={() => setSettingsOpen(!settingsOpen)}
                      className={`h-10 w-10 flex items-center justify-center rounded-xl border transition-colors shadow-sm ml-1 ${
                        settingsOpen 
                          ? 'bg-slate-50 border-slate-300 text-slate-700' 
                          : 'bg-white border-slate-200 text-slate-400 hover:text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      <MoreVertical size={18} />
                    </button>
                    
                    {settingsOpen && (
                      <div className="absolute right-0 top-full mt-2 w-56 bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-slate-100 overflow-hidden z-50">
                        <div className="px-4 py-3 border-b border-slate-100 bg-slate-50/50">
                          <h3 className="text-sm font-bold text-slate-800">Chat Settings</h3>
                        </div>
                        <div className="p-2 flex flex-col gap-1">
                          <button
                            onClick={() => {
                              toggleSound();
                            }}
                            className="flex items-center justify-between w-full px-3 py-2.5 text-sm font-medium text-slate-700 rounded-lg hover:bg-slate-50 transition-colors"
                          >
                            <span className="flex items-center gap-2.5">
                              {soundEnabled ? (
                                <Bell size={16} className="text-indigo-500" />
                              ) : (
                                <BellOff size={16} className="text-slate-400" />
                              )}
                              Sound Alerts
                            </span>
                            <div className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors ${soundEnabled ? 'bg-indigo-500' : 'bg-slate-200'}`}>
                              <span className={`inline-block h-3.5 w-3.5 transform rounded-full bg-white transition-transform ${soundEnabled ? 'translate-x-4.5' : 'translate-x-1'}`} />
                            </div>
                          </button>
                          
                          <button
                            onClick={() => {
                              navigator.clipboard.writeText(selectedSession.sessionKey);
                              setSettingsOpen(false);
                            }}
                            className="flex items-center gap-2.5 w-full px-3 py-2.5 text-sm font-medium text-slate-700 rounded-lg hover:bg-slate-50 transition-colors"
                          >
                            <Copy size={16} className="text-slate-400" />
                            Copy Chat ID
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </header>

              {/* Messages Area */}
              <div className="flex-1 overflow-y-auto px-4 py-6 md:px-8 space-y-1 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                <div className="flex justify-center mb-6">
                  <div className="bg-white border border-slate-200 text-slate-500 text-xs font-medium px-4 py-1.5 rounded-full shadow-sm">
                    Chat started on {formatDate(selectedSession.createdAt)}
                  </div>
                </div>
                
                {(selectedSession.messages || []).map((message, index) => {
                  const prevMsg = selectedSession.messages[index - 1];
                  const showDate = !prevMsg || formatDate(message.createdAt) !== formatDate(prevMsg.createdAt);
                  
                  return (
                    <React.Fragment key={message._id || `${message.sender}-${message.createdAt}-${index}`}>
                      {showDate && index > 0 && (
                        <div className="flex justify-center my-6">
                          <div className="bg-white border border-slate-200 text-slate-500 text-xs font-medium px-4 py-1.5 rounded-full shadow-sm">
                            {formatDate(message.createdAt)}
                          </div>
                        </div>
                      )}
                      <ChatBubble message={message} />
                    </React.Fragment>
                  );
                })}
                <div ref={endRef} className="h-2" />
              </div>

              {/* Input Area */}
              <form onSubmit={sendReply} className="shrink-0 bg-white border-t border-slate-200 p-4">
                <div className="flex items-end gap-3 max-w-4xl mx-auto">
                  <div className="flex gap-1 shrink-0 pb-1">
                    <button type="button" className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-xl transition-colors">
                      <Paperclip size={20} />
                    </button>
                  </div>
                  
                  <div className="flex-1 bg-slate-50 border border-slate-200 rounded-2xl flex items-end shadow-inner focus-within:border-indigo-400 focus-within:ring-4 focus-within:ring-indigo-500/10 transition-all">
                    <textarea
                      value={reply}
                      onChange={(e) => setReply(e.target.value)}
                      placeholder="Type your message..."
                      className="w-full max-h-32 min-h-[48px] resize-none bg-transparent px-4 py-3 text-[15px] text-slate-800 placeholder-slate-400 outline-none leading-relaxed"
                      rows={1}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' && !e.shiftKey) {
                          e.preventDefault();
                          sendReply(e);
                        }
                      }}
                    />
                    <button type="button" className="p-3 text-slate-400 hover:text-indigo-500 transition-colors shrink-0">
                      <Smile size={20} />
                    </button>
                  </div>

                  <button
                    type="submit"
                    disabled={!reply.trim() || sending}
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-indigo-600 text-white shadow-md shadow-indigo-500/30 hover:bg-indigo-700 transition-all hover:shadow-lg disabled:opacity-50 disabled:hover:bg-indigo-600 disabled:hover:shadow-indigo-500/30 disabled:cursor-not-allowed mb-0.5"
                  >
                    {sending ? (
                      <RefreshCw size={20} className="animate-spin" />
                    ) : (
                      <Send size={20} className="ml-1" />
                    )}
                  </button>
                </div>
                <div className="text-center mt-2">
                  <span className="text-[11px] text-slate-400">Press <kbd className="font-mono bg-slate-100 px-1 py-0.5 rounded border border-slate-200">Enter</kbd> to send, <kbd className="font-mono bg-slate-100 px-1 py-0.5 rounded border border-slate-200">Shift + Enter</kbd> for new line</span>
                </div>
              </form>
            </>
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center p-8 bg-slate-50/50">
              <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm text-center max-w-sm">
                <div className="h-16 w-16 bg-indigo-50 rounded-2xl flex items-center justify-center mx-auto mb-4 text-indigo-500">
                  <MessageCircle size={32} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">No Chat Selected</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Select a conversation from the sidebar to view messages and respond to the visitor.
                </p>
              </div>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
