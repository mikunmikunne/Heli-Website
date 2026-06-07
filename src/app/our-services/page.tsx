import type { Metadata } from "next";
import Header from "../component/header";
import Footer from "../component/footer";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
  title: "Professional Onsite Chair Massage Services | Corporate Wellness Packages",
  description: "Explore our workplace massage packages. Choose from 10, 15, or 20-minute restorative sessions tailored to corporate offices, conferences, trade shows, and special events.",
  openGraph: {
    title: "Professional Onsite Chair Massage Services | Corporate Wellness Packages",
    description: "Explore our workplace massage packages. Choose from 10, 15, or 20-minute restorative sessions tailored to corporate offices, conferences, and events.",
  }
};

export default function ServicesPage() {
  return (
    <div className="bg-background text-foreground font-sans">
      <Header />
      <ServicesClient />
      <Footer />
    </div>
  );
}