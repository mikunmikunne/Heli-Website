import type { Metadata } from "next";
import Header from "../component/header";
import Footer from "../component/footer";
import { ContactUsContent } from "./contact-components";

export const metadata: Metadata = {
  title: "Contact Us | Onsite Chair Massage",
  description: "Get in touch with Onsite Chair Massage. Ask a question, request booking information, or discuss custom wellness solutions for your workplace.",
  openGraph: {
    title: "Contact Us | Onsite Chair Massage",
    description: "Get in touch with Onsite Chair Massage. Ask a question, request booking information, or discuss custom wellness solutions.",
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
