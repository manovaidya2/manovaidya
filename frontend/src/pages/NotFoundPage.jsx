import React from 'react';
import { useLocation } from 'react-router-dom';
import Seo from '../components/Seo';
import { usePrerenderData } from '../prerenderData';

export default function NotFoundPage() {
  const location = useLocation();
  const data = usePrerenderData();
  React.useEffect(() => {
    // A client-side route cannot change an existing document's HTTP status.
    // Request the missing URL from the server to obtain its actual 404 response.
    if (location.key !== 'default' && data.notFoundPath !== location.pathname) {
      window.location.replace(window.location.href);
    }
  }, [location.key, location.pathname, data.notFoundPath]);
  return (
    <main className="flex min-h-[65vh] flex-col items-center justify-center bg-[#fbfaff] px-5 py-20 text-center">
      <Seo title="404 — Page Not Found | Manovaidya" description="Sorry, the page you are looking for does not exist or has been moved." path="/404/" noindex />
      <p className="text-7xl font-black text-[#8B43BA] sm:text-8xl">404</p>
      <h1 className="mt-5 text-3xl font-black text-slate-900 sm:text-4xl">Page Not Found</h1>
      <p className="mt-4 max-w-lg text-base leading-7 text-slate-600">Sorry, the page you are looking for does not exist or has been moved.</p>
      <a href="/" className="mt-8 inline-flex rounded-xl bg-[#8B43BA] px-6 py-3 font-bold text-white">Back to Home</a>
    </main>
  );
}
