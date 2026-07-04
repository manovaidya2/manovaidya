import { useEffect, useMemo, useState } from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { Activity, CalendarCheck, CheckCircle2, Clock, FileText, Plus, RefreshCw, Users } from 'lucide-react';
import api from '../api/axiosInstance';

const modeLabels = {
  online: 'Online Consultation',
  clinic: 'Clinic Visit'
};

const statusStyles = {
  new: 'bg-blue-50 text-blue-700',
  contacted: 'bg-amber-50 text-amber-700',
  completed: 'bg-emerald-50 text-emerald-700'
};

const formatDate = (date) => {
  if (!date) return 'N/A';
  return new Date(date).toLocaleDateString('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  });
};

const formatDateTime = (date, time) => {
  const formattedDate = formatDate(date);
  return time ? `${formattedDate}, ${time}` : formattedDate;
};

const StatCard = ({ title, value, icon: Icon, helper, tone = 'primary' }) => {
  const tones = {
    primary: 'bg-primary/10 text-primary',
    blue: 'bg-blue-50 text-blue-700',
    emerald: 'bg-emerald-50 text-emerald-700',
    amber: 'bg-amber-50 text-amber-700'
  };

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className={`flex h-11 w-11 items-center justify-center rounded-full ${tones[tone]}`}>
        <Icon className="h-5 w-5" />
      </div>
      <div className="mt-4">
        <h4 className="text-2xl font-bold text-slate-800">{value}</h4>
        <span className="text-sm font-medium text-slate-500">{title}</span>
        {helper ? <p className="mt-2 text-xs font-medium text-slate-400">{helper}</p> : null}
      </div>
    </div>
  );
};

