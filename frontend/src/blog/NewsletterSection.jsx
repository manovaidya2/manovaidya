import React from 'react';
import { Mail } from 'lucide-react';

function NewsletterSection() {
  return (
    <section className="bg-[#fbfaff] py-14 px-4 sm:px-6 lg:px-8 border-y border-violet-100">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          
          <div className="flex flex-1 items-start gap-6 lg:items-center">
            <div className="flex h-[84px] w-[84px] shrink-0 items-center justify-center rounded-2xl bg-violet-100/50 shadow-sm">
              <Mail className="h-10 w-10 text-[#8b43ba]" strokeWidth={1.75} />
            </div>
            
            <div className="flex flex-col justify-center">
              <h2 className="text-[22px] font-bold leading-tight text-black sm:text-[26px]">
                Stay Updated with Insights <br className="hidden sm:block" />
                That Matter
              </h2>
              <p className="mt-2 text-[14.5px] leading-relaxed text-slate-700 max-w-md font-medium">
                Subscribe to our newsletter and get expert articles,
                tips and updates delivered to your inbox.
              </p>
            </div>
          </div>

          <div className="w-full lg:max-w-md">
            <form className="flex w-full items-center gap-2 rounded-lg border border-violet-200 bg-white p-1.5 shadow-sm focus-within:border-[#8b43ba] focus-within:ring-1 focus-within:ring-[#8b43ba]">
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full border-0 bg-transparent px-4 py-2 text-[15px] text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-0"
                required
              />
              <button
                type="submit"
                className="shrink-0 rounded-md bg-[#8b43ba] px-6 py-2.5 text-[15px] font-semibold text-white shadow-[0_4px_10px_rgba(139,67,186,0.2)] transition hover:bg-[#7835a4] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8b43ba]"
              >
                Subscribe
              </button>
            </form>
            <p className="mt-3 pl-1 text-[13px] font-medium text-slate-600">
              We respect your privacy. Unsubscribe anytime.
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
}

export default NewsletterSection;
