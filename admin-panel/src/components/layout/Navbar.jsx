import React, { useEffect, useMemo, useState } from 'react';
import { Bell, CalendarCheck, ChevronDown, Clock, ExternalLink, LogOut, Menu, Search, User as UserIcon, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { ADMIN_SETTINGS_EVENT, getAdminQuickOptions } from '../../utils/adminSettings';

const formatDate = (date) => {
  if (!date) return 'N/A';
  return new Date(date).toLocaleDateString('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  });
};

const formatSubmittedTime = (date) => {
  if (!date) return 'Just now';
  const diffMs = Date.now() - new Date(date).getTime();
  const minutes = Math.max(0, Math.floor(diffMs / 60000));
  if (minutes < 1) return 'Just now';
  if (minutes < 60) return `${minutes} min ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours} hr ago`;
  const days = Math.floor(hours / 24);
  return `${days} day${days > 1 ? 's' : ''} ago`;
};

const modeLabels = {
  online: 'Online',
  clinic: 'Clinic'
};

export default function Navbar({
  sidebarOpen,
  setSidebarOpen,
  consultations = [],
  consultationsLoading = false,
  consultationsError = '',
  latestNotification = null,
  refreshConsultations,
  clearLatestNotification
}) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [notificationOpen, setNotificationOpen] = useState(false);
  const [quickOptions, setQuickOptions] = useState(() => getAdminQuickOptions());
  const navigate = useNavigate();
  const newConsultations = useMemo(
    () => consultations.filter((item) => item.status === 'new'),
    [consultations]
  );
  const recentConsultations = useMemo(
    () => consultations.slice(0, 5),
    [consultations]
  );

  const handleLogout = () => {
    // Clear auth token/data
    localStorage.removeItem('token');
    sessionStorage.removeItem('token');
    
    // Redirect to login page
    navigate('/login');
  };

  useEffect(() => {
    const syncQuickOptions = () => {
      const nextOptions = getAdminQuickOptions();
      setQuickOptions(nextOptions);
      if (!nextOptions.appointmentAlerts) setNotificationOpen(false);
    };

    window.addEventListener(ADMIN_SETTINGS_EVENT, syncQuickOptions);
    window.addEventListener('storage', syncQuickOptions);
    return () => {
      window.removeEventListener(ADMIN_SETTINGS_EVENT, syncQuickOptions);
      window.removeEventListener('storage', syncQuickOptions);
    };
  }, []);

  const goToAppointments = () => {
    setNotificationOpen(false);
    clearLatestNotification?.();
    navigate('/appointments');
  };

  return (
    <header className="sticky top-0 z-40 flex w-full bg-white drop-shadow-sm border-b border-slate-200">
      <div className="flex flex-grow items-center justify-between px-4 py-4 shadow-2 md:px-6 2xl:px-11">
        <div className="flex items-center gap-2 sm:gap-4 lg:hidden">
          <button
            aria-controls="sidebar"
            onClick={(e) => {
              e.stopPropagation();
              setSidebarOpen(!sidebarOpen);
            }}
            className="z-50 block rounded-sm border border-slate-200 bg-white p-1.5 shadow-sm lg:hidden"
          >
            <Menu className="h-5 w-5 text-slate-600" />
          </button>
        </div>

        <div className="hidden sm:block">
          <form>
            <div className="relative">
              <button className="absolute left-0 top-1/2 -translate-y-1/2 pl-2">
                <Search className="h-4.5 w-4.5 text-slate-400" />
              </button>
              <input
                type="text"
                placeholder="Type to search..."
                className="w-full bg-transparent pl-9 pr-4 font-medium focus:outline-none xl:w-125"
              />
            </div>
          </form>
        </div>

        <div className="flex items-center gap-3 2xsm:gap-7">
          <ul className="flex items-center gap-2 2xsm:gap-4">
            {quickOptions.appointmentAlerts ? <li className="relative">
              <button
                type="button"
                onClick={() => {
                  setNotificationOpen((open) => !open);
                  setDropdownOpen(false);
                  if (refreshConsultations) void refreshConsultations({ silent: true });
                }}
                className="relative flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-500 transition hover:border-primary/40 hover:bg-primary/5 hover:text-primary"
                aria-label="Open appointment notifications"
                aria-expanded={notificationOpen}
              >
                {newConsultations.length > 0 ? (
                  <span className="absolute -right-1 -top-1 z-10 flex min-h-5 min-w-5 items-center justify-center rounded-full bg-red-500 px-1.5 text-[10px] font-bold leading-none text-white ring-2 ring-white">
                    {newConsultations.length > 9 ? '9+' : newConsultations.length}
                  </span>
                ) : null}
                {newConsultations.length > 0 ? (
                  <span className="absolute right-0 top-0 h-2.5 w-2.5 rounded-full bg-red-500">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75"></span>
                  </span>
                ) : null}
                <Bell className="h-5 w-5" />
              </button>

              {notificationOpen && (
                <>
                  <div className="fixed inset-0 z-40" onClick={() => setNotificationOpen(false)} />
                  <div className="absolute right-0 z-50 mt-4 w-[min(92vw,420px)] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_24px_70px_rgba(15,23,42,0.18)]">
                    <div className="border-b border-slate-100 bg-gradient-to-br from-violet-50 via-white to-teal-50 p-4">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="text-sm font-bold text-slate-900">Appointment Notifications</p>
                          <p className="mt-1 text-xs text-slate-500">
                            {newConsultations.length > 0
                              ? `${newConsultations.length} new consultation request${newConsultations.length > 1 ? 's' : ''}`
                              : 'No new consultation requests'}
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={goToAppointments}
                          className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-3 py-2 text-xs font-semibold text-white transition hover:bg-primary/90"
                        >
                          View all
                          <ExternalLink className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    </div>

                    <div className="max-h-[360px] overflow-y-auto p-2">
                      {consultationsLoading && recentConsultations.length === 0 ? (
                        <div className="p-6 text-center text-sm text-slate-500">Loading notifications...</div>
                      ) : consultationsError ? (
                        <div className="m-2 rounded-xl border border-red-100 bg-red-50 p-4 text-sm text-red-700">{consultationsError}</div>
                      ) : recentConsultations.length === 0 ? (
                        <div className="p-8 text-center">
                          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-slate-400">
                            <Bell className="h-5 w-5" />
                          </div>
                          <p className="mt-3 text-sm font-semibold text-slate-800">No appointments yet</p>
                          <p className="mt-1 text-xs text-slate-500">New consultation requests will appear here.</p>
                        </div>
                      ) : (
                        recentConsultations.map((item) => (
                          <button
                            key={item._id}
                            type="button"
                            onClick={goToAppointments}
                            className="flex w-full gap-3 rounded-xl p-3 text-left transition hover:bg-slate-50"
                          >
                            <span className={`mt-1 h-2.5 w-2.5 shrink-0 rounded-full ${item.status === 'new' ? 'bg-red-500' : 'bg-slate-300'}`} />
                            <span className="min-w-0 flex-1">
                              <span className="flex items-center justify-between gap-3">
                                <span className="truncate text-sm font-bold text-slate-900">{item.name}</span>
                                <span className="shrink-0 text-[11px] font-medium text-slate-400">{formatSubmittedTime(item.createdAt)}</span>
                              </span>
                              <span className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-500">
                                <span className="inline-flex items-center gap-1">
                                  <CalendarCheck className="h-3.5 w-3.5" />
                                  {formatDate(item.preferredDate)}
                                </span>
                                <span className="inline-flex items-center gap-1">
                                  <Clock className="h-3.5 w-3.5" />
                                  {item.preferredTime}
                                </span>
                              </span>
                              <span className="mt-2 inline-flex rounded-full bg-slate-100 px-2 py-0.5 text-[11px] font-semibold text-slate-600">
                                {modeLabels[item.consultationMode] || item.consultationMode}
                              </span>
                            </span>
                          </button>
                        ))
                      )}
                    </div>
                  </div>
                </>
              )}
            </li> : null}
          </ul>

          <div className="relative">
            <button 
              onClick={() => {
                setDropdownOpen(!dropdownOpen);
                setNotificationOpen(false);
              }}
              className="flex items-center gap-4 focus:outline-none"
            >
              <span className="hidden text-right lg:block">
                <span className="block text-sm font-bold text-slate-800">Dr. Ankush Garg</span>
                <span className="block text-xs font-medium text-slate-500">Administrator</span>
              </span>
              <div className="h-10 w-10 overflow-hidden rounded-full border-2 border-white shadow-sm ring-2 ring-slate-100">
                <img 
                  src="https://ui-avatars.com/api/?name=Ankush+Garg&background=0F766E&color=fff&bold=true" 
                  alt="Dr. Ankush Garg" 
                  className="h-full w-full object-cover"
                />
              </div>
              <ChevronDown className="hidden h-4 w-4 text-slate-500 sm:block" />
            </button>

            {/* Dropdown Menu */}
            {dropdownOpen && (
              <>
                {/* Overlay to close dropdown when clicking outside */}
                <div 
                  className="fixed inset-0 z-40"
                  onClick={() => setDropdownOpen(false)}
                ></div>
                
                <div className="absolute right-0 mt-4 flex w-48 flex-col rounded-xl border border-slate-200 bg-white shadow-lg z-50 overflow-hidden">
                  <ul className="flex flex-col border-b border-slate-100 p-2">
                    <li>
                      <button className="flex w-full items-center gap-3.5 rounded-lg px-4 py-2.5 text-sm font-medium text-slate-600 duration-300 ease-in-out hover:bg-slate-50 hover:text-teal-700">
                        <UserIcon className="h-4.5 w-4.5" />
                        My Profile
                      </button>
                    </li>
                  </ul>
                  <div className="p-2">
                    <button 
                      onClick={handleLogout}
                      className="flex w-full items-center gap-3.5 rounded-lg px-4 py-2.5 text-sm font-medium text-red-600 duration-300 ease-in-out hover:bg-red-50"
                    >
                      <LogOut className="h-4.5 w-4.5" />
                      Log Out
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {quickOptions.appointmentAlerts && latestNotification ? (
        <div className="pointer-events-none fixed right-4 top-[76px] z-[70] w-[min(92vw,380px)]">
          <div className="pointer-events-auto overflow-hidden rounded-2xl border border-emerald-100 bg-white shadow-[0_24px_70px_rgba(15,23,42,0.18)]">
            <div className="flex items-start gap-3 p-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-700">
                <Bell className="h-5 w-5" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-bold text-slate-900">New consultation request</p>
                <p className="mt-1 truncate text-sm text-slate-600">{latestNotification.name} requested an appointment.</p>
                <button
                  type="button"
                  onClick={goToAppointments}
                  className="mt-3 inline-flex items-center gap-1.5 rounded-lg bg-primary px-3 py-2 text-xs font-semibold text-white transition hover:bg-primary/90"
                >
                  Open appointments
                  <ExternalLink className="h-3.5 w-3.5" />
                </button>
              </div>
              <button
                type="button"
                onClick={clearLatestNotification}
                className="rounded-lg p-1.5 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
                aria-label="Dismiss notification"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