export default function Dashboard() {
  const notificationContext = useOutletContext();
  const consultations = notificationContext?.consultations || [];
  const consultationsLoading = notificationContext?.consultationsLoading || false;
  const consultationsError = notificationContext?.consultationsError || '';
  const refreshConsultations = notificationContext?.refreshConsultations;
  const [blogs, setBlogs] = useState([]);
  const [blogsLoading, setBlogsLoading] = useState(true);
  const [blogsError, setBlogsError] = useState('');

  const fetchBlogs = async () => {
    try {
      setBlogsLoading(true);
      setBlogsError('');
      const { data } = await api.get('/blogs');

      if (!data.success) {
        throw new Error(data.message || 'Failed to fetch blogs');
      }

      setBlogs(data.data || []);
    } catch (err) {
      setBlogsError(err.response?.data?.message || err.message || 'Failed to fetch blogs');
    } finally {
      setBlogsLoading(false);
    }
  };

  useEffect(() => {
    void fetchBlogs();
  }, []);

  const stats = useMemo(() => {
    const newRequests = consultations.filter((item) => item.status === 'new').length;
    const completedRequests = consultations.filter((item) => item.status === 'completed').length;
    const publishedBlogs = blogs.filter((blog) => blog.status === 'published').length;

    return {
      totalConsultations: consultations.length,
      newRequests,
      completedRequests,
      publishedBlogs
    };
  }, [blogs, consultations]);

  const recentAppointments = useMemo(() => consultations.slice(0, 5), [consultations]);
  const recentBlogs = useMemo(() => blogs.slice(0, 4), [blogs]);

  const downloadReport = () => {
    const rows = [
      ['Metric', 'Value'],
      ['Total consultation requests', stats.totalConsultations],
      ['New consultation requests', stats.newRequests],
      ['Completed consultation requests', stats.completedRequests],
      ['Published blogs', stats.publishedBlogs],
      [],
      ['Recent appointments'],
      ['Name', 'Phone', 'Mode', 'Preferred Date', 'Preferred Time', 'Status'],
      ...recentAppointments.map((item) => [
        item.name,
        item.phone,
        modeLabels[item.consultationMode] || item.consultationMode,
        formatDate(item.preferredDate),
        item.preferredTime,
        item.status
      ])
    ];
    const csv = rows
      .map((row) => row.map((cell = '') => `"${String(cell).replace(/"/g, '""')}"`).join(','))
      .join('\n');
    const url = URL.createObjectURL(new Blob([csv], { type: 'text/csv;charset=utf-8;' }));
    const link = document.createElement('a');
    link.href = url;
    link.download = `manovaidya-dashboard-${new Date().toISOString().slice(0, 10)}.csv`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const refreshDashboard = async () => {
    await Promise.all([
      refreshConsultations ? refreshConsultations() : Promise.resolve(),
      fetchBlogs()
    ]);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Dashboard Overview</h2>
          <p className="mt-1 text-sm text-slate-500">Live summary from consultation requests and blog records.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            onClick={refreshDashboard}
            className="inline-flex items-center justify-center gap-2 rounded-md border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-primary hover:text-primary"
          >
            <RefreshCw className="h-4 w-4" />
            Refresh
          </button>
          <button
            type="button"
            onClick={downloadReport}
            className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-2 text-center text-sm font-medium text-white shadow-sm hover:bg-primary/90"
          >
            Download Report
          </button>
        </div>
      </div>

      {(consultationsError || blogsError) ? (
        <div className="rounded-xl border border-red-100 bg-red-50 p-4 text-sm text-red-700">
          {consultationsError || blogsError}
        </div>
      ) : null}

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        <StatCard
          title="Total Consultation Requests"
          value={consultationsLoading ? '...' : stats.totalConsultations}
          icon={CalendarCheck}
          helper="All website bookings"
        />
        <StatCard
          title="New Requests"
          value={consultationsLoading ? '...' : stats.newRequests}
          icon={Users}
          helper="Awaiting first contact"
          tone="blue"
        />
        <StatCard
          title="Completed Requests"
          value={consultationsLoading ? '...' : stats.completedRequests}
          icon={CheckCircle2}
          helper="Marked completed by admin"
          tone="emerald"
        />
        <StatCard
          title="Published Blogs"
          value={blogsLoading ? '...' : stats.publishedBlogs}
          icon={FileText}
          helper={`${blogs.length} total blog record${blogs.length === 1 ? '' : 's'}`}
          tone="amber"
        />
      </div>

      <div className="mt-4 grid grid-cols-1 gap-4 xl:grid-cols-3 xl:gap-6">
        <div className="col-span-1 rounded-xl border border-slate-200 bg-white p-6 shadow-sm xl:col-span-2">
          <div className="mb-4 flex items-center justify-between gap-3">
            <div>
              <h3 className="text-lg font-bold text-slate-800">Recent Appointments</h3>
              <p className="mt-1 text-xs text-slate-500">Newest consultation form submissions.</p>
            </div>
            <Link to="/appointments" className="text-sm font-semibold text-primary hover:underline">
              View all
            </Link>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-600">
              <thead className="bg-slate-50 text-xs uppercase text-slate-500">
                <tr>
                  <th className="px-4 py-3 font-medium">Patient Name</th>
                  <th className="px-4 py-3 font-medium">Date & Time</th>
                  <th className="px-4 py-3 font-medium">Type</th>
                  <th className="px-4 py-3 font-medium">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {consultationsLoading ? (
                  <tr>
                    <td colSpan="4" className="px-4 py-8 text-center text-slate-500">Loading appointments...</td>
                  </tr>
                ) : recentAppointments.length === 0 ? (
                  <tr>
                    <td colSpan="4" className="px-4 py-8 text-center text-slate-500">No appointments found.</td>
                  </tr>
                ) : (
                  recentAppointments.map((apt) => (
                    <tr key={apt._id} className="hover:bg-slate-50/50">
                      <td className="px-4 py-3">
                        <p className="font-medium text-slate-800">{apt.name}</p>
                        <p className="mt-1 text-xs text-slate-400">{apt.phone}</p>
                      </td>
                      <td className="px-4 py-3">{formatDateTime(apt.preferredDate, apt.preferredTime)}</td>
                      <td className="px-4 py-3">{modeLabels[apt.consultationMode] || apt.consultationMode}</td>
                      <td className="px-4 py-3">
                        <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium capitalize ${statusStyles[apt.status] || statusStyles.new}`}>
                          {apt.status}
                        </span>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        <div className="space-y-4">
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-bold text-slate-800">Quick Actions</h3>
            <div className="mt-4 flex flex-col gap-3">
              <Link to="/appointments" className="flex items-center justify-between rounded-lg border border-slate-200 p-3 text-sm font-medium text-slate-700 transition-colors hover:border-primary hover:text-primary">
                <span>Manage Appointments</span>
                <CalendarCheck className="h-4 w-4" />
              </Link>
              <Link to="/blog" className="flex items-center justify-between rounded-lg border border-slate-200 p-3 text-sm font-medium text-slate-700 transition-colors hover:border-primary hover:text-primary">
                <span>Create New Blog Post</span>
                <Plus className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-4 flex items-center justify-between gap-3">
              <h3 className="text-lg font-bold text-slate-800">Recent Blogs</h3>
              <Link to="/blog" className="text-sm font-semibold text-primary hover:underline">View all</Link>
            </div>
            <div className="space-y-3">
              {blogsLoading ? (
                <p className="py-6 text-center text-sm text-slate-500">Loading blogs...</p>
              ) : recentBlogs.length === 0 ? (
                <p className="py-6 text-center text-sm text-slate-500">No blogs found.</p>
              ) : (
                recentBlogs.map((blog) => (
                  <div key={blog._id} className="rounded-lg border border-slate-100 bg-slate-50/70 p-3">
                    <p className="line-clamp-2 text-sm font-semibold text-slate-800">{blog.title}</p>
                    <div className="mt-2 flex items-center justify-between gap-3 text-xs text-slate-500">
                      <span className="inline-flex items-center gap-1">
                        <Activity className="h-3.5 w-3.5" />
                        {blog.status || 'draft'}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" />
                        {formatDate(blog.createdAt)}
                      </span>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
