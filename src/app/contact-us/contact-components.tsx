"use client";
import Image from "next/image";
import React from 'react';
import { motion } from "motion/react";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Calendar,
  Building2,
  ChevronRight
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ContactItem } from "../component/ui/contact-item";
import { FormField } from "../component/ui/form-field";

export function ContactUsContent() {
  const router = useRouter();
  const messageId = React.useId();
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [formData, setFormData] = React.useState({ fullName: '', email: '', message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contacts', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) throw new Error(result.error || 'Failed to send message');

      alert("Message sent successfully!");
      setFormData({ fullName: '', email: '', message: '' });
    } catch (error: any) {
      console.error("Contact Error:", error);
      alert("Failed to send message: " + error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="flex-grow pt-24 text-black">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-surface-container-low">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary-container/10 blur-[120px] rounded-full -mr-20 -mt-20"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-headline text-5xl md:text-6xl lg:text-7xl font-bold text-on-surface tracking-tight mb-6"
          >
            Contact Us
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="max-w-2xl mx-auto text-on-surface-variant text-lg md:text-xl leading-relaxed"
          >
            Have questions about bringing wellness to your workspace? Our team is here to help you design the perfect relaxation program for your employees.
          </motion.p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left: Contact Info */}
            <div className="space-y-12">
              <div>
                <h2 className="font-headline text-3xl font-bold text-on-surface mb-4">Get in touch</h2>
                <p className="text-on-surface-variant text-lg">We typically respond to all inquiries within one business day.</p>
              </div>

              <div className="space-y-8">
                <ContactItem 
                  icon={<Mail className="w-6 h-6" />}
                  title="Email Us"
                  lines={["hello@onsitechairmassage.com", "support@onsitechairmassage.com"]}
                />
                <ContactItem 
                  icon={<Phone className="w-6 h-6" />}
                  title="Call Us"
                  lines={["+1 (555) 892-4410", "Mon-Fri, 9am - 6pm EST"]}
                />
                <ContactItem 
                  icon={<MapPin className="w-6 h-6" />}
                  title="Business Location"
                  lines={["452 Wellness Way, Suite 200", "San Francisco, CA 94107"]}
                />
              </div>

              <div className="p-8 rounded-3xl bg-surface-container-low border border-outline-variant/10">
                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-2 h-2 rounded-full bg-secondary animate-pulse"></div>
                        <span className="text-[10px] font-semibold tracking-wider text-secondary uppercase">Now Booking</span>
                    </div>
                    <p className="text-on-surface font-medium leading-snug italic">
                        &quot;Our therapists are currently available for bookings in the greater Bay Area and surrounding regions.&quot;
                    </p>
                </motion.div>
              </div>
            </div>

            {/* Right: Form */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-surface-container-lowest p-8 md:p-12 rounded-[2rem] ambient-shadow border border-outline-variant/5"
            >
              <form 
                className="space-y-6"
                onSubmit={handleSubmit}
              >
                <FormField 
                  label="Full Name" 
                  placeholder="John Doe" 
                  type="text" 
                  value={formData.fullName} 
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })} 
                />
                <FormField 
                  label="Email Address" 
                  placeholder="john@company.com" 
                  type="email" 
                  value={formData.email} 
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })} 
                />
                <div className="space-y-2">
                  <label htmlFor={messageId} className="block text-xs font-semibold tracking-wider text-emerald-900 uppercase ml-1">Message</label>
                  <textarea 
                    id={messageId}
                    className="w-full px-6 py-4 rounded-xl bg-gray-100 border-transparent focus:border-emerald-700/20 focus:ring-0 focus:bg-white transition-all duration-200 placeholder:text-gray-500 resize-none"
                    placeholder="Tell us about your team and preferred dates..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                </div>
                <button 
                  className="w-full py-5 rounded-2xl bg-gradient-to-br from-emerald-600 to-emerald-700 text-white font-headline font-bold text-lg hover:brightness-110 active:scale-[0.98] transition-all shadow-lg shadow-emerald-700/20 disabled:opacity-75 disabled:cursor-not-allowed" 
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="px-6 lg:px-8 max-w-7xl mx-auto mb-24">
        <div className="relative w-full h-[500px] rounded-[2.5rem] overflow-hidden bg-surface-container shadow-inner group">
          <div className="absolute inset-0 opacity-80 transition-all duration-700">
            <Image width={800} height={600} src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUCa1yF0nW-gafVv-BepUmA8yFq4YSOyhat0nY3u6bTvcUCvI2SYYoaGwjFTpke6Dz2CSUGRZXwJh-KHNqRg9Ta47GyQjrVQBrMc5c77yNIVhZR0uWQTO5DcLWuLsOSvOCyPwSpWQo2jDsb-NJ9yCBj4Mb5VgK9gmiL8Xzqy77sxf7rdsBCNhcHJ_EqYjx8HSTT_94UfZE0MnMDDSrOttkQQaK1pJoJkk53Z_ygEAzGwhH00lS1rSo5zwOGpRJ1_ZRCq2HPuuh9e8" 
              alt="Map location" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Interactive Overlay */}
          <div className="absolute bottom-8 left-8 right-8 md:right-auto md:w-80 bg-white/90 backdrop-blur-md p-6 rounded-3xl shadow-xl border border-white/20">
            <div className="flex items-center gap-3 mb-2">
              <Building2 className="text-primary w-5 h-5" />
              <h3 className="font-headline font-bold text-on-surface">Main Office</h3>
            </div>
            <p className="text-on-surface-variant text-sm mb-4">Visit our administrative headquarters in the Financial District.</p>
            <Link href="https://google.com/maps" className="text-primary font-bold text-sm flex items-center gap-2 group/link">
              Open in Google Maps
              <ChevronRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 mx-6 lg:mx-8 mb-24 rounded-[3rem] overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-black">
          <Image width={800} height={600} src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9gvBXNykZZ35V8DnkJSqWe9k_xiVFrJAAF76372vFyQeMU5ij8bQqZu22FWCMzSJEovnp7myRsPPc7v9Sv7J71ovBDFGFRaMdvV3XA9bcToKELYD5KwS6EQqpcYbixhxzyLqJ_fudpzx7mB-SfjKDqh7BAGsB2lM3lCyNgE4eSK8LJKk1nLZwsklHuDZnI55PT7aP3hmku-fNrMCmV_ILzX5exp_ppQg4Yih5B5xU0DZNpTpifrkCGi-fUInZVfQP1-UOawdLZaE" 
            alt="Relaxing massage" 
            className="w-full h-full object-cover brightness-50 contrast-125 opacity-70"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-4xl mx-auto text-center px-6 relative z-10">
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
            Ready to transform your office culture?
          </h2>
          <button 
            onClick={() => router.push('/booking')}
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#007052] rounded-full font-headline font-bold text-lg shadow-lg hover:scale-105 transition-transform mx-auto"
          >
            Book a Session
            <Calendar className="w-5 h-5" />
          </button>
        </div>
      </section>
    </main>
  );
}