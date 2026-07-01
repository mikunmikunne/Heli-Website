import type { Metadata } from "next";
import Header from "../component/header";
import Footer from "../component/footer";
import { ContactUsContent } from "./contact-components";

export const metadata: Metadata = {
  title: "Contact Us | Heli Smart Massage Chair",
  description: "Get in touch with Heli Smart Massage Chair support. Ask questions about Comfort, Balance, or Luxe models, showroom trial sessions, or pre-orders.",
  openGraph: {
    title: "Contact Us | Heli Smart Massage Chair",
    description: "Get in touch with Heli Smart Massage Chair support. Ask questions about Comfort, Balance, or Luxe models, showroom trials, or pre-orders.",
  }
};

export default function ContactUsMenu() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <ContactUsContent />
      <Footer />
    </div>
  );
}
