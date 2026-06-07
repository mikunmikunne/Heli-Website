import type { Metadata } from "next";
import Header from "@/app/component/header";
import Footer from "@/app/component/footer";
import BlogClient from "./BlogClient";
import { getPublishedArticles } from "@/utils/wordpress";
import { mapWordPressPostToBlogData } from "@/utils/blog";

export const metadata: Metadata = {
  title: "Wellness Insights & Blog | Onsite Chair Massage",
  description: "Expert perspectives on corporate wellness, office ergonomics, and employee mental health. Learn how onsite chair massage can transform your workplace.",
  openGraph: {
    title: "Wellness Insights & Blog | Onsite Chair Massage",
    description: "Expert perspectives on corporate wellness and workplace productivity.",
    images: [{ url: "https://lh3.googleusercontent.com/aida-public/AB6AXuDhB-IX1D737i4KTvOeM4XBpkVnT9Cs9TCInF-j6QHlHwvIlbnoqDq-UMf5kZEm7th3f2Vw-eQuFdK9KPvLSx_XgVvlT2K0-BZoAXLAeWsxbPdln1TFA6Boz1BC64DcPIOMzRhvGx0wfQdN8Wkwgy3SowyL8YRmSUBPkOfI9R-5BvFM2rKzqa2KXlw0TyqZ2iNmt_UpKAlZxjCq1QBvTVHM3P05nckM9ymtFZsNQp2ORVWJWyVSxpqbfvXN8PuEHglPqUzUWsuAMiM" }],
  },
};

export const revalidate = 5; // Revalidate pages at most every 5 seconds

export default async function BlogPage() {
  const articles = await getPublishedArticles();

  const posts = articles.map(mapWordPressPostToBlogData);


  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <BlogClient posts={posts} />
      <Footer />
    </div>
  );
}

