import type { Metadata } from "next";
import Header from "../component/header";
import Footer from "../component/footer";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
  title: "Heli Smart Massage Chair Specifications & Technology",
  description: "Explore detailed technical specifications and ergonomic innovations of Heli Comfort, Heli Balance, and Heli Luxe intelligent wellness chairs.",
  openGraph: {
    title: "Heli Smart Massage Chair Specifications & Technology",
    description: "Explore detailed technical specifications and ergonomic innovations of Heli Comfort, Heli Balance, and Heli Luxe intelligent wellness chairs.",
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