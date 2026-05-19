import type { Metadata } from "next";
import Header from "@/app/component/header";
import Footer from "@/app/component/footer";
import BookingClient from "./BookingClient";
export const metadata: Metadata = {
  title: "Book a Session | Onsite Chair Massage",
  description: "Request a customized quote for onsite chair massage at your office. Boost team morale and wellness with our professional corporate massage services.",
  openGraph: {
    title: "Book a Session | Onsite Chair Massage",
    description: "Request a customized quote for onsite chair massage at your office.",
    images: [{ url: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800" }],
  },
};

export default function BookingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <BookingClient />
      <Footer />
    </div>
  );
}
