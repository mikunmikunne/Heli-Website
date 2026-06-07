"use client";
import Image from "next/image";
import React from 'react';
import { motion } from "motion/react";
import ReCAPTCHA from "react-google-recaptcha";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Calendar,
  Building2,
  ChevronRight,
  CheckCircle2
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ContactItem } from "../component/ui/contact-item";
import { FormField } from "../component/ui/form-field";
import { isValidEmail } from "@/utils/validators";

export function ContactUsContent() {
  const router = useRouter();
  const messageId = React.useId();
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);
  const [formData, setFormData] = React.useState({ fullName: '', email: '', message: '' });
  const [submitError, setSubmitError] = React.useState<string | null>(null);
  const recaptchaRef = React.useRef<ReCAPTCHA>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    // Client-side Validation
    if (!formData.fullName.trim() || !formData.email.trim() || !formData.message.trim()) {
      setSubmitError("Please fill in all fields.");
      setIsSubmitting(false);
      return;
    }
    if (!isValidEmail(formData.email)) {
      setSubmitError("Invalid email format.");
      setIsSubmitting(false);
      return;
    }
    
    try {
      const captchaToken = recaptchaRef.current?.getValue();
      if (!captchaToken) {
        setSubmitError("Please verify that you are not a robot.");
        setIsSubmitting(false);
        return;
      }

      const response = await fetch('/api/contacts', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ...formData, captchaToken }),
      });

      const result = await response.json();

      if (!response.ok) throw new Error(result.error || 'Failed to send message');

      setIsSuccess(true);
      setFormData({ fullName: '', email: '', message: '' });
      recaptchaRef.current?.reset();
    } catch (error: unknown) {
      console.error("Contact Error:", error);
      const errorMessage = error instanceof Error ? error.message : "Unknown error";
      setSubmitError(errorMessage);
      recaptchaRef.current?.reset();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="flex-grow pt-24 text-black">
      {/* Hero Section */}
      <section className="relative py-28 md:py-36 overflow-hidden text-white">
        <div className="absolute inset-0 -z-10 bg-black">
          <Image 
            fill 
            priority
            sizes="100vw"
            src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=2000"
            alt="Relaxing corporate massage treatment" 
            className="object-cover brightness-40 contrast-110"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/35 -z-10"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-headline text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-6"
          >
            Contact Us
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="max-w-2xl mx-auto text-white/90 text-lg md:text-xl leading-relaxed"
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
              className="bg-surface-container-lowest p-8 md:p-12 rounded-[2rem] ambient-shadow border border-outline-variant/5 w-full max-w-2xl mx-auto lg:max-w-none"
            >
              {isSuccess ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-20 h-20 bg-emerald-50 dark:bg-emerald-900/20 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-10 h-10 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Message Sent Successfully!</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 max-w-md">
                    Thank you for reaching out. Our team will get back to you as soon as possible.
                  </p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="bg-emerald-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-emerald-700 transition"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
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
                    <label htmlFor={messageId} className="block text-xs font-semibold tracking-wider text-on-surface-variant uppercase ml-1">Message</label>
                    <textarea 
                      id={messageId}
                      className="w-full px-6 py-4 rounded-xl bg-surface-container-high border-transparent focus:border-primary/20 focus:ring-0 focus:bg-white transition-all duration-200 placeholder:text-on-surface-variant text-black resize-none"
                      placeholder="Tell us about your team and preferred dates..."
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                    />
                  </div>

                  {/* Google reCAPTCHA v2 */}
                  <div className="flex justify-center py-2">
                    <ReCAPTCHA
                      ref={recaptchaRef}
                      sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
                      onChange={(token) => {
                        if (token) {
                          setSubmitError(null);
                        }
                      }}
                    />
                  </div>

                  {submitError && (
                    <div className="text-red-600 dark:text-red-400 text-sm font-semibold text-center bg-red-50 dark:bg-red-950/20 py-3 px-4 rounded-xl border border-red-200 dark:border-red-900/50">
                      {submitError}
                    </div>
                  )}

                  <button 
                    className="w-full py-5 rounded-2xl bg-gradient-to-br from-emerald-600 to-emerald-700 text-white font-headline font-bold text-lg hover:brightness-110 active:scale-[0.98] transition-all shadow-lg shadow-emerald-700/20 disabled:opacity-75 disabled:cursor-not-allowed" 
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="px-6 lg:px-8 max-w-7xl mx-auto mb-24">
        <div className="relative w-full h-[500px] rounded-[2.5rem] overflow-hidden bg-surface-container shadow-inner group">
          <div className="absolute inset-0 opacity-80 transition-all duration-700">
            <Image fill sizes="100vw" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUCa1yF0nW-gafVv-BepUmA8yFq4YSOyhat0nY3u6bTvcUCvI2SYYoaGwjFTpke6Dz2CSUGRZXwJh-KHNqRg9Ta47GyQjrVQBrMc5c77yNIVhZR0uWQTO5DcLWuLsOSvOCyPwSpWQo2jDsb-NJ9yCBj4Mb5VgK9gmiL8Xzqy77sxf7rdsBCNhcHJ_EqYjx8HSTT_94UfZE0MnMDDSrOttkQQaK1pJoJkk53Z_ygEAzGwhH00lS1rSo5zwOGpRJ1_ZRCq2HPuuh9e8" 
              alt="Map location" 
              className="object-cover"
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
            <Link href="https://maps.google.com/?q=452+Wellness+Way,+Suite+200,+San+Francisco,+CA+94107" className="text-primary font-bold text-sm flex items-center gap-2 group/link">
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
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary rounded-full font-headline font-bold text-lg shadow-lg hover:scale-105 transition-transform mx-auto"
          >
            Book a Session
            <Calendar className="w-5 h-5" />
          </button>
        </div>
      </section>
    </main>
  );
}