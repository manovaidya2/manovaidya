import { useEffect, useMemo, useState } from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import {
  Activity,
  ArrowUpRight,
  BarChart3,
  CalendarClock,
  Download,
  FileText,
  Gauge,
  PieChart,
  RefreshCw,
  Settings,
  TrendingUp,
  Users,
} from 'lucide-react';
import api from '../api/axiosInstance';
import { ADMIN_SETTINGS_EVENT, getAdminQuickOptions } from '../utils/adminSettings';

const palettes = {
  clinical: ['#0F766E', '#2563EB', '#8B5CF6', '#10B981', '#F59E0B', '#EF4444'],
  warm: ['#D97706', '#DC2626', '#EA580C', '#F59E0B', '#7C2D12', '#BE123C'],
  cool: ['#0891B2', '#4F46E5', '#9333EA', '#06B6D4', '#14B8A6', '#6366F1'],
};

const statusLabels = {
  new: 'New',
  contacted: 'Contacted',
  completed: 'Completed',
};

const modeLabels = {
  online: 'Online',
  clinic: 'Clinic',
};

const formatDate = (date) =>
  new Date(date).toLocaleDateString('en-IN', {
    day: '2-digit',
    month: 'short',
  });

const getDayKey = (date) => {
  const value = new Date(date);
  value.setHours(0, 0, 0, 0);
  return value.toISOString().slice(0, 10);
};

const getLastDays = (count) => {
  const days = [];
  for (let index = count - 1; index >= 0; index -= 1) {
    const day = new Date();
    day.setDate(day.getDate() - index);
    day.setHours(0, 0, 0, 0);
    days.push({
      key: day.toISOString().slice(0, 10),
      label: day.toLocaleDateString('en-IN', { day: '2-digit', month: 'short' }),
    });
  }
  return days;
};

const countBy = (items, getter) =>
  items.reduce((acc, item) => {
    const key = getter(item) || 'Unknown';
    acc[key] = (acc[key] || 0) + 1;
    return acc;
  }, {});

const StatCard = ({ title, value, helper, icon: Icon, color }) => (
  <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
    <div className="flex items-start justify-between gap-4">
      <span className="flex h-11 w-11 items-center justify-center rounded-xl text-white shadow-sm" style={{ backgroundColor: color }}>
        <Icon className="h-5 w-5" />
      </span>
      <ArrowUpRight className="h-4 w-4 text-slate-300" />
    </div>
    <p className="mt-5 text-3xl font-black text-slate-950">{value}</p>
    <p className="mt-1 text-sm font-bold text-slate-700">{title}</p>
    <p className="mt-2 text-xs font-semibold leading-5 text-slate-400">{helper}</p>
  </section>
);

const SectionCard = ({ title, subtitle, icon: Icon, children }) => (
  <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
    <div className="mb-5 flex items-start justify-between gap-4">
      <div>
        <p className="text-base font-black text-slate-900">{title}</p>
        <p className="mt-1 text-xs font-semibold leading-5 text-slate-500">{subtitle}</p>
      </div>
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
        <Icon className="h-5 w-5" />
      </span>
    </div>
    {children}
  </section>
);

