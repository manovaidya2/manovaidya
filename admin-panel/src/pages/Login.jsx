import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Eye, EyeOff, Lock, ShieldCheck, User } from 'lucide-react';
import Logo from '../assets/manovaidya-logo (2).png';
import heroImage from '../assets/hero.png';
import { applyAdminAppearance, getAdminCredentials } from '../utils/adminSettings';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem('token');
    applyAdminAppearance();
  }, []);

  const handleLogin = (event) => {
    event.preventDefault();
    setError('');
    setLoading(true);

    window.setTimeout(() => {
      const savedCredentials = getAdminCredentials();
      if (username.trim() === savedCredentials.username && password === savedCredentials.password) {
        localStorage.removeItem('token');
        sessionStorage.setItem('token', 'admin-token');
        navigate('/', { replace: true });
      } else {
        setError('Invalid username or password');
        setLoading(false);
      }
    }, 500);
  };

  return (
    <main className="min-h-screen bg-[#eef7f5] p-3 text-slate-900 md:p-5">
      <section className="mx-auto grid min-h-[calc(100vh-24px)] max-w-6xl overflow-hidden rounded-[28px] border border-teal-100 bg-white shadow-[0_24px_80px_rgba(15,23,42,0.12)] md:min-h-[calc(100vh-40px)] lg:grid-cols-[1.08fr_0.92fr]">
        <div className="relative hidden overflow-hidden bg-[#0F766E] lg:block">
          <img
            src={heroImage}
            alt="Manovaidya care"
            className="absolute inset-0 h-full w-full object-cover opacity-78"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0F766E]/88 via-[#115E59]/70 to-slate-950/62" />
          <div className="relative z-10 flex h-full flex-col justify-between p-10 text-white">
            <div className="inline-flex w-fit items-center gap-2 rounded-full bg-white/14 px-4 py-2 text-xs font-bold backdrop-blur">
              <ShieldCheck className="h-4 w-4" />
              Secure Admin Portal
            </div>

            <div>
              <h1 className="max-w-xl text-4xl font-black leading-tight">
                Manage Manovaidya content with clarity and control.
              </h1>
              <p className="mt-4 max-w-md text-sm font-medium leading-6 text-white/82">
                Access blog publishing, SEO reviews, appointment workflows and admin tools from one focused dashboard.
              </p>
            </div>

            <div className="grid gap-3 text-sm">
              {['Private session access', 'Blog and SEO management', 'Appointment notifications'].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl bg-white/12 px-4 py-3 backdrop-blur">
                  <span className="h-2 w-2 rounded-full bg-teal-200" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center px-5 py-10 sm:px-8 lg:px-12">
          <div className="w-full max-w-md">
            <div className="mb-9">
              <div className="mb-7 inline-flex rounded-2xl border border-slate-100 bg-white px-5 py-3 shadow-sm">
                <img src={Logo} alt="Manovaidya Logo" className="h-12 w-auto object-contain" />
              </div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#0F766E]">Welcome back</p>
              <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-950">Sign in to Admin</h2>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                Login is required for every new browser session.
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-5">
              {error && (
                <div className="rounded-2xl border border-red-100 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
                  {error}
                </div>
              )}

              <label className="block">
                <span className="mb-2 block text-sm font-bold text-slate-700">Username</span>
                <span className="relative block">
                  <User className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                    placeholder="Enter username"
                    className="h-13 w-full rounded-2xl border border-slate-200 bg-slate-50 pl-12 pr-4 text-sm font-semibold text-slate-900 outline-none transition focus:border-[#0F766E] focus:bg-white focus:ring-4 focus:ring-teal-100"
                    required
                    autoComplete="username"
                  />
                </span>
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-bold text-slate-700">Password</span>
                <span className="relative block">
                  <Lock className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    placeholder="Enter password"
                    className="h-13 w-full rounded-2xl border border-slate-200 bg-slate-50 pl-12 pr-12 text-sm font-semibold text-slate-900 outline-none transition focus:border-[#0F766E] focus:bg-white focus:ring-4 focus:ring-teal-100"
                    required
                    autoComplete="current-password"
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

              <button
                type="submit"
                disabled={loading}
                className="inline-flex h-13 w-full items-center justify-center gap-2 rounded-2xl bg-[#0F766E] px-5 text-sm font-black text-white shadow-lg shadow-teal-900/14 transition hover:bg-[#0B5F59] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {loading ? 'Signing in...' : 'Sign In'}
                {!loading && <ArrowRight className="h-4.5 w-4.5" />}
              </button>
            </form>

            <p className="mt-8 text-center text-xs font-semibold text-slate-400">
              Secure Manovaidya Admin Access &copy; {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
