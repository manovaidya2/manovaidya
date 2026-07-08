import React from "react";
import Seo from "../components/Seo";
import BlogHeroSection from "../blog/BlogHeroSection";
import BlogListingSection from "../blog/BlogListingSection";
import NewsletterSection from "../blog/NewsletterSection";

function BlogPage() {
  return (
    <main>
      <Seo
        title="Manovaidya Blog | Child Development & Mental Health Articles"
        description="Read Manovaidya's evidence-informed articles on child development, mental health and Neuro-Ayurveda to help families make informed wellbeing choices."
        keywords="Manovaidya blog, child development articles, mental health blog India, Neuro-Ayurveda articles, autism ADHD blog, parenting resources, family wellbeing articles, Ayurveda mental health insights, evidence-informed health content, child psychology blog"
        path="/blog"
        schema={{
          "@context": "https://schema.org",
          "@type": "Blog",
          "name": "Manovaidya Blog",
          "description": "Read Manovaidya's evidence-informed articles on child development, mental health and Neuro-Ayurveda to help families make informed wellbeing choices."
        }}
      />
      <BlogHeroSection />
      <BlogListingSection />
      <NewsletterSection />
    </main>
  );
}

export default BlogPage;
