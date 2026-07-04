import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Users, Calendar, Settings, FileText, Activity, BriefcaseBusiness, ChevronLeft, ChevronRight, X } from 'lucide-react';
import Logo from '../../assets/manovaidya-logo (2).png';

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/' },
  { icon: Calendar, label: 'Appointments', path: '/appointments' },
  { icon: Users, label: 'Patients', path: '/patients' },
  { icon: FileText, label: 'Blogs', path: '/blog' },
  { icon: BriefcaseBusiness, label: 'Case Studies', path: '/case-studies' },
  { icon: Activity, label: 'Analytics', path: '/analytics' },
  { icon: Settings, label: 'Settings', path: '/settings' },
];

export default function Sidebar({ sidebarOpen, setSidebarOpen, isCollapsed, setIsCollapsed }) {
  return (
    <aside
      className={`admin-sidebar absolute left-0 top-0 z-50 flex h-screen flex-col overflow-y-hidden border-r duration-300 ease-in-out lg:static lg:translate-x-0 ${
        sidebarOpen ? 'translate-x-0 w-64' : '-translate-x-full lg:translate-x-0'
      } ${isCollapsed ? 'lg:w-[76px]' : 'lg:w-64'}`}
    >
      {/* Logo Section */}
      <div className={`flex items-center gap-2 px-5 py-6 ${isCollapsed ? 'justify-center px-0' : 'justify-between'}`}>
        <NavLink to="/">
          <div className="flex items-center transition-transform hover:scale-105">
            {isCollapsed ? (
              <img src={Logo} alt="Manovaidya Logo" className="h-10 w-10 object-cover object-left rounded-lg" />
            ) : (
              <img src={Logo} alt="Manovaidya Logo" className="h-12 w-auto max-w-[160px] object-contain" />
            )}
          </div>
        </NavLink>

        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="block lg:hidden text-slate-500 hover:text-slate-800 transition-colors"
        >
          <X size={24} />
        </button>
      </div>

      <div className="no-scrollbar flex flex-col flex-1 overflow-y-auto duration-300 ease-linear">
        <nav className="mt-2 px-3 py-4 lg:mt-4 lg:px-4">
          <div>
            <h3 className={`admin-sidebar-heading mb-5 text-[11px] font-bold uppercase tracking-widest transition-all ${isCollapsed ? 'text-center hidden' : 'ml-4'}`}>
              Main Menu
            </h3>
            <ul className="mb-6 flex flex-col gap-2">
              {navItems.map((item) => (
                <li key={item.label}>
                  <NavLink
                    to={item.path}
                    title={isCollapsed ? item.label : ''}
                    className={({ isActive }) =>
                      `group relative flex items-center gap-3 rounded-xl px-3.5 py-3.5 font-semibold transition-all duration-300 ease-in-out overflow-hidden ${
                        isCollapsed ? 'justify-center px-0' : ''
                      } ${
                        isActive 
                          ? 'admin-sidebar-link-active shadow-sm ring-1' 
                          : 'admin-sidebar-link'
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {/* Active Left Indicator */}
                        {isActive && !isCollapsed && (
                          <div className="admin-sidebar-active-indicator absolute left-0 top-1/2 -translate-y-1/2 h-6 w-[3px] rounded-r-md" />
                        )}
                        {isActive && isCollapsed && (
                          <div className="admin-sidebar-active-indicator absolute left-0 top-1/2 -translate-y-1/2 h-8 w-[4px] rounded-r-md" />
                        )}
                        
                        <item.icon 
                          size={22} 
                          className={`relative z-10 shrink-0 transition-transform duration-300 ${isActive ? 'scale-110' : 'group-hover:scale-110'}`} 
                        />
                        {!isCollapsed && (
                          <span className="relative z-10 text-[15px] tracking-wide whitespace-nowrap">{item.label}</span>
                        )}
                      </>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>

      {/* Collapse Toggle Button (Desktop Only) */}
      <div className="admin-sidebar-footer hidden lg:flex items-center justify-center border-t p-4">
        <button 
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="admin-sidebar-collapse flex h-12 w-full items-center justify-center rounded-xl shadow-sm ring-1 transition-colors"
        >
          {isCollapsed ? (
            <ChevronRight size={20} />
          ) : (
            <div className="flex items-center gap-2">
              <ChevronLeft size={20} />
              <span className="text-[15px] font-semibold">Collapse</span>
            </div>
          )}
        </button>
      </div>
    </aside>
  );
}
