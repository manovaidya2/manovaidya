import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
  BarChart3,
  Check,
  CheckCircle2,
  ChevronRight,
  Edit3,
  Eye,
  EyeOff,
  KeyRound,
  Monitor,
  Moon,
  Paintbrush,
  RotateCcw,
  Save,
  Send,
  Settings as SettingsIcon,
  ShieldCheck,
  Sun,
  UserRound,
  X,
} from 'lucide-react';
import {
  DEFAULT_ADMIN_APPEARANCE,
  DEFAULT_ADMIN_CREDENTIALS,
  DEFAULT_ADMIN_QUICK_OPTIONS,
  getAdminAppearance,
  getAdminCredentials,
  getAdminQuickOptions,
  saveAdminAppearance,
  saveAdminCredentials,
  saveAdminQuickOptions,
} from '../utils/adminSettings';

const accentOptions = [
  { label: 'Teal', value: '#0F766E' },
  { label: 'Violet', value: '#8b43ba' },
  { label: 'Blue', value: '#2563eb' },
  { label: 'Emerald', value: '#059669' },
  { label: 'Slate', value: '#334155' },
];

const sidebarColorOptions = [
  { label: 'Dark Slate', value: '#111827' },
  { label: 'Deep Teal', value: '#0F3F3A' },
  { label: 'Navy', value: '#172554' },
  { label: 'Charcoal', value: '#1F2937' },
  { label: 'Light Mint', value: '#eef7f5' },
];

const themeOptions = [
  { id: 'light', label: 'White', Icon: Sun },
  { id: 'dark', label: 'Dark', Icon: Moon },
  { id: 'system', label: 'System', Icon: Monitor },
];

const chartStyles = [
  ['smooth', 'Smooth'],
  ['sharp', 'Sharp'],
  ['compact', 'Compact'],
];

const chartPalettes = [
  ['clinical', ['#0F766E', '#2563EB', '#8B5CF6']],
  ['warm', ['#D97706', '#DC2626', '#EA580C']],
  ['cool', ['#0891B2', '#4F46E5', '#9333EA']],
];

const ToggleRow = ({ label, description, checked, onChange }) => (
  <label className="flex items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">
    <span>
      <span className="block text-sm font-black text-slate-800">{label}</span>
      <span className="mt-1 block text-xs leading-5 text-slate-500">{description}</span>
    </span>
    <input type="checkbox" checked={checked} onChange={(event) => onChange(event.target.checked)} className="h-5 w-5 accent-primary" />
  </label>
);

