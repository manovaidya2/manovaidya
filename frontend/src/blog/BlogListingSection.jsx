import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Apple,
  Baby,
  Brain,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  HeartPulse,
  Leaf,
  Lightbulb,
  MessageCircle,
  Puzzle,
  Search,
  Sparkles,
  UsersRound,
  Waves,
} from "lucide-react";
import api, { getAssetUrl } from "../api/axiosInstance";

const categoriesData = [
  { name: "Autism", count: 12, Icon: Puzzle },
  { name: "ADHD", count: 10, Icon: Brain },
  { name: "Speech Delay", count: 8, Icon: MessageCircle },
  { name: "Neuro-Ayurveda", count: 15, Icon: Leaf },
  { name: "Child Development", count: 11, Icon: Baby },
  { name: "Parenting", count: 9, Icon: UsersRound },
  { name: "Mental Health", count: 13, Icon: HeartPulse },
  { name: "Sensory Integration", count: 7, Icon: Waves },
  { name: "Gut Health", count: 6, Icon: Apple },
];

function BlogListingSection() {
  const [blogs, setBlogs] = useState([]);
  const [popularPosts, setPopularPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const { data } = await api.get('/blogs');
        if (data.success) {
          setBlogs(data.data);
          setPopularPosts(data.data.slice(0, 4));
        }
      } catch (err) {
        setError(err.response?.data?.message || err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  return (
    <section id="articles" className="bg-[#fbfcfa] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <div className="mx-auto grid w-full max-w-[1320px] gap-8 xl:grid-cols-[minmax(0,1fr)_300px]">
        <div className="min-w-0">
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-[28px] font-extrabold tracking-[-0.035em] text-[#111b17] sm:text-[32px]">
              Latest Blogs
            </h2>

            <label className="relative w-full sm:w-[180px]">
              <span className="sr-only">Sort blog posts</span>
              <select
                defaultValue="latest"
                className="h-10 w-full appearance-none rounded-lg border border-violet-200 bg-white pl-3 pr-9 text-[12px] font-semibold text-[#272047] outline-none focus:border-[#8b43ba]"
              >
                <option value="latest">Showing latest posts</option>
                <option value="popular">Most popular posts</option>
              </select>
              <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
            </label>
          </div>

          {loading ? (
            <div className="py-10 text-center">Loading blogs...</div>
          ) : error ? (
            <div className="py-10 text-center text-red-500">{error}</div>
          ) : (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {blogs.map((post) => (
                <article
                  key={post._id || post.slug}
                  className="group flex min-h-[390px] flex-col overflow-hidden rounded-lg border border-[#dce3dd] bg-white shadow-[0_2px_8px_rgba(26,56,42,0.04)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(26,56,42,0.12)]"
                >
                  <Link to={`/blog/${post.slug}`} className="block h-[160px] overflow-hidden bg-[#eef2ee]" title={post.title}>
                    <img
                      src={getAssetUrl(post.image)}
                      alt={post.imageAlt || post.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                      loading="lazy"
                    />
                  </Link>

                  <div className="flex flex-1 flex-col p-4">
                    <p className="text-[10px] font-bold uppercase tracking-[0.035em] text-[#8b43ba]">
                      {post.category || "General"}
                    </p>
                    <h3 className="mt-2 text-[15px] font-extrabold leading-[1.35] tracking-[-0.015em] text-[#17201c]">
                      <Link to={`/blog/${post.slug}`} className="hover:text-[#8b43ba]">
                        {post.title}
                      </Link>
                    </h3>
                    <p className="mt-3 text-[12px] font-medium leading-[1.55] text-[#65706a] line-clamp-3">
                      {post.shortDescription || post.excerpt}
                    </p>
                    <p className="mt-auto pt-5 text-[11px] font-medium text-[#67716c]">
                      {new Date(post.createdAt || post.date).toLocaleDateString("en-US", { month: 'short', day: 'numeric', year: 'numeric' })}
                      <span className="mx-2 text-[#a6afa9]">•</span>
                      {Math.ceil((post.content?.length || 1000) / 1000)} min read
                    </p>
                  </div>
                </article>
              ))}
            </div>
          )}

          {!loading && !error && blogs.length > 0 && (
            <nav className="mt-7 flex items-center justify-center gap-2" aria-label="Blog pagination">
              {["previous", "1", "2", "3", "ellipsis", "10", "next"].map((item) => {
                const isActive = item === "1";
                const isEllipsis = item === "ellipsis";

                return (
                  <button
                    key={item}
                    type="button"
                    aria-label={item === "previous" ? "Previous page" : item === "next" ? "Next page" : undefined}
                    aria-current={isActive ? "page" : undefined}
                    disabled={item === "previous"}
                    className={`flex h-9 min-w-9 items-center justify-center rounded-md border px-2 text-[12px] font-bold transition ${
                      isActive
                        ? "border-[#8b43ba] bg-[#8b43ba] text-white"
                        : isEllipsis
                          ? "border-transparent bg-transparent text-slate-500"
                          : "border-violet-200 bg-white text-[#272047] hover:border-[#8b43ba] hover:text-[#8b43ba] disabled:cursor-not-allowed disabled:opacity-45"
                    }`}
                  >
                    {item === "previous" ? (
                      <ChevronLeft className="h-4 w-4" />
                    ) : item === "next" ? (
                      <ChevronRight className="h-4 w-4" />
                    ) : item === "ellipsis" ? (
                      "..."
                    ) : (
                      item
                    )}
                  </button>
                );
              })}
            </nav>
          )}
        </div>

        <aside className="space-y-5 xl:pt-[1px]">
          <label className="relative block">
            <span className="sr-only">Search blogs</span>
            <input
              type="search"
              placeholder="Search blogs..."
              className="h-12 w-full rounded-lg border border-violet-200 bg-white pl-4 pr-11 text-[13px] text-[#272047] outline-none placeholder:text-slate-400 focus:border-[#8b43ba] focus:ring-2 focus:ring-[#8b43ba]/10"
            />
            <Search className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          </label>

          <div className="rounded-xl border border-[#e1e7e2] bg-[#f5f7f3] p-5">
            <h3 className="text-[17px] font-extrabold text-[#17201c]">Categories</h3>
            <ul className="mt-4 space-y-3.5">
              {categoriesData.map(({ name, count, Icon }) => (
                <li key={name} className="flex items-center gap-3 text-[#272047]">
                  <Icon className="h-4 w-4 shrink-0 text-[#8b43ba]" strokeWidth={1.8} />
                  <span className="min-w-0 flex-1 text-[13px] font-semibold">{name}</span>
                  <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-white px-1.5 text-[9px] font-extrabold text-[#536159] shadow-sm">
                    {count}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-[#e1e7e2] bg-white p-5">
            <h3 className="text-[17px] font-extrabold text-[#17201c]">Popular Posts</h3>
            <div className="mt-4 space-y-4">
              {popularPosts.map((post) => (
                <article key={post._id || post.slug} className="flex gap-3">
                  <Link to={`/blog/${post.slug}`} className="shrink-0" title={post.title}>
                    <img
                      src={getAssetUrl(post.image)}
                      alt={post.imageAlt || post.title}
                      className="h-[58px] w-[64px] rounded-md object-cover"
                      loading="lazy"
                    />
                  </Link>
                  <div className="min-w-0">
                    <h4 className="line-clamp-2 text-[11px] font-extrabold leading-[1.35] text-[#27332d]">
                      <Link to={`/blog/${post.slug}`} className="hover:text-[#8b43ba]">
                        {post.title}
                      </Link>
                    </h4>
                    <p className="mt-1 text-[9px] font-medium text-[#78827c]">
                      {new Date(post.createdAt || post.date).toLocaleDateString("en-US", { month: 'short', day: 'numeric', year: 'numeric' })}
                    </p>
                  </div>
                </article>
              ))}
              {popularPosts.length === 0 && !loading && (
                <p className="text-[11px] text-slate-500">No popular posts yet.</p>
              )}
            </div>
          </div>

          <div className="rounded-xl border border-[#8b43ba]/20 bg-violet-50/50 p-5 shadow-[0_3px_10px_rgba(139,67,186,0.05)]">
            <Lightbulb className="h-7 w-7 text-[#8b43ba]" strokeWidth={1.7} />
            <h3 className="mt-3 text-[14px] font-extrabold text-black">
              Need Personalized Guidance?
            </h3>
            <p className="mt-2 text-[11px] font-medium leading-[1.55] text-slate-700">
              Our experts are here to help you understand your child's needs.
            </p>
            <a
              href="#consultation"
              className="mt-4 inline-flex h-10 items-center justify-center gap-2 rounded-md bg-[#8b43ba] px-5 text-[11px] font-extrabold text-white transition hover:bg-[#7835a4]"
            >
              <Sparkles className="h-3.5 w-3.5" />
              Book a Consultation
            </a>
          </div>
        </aside>
      </div>
    </section>
  );
}

export default BlogListingSection;
