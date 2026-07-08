import React, { useMemo } from "react";
import {
  ArrowUpRight,
  BadgeCheck,
  ExternalLink,
  Globe2,
  Newspaper,
  Sparkles,
} from "lucide-react";
import Seo from "../components/Seo";
import heroImage from "../images/media-pr-hero.png";

const articleTitle =
  "How Dr. Ankush Garg is Redefining Autism Care in India Through Ayurveda";

const mediaLinks = [
  {
    name: "DailyHunt",
    url: "http://m.dailyhunt.in/news/india/english/r+news+india-epaper-dhfacc36dfce9c4bb68db0e89d033c921b/how+dr+ankush+garg+is+redefining+autism+care+in+india+through+ayurveda-newsid-dhfacc36dfce9c4bb68db0e89d033c921b_41ad9760abf811f0bf6f3a0cab15bd8f?sm=Y",
  },
  {
    name: "Republic News India",
    url: "https://republicnewsindia.com/how-dr-ankush-garg-is-redefining-autism-care-in-india-through-ayurveda/",
  },
  {
    name: "Flipboard",
    url: "https://flipboard.com/@republicnewsind/-how-dr-ankush-garg-is-redefining-autism-care-in-india-through-ayurveda/a-i80hUB8RRhGSXe5ySX5QOA%3Aa%3A3544623556-0097b8ce16%2Frepublicnewsindia.com",
  },
  {
    name: "The Indian Bulletin",
    url: "https://theindianbulletin.com/how-dr-ankush-garg-is-redefining-autism-care-in-india-through-ayurveda/",
  },
  {
    name: "RD Times",
    url: "https://rdtimes.in/how-dr-ankush-garg-is-redefining-autism-care-in-india-through-ayurveda/",
  },
  {
    name: "Abhyuday Times",
    url: "https://abhyudaytimes.com/how-dr-ankush-garg-is-redefining-autism-care-in-india-through-ayurveda/",
  },
  {
    name: "Hindustan Saga",
    url: "https://hindustansaga.com/how-dr-ankush-garg-is-redefining-autism-care-in-india-through-ayurveda/",
  },
  {
    name: "Let India Shine",
    url: "https://letindiashine.com/how-dr-ankush-garg-is-redefining-autism-care-in-india-through-ayurveda/",
  },
  {
    name: "Indian Scoops",
    url: "https://indianscoops.com/how-dr-ankush-garg-is-redefining-autism-care-in-india-through-ayurveda/",
  },
  {
    name: "News Outlook",
    url: "https://news-outlook.com/how-dr-ankush-garg-is-redefining-autism-care-in-india-through-ayurveda/",
  },
  {
    name: "Times Bulletin",
    url: "https://times-bulletin.com/how-dr-ankush-garg-is-redefining-autism-care-in-india-through-ayurveda/",
  },
  {
    name: "Indian Sentinel",
    url: "https://indiansentinel.in/how-dr-ankush-garg-is-redefining-autism-care-in-india-through-ayurveda/",
  },
  {
    name: "National Age",
    url: "https://nationalage.com/how-dr-ankush-garg-is-redefining-autism-care-in-india-through-ayurveda/",
  },
  {
    name: "India Thrive",
    url: "https://indiathrive.com/how-dr-ankush-garg-is-redefining-autism-care-in-india-through-ayurveda/",
  },
  {
    name: "Prevalent India",
    url: "https://prevalentindia.com/how-dr-ankush-garg-is-redefining-autism-care-in-india-through-ayurveda/",
  },
  {
    name: "The Fortune India",
    url: "https://thefortuneindia.com/how-dr-ankush-garg-is-redefining-autism-care-in-india-through-ayurveda/",
  },
  {
    name: "Pioneer News",
    url: "https://pioneernews.co.in/how-dr-ankush-garg-is-redefining-autism-care-in-india-through-ayurveda/",
  },
  {
    name: "India Influencive",
    url: "https://indiainfluencive.com/how-dr-ankush-garg-is-redefining-autism-care-in-india-through-ayurveda/",
  },
  {
    name: "Bharat Herald",
    url: "https://bharatherald.com/how-dr-ankush-garg-is-redefining-autism-care-in-india-through-ayurveda/",
  },
  {
    name: "Youth News Express",
    url: "https://youthnewsexpress.com/how-dr-ankush-garg-is-redefining-autism-care-in-india-through-ayurveda/",
  },
  {
    name: "The Telegraph News",
    url: "https://thetelegraphnews.com/how-dr-ankush-garg-is-redefining-autism-care-in-india-through-ayurveda/",
  },
  {
    name: "News Mint 24",
    url: "https://newsmint24.com/how-dr-ankush-garg-is-redefining-autism-care-in-india-through-ayurveda/",
  },
  {
    name: "Press Journal",
    url: "https://press-journal.com/how-dr-ankush-garg-is-redefining-autism-care-in-india-through-ayurveda/",
  },
  {
    name: "News Head",
    url: "https://newshead.in/how-dr-ankush-garg-is-redefining-autism-care-in-india-through-ayurveda/",
  },
  {
    name: "India News 24",
    url: "https://indianews24.co/how-dr-ankush-garg-is-redefining-autism-care-in-india-through-ayurveda/",
  },
  {
    name: "RKD Live",
    url: "https://rkdlive.com/how-dr-ankush-garg-is-redefining-autism-care-in-india-through-ayurveda/",
  },
  {
    name: "The National Reader",
    url: "https://thenationalreader.com/how-dr-ankush-garg-is-redefining-autism-care-in-india-through-ayurveda/",
  },
  {
    name: "Scroll News",
    url: "https://scrollnews.in/how-dr-ankush-garg-is-redefining-autism-care-in-india-through-ayurveda/",
  },
  {
    name: "Country First",
    url: "https://countryfirst.co.in/how-dr-ankush-garg-is-redefining-autism-care-in-india-through-ayurveda/",
  },
  {
    name: "News Streamline",
    url: "https://newsstreamline.com/how-dr-ankush-garg-is-redefining-autism-care-in-india-through-ayurveda/",
  },
  {
    name: "Metro City News",
    url: "https://metrocitynews.in/how-dr-ankush-garg-is-redefining-autism-care-in-india-through-ayurveda/",
  },
  {
    name: "Gujarat Journal",
    url: "https://gujaratjournal.in/how-dr-ankush-garg-is-redefining-autism-care-in-india-through-ayurveda/",
  },
  {
    name: "My Maharashtra",
    url: "https://mymaharashtra.co.in/how-dr-ankush-garg-is-redefining-autism-care-in-india-through-ayurveda/",
  },
  {
    name: "Telangana Post",
    url: "https://telanganapost.co.in/how-dr-ankush-garg-is-redefining-autism-care-in-india-through-ayurveda/",
  },
  {
    name: "Bharat Mirror",
    url: "https://english.bharatmirror.com/how-dr-ankush-garg-is-redefining-autism-care-in-india-through-ayurveda/",
  },
];