const SettingsTile = ({ icon: Icon, title, subtitle, meta, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className="group flex min-h-[152px] flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 text-left shadow-sm transition hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md"
  >
    <span className="flex items-start justify-between gap-4">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
        <Icon className="h-5 w-5" />
      </span>
      <ChevronRight className="h-5 w-5 text-slate-300 transition group-hover:translate-x-0.5 group-hover:text-primary" />
    </span>
    <span>
      <span className="block text-base font-black text-slate-900">{title}</span>
      <span className="mt-1 block text-sm leading-5 text-slate-500">{subtitle}</span>
      <span className="mt-3 inline-flex rounded-full bg-slate-100 px-3 py-1 text-[11px] font-black text-slate-600">{meta}</span>
    </span>
  </button>
);

const EditableSettingField = ({
  id,
  label,
  description,
  value,
  placeholder,
  type = 'text',
  multiline = false,
  activeEdit,
  setActiveEdit,
  onChange,
  onSaved,
  masked = false,
}) => {
  const isEditing = activeEdit === id;
  const displayValue = masked && value ? '••••••••••••' : value || placeholder || 'Not set';

  const saveField = () => {
    setActiveEdit('');
    onSaved?.(`${label} saved successfully.`);
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
      <div className="mb-3 flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-black text-slate-800">{label}</p>
          {description ? <p className="mt-1 text-xs font-semibold leading-5 text-slate-500">{description}</p> : null}
        </div>
        <button
          type="button"
          onClick={() => (isEditing ? saveField() : setActiveEdit(id))}
          className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl transition ${
            isEditing ? 'bg-primary text-white shadow-sm' : 'bg-white text-slate-500 hover:text-primary'
          }`}
          aria-label={isEditing ? `Save ${label}` : `Edit ${label}`}
          title={isEditing ? `Save ${label}` : `Edit ${label}`}
        >
          {isEditing ? <Check className="h-4 w-4" /> : <Edit3 className="h-4 w-4" />}
        </button>
      </div>

      {multiline ? (
        <textarea
          value={value || ''}
          onChange={(event) => onChange(event.target.value)}
          disabled={!isEditing}
          rows={4}
          placeholder={placeholder}
          className={`w-full rounded-2xl border px-4 py-3 text-sm font-semibold outline-none transition ${
            isEditing
              ? 'border-slate-200 bg-white text-slate-900 focus:border-primary focus:ring-4 focus:ring-primary/10'
              : 'cursor-not-allowed border-transparent bg-white/70 text-slate-600'
          }`}
        />
      ) : (
        <input
          type={isEditing ? type : 'text'}
          value={isEditing ? value || '' : displayValue}
          onChange={(event) => onChange(event.target.value)}
          disabled={!isEditing}
          placeholder={placeholder}
          className={`h-12 w-full rounded-2xl border px-4 text-sm font-semibold outline-none transition ${
            isEditing
              ? 'border-slate-200 bg-white text-slate-900 focus:border-primary focus:ring-4 focus:ring-primary/10'
              : 'cursor-not-allowed border-transparent bg-white/70 text-slate-700'
          }`}
        />
      )}
    </div>
  );
};

const Drawer = ({ open, title, subtitle, icon: Icon, onClose, children }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[90] flex items-center justify-center bg-slate-950/45 p-4 backdrop-blur-sm">
      <button type="button" aria-label="Close settings drawer" className="absolute inset-0 cursor-default" onClick={onClose} />
      <aside className="relative flex max-h-[90vh] w-full max-w-2xl flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl">
        <div className="flex items-start justify-between gap-4 border-b border-slate-200 p-5">
          <div className="flex items-start gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Icon className="h-5 w-5" />
            </span>
            <div>
              <h2 className="text-lg font-black text-slate-950">{title}</h2>
              <p className="mt-1 text-sm leading-5 text-slate-500">{subtitle}</p>
            </div>
          </div>
          <button type="button" onClick={onClose} className="rounded-xl p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-800">
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-5">{children}</div>
      </aside>
    </div>
  );
};

export default function Settings() {
  const [appearance, setAppearance] = useState(() => getAdminAppearance());
  const [credentials, setCredentials] = useState(() => getAdminCredentials());
  const [quickOptions, setQuickOptions] = useState(() => getAdminQuickOptions());
  const [activePanel, setActivePanel] = useState('');
  const [activeEditField, setActiveEditField] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [notice, setNotice] = useState('');
  const noticeTimer = useRef(null);

  const currentAccent = useMemo(
    () => accentOptions.find((item) => item.value === appearance.accentColor)?.label || 'Custom',
    [appearance.accentColor]
  );

  const currentSidebarColor = useMemo(
    () => sidebarColorOptions.find((item) => item.value === appearance.sidebarColor)?.label || 'Custom',
    [appearance.sidebarColor]
  );

  useEffect(() => {
    saveAdminAppearance(appearance);
  }, [appearance]);

  useEffect(() => {
    saveAdminQuickOptions(quickOptions);
  }, [quickOptions]);

  const showSavedNotice = (message) => {
    window.clearTimeout(noticeTimer.current);
    setNotice(message);
    noticeTimer.current = window.setTimeout(() => setNotice(''), 2400);
  };

  const handleCredentialSave = (event) => {
    event.preventDefault();
    saveAdminCredentials(credentials);
    showSavedNotice('Login credentials updated.');
  };

  const resetAppearance = () => {
    setAppearance(DEFAULT_ADMIN_APPEARANCE);
    showSavedNotice('Appearance reset.');
  };

  const resetCredentials = () => {
    setCredentials(DEFAULT_ADMIN_CREDENTIALS);
    saveAdminCredentials(DEFAULT_ADMIN_CREDENTIALS);
    showSavedNotice('Login credentials reset.');
  };

  const resetWorkspace = () => {
    setQuickOptions(DEFAULT_ADMIN_QUICK_OPTIONS);
    saveAdminQuickOptions(DEFAULT_ADMIN_QUICK_OPTIONS);
    showSavedNotice('Workspace settings reset.');
  };

  const resetCharts = () => {
    setQuickOptions((current) => ({
      ...current,
      analyticsChartStyle: DEFAULT_ADMIN_QUICK_OPTIONS.analyticsChartStyle,
      analyticsPalette: DEFAULT_ADMIN_QUICK_OPTIONS.analyticsPalette,
    }));
    showSavedNotice('Chart settings reset.');
  };

  const resetKraya = () => {
    setQuickOptions((current) => ({
      ...current,
      krayaWebhookUrl: DEFAULT_ADMIN_QUICK_OPTIONS.krayaWebhookUrl,
      krayaStage: DEFAULT_ADMIN_QUICK_OPTIONS.krayaStage,
      krayaPipeline: DEFAULT_ADMIN_QUICK_OPTIONS.krayaPipeline,
      krayaApiKey: DEFAULT_ADMIN_QUICK_OPTIONS.krayaApiKey,
      krayaSource: DEFAULT_ADMIN_QUICK_OPTIONS.krayaSource,
      krayaNotes: DEFAULT_ADMIN_QUICK_OPTIONS.krayaNotes,
      krayaEnableSequence: DEFAULT_ADMIN_QUICK_OPTIONS.krayaEnableSequence,
      krayaSequence: DEFAULT_ADMIN_QUICK_OPTIONS.krayaSequence,
    }));
    showSavedNotice('Kraya settings reset.');
  };

  const tiles = [
    {
      id: 'appearance',
      icon: Paintbrush,
      title: 'Appearance',
      subtitle: 'Theme, accent, sidebar color and density.',
      meta: `${appearance.theme} / ${currentAccent}`,
    },
    {
      id: 'workspace',
      icon: ShieldCheck,
      title: 'Workspace',
      subtitle: 'Alerts, compact tables, SEO hints and sidebar state.',
      meta: quickOptions.sidebarCollapsed ? 'Collapsed sidebar' : 'Expanded sidebar',
    },
    {
      id: 'charts',
      icon: BarChart3,
      title: 'Analytics Charts',
      subtitle: 'Graph style and analytics palette.',
      meta: `${quickOptions.analyticsChartStyle} / ${quickOptions.analyticsPalette}`,
    },
    {
      id: 'kraya',
      icon: Send,
      title: 'Kraya CRM',
      subtitle: 'Webhook, API key, stage, pipeline, notes and sequence defaults.',
      meta: `${quickOptions.krayaStage || 'New Lead'} / ${quickOptions.krayaPipeline || 'Leads'}`,
    },
    {
      id: 'login',
      icon: KeyRound,
      title: 'Login Credentials',
      subtitle: 'Username and password used by the admin login page.',
      meta: credentials.username,
    },
    {
      id: 'status',
      icon: Monitor,
      title: 'Current Status',
      subtitle: 'Quick overview of saved admin configuration.',
      meta: currentSidebarColor,
    },
  ];

  return (
    <div className="mx-auto w-full max-w-none p-3 md:p-5 lg:p-6">
      {notice ? (
        <div className="fixed right-5 top-5 z-[120] inline-flex items-center gap-2 rounded-2xl border border-emerald-100 bg-emerald-50 px-4 py-3 text-sm font-black text-emerald-700 shadow-lg shadow-emerald-900/10">
          <CheckCircle2 className="h-4 w-4" />
          {notice}
        </div>
      ) : null}

      <div className="mb-6 flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:flex-row md:items-center md:justify-between">
        <div className="flex items-start gap-4">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary text-white shadow-md shadow-slate-200">
            <SettingsIcon className="h-6 w-6" />
          </span>
          <div>
            <h1 className="text-2xl font-black tracking-tight text-slate-950">Settings</h1>
            <p className="mt-1 text-sm leading-6 text-slate-500">Choose a setting tile, then update it from the side panel.</p>
          </div>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 2xl:grid-cols-3">
        {tiles.map((tile) => (
          <SettingsTile key={tile.id} {...tile} onClick={() => setActivePanel(tile.id)} />
        ))}
      </div>

      <Drawer
        open={activePanel === 'appearance'}
        title="Appearance"
        subtitle="Theme, colors and layout density"
        icon={Paintbrush}
        onClose={() => setActivePanel('')}
      >
        <div className="space-y-6">
          <section>
            <p className="mb-3 text-sm font-black text-slate-800">Theme</p>
            <div className="grid gap-3 sm:grid-cols-3">
              {themeOptions.map(({ id, label, Icon }) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => setAppearance((current) => ({ ...current, theme: id }))}
                  className={`flex items-center gap-3 rounded-2xl border p-4 text-left transition ${
                    appearance.theme === id
                      ? 'border-primary bg-primary/10 text-primary ring-2 ring-primary/15'
                      : 'border-slate-200 bg-slate-50 text-slate-600 hover:bg-white'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span className="text-sm font-black">{label}</span>
                </button>
              ))}
            </div>
          </section>

          <section>
            <p className="mb-3 text-sm font-black text-slate-800">Accent color: {currentAccent}</p>
            <div className="flex flex-wrap gap-3">
              {accentOptions.map((item) => (
                <button
                  key={item.value}
                  type="button"
                  onClick={() => setAppearance((current) => ({ ...current, accentColor: item.value }))}
                  className={`flex h-11 items-center gap-2 rounded-xl border px-3 text-xs font-black transition ${
                    appearance.accentColor === item.value
                      ? 'border-slate-900 bg-white text-slate-900 ring-2 ring-slate-900/10'
                      : 'border-slate-200 bg-slate-50 text-slate-600 hover:bg-white'
                  }`}
                >
                  <span className="h-5 w-5 rounded-full" style={{ backgroundColor: item.value }} />
                  {item.label}
                </button>
              ))}
              <label className="flex h-11 items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 text-xs font-black text-slate-600">
                Custom
                <input
                  type="color"
                  value={appearance.accentColor}
                  onChange={(event) => setAppearance((current) => ({ ...current, accentColor: event.target.value }))}
                  className="h-6 w-8 cursor-pointer border-0 bg-transparent p-0"
                />
              </label>
            </div>
          </section>

          <section>
            <p className="mb-3 text-sm font-black text-slate-800">Sidebar color: {currentSidebarColor}</p>
            <div className="flex flex-wrap gap-3">
              {sidebarColorOptions.map((item) => (
                <button
                  key={item.value}
                  type="button"
                  onClick={() => setAppearance((current) => ({ ...current, sidebarColor: item.value }))}
                  className={`flex h-11 items-center gap-2 rounded-xl border px-3 text-xs font-black transition ${
                    appearance.sidebarColor === item.value
                      ? 'border-slate-900 bg-white text-slate-900 ring-2 ring-slate-900/10'
                      : 'border-slate-200 bg-slate-50 text-slate-600 hover:bg-white'
                  }`}
                >
                  <span className="h-5 w-5 rounded-full border border-white/50 shadow-sm" style={{ backgroundColor: item.value }} />
                  {item.label}
                </button>
              ))}
              <label className="flex h-11 items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 text-xs font-black text-slate-600">
                Custom
                <input
                  type="color"
                  value={appearance.sidebarColor || DEFAULT_ADMIN_APPEARANCE.sidebarColor}
                  onChange={(event) => setAppearance((current) => ({ ...current, sidebarColor: event.target.value }))}
                  className="h-6 w-8 cursor-pointer border-0 bg-transparent p-0"
                />
              </label>
            </div>
          </section>

          <section>
            <p className="mb-3 text-sm font-black text-slate-800">Layout density</p>
            <div className="inline-flex rounded-xl border border-slate-200 bg-slate-100 p-1">
              {['comfortable', 'compact'].map((density) => (
                <button
                  key={density}
                  type="button"
                  onClick={() => setAppearance((current) => ({ ...current, density }))}
                  className={`rounded-lg px-4 py-2 text-xs font-black capitalize transition ${
                    appearance.density === density ? 'bg-white text-primary shadow-sm' : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  {density}
                </button>
              ))}
            </div>
          </section>

          <button
            type="button"
            onClick={resetAppearance}
            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-700 transition hover:border-primary hover:text-primary"
          >
            <RotateCcw className="h-4 w-4" />
            Reset appearance
          </button>
        </div>
      </Drawer>

      <Drawer
        open={activePanel === 'workspace'}
        title="Workspace"
        subtitle="Common admin options"
        icon={ShieldCheck}
        onClose={() => setActivePanel('')}
      >
        <div className="space-y-3">
          {[
            ['appointmentAlerts', 'Appointment alerts', 'Show appointment notification reminders in the top bar.'],
            ['compactTables', 'Compact tables', 'Use denser table rows for high-volume work.'],
            ['seoHints', 'SEO helper hints', 'Keep SEO helper panels visible in blog management.'],
            ['sidebarCollapsed', 'Collapsed sidebar by default', 'Keep the desktop sidebar compact after refresh.'],
          ].map(([key, label, description]) => (
            <ToggleRow
              key={key}
              label={label}
              description={description}
              checked={Boolean(quickOptions[key])}
              onChange={(checked) => setQuickOptions((current) => ({ ...current, [key]: checked }))}
            />
          ))}
          <button
            type="button"
            onClick={resetWorkspace}
            className="mt-3 inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-700 transition hover:border-primary hover:text-primary"
          >
            <RotateCcw className="h-4 w-4" />
            Reset workspace
          </button>
        </div>
      </Drawer>

      <Drawer
        open={activePanel === 'charts'}
        title="Analytics Charts"
        subtitle="Graph style and analytics palette"
        icon={BarChart3}
        onClose={() => setActivePanel('')}
      >
        <div className="space-y-6">
          <section>
            <p className="mb-3 text-sm font-black text-slate-800">Chart style</p>
            <div className="grid gap-3 sm:grid-cols-3">
              {chartStyles.map(([value, label]) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => setQuickOptions((current) => ({ ...current, analyticsChartStyle: value }))}
                  className={`rounded-2xl border p-4 text-left text-sm font-black transition ${
                    quickOptions.analyticsChartStyle === value
                      ? 'border-primary bg-primary/10 text-primary ring-2 ring-primary/15'
                      : 'border-slate-200 bg-slate-50 text-slate-600 hover:bg-white'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </section>

          <section>
            <p className="mb-3 text-sm font-black text-slate-800">Graph palette</p>
            <div className="grid gap-3 sm:grid-cols-3">
              {chartPalettes.map(([value, colors]) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => setQuickOptions((current) => ({ ...current, analyticsPalette: value }))}
                  className={`rounded-2xl border p-4 text-left transition ${
                    quickOptions.analyticsPalette === value
                      ? 'border-primary bg-primary/10 ring-2 ring-primary/15'
                      : 'border-slate-200 bg-slate-50 hover:bg-white'
                  }`}
                >
                  <span className="block text-sm font-black capitalize text-slate-900">{value}</span>
                  <span className="mt-3 flex gap-1.5">
                    {colors.map((color) => (
                      <span key={color} className="h-5 flex-1 rounded-full" style={{ backgroundColor: color }} />
                    ))}
                  </span>
                </button>
              ))}
            </div>
          </section>

          <button
            type="button"
            onClick={resetCharts}
            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-700 transition hover:border-primary hover:text-primary"
          >
            <RotateCcw className="h-4 w-4" />
            Reset charts
          </button>
        </div>
      </Drawer>

      <Drawer
        open={activePanel === 'kraya'}
        title="Kraya CRM"
        subtitle="Edit webhook, API key and lead defaults used while sending appointments"
        icon={Send}
        onClose={() => {
          setActiveEditField('');
          setActivePanel('');
        }}
      >
        <div className="space-y-5">
          <div className="rounded-2xl border border-primary/15 bg-primary/5 p-4">
            <p className="text-sm font-black text-slate-900">Kraya send defaults</p>
            <p className="mt-1 text-xs font-semibold leading-5 text-slate-500">
              Har field locked hai. Pencil icon se edit karo, check icon se save confirm karo. Appointments ka Send to Kraya popup inhi saved values ko use karega.
            </p>
          </div>

          <EditableSettingField
            id="krayaWebhookUrl"
            label="Webhook URL"
            description="Kraya lead upsert endpoint. Isko change karoge to next send isi URL par jayega."
            value={quickOptions.krayaWebhookUrl || ''}
            placeholder={DEFAULT_ADMIN_QUICK_OPTIONS.krayaWebhookUrl}
            activeEdit={activeEditField}
            setActiveEdit={setActiveEditField}
            onChange={(value) => setQuickOptions((current) => ({ ...current, krayaWebhookUrl: value }))}
            onSaved={showSavedNotice}
          />

          <div className="grid gap-4 md:grid-cols-2">
            <EditableSettingField
              id="krayaApiKey"
              label="API key"
              description="Settings key send request me jayegi. Empty ho to backend .env fallback use hoga."
              value={quickOptions.krayaApiKey || ''}
              placeholder="Paste Kraya API key"
              type="password"
              masked
              activeEdit={activeEditField}
              setActiveEdit={setActiveEditField}
              onChange={(value) => setQuickOptions((current) => ({ ...current, krayaApiKey: value }))}
              onSaved={showSavedNotice}
            />

            <EditableSettingField
              id="krayaStage"
              label="Default stage"
              description="Kraya CRM me lead jis stage me jayegi."
              value={quickOptions.krayaStage || ''}
              placeholder="New Lead"
              activeEdit={activeEditField}
              setActiveEdit={setActiveEditField}
              onChange={(value) => setQuickOptions((current) => ({ ...current, krayaStage: value }))}
              onSaved={showSavedNotice}
            />

            <EditableSettingField
              id="krayaPipeline"
              label="Default pipeline"
              description="Kraya pipeline name."
              value={quickOptions.krayaPipeline || ''}
              placeholder="Leads"
              activeEdit={activeEditField}
              setActiveEdit={setActiveEditField}
              onChange={(value) => setQuickOptions((current) => ({ ...current, krayaPipeline: value }))}
              onSaved={showSavedNotice}
            />

            <EditableSettingField
              id="krayaSource"
              label="Source label"
              description="Lead ke custom source field me yeh value jayegi."
              value={quickOptions.krayaSource || ''}
              placeholder="Manovaidya admin appointments"
              activeEdit={activeEditField}
              setActiveEdit={setActiveEditField}
              onChange={(value) => setQuickOptions((current) => ({ ...current, krayaSource: value }))}
              onSaved={showSavedNotice}
            />
          </div>

          <EditableSettingField
            id="krayaNotes"
            label="Default extra notes"
            description="Har selected appointment lead ke notes me add hoga."
            value={quickOptions.krayaNotes || ''}
            placeholder="Optional notes added to every selected Kraya lead"
            multiline
            activeEdit={activeEditField}
            setActiveEdit={setActiveEditField}
            onChange={(value) => setQuickOptions((current) => ({ ...current, krayaNotes: value }))}
            onSaved={showSavedNotice}
          />

          <ToggleRow
            label="Send sequence"
            description="Keep this off unless the sequence exists in Kraya."
            checked={Boolean(quickOptions.krayaEnableSequence)}
            onChange={(checked) => setQuickOptions((current) => ({ ...current, krayaEnableSequence: checked }))}
          />

          {quickOptions.krayaEnableSequence ? (
            <EditableSettingField
              id="krayaSequence"
              label="Default sequence"
              description="Kraya me exact same naam se sequence exist hona chahiye."
              value={quickOptions.krayaSequence || ''}
              placeholder="Sequence name exactly as in Kraya"
              activeEdit={activeEditField}
              setActiveEdit={setActiveEditField}
              onChange={(value) => setQuickOptions((current) => ({ ...current, krayaSequence: value }))}
              onSaved={showSavedNotice}
            />
          ) : null}

          <div className="grid gap-3 rounded-2xl border border-slate-200 bg-white p-4 text-sm md:grid-cols-2">
            <div>
              <p className="font-black text-slate-800">Current webhook</p>
              <p className="mt-1 break-all text-xs font-semibold leading-5 text-slate-500">
                {quickOptions.krayaWebhookUrl || DEFAULT_ADMIN_QUICK_OPTIONS.krayaWebhookUrl}
              </p>
            </div>
            <div>
              <p className="font-black text-slate-800">Payload fields</p>
              <p className="mt-1 text-xs font-semibold leading-5 text-slate-500">
                name, phone, email, stage, pipeline, notes, source, mode, date, time, status
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={resetKraya}
            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-700 transition hover:border-primary hover:text-primary"
          >
            <RotateCcw className="h-4 w-4" />
            Reset Kraya
          </button>
        </div>
      </Drawer>

      <Drawer
        open={activePanel === 'login'}
        title="Login Credentials"
        subtitle="Admin username and password"
        icon={KeyRound}
        onClose={() => setActivePanel('')}
      >
        <form onSubmit={handleCredentialSave} className="space-y-4">
          <label className="block">
            <span className="mb-2 block text-sm font-bold text-slate-700">Username</span>
            <span className="relative block">
              <UserRound className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={credentials.username}
                onChange={(event) => setCredentials((current) => ({ ...current, username: event.target.value }))}
                className="h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 pl-12 pr-4 text-sm font-semibold text-slate-900 outline-none transition focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10"
                required
              />
            </span>
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-bold text-slate-700">Password</span>
            <span className="relative block">
              <KeyRound className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
              <input
                type={showPassword ? 'text' : 'password'}
                value={credentials.password}
                onChange={(event) => setCredentials((current) => ({ ...current, password: event.target.value }))}
                className="h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 pl-12 pr-12 text-sm font-semibold text-slate-900 outline-none transition focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword((value) => !value)}
                className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-xl text-slate-400 transition hover:bg-white hover:text-slate-700"
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? <EyeOff className="h-4.5 w-4.5" /> : <Eye className="h-4.5 w-4.5" />}
              </button>
            </span>
          </label>

          <div className="rounded-2xl border border-amber-100 bg-amber-50 p-4 text-xs font-semibold leading-5 text-amber-800">
            Password yahi se visible/editable hai. Save ke baad next login me updated password use hoga.
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-black text-white shadow-sm transition hover:bg-primary/90"
            >
              <Save className="h-4 w-4" />
              Save credentials
            </button>
            <button
              type="button"
              onClick={resetCredentials}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-bold text-slate-700 transition hover:border-primary hover:text-primary"
            >
              <RotateCcw className="h-4 w-4" />
              Reset default
            </button>
          </div>
        </form>
      </Drawer>

      <Drawer
        open={activePanel === 'status'}
        title="Current Status"
        subtitle="Saved admin configuration"
        icon={Monitor}
        onClose={() => setActivePanel('')}
      >
        <div className="space-y-3 text-sm">
          {[
            ['Theme', appearance.theme],
            ['Accent', appearance.accentColor],
            ['Sidebar color', appearance.sidebarColor || DEFAULT_ADMIN_APPEARANCE.sidebarColor],
            ['Login user', credentials.username],
            ['Alerts', quickOptions.appointmentAlerts ? 'On' : 'Off'],
            ['Sidebar', quickOptions.sidebarCollapsed ? 'Collapsed' : 'Expanded'],
            ['Chart style', quickOptions.analyticsChartStyle],
            ['Graph palette', quickOptions.analyticsPalette],
            ['Kraya webhook', quickOptions.krayaWebhookUrl || DEFAULT_ADMIN_QUICK_OPTIONS.krayaWebhookUrl],
            ['Kraya stage', quickOptions.krayaStage || DEFAULT_ADMIN_QUICK_OPTIONS.krayaStage],
            ['Kraya pipeline', quickOptions.krayaPipeline || DEFAULT_ADMIN_QUICK_OPTIONS.krayaPipeline],
            ['Kraya sequence', quickOptions.krayaEnableSequence ? (quickOptions.krayaSequence || 'Enabled') : 'Off'],
          ].map(([label, value]) => (
            <div key={label} className="flex items-center justify-between gap-4 rounded-xl bg-slate-50 px-4 py-3">
              <span className="font-bold text-slate-600">{label}</span>
              <span className="font-black capitalize text-slate-900">{value}</span>
            </div>
          ))}
        </div>
      </Drawer>
    </div>
  );
}