function LineChart({ data, colors, style }) {
  const max = Math.max(...data.map((item) => item.value), 1);
  const points = data.map((item, index) => {
    const x = data.length === 1 ? 50 : (index / (data.length - 1)) * 100;
    const y = 100 - (item.value / max) * 82 - 8;
    return `${x},${y}`;
  });
  const strokeWidth = style === 'compact' ? 3 : 4;

  return (
    <div className="analytics-chart-surface rounded-2xl border border-slate-200 bg-slate-50 p-4">
      <svg viewBox="0 0 100 112" className="h-64 w-full overflow-visible">
        {[0, 1, 2, 3].map((line) => (
          <line
            key={line}
            x1="0"
            x2="100"
            y1={12 + line * 26}
            y2={12 + line * 26}
            stroke="currentColor"
            className="text-slate-200"
            strokeWidth="0.5"
          />
        ))}
        <polyline
          points={points.join(' ')}
          fill="none"
          stroke={colors[0]}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin={style === 'sharp' ? 'miter' : 'round'}
        />
        {data.map((item, index) => {
          const [x, y] = points[index].split(',').map(Number);
          return (
            <g key={item.label}>
              <circle cx={x} cy={y} r={style === 'compact' ? 2.5 : 3.5} fill={colors[1]} stroke="white" strokeWidth="1.5" />
              <text x={x} y="110" textAnchor="middle" className="fill-slate-500 text-[4px] font-bold">
                {item.shortLabel}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}

function DonutChart({ data, colors }) {
  const total = data.reduce((sum, item) => sum + item.value, 0) || 1;
  let start = 0;
  const gradient = data
    .map((item, index) => {
      const size = (item.value / total) * 100;
      const segment = `${colors[index % colors.length]} ${start}% ${start + size}%`;
      start += size;
      return segment;
    })
    .join(', ');

  return (
    <div className="grid gap-5 md:grid-cols-[220px_1fr] md:items-center">
      <div
        className="mx-auto flex h-52 w-52 items-center justify-center rounded-full"
        style={{ background: `conic-gradient(${gradient})` }}
      >
        <div className="flex h-32 w-32 flex-col items-center justify-center rounded-full bg-white text-center shadow-inner">
          <span className="text-3xl font-black text-slate-950">{total}</span>
          <span className="text-xs font-bold text-slate-500">requests</span>
        </div>
      </div>
      <div className="space-y-3">
        {data.map((item, index) => (
          <div key={item.label} className="flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3">
            <span className="flex items-center gap-2 text-sm font-bold text-slate-700">
              <span className="h-3 w-3 rounded-full" style={{ backgroundColor: colors[index % colors.length] }} />
              {item.label}
            </span>
            <span className="text-sm font-black text-slate-900">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function BarList({ data, colors }) {
  const max = Math.max(...data.map((item) => item.value), 1);

  return (
    <div className="space-y-4">
      {data.map((item, index) => (
        <div key={item.label}>
          <div className="mb-2 flex items-center justify-between gap-3 text-sm">
            <span className="truncate font-bold text-slate-700">{item.label}</span>
            <span className="font-black text-slate-900">{item.value}</span>
          </div>
          <div className="h-3 overflow-hidden rounded-full bg-slate-100">
            <div
              className="h-full rounded-full"
              style={{
                width: `${Math.max(6, (item.value / max) * 100)}%`,
                backgroundColor: colors[index % colors.length],
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Analytics() {
  const notificationContext = useOutletContext();
  const consultations = notificationContext?.consultations || [];
  const consultationsLoading = notificationContext?.consultationsLoading || false;
  const consultationsError = notificationContext?.consultationsError || '';
  const refreshConsultations = notificationContext?.refreshConsultations;
  const [blogs, setBlogs] = useState([]);
  const [blogsLoading, setBlogsLoading] = useState(true);
  const [blogsError, setBlogsError] = useState('');
  const [settings, setSettings] = useState(() => getAdminQuickOptions());

  const fetchBlogs = async () => {
    try {
      setBlogsLoading(true);
      setBlogsError('');
      const { data } = await api.get('/blogs');
      if (!data.success) throw new Error(data.message || 'Failed to fetch blogs');
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

  useEffect(() => {
    const syncSettings = () => setSettings(getAdminQuickOptions());
    window.addEventListener(ADMIN_SETTINGS_EVENT, syncSettings);
    window.addEventListener('storage', syncSettings);
    return () => {
      window.removeEventListener(ADMIN_SETTINGS_EVENT, syncSettings);
      window.removeEventListener('storage', syncSettings);
    };
  }, []);

  const colors = palettes[settings.analyticsPalette] || palettes.clinical;
  const chartStyle = settings.analyticsChartStyle || 'smooth';

  const metrics = useMemo(() => {
    const publishedBlogs = blogs.filter((blog) => blog.status === 'published').length;
    const draftBlogs = blogs.filter((blog) => blog.status !== 'published').length;
    const aiScoredBlogs = blogs.filter((blog) => Number.isFinite(blog.aiSeoScore));
    const averageSeo = aiScoredBlogs.length
      ? Math.round(aiScoredBlogs.reduce((sum, blog) => sum + blog.aiSeoScore, 0) / aiScoredBlogs.length)
      : 0;
    const completed = consultations.filter((item) => item.status === 'completed').length;
    const conversion = consultations.length ? Math.round((completed / consultations.length) * 100) : 0;

    return {
      totalConsultations: consultations.length,
      completed,
      conversion,
      totalBlogs: blogs.length,
      publishedBlogs,
      draftBlogs,
      averageSeo,
    };
  }, [blogs, consultations]);

  const trendData = useMemo(() => {
    const days = getLastDays(10);
    const consultationCounts = countBy(consultations, (item) => getDayKey(item.createdAt || item.preferredDate));
    const blogCounts = countBy(blogs, (item) => getDayKey(item.createdAt));
    return days.map((day) => ({
      label: day.label,
      shortLabel: day.label.split(' ')[0],
      value: (consultationCounts[day.key] || 0) + (blogCounts[day.key] || 0),
    }));
  }, [blogs, consultations]);

  const statusData = useMemo(() => {
    const counts = countBy(consultations, (item) => item.status);
    return ['new', 'contacted', 'completed'].map((status) => ({
      label: statusLabels[status],
      value: counts[status] || 0,
    }));
  }, [consultations]);

  const modeData = useMemo(() => {
    const counts = countBy(consultations, (item) => item.consultationMode);
    return Object.entries(counts).map(([label, value]) => ({
      label: modeLabels[label] || label,
      value,
    }));
  }, [consultations]);

  const categoryData = useMemo(() => {
    const counts = countBy(blogs, (blog) => blog.category || 'Uncategorized');
    return Object.entries(counts)
      .map(([label, value]) => ({ label, value }))
      .sort((a, b) => b.value - a.value)
      .slice(0, 7);
  }, [blogs]);

  const seoData = useMemo(() => {
    const buckets = [
      { label: '85+', value: 0 },
      { label: '70-84', value: 0 },
      { label: '50-69', value: 0 },
      { label: '<50', value: 0 },
      { label: 'Not audited', value: 0 },
    ];
    blogs.forEach((blog) => {
      if (!Number.isFinite(blog.aiSeoScore)) buckets[4].value += 1;
      else if (blog.aiSeoScore >= 85) buckets[0].value += 1;
      else if (blog.aiSeoScore >= 70) buckets[1].value += 1;
      else if (blog.aiSeoScore >= 50) buckets[2].value += 1;
      else buckets[3].value += 1;
    });
    return buckets;
  }, [blogs]);

  const refreshAll = async () => {
    await Promise.all([
      refreshConsultations ? refreshConsultations() : Promise.resolve(),
      fetchBlogs(),
    ]);
  };

  const downloadCsv = () => {
    const rows = [
      ['Metric', 'Value'],
      ['Total consultations', metrics.totalConsultations],
      ['Completed consultations', metrics.completed],
      ['Conversion rate', `${metrics.conversion}%`],
      ['Total blogs', metrics.totalBlogs],
      ['Published blogs', metrics.publishedBlogs],
      ['Draft blogs', metrics.draftBlogs],
      ['Average Gemini SEO score', metrics.averageSeo],
    ];
    const csv = rows.map((row) => row.map((cell) => `"${String(cell).replace(/"/g, '""')}"`).join(',')).join('\n');
    const url = URL.createObjectURL(new Blob([csv], { type: 'text/csv;charset=utf-8;' }));
    const link = document.createElement('a');
    link.href = url;
    link.download = `manovaidya-analytics-${new Date().toISOString().slice(0, 10)}.csv`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const loading = consultationsLoading || blogsLoading;
  const error = consultationsError || blogsError;

  return (
    <div className="mx-auto w-full max-w-none space-y-6">
      <div className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-start gap-4">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary text-white shadow-md shadow-slate-200">
            <BarChart3 className="h-6 w-6" />
          </span>
          <div>
            <h1 className="text-2xl font-black tracking-tight text-slate-950">Analytics</h1>
            <p className="mt-1 text-sm font-semibold leading-6 text-slate-500">
              Consultation performance, blog growth, Gemini SEO health and content trends.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link
            to="/settings"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-bold text-slate-700 transition hover:border-primary hover:text-primary"
          >
            <Settings className="h-4 w-4" />
            Chart settings
          </Link>
          <button
            type="button"
            onClick={refreshAll}
            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-bold text-slate-700 transition hover:border-primary hover:text-primary"
          >
            <RefreshCw className={`h-4 w-4 ${loading ? 'animate-spin' : ''}`} />
            Refresh
          </button>
          <button
            type="button"
            onClick={downloadCsv}
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-black text-white shadow-sm transition hover:bg-primary/90"
          >
            <Download className="h-4 w-4" />
            Export
          </button>
        </div>
      </div>

      {error ? (
        <div className="rounded-2xl border border-red-200 bg-red-50 p-4 text-sm font-semibold text-red-700">
          {error}
        </div>
      ) : null}

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard title="Consultations" value={loading ? '...' : metrics.totalConsultations} helper="Total website requests" icon={Users} color={colors[0]} />
        <StatCard title="Conversion" value={loading ? '...' : `${metrics.conversion}%`} helper={`${metrics.completed} completed requests`} icon={TrendingUp} color={colors[1]} />
        <StatCard title="Published Blogs" value={loading ? '...' : metrics.publishedBlogs} helper={`${metrics.totalBlogs} total records`} icon={FileText} color={colors[2]} />
        <StatCard title="Avg SEO Score" value={loading ? '...' : metrics.averageSeo} helper="Gemini audited blog average" icon={Gauge} color={colors[3]} />
      </div>

      <div className="grid gap-5 xl:grid-cols-[1.4fr_0.9fr]">
        <SectionCard title="Activity Trend" subtitle={`Last 10 days, ${chartStyle} chart style`} icon={Activity}>
          <LineChart data={trendData} colors={colors} style={chartStyle} />
        </SectionCard>

        <SectionCard title="Consultation Status" subtitle="Request pipeline by current status" icon={PieChart}>
          <DonutChart data={statusData} colors={colors} />
        </SectionCard>
      </div>

      <div className="grid gap-5 xl:grid-cols-3">
        <SectionCard title="Blog Categories" subtitle="Top content categories by volume" icon={FileText}>
          <BarList data={categoryData.length ? categoryData : [{ label: 'No blogs yet', value: 0 }]} colors={colors} />
        </SectionCard>

        <SectionCard title="SEO Score Distribution" subtitle="Gemini score buckets across blogs" icon={Gauge}>
          <BarList data={seoData} colors={colors.slice().reverse()} />
        </SectionCard>

        <SectionCard title="Consultation Mode" subtitle="Online versus clinic interest" icon={CalendarClock}>
          <BarList data={modeData.length ? modeData : [{ label: 'No requests yet', value: 0 }]} colors={colors} />
        </SectionCard>
      </div>

      <div className="grid gap-5 xl:grid-cols-[1fr_0.8fr]">
        <SectionCard title="Recent Signals" subtitle="Latest records used by this analytics view" icon={Activity}>
          <div className="grid gap-3 md:grid-cols-2">
            {consultations.slice(0, 4).map((item) => (
              <div key={item._id} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-black text-slate-900">{item.name}</p>
                <p className="mt-1 text-xs font-semibold text-slate-500">{formatDate(item.createdAt)} - {statusLabels[item.status] || item.status}</p>
                <p className="mt-2 line-clamp-2 text-xs leading-5 text-slate-500">{item.message || 'No message provided.'}</p>
              </div>
            ))}
            {consultations.length === 0 ? (
              <p className="rounded-xl bg-slate-50 p-4 text-sm font-semibold text-slate-500">No consultation signals yet.</p>
            ) : null}
          </div>
        </SectionCard>

        <SectionCard title="Content Health" subtitle="Blog publishing balance" icon={FileText}>
          <div className="space-y-4">
            <div className="rounded-xl bg-slate-50 p-4">
              <p className="text-xs font-bold uppercase tracking-wide text-slate-400">Published ratio</p>
              <p className="mt-2 text-3xl font-black text-slate-950">
                {metrics.totalBlogs ? Math.round((metrics.publishedBlogs / metrics.totalBlogs) * 100) : 0}%
              </p>
              <div className="mt-3 h-3 overflow-hidden rounded-full bg-slate-100">
                <div
                  className="h-full rounded-full"
                  style={{
                    width: `${metrics.totalBlogs ? (metrics.publishedBlogs / metrics.totalBlogs) * 100 : 0}%`,
                    backgroundColor: colors[0],
                  }}
                />
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl bg-slate-50 p-4">
                <p className="text-xs font-bold text-slate-500">Published</p>
                <p className="mt-1 text-2xl font-black text-slate-900">{metrics.publishedBlogs}</p>
              </div>
              <div className="rounded-xl bg-slate-50 p-4">
                <p className="text-xs font-bold text-slate-500">Draft / Other</p>
                <p className="mt-1 text-2xl font-black text-slate-900">{metrics.draftBlogs}</p>
              </div>
            </div>
          </div>
        </SectionCard>
      </div>
    </div>
  );
}
