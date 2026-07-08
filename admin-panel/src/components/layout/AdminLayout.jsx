import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import api from '../../api/axiosInstance';
import { ADMIN_SETTINGS_EVENT, getAdminQuickOptions, saveAdminQuickOptions } from '../../utils/adminSettings';

const getSubmittedTime = (item) => {
  const submittedAt = new Date(item?.createdAt || item?.updatedAt || 0).getTime();
  return Number.isNaN(submittedAt) ? 0 : submittedAt;
};

const sortNewestConsultations = (items = []) =>
  [...items].sort((a, b) => getSubmittedTime(b) - getSubmittedTime(a));

export default function AdminLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(() => getAdminQuickOptions().sidebarCollapsed);
  const [consultations, setConsultations] = useState([]);
  const [consultationsLoading, setConsultationsLoading] = useState(true);
  const [consultationsError, setConsultationsError] = useState('');
  const [latestNotification, setLatestNotification] = useState(null);
  const hasLoadedConsultations = useRef(false);
  const knownConsultationIds = useRef(new Set());
  const toastTimer = useRef(null);
  const location = useLocation();
  const isFullWidthPage = location.pathname.includes('/live-chats');

  const fetchConsultations = useCallback(async ({ silent = false } = {}) => {
    try {
      if (!silent) setConsultationsLoading(true);
      setConsultationsError('');
      const { data } = await api.get('/consultations');

      if (!data.success) {
        throw new Error(data.message || 'Failed to fetch consultation requests');
      }

      const nextConsultations = sortNewestConsultations(data.data || []);
      const nextIds = new Set(nextConsultations.map((item) => item._id));

      if (hasLoadedConsultations.current) {
        const newItems = nextConsultations.filter((item) => !knownConsultationIds.current.has(item._id));
        if (newItems.length > 0) {
          setLatestNotification(newItems[0]);
          window.clearTimeout(toastTimer.current);
          toastTimer.current = window.setTimeout(() => setLatestNotification(null), 7000);
        }
      }

      knownConsultationIds.current = nextIds;
      hasLoadedConsultations.current = true;
      setConsultations(nextConsultations);
    } catch (err) {
      setConsultationsError(err.response?.data?.message || err.message || 'Failed to fetch consultation requests');
    } finally {
      setConsultationsLoading(false);
    }
  }, []);

  useEffect(() => {
    void fetchConsultations();
    const intervalId = window.setInterval(() => {
      void fetchConsultations({ silent: true });
    }, 30000);

    return () => {
      window.clearInterval(intervalId);
      window.clearTimeout(toastTimer.current);
    };
  }, [fetchConsultations]);

  useEffect(() => {
    const syncQuickOptions = () => {
      setIsCollapsed(getAdminQuickOptions().sidebarCollapsed);
    };

    window.addEventListener(ADMIN_SETTINGS_EVENT, syncQuickOptions);
    window.addEventListener('storage', syncQuickOptions);
    return () => {
      window.removeEventListener(ADMIN_SETTINGS_EVENT, syncQuickOptions);
      window.removeEventListener('storage', syncQuickOptions);
    };
  }, []);

  const updateSidebarCollapsed = (collapsed) => {
    setIsCollapsed(collapsed);
    saveAdminQuickOptions({ ...getAdminQuickOptions(), sidebarCollapsed: collapsed });
  };

  return (
    <div className="flex h-screen overflow-hidden bg-slate-50 font-sans">
      <Sidebar 
        sidebarOpen={sidebarOpen} 
        setSidebarOpen={setSidebarOpen} 
        isCollapsed={isCollapsed}
        setIsCollapsed={updateSidebarCollapsed}
      />
      
      <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
        <Navbar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          consultations={consultations}
          consultationsLoading={consultationsLoading}
          consultationsError={consultationsError}
          latestNotification={latestNotification}
          refreshConsultations={fetchConsultations}
          clearLatestNotification={() => setLatestNotification(null)}
        />
        
        <main className="flex-1 flex flex-col">
          <div className={`mx-auto w-full max-w-none transition-all duration-300 flex-1 flex flex-col ${isFullWidthPage ? 'p-0' : 'p-3 md:p-5 2xl:p-6'}`}>
            <Outlet
              context={{
                consultations,
                consultationsLoading,
                consultationsError,
                refreshConsultations: fetchConsultations,
                setConsultations
              }}
            />
          </div>
        </main>
      </div>
    </div>
  );
}