const featuredOutlets = mediaLinks.slice(0, 6);

function getHostname(url) {
  try {
    return new URL(url).hostname.replace(/^m\./, "").replace(/^english\./, "");
  } catch {
    return url;
  }
}

function MediaPRPage() {
  const uniqueDomains = useMemo(
    () => new Set(mediaLinks.map((item) => getHostname(item.url))).size,
    []
  );

  return (
    <main className="bg-[#fbfaff] text-[#251553]">
      <Seo
        title="Manovaidya In The Media | PR & News Coverage | Dr. Ankush Garg"
        description="Explore Manovaidya's media coverage and news features. See how Dr. Ankush Garg is redefining autism and mental health care in India through Neuro-Ayurveda."
        keywords="Manovaidya media coverage, Dr. Ankush Garg news, Neuro-Ayurveda press, autism care news India, mental health clinic PR, Manovaidya features, DailyHunt, Times Bulletin"
        path="/media-coverage"
        schema={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Manovaidya In The Media",
          "description": "Explore Manovaidya's media coverage and news features. See how Dr. Ankush Garg is redefining autism and mental health care in India through Neuro-Ayurveda."
        }}
      />
      <section className="relative overflow-hidden bg-[#f5f0ff]">
        <div className="mx-auto grid max-w-[1500px] items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.04fr_0.96fr] lg:px-10 lg:py-20">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#8b43ba]/20 bg-white px-4 py-2 text-sm font-extrabold text-[#7b36aa] shadow-sm">
              <Newspaper className="h-4 w-4" />
              Media Coverage & PR
            </div>

            <h1 className="mt-6 max-w-4xl text-4xl font-black leading-tight text-[#251553] sm:text-5xl lg:text-6xl">
              Manovaidya in the media spotlight
            </h1>

            <p className="mt-5 max-w-2xl text-base font-semibold leading-8 text-[#5d507e] sm:text-lg">
              A curated press room featuring Dr. Ankush Garg's coverage on
              autism care, Ayurveda, and the Manovaidya approach to mental
              wellbeing.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={mediaLinks[0].url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-[#8b43ba] px-6 text-sm font-black text-white shadow-lg shadow-[#8b43ba]/20 transition hover:-translate-y-0.5 hover:bg-[#74339d]"
              >
                Read Latest Feature
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="#all-coverage"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-[#d9c9ea] bg-white px-6 text-sm font-black text-[#251553] transition hover:border-[#8b43ba] hover:text-[#8b43ba]"
              >
                View All Outlets
                <Globe2 className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="relative">
            <img
              src={heroImage}
              alt="Manovaidya media coverage and autism care press room"
              className="h-[360px] w-full rounded-[8px] object-cover shadow-2xl shadow-[#251553]/15 sm:h-[440px]"
            />
            <div className="absolute bottom-4 left-4 right-4 rounded-[8px] border border-white/60 bg-white/95 p-4 shadow-xl backdrop-blur">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#8b43ba]">
                Featured Story
              </p>
              <h2 className="mt-2 text-lg font-black leading-snug text-[#251553]">
                {articleTitle}
              </h2>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#eadff4] bg-white px-4 py-6 sm:px-6 lg:px-10">
        <div className="mx-auto grid max-w-[1500px] gap-4 sm:grid-cols-3">
          {[
            { value: `${mediaLinks.length}+`, label: "Published media links" },
            { value: uniqueDomains, label: "News and content platforms" },
            { value: "India", label: "Coverage focus" },
          ].map((stat) => (
            <div key={stat.label} className="rounded-[8px] bg-[#fbfaff] px-5 py-5">
              <p className="text-3xl font-black text-[#8b43ba]">{stat.value}</p>
              <p className="mt-1 text-sm font-bold text-[#5d507e]">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[1500px]">
          <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
            <div>
              <p className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.16em] text-[#a65b13]">
                <Sparkles className="h-4 w-4" />
                Featured Coverage
              </p>
              <h2 className="mt-3 text-3xl font-black text-[#251553] sm:text-4xl">
                Published across leading digital outlets
              </h2>
            </div>
            <p className="max-w-xl text-sm font-semibold leading-7 text-[#5d507e]">
              Each card opens the original external article in a new tab, keeping
              the media page useful for visitors, press teams, and search users.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {featuredOutlets.map((item, index) => (
              <a
                key={item.name}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-[8px] border border-[#eadff4] bg-[#fbfaff] p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#8b43ba]/45 hover:bg-white hover:shadow-xl hover:shadow-[#251553]/10"
              >
                <div className="flex items-start justify-between gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[8px] bg-[#eaf7f3] text-[#16745d]">
                    <Newspaper className="h-6 w-6" />
                  </div>
                  <span className="rounded-full bg-white px-3 py-1 text-xs font-black text-[#8b43ba] shadow-sm">
                    #{index + 1}
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-black text-[#251553] transition group-hover:text-[#8b43ba]">
                  {item.name}
                </h3>
                <p className="mt-3 text-sm font-semibold leading-7 text-[#5d507e]">
                  {articleTitle}
                </p>
                <div className="mt-6 flex items-center justify-between gap-4 border-t border-[#eadff4] pt-4">
                  <span className="truncate text-xs font-bold text-[#7b718e]">
                    {getHostname(item.url)}
                  </span>
                  <ExternalLink className="h-4 w-4 shrink-0 text-[#8b43ba] transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section
        id="all-coverage"
        className="bg-[#f5f0ff] px-4 py-16 sm:px-6 lg:px-10 lg:py-20"
      >
        <div className="mx-auto max-w-[1500px]">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.16em] text-[#8b43ba]">
              Complete Media Directory
            </p>
            <h2 className="mt-3 text-3xl font-black text-[#251553] sm:text-4xl">
              Explore every publication link
            </h2>
            <p className="mt-4 text-sm font-semibold leading-7 text-[#5d507e]">
              A clean, quick-scan directory of all coverage links supplied for
              the Manovaidya media page.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {mediaLinks.map((item) => (
              <a
                key={item.name}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex min-h-[132px] flex-col justify-between rounded-[8px] border border-[#e2d4f0] bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-[#8b43ba]/50 hover:shadow-lg"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <h3 className="text-base font-black text-[#251553] transition group-hover:text-[#8b43ba]">
                      {item.name}
                    </h3>
                    <p className="mt-2 truncate text-xs font-bold text-[#7b718e]">
                      {getHostname(item.url)}
                    </p>
                  </div>
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[8px] bg-[#fff4e4] text-[#a65b13]">
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>
                <div className="mt-5 inline-flex items-center gap-2 text-sm font-black text-[#8b43ba]">
                  Open coverage
                  <ExternalLink className="h-4 w-4" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#251553] px-4 py-14 sm:px-6 lg:px-10">
        <div className="mx-auto flex max-w-[1500px] flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-black text-white">
              <BadgeCheck className="h-4 w-4 text-[#f0b45b]" />
              Press & Partnership Ready
            </div>
            <h2 className="mt-5 text-3xl font-black text-white sm:text-4xl">
              Need Manovaidya for a media story?
            </h2>
            <p className="mt-3 max-w-2xl text-sm font-semibold leading-7 text-[#d9d0ea]">
              For interviews, article collaborations, or expert comments from
              Dr. Ankush Garg, connect with the clinic team directly.
            </p>
          </div>

          <a
            href="mailto:contact@manovaidya.com?subject=Media%20Inquiry%20for%20Manovaidya"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-white px-6 text-sm font-black text-[#251553] transition hover:-translate-y-0.5 hover:bg-[#fff4e4]"
          >
            Contact Media Team
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </main>
  );
}

export default MediaPRPage;
