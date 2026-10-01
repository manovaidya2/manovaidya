import { useEffect, useMemo, useRef, useState } from 'react';
import {
  BarChart3,
  CheckCircle2,
  ExternalLink,
  FileSearch,
  Gauge,
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

function AuditStatus({ status }) {
  const tones = {
    PASS: 'bg-emerald-100 text-emerald-700',
    FAIL: 'bg-red-100 text-red-700',
    UNVERIFIED: 'bg-amber-100 text-amber-700',
  };
  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-black ${tones[status] || tones.UNVERIFIED}`}>
      {status}
    </span>
  );
}

export default function SearchConsole() {
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [auditUrl, setAuditUrl] = useState(SITE_URL);
  const [auditResult, setAuditResult] = useState(null);
  const [auditLoading, setAuditLoading] = useState(false);
  const [auditError, setAuditError] = useState('');
  const [determinismResult, setDeterminismResult] = useState(null);
  const [determinismLoading, setDeterminismLoading] = useState(false);
  const latestAuditRequestRef = useRef(0);

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

  const runAudit = async () => {
    const requestId = latestAuditRequestRef.current + 1;
    latestAuditRequestRef.current = requestId;
    try {
      setAuditLoading(true);
      setAuditError('');
      setDeterminismResult(null);
      const { data } = await api.post('/seo/special-audit', { url: auditUrl });
      if (latestAuditRequestRef.current === requestId) setAuditResult(data.data);
    } catch (err) {
      if (latestAuditRequestRef.current === requestId) setAuditError(err.response?.data?.message || err.message || 'Unable to run SEO audit');
    } finally {
      if (latestAuditRequestRef.current === requestId) setAuditLoading(false);
    }
  };

  const runDeterminismTest = async () => {
    const requestId = latestAuditRequestRef.current + 1;
    latestAuditRequestRef.current = requestId;
    try {
      setDeterminismLoading(true);
      setAuditLoading(true);
      setAuditError('');
      const { data } = await api.post('/seo/special-audit/determinism', { url: auditUrl, runs: 10 });
      if (latestAuditRequestRef.current === requestId) setDeterminismResult(data.data);
    } catch (err) {
      if (latestAuditRequestRef.current === requestId) setAuditError(err.response?.data?.message || err.message || 'Unable to run determinism test');
    } finally {
      if (latestAuditRequestRef.current === requestId) {
        setDeterminismLoading(false);
        setAuditLoading(false);
      }
    }
  };

  const searchConsole = status?.searchConsole;
  const credentialsReady = Boolean(searchConsole?.credentialsConfigured);
  const oauthClientReady = Boolean(searchConsole?.oauthClientConfigured);
  const oauthRefreshReady = Boolean(searchConsole?.oauthRefreshTokenConfigured);
  const siteReady = Boolean(searchConsole?.siteConfigured);
  const configuredSite = searchConsole?.siteUrl || SITE_URL;

  const setupItems = useMemo(() => [
    {
      title: 'Property URL',
      detail: configuredSite,
      ok: siteReady,
    },
    {
      title: 'OAuth client',
      detail: oauthClientReady ? 'Client ID and secret available on backend' : 'Add GOOGLE_OAUTH_CLIENT_ID and GOOGLE_OAUTH_CLIENT_SECRET in backend env',
      ok: oauthClientReady,
    },
    {
      title: 'OAuth refresh token',
      detail: oauthRefreshReady ? 'Refresh token available on backend' : 'Run backend/scripts/googleSearchConsoleAuth.js once and add GOOGLE_OAUTH_REFRESH_TOKEN in backend env',
      ok: oauthRefreshReady,
    },
  ], [configuredSite, oauthClientReady, oauthRefreshReady, siteReady]);

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

      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex items-start gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
              <Gauge className="h-5 w-5" />
            </span>
            <div>
              <p className="text-xs font-black uppercase tracking-widest text-emerald-700">Special SEO Audit</p>
              <h2 className="mt-1 text-lg font-black text-slate-950">Production HTML Evidence</h2>
              <p className="mt-1 max-w-3xl text-sm font-semibold leading-6 text-slate-500">
                Fetches the live HTML with a stable crawler, hashes normalized HTML, and scores only verified SEO evidence.
              </p>
            </div>
          </div>
          <div className="flex w-full flex-col gap-2 sm:flex-row lg:max-w-2xl">
            <input
              type="url"
              value={auditUrl}
              onChange={(event) => setAuditUrl(event.target.value)}
              className="min-w-0 flex-1 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm font-semibold text-slate-700 outline-none focus:border-emerald-300 focus:bg-white focus:ring-4 focus:ring-emerald-50"
              placeholder="https://manovaidya.org/"
            />
            <button
              type="button"
              onClick={runAudit}
              disabled={auditLoading || !auditUrl.trim()}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-2.5 text-sm font-black text-white transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              <RefreshCw className={`h-4 w-4 ${auditLoading && !determinismLoading ? 'animate-spin' : ''}`} />
              Audit
            </button>
            <button
              type="button"
              onClick={runDeterminismTest}
              disabled={auditLoading || !auditUrl.trim()}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-black text-slate-700 transition hover:border-emerald-300 hover:text-emerald-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              <RefreshCw className={`h-4 w-4 ${determinismLoading ? 'animate-spin' : ''}`} />
              10-run test
            </button>
          </div>
        </div>

        {auditError ? (
          <div className="mt-4 rounded-xl border border-red-100 bg-red-50 p-4 text-sm font-bold text-red-700">{auditError}</div>
        ) : null}

        {auditResult ? (
          <div className="mt-5 grid gap-4 xl:grid-cols-[0.75fr_1.25fr]">
            <div className="rounded-xl border border-slate-100 bg-slate-50 p-4">
              <p className="text-xs font-black uppercase tracking-widest text-slate-400">Audit Evidence</p>
              <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                <div>
                  <p className="text-xs font-bold text-slate-400">Score</p>
                  <p className="text-3xl font-black text-slate-950">{auditResult.scoring?.score ?? 'N/A'}<span className="text-sm text-slate-400">/100</span></p>
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400">Audit version</p>
                  <p className="text-lg font-black text-slate-900">{auditResult.auditVersion}</p>
                </div>
                <div className="col-span-2">
                  <p className="text-xs font-bold text-slate-400">Page hash</p>
                  <p className="break-all font-mono text-xs font-bold text-slate-700">{auditResult.pageHash || 'UNVERIFIED'}</p>
                </div>
                <div className="col-span-2">
                  <p className="text-xs font-bold text-slate-400">Final URL</p>
                  <p className="break-all text-xs font-bold text-slate-700">{auditResult.finalUrl || auditResult.normalizedUrl}</p>
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400">HTTP</p>
                  <p className="font-black text-slate-900">{auditResult.fetch?.statusCode || 'N/A'}</p>
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400">Response</p>
                  <p className="font-black text-slate-900">{auditResult.fetch?.responseTimeMs ?? 'N/A'} ms</p>
                </div>
                <div className="col-span-2">
                  <p className="text-xs font-bold text-slate-400">Formula</p>
                  <p className="text-xs font-semibold leading-5 text-slate-600">{auditResult.scoring?.formula}</p>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-xl border border-slate-100">
              <div className="grid grid-cols-[1fr_auto_auto] gap-3 border-b border-slate-100 bg-slate-50 px-4 py-3 text-xs font-black uppercase tracking-wide text-slate-400">
                <span>Check</span>
                <span>Status</span>
                <span>Points</span>
              </div>
              <div className="divide-y divide-slate-100">
                {(auditResult.checks || []).map((check) => (
                  <div key={check.id} className="grid grid-cols-[1fr_auto_auto] gap-3 px-4 py-3">
                    <div className="min-w-0">
                      <p className="text-sm font-black text-slate-900">{check.label}</p>
                      <p className="mt-1 text-xs font-semibold leading-5 text-slate-500">{check.reason}</p>
                    </div>
                    <AuditStatus status={check.status} />
                    <span className="text-xs font-black text-slate-600">{check.points}/{check.maxPoints}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : null}

        {determinismResult ? (
          <div className="mt-5 rounded-xl border border-slate-100 bg-white p-4">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <h3 className="text-sm font-black text-slate-950">10-run Determinism Test</h3>
              <StatusPill ok={determinismResult.deterministic}>{determinismResult.deterministic ? 'Deterministic' : 'Divergence found'}</StatusPill>
            </div>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full min-w-[720px] text-left text-xs">
                <thead className="bg-slate-50 font-black uppercase tracking-wide text-slate-400">
                  <tr>
                    <th className="px-3 py-2">Run</th>
                    <th className="px-3 py-2">Page Hash</th>
                    <th className="px-3 py-2">Score</th>
                    <th className="px-3 py-2">Different Checks</th>
                    <th className="px-3 py-2">First Divergence</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-semibold text-slate-600">
                  {(determinismResult.runs || []).map((run) => (
                    <tr key={run.run}>
                      <td className="px-3 py-2 font-black text-slate-900">{run.run}</td>
                      <td className="max-w-xs truncate px-3 py-2 font-mono">{run.pageHash || 'UNVERIFIED'}</td>
                      <td className="px-3 py-2">{run.score ?? 'N/A'}</td>
                      <td className="px-3 py-2">{run.differentChecks?.length ? run.differentChecks.join(', ') : 'None'}</td>
                      <td className="px-3 py-2">{run.firstDivergentCheck || 'None'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : null}
      </section>
    </div>
  );
}
