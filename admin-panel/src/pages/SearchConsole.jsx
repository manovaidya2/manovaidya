import { useEffect, useMemo, useState } from 'react';
import {
  BarChart3,
  CheckCircle2,
  ExternalLink,
  FileSearch,
  Globe2,
  Link as LinkIcon,
  RefreshCw,
  ShieldCheck,
  TriangleAlert,
} from 'lucide-react';
import api from '../api/axiosInstance';

const SITE_URL = 'https://manovaidya.org/';
const SITEMAP_URL = 'https://manovaidya.org/sitemap.xml';
const ROBOTS_URL = 'https://manovaidya.org/robots.txt';
const RESOURCE_ID = encodeURIComponent(SITE_URL);

const quickLinks = [
  {
    title: 'Open Search Console',
    description: 'Live property dashboard for manovaidya.org.',
    href: `https://search.google.com/search-console?resource_id=${RESOURCE_ID}`,
    Icon: BarChart3,
  },
  {
    title: 'Inspect Homepage',
    description: 'Check indexing, crawl and canonical status for homepage.',
    href: `https://search.google.com/search-console/inspect?resource_id=${RESOURCE_ID}&id=${encodeURIComponent(SITE_URL)}`,
    Icon: FileSearch,
  },
  {
    title: 'Submit Sitemap',
    description: 'Open sitemap submission screen for sitemap.xml.',
    href: `https://search.google.com/search-console/sitemaps?resource_id=${RESOURCE_ID}`,
    Icon: LinkIcon,
  },
  {
    title: 'Live Website',
    description: 'Open the public site in a new tab.',
    href: SITE_URL,
    Icon: Globe2,
  },
];

const fileChecks = [
  { label: 'Live URL', value: SITE_URL, href: SITE_URL },
  { label: 'Sitemap', value: SITEMAP_URL, href: SITEMAP_URL },
  { label: 'Robots', value: ROBOTS_URL, href: ROBOTS_URL },
];

function StatusPill({ ok, children }) {
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-black ${ok ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}`}>
      {ok ? <CheckCircle2 className="h-3.5 w-3.5" /> : <TriangleAlert className="h-3.5 w-3.5" />}
      {children}
    </span>
  );
}

export default function SearchConsole() {
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchStatus = async () => {
    try {
      setLoading(true);
      setError('');
      const { data } = await api.get('/seo/integrations/status');
      setStatus(data.data);
    } catch (err) {
      setError(err.response?.data?.message || err.message || 'Unable to load Search Console status');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    void fetchStatus();
  }, []);

  const searchConsole = status?.searchConsole;
  const credentialsReady = Boolean(searchConsole?.credentialsConfigured);
  const siteReady = Boolean(searchConsole?.siteConfigured);
  const configuredSite = searchConsole?.siteUrl || SITE_URL;

  const setupItems = useMemo(() => [
    {
      title: 'Property URL',
      detail: configuredSite,
      ok: siteReady,
    },
    {
      title: 'Google service account',
      detail: credentialsReady ? 'Credentials available on backend' : 'Add GOOGLE_SERVICE_ACCOUNT_JSON or GOOGLE_SERVICE_ACCOUNT_BASE64 in backend env',
      ok: credentialsReady,
    },
    {
      title: 'Service account access',
      detail: 'Add service account email as Full user in Google Search Console property settings',
      ok: credentialsReady,
    },
  ], [configuredSite, credentialsReady, siteReady]);

  return (
    <div className="mx-auto w-full max-w-none space-y-6 p-3 md:p-5 lg:p-6">
      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-start gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-md shadow-blue-100">
              <BarChart3 className="h-6 w-6" />
            </span>
            <div>
              <p className="text-xs font-black uppercase tracking-widest text-blue-700">Google Search Console</p>
              <h1 className="mt-1 text-2xl font-black text-slate-950">Manovaidya Live Search Console</h1>
              <p className="mt-1 text-sm font-semibold text-slate-500">{SITE_URL}</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <StatusPill ok={siteReady}>Site URL ready</StatusPill>
            <StatusPill ok={credentialsReady}>{credentialsReady ? 'API connected' : 'API credentials pending'}</StatusPill>
            <button
              type="button"
              onClick={fetchStatus}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-black text-slate-700 transition hover:border-blue-300 hover:text-blue-700"
            >
              <RefreshCw className={`h-4 w-4 ${loading ? 'animate-spin' : ''}`} />
              Refresh
            </button>
          </div>
        </div>
      </section>

      {error ? (
        <div className="rounded-xl border border-red-100 bg-red-50 p-4 text-sm font-bold text-red-700">{error}</div>
      ) : null}

      <section className="grid gap-4 lg:grid-cols-4">
        {quickLinks.map(({ title, description, href, Icon }) => (
          <a
            key={title}
            href={href}
            target="_blank"
            rel="noreferrer"
            className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md"
          >
            <div className="flex items-start justify-between gap-4">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                <Icon className="h-5 w-5" />
              </span>
              <ExternalLink className="h-4 w-4 text-slate-300 transition group-hover:text-blue-600" />
            </div>
            <h2 className="mt-4 text-base font-black text-slate-950">{title}</h2>
            <p className="mt-2 text-sm font-semibold leading-6 text-slate-500">{description}</p>
          </a>
        ))}
      </section>

      <section className="grid gap-5 xl:grid-cols-[1fr_0.9fr]">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center gap-3">
            <ShieldCheck className="h-5 w-5 text-emerald-600" />
            <h2 className="text-lg font-black text-slate-950">Setup Status</h2>
          </div>
          <div className="mt-5 space-y-3">
            {setupItems.map((item) => (
              <div key={item.title} className="flex flex-col gap-2 rounded-xl border border-slate-100 bg-slate-50 p-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm font-black text-slate-900">{item.title}</p>
                  <p className="mt-1 text-xs font-semibold leading-5 text-slate-500">{item.detail}</p>
                </div>
                <StatusPill ok={item.ok}>{item.ok ? 'Ready' : 'Pending'}</StatusPill>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center gap-3">
            <Globe2 className="h-5 w-5 text-blue-600" />
            <h2 className="text-lg font-black text-slate-950">Live Files</h2>
          </div>
          <div className="mt-5 space-y-3">
            {fileChecks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between gap-3 rounded-xl border border-slate-100 bg-slate-50 p-4 transition hover:border-blue-200 hover:bg-blue-50"
              >
                <span>
                  <span className="block text-sm font-black text-slate-900">{item.label}</span>
                  <span className="mt-1 block break-all text-xs font-semibold text-slate-500">{item.value}</span>
                </span>
                <ExternalLink className="h-4 w-4 shrink-0 text-slate-400" />
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
