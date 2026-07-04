import React from "react";
import BlogHeroSection from "../blog/BlogHeroSection";
import BlogListingSection from "../blog/BlogListingSection";
import NewsletterSection from "../blog/NewsletterSection";

function BlogPage() {
  return (
    <main>
      <BlogHeroSection />
      <BlogListingSection />
      <NewsletterSection />
    </main>
  );
}

export default BlogPage;
