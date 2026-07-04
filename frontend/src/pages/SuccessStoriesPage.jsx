import React from "react";
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
