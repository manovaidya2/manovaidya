export const DEFAULT_ADMIN_CREDENTIALS = {
  username: 'manovaidya',
  password: 'manovaidya123',
};

export const DEFAULT_ADMIN_APPEARANCE = {
  theme: 'light',
  accentColor: '#0F766E',
  sidebarColor: '#111827',
  density: 'comfortable',
};

export const DEFAULT_ADMIN_QUICK_OPTIONS = {
  appointmentAlerts: true,
  compactTables: false,
  seoHints: true,
  sidebarCollapsed: false,
  analyticsChartStyle: 'smooth',
  analyticsPalette: 'clinical',
  krayaWebhookUrl: 'https://api.kraya-ai.com/api/external/6Vjm8XVH/leads',
  krayaStage: 'New Lead',
  krayaPipeline: 'Leads',
  krayaApiKey: '',
  krayaSource: 'Manovaidya admin appointments',
  krayaNotes: '',
  krayaEnableSequence: false,
  krayaSequence: '',
};

const CREDENTIALS_KEY = 'adminCredentials';
const APPEARANCE_KEY = 'adminAppearance';
const QUICK_OPTIONS_KEY = 'adminQuickOptions';
export const ADMIN_SETTINGS_EVENT = 'admin-settings-updated';

const safeJsonParse = (value, fallback) => {
  try {
    return value ? { ...fallback, ...JSON.parse(value) } : fallback;
  } catch {
    return fallback;
  }
};

const hexToRgb = (hex) => {
  const normalized = String(hex || '').replace('#', '').trim();
  if (!/^[0-9a-f]{6}$/i.test(normalized)) return { r: 17, g: 24, b: 39 };
  return {
    r: parseInt(normalized.slice(0, 2), 16),
    g: parseInt(normalized.slice(2, 4), 16),
    b: parseInt(normalized.slice(4, 6), 16),
  };
};

const isLightColor = (hex) => {
  const { r, g, b } = hexToRgb(hex);
  return (0.299 * r + 0.587 * g + 0.114 * b) > 168;
};

export const getAdminCredentials = () =>
  safeJsonParse(localStorage.getItem(CREDENTIALS_KEY), DEFAULT_ADMIN_CREDENTIALS);

export const saveAdminCredentials = (credentials) => {
  const nextCredentials = {
    username: credentials.username?.trim() || DEFAULT_ADMIN_CREDENTIALS.username,
    password: credentials.password || DEFAULT_ADMIN_CREDENTIALS.password,
  };
  localStorage.setItem(CREDENTIALS_KEY, JSON.stringify(nextCredentials));
  window.dispatchEvent(new CustomEvent(ADMIN_SETTINGS_EVENT, { detail: { type: 'credentials' } }));
  return nextCredentials;
};

export const getAdminAppearance = () =>
  safeJsonParse(localStorage.getItem(APPEARANCE_KEY), DEFAULT_ADMIN_APPEARANCE);

export const saveAdminAppearance = (appearance) => {
  const nextAppearance = { ...DEFAULT_ADMIN_APPEARANCE, ...appearance };
  localStorage.setItem(APPEARANCE_KEY, JSON.stringify(nextAppearance));
  applyAdminAppearance(nextAppearance);
  window.dispatchEvent(new CustomEvent(ADMIN_SETTINGS_EVENT, { detail: { type: 'appearance' } }));
  return nextAppearance;
};

export const getAdminQuickOptions = () =>
  safeJsonParse(localStorage.getItem(QUICK_OPTIONS_KEY), DEFAULT_ADMIN_QUICK_OPTIONS);

export const saveAdminQuickOptions = (options) => {
  const nextOptions = { ...DEFAULT_ADMIN_QUICK_OPTIONS, ...options };
  localStorage.setItem(QUICK_OPTIONS_KEY, JSON.stringify(nextOptions));
  document.documentElement.dataset.adminDensity = nextOptions.compactTables ? 'compact' : getAdminAppearance().density;
  window.dispatchEvent(new CustomEvent(ADMIN_SETTINGS_EVENT, { detail: { type: 'quickOptions' } }));
  return nextOptions;
};

export const applyAdminAppearance = (appearance = getAdminAppearance()) => {
  const resolvedTheme =
    appearance.theme === 'system'
      ? window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light'
      : appearance.theme;

  const sidebarColor = appearance.sidebarColor || DEFAULT_ADMIN_APPEARANCE.sidebarColor;
  const sidebarIsLight = isLightColor(sidebarColor);
  document.documentElement.style.setProperty('--color-primary', appearance.accentColor);
  document.documentElement.style.setProperty('--admin-sidebar-bg', sidebarColor);
  document.documentElement.style.setProperty('--admin-sidebar-text', sidebarIsLight ? '#334155' : 'rgba(226, 232, 240, 0.88)');
  document.documentElement.style.setProperty('--admin-sidebar-muted', sidebarIsLight ? 'rgba(15, 23, 42, 0.58)' : 'rgba(226, 232, 240, 0.64)');
  document.documentElement.style.setProperty('--admin-sidebar-hover', sidebarIsLight ? 'rgba(255, 255, 255, 0.78)' : 'rgba(255, 255, 255, 0.1)');
  document.documentElement.style.setProperty('--admin-sidebar-active', sidebarIsLight ? 'rgba(255, 255, 255, 0.9)' : 'rgba(255, 255, 255, 0.12)');
  document.documentElement.style.setProperty('--admin-sidebar-border', sidebarIsLight ? 'rgba(15, 23, 42, 0.14)' : 'rgba(148, 163, 184, 0.28)');
  document.documentElement.dataset.adminTheme = resolvedTheme;
  document.documentElement.dataset.adminDensity = getAdminQuickOptions().compactTables ? 'compact' : appearance.density;
};
