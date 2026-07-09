import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import AdminLayout from './components/layout/AdminLayout';
import Dashboard from './pages/Dashboard';
import BlogManagement from './pages/BlogManagement';
import CaseStudyManagement from './pages/CaseStudyManagement';
import Appointments from './pages/Appointments';
import Analytics from './pages/Analytics';
import SearchConsole from './pages/SearchConsole';
import Login from './pages/Login';
import Settings from './pages/Settings';
import LiveChats from './pages/LiveChats';
import VideoManagement from './pages/VideoManagement';
import { applyAdminAppearance } from './utils/adminSettings';

const PrivateRoute = ({ children }) => {
  const token = sessionStorage.getItem('token');
  if (!token) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

function App() {
  React.useEffect(() => {
    applyAdminAppearance();
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const syncSystemTheme = () => applyAdminAppearance();
    media.addEventListener('change', syncSystemTheme);
    return () => media.removeEventListener('change', syncSystemTheme);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        
        <Route path="/" element={<PrivateRoute><AdminLayout /></PrivateRoute>}>
          <Route index element={<Dashboard />} />
          {/* Placeholder routes for other sidebar links */}
          <Route path="appointments" element={<Appointments />} />
          <Route path="patients" element={<div className="p-4">Patients Page (Coming Soon)</div>} />
          <Route path="live-chats" element={<LiveChats />} />
          <Route path="blog" element={<BlogManagement />} />
          <Route path="blogs" element={<Navigate to="/blog" replace />} />
          <Route path="case-studies" element={<CaseStudyManagement />} />
          <Route path="video-library" element={<VideoManagement />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="search-console" element={<SearchConsole />} />
          <Route path="settings" element={<Settings />} />
      
          <Route path="*" element={<div className="p-4">Page Not Found</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
