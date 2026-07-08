import React from "react";
import Seo from "../components/Seo";
// import SuccessStoryBottomBar from "../successStory/SuccessStoryBottomBar";
import SuccessStoryBreadcrumb from "../successStory/SuccessStoryBreadcrumb";
import SuccessStoryCategories from "../successStory/SuccessStoryCategories";
import SuccessStoryCta from "../successStory/SuccessStoryCta";
import SuccessStoryHero from "../successStory/SuccessStoryHero";
import SuccessStoryReviewsTestimonials from "../successStory/SuccessStoryReviewsTestimonials";
//import SuccessStoryStats from "../successStory/SuccessStoryStats";
import SuccessStoryTimelines from "../successStory/SuccessStoryTimelines";
import SuccessStoryTrustFaq from "../successStory/SuccessStoryTrustFaq";
import SuccessStoryVideos from "../successStory/SuccessStoryVideos";

function SuccessStoriesPage() {
  const [activeFilter, setActiveFilter] = React.useState("All");
  const [activeCategory, setActiveCategory] = React.useState("All");
  const [openFaq, setOpenFaq] = React.useState(0);

  return (
    <main className="bg-white text-[#071c2b]">
      <Seo
        title="Success Stories | Patient & Family Testimonials | Manovaidya"
        description="Explore real success stories and video testimonials from families across India who found guidance and support through Manovaidya's Neuro-Ayurveda care."
        keywords="Manovaidya success stories, patient testimonials, family reviews, video testimonials, real recovery stories, Neuro-Ayurveda outcomes, child development success, autism success stories, parent testimonials India, mental health patient reviews"
        path="/success-stories"
        schema={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Success Stories",
          "description": "Explore real success stories and video testimonials from families across India who found guidance and support through Manovaidya's Neuro-Ayurveda care."
        }}
      />
      {/* <SuccessStoryBreadcrumb /> */}
      <SuccessStoryHero />
      {/* <SuccessStoryStats /> */}
      <SuccessStoryVideos
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
      />
      <SuccessStoryCategories
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />
      <SuccessStoryTimelines />
      <SuccessStoryReviewsTestimonials />
      <SuccessStoryTrustFaq openFaq={openFaq} onFaqToggle={setOpenFaq} />
      <SuccessStoryCta />
      {/* <SuccessStoryBottomBar /> */}
    </main>
  );
}

export default SuccessStoriesPage;
