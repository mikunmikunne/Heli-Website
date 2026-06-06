"use client";
import { useState, useRef } from "react";
import { CheckCircle2, ChevronDown } from "lucide-react";
import { useForm, SubmitHandler } from "react-hook-form";
import { isValidEmail, isValidPhoneNumber } from "@/utils/validators";
import { FormState } from "./types";
import ReCAPTCHA from "react-google-recaptcha";

const EMPLOYEE_COUNT_OPTIONS = [
  "1-20 employees",
  "21-50 employees",
  "51-200 employees",
  "200+ employees"
];

export default function BookingForm() {
  const [isSuccess, setIsSuccess] = useState(false);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormState>({
    defaultValues: {
      fullName: "",
      companyName: "",
      email: "",
      phone: "",
      employeeCount: EMPLOYEE_COUNT_OPTIONS[0],
      preferredDate: "",
      location: "",
      details: "",
    }
  });

  const onSubmit: SubmitHandler<FormState> = async (data) => {
    try {
      const captchaToken = recaptchaRef.current?.getValue();
      if (!captchaToken) {
        alert("Please verify that you are not a robot.");
        return;
      }

      const response = await fetch('/api/bookings', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ...data, captchaToken }),
      });

      const result = await response.json();

      if (!response.ok) {
          throw new Error(result.error || 'Something went wrong');
      }

      console.log("Booking Form Submitted via API:", data);
      setIsSuccess(true);
      reset();
      recaptchaRef.current?.reset();
    } catch (error: unknown) {
      console.error("Booking Error:", error);
      alert(error instanceof Error ? error.message : "Failed to submit request.");
      recaptchaRef.current?.reset();
    }
  };

  if (isSuccess) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <div className="w-20 h-20 bg-emerald-50 dark:bg-emerald-900/20 rounded-full flex items-center justify-center mb-6">
          <CheckCircle2 className="w-10 h-10 text-emerald-600 dark:text-emerald-400" />
        </div>
        <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Request Submitted Successfully!</h3>
        <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 max-w-md">
          Thank you for reaching out. Our corporate wellness coordinator will get back to you with a customized quote within 2 business hours.
        </p>
        <button
          onClick={() => setIsSuccess(false)}
          className="bg-emerald-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-emerald-700 transition"
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <form className="space-y-8" onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Full Name */}
        <div className="flex flex-col gap-2">
          <label htmlFor="fullName" className="text-[0.6875rem] uppercase tracking-wider font-bold text-gray-600 dark:text-gray-400">Full Name</label>
          <input
            id="fullName"
            type="text"
            placeholder="Jane Doe"
            {...register("fullName", { required: "Full Name is required" })}
            aria-invalid={!!errors.fullName}
            aria-describedby={errors.fullName ? "fullName-error" : undefined}
            className={`text-gray-900 dark:text-white placeholder:text-gray-400 bg-white dark:bg-gray-900 border ${errors.fullName ? 'border-red-500' : 'border-transparent dark:border-white/5'} rounded-xl px-4 py-3 focus:ring-2 focus:ring-emerald-600/20 transition-all outline-none`}
          />
          {errors.fullName && <span id="fullName-error" className="text-red-500 text-xs mt-1">{errors.fullName.message}</span>}
        </div>
        {/* Company Name */}
        <div className="flex flex-col gap-2">
          <label htmlFor="companyName" className="text-[0.6875rem] uppercase tracking-wider font-bold text-gray-600 dark:text-gray-400">Company Name</label>
          <input
            id="companyName"
            type="text"
            placeholder="... Corp"
            {...register("companyName", { required: "Company Name is required" })}
            aria-invalid={!!errors.companyName}
            aria-describedby={errors.companyName ? "companyName-error" : undefined}
            className={`text-gray-900 dark:text-white placeholder:text-gray-400 bg-white dark:bg-gray-900 border ${errors.companyName ? 'border-red-500' : 'border-transparent dark:border-white/5'} rounded-xl px-4 py-3 focus:ring-2 focus:ring-emerald-600/20 transition-all outline-none`}
          />
          {errors.companyName && <span id="companyName-error" className="text-red-500 text-xs mt-1">{errors.companyName.message}</span>}
        </div>
        {/* Work Email */}
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-[0.6875rem] uppercase tracking-wider font-bold text-gray-600 dark:text-gray-400">Work Email</label>
          <input
            id="email"
            type="email"
            placeholder="...@company.com"
            {...register("email", { 
              required: "Email is required",
              validate: (value) => isValidEmail(value) || "Invalid Email format"
            })}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={`text-gray-900 dark:text-white placeholder:text-gray-400 bg-white dark:bg-gray-900 border ${errors.email ? 'border-red-500' : 'border-transparent dark:border-white/5'} rounded-xl px-4 py-3 focus:ring-2 focus:ring-emerald-600/20 transition-all outline-none`}
          />
          {errors.email && <span id="email-error" className="text-red-500 text-xs mt-1">{errors.email.message}</span>}
        </div>
        {/* Phone Number */}
        <div className="flex flex-col gap-2">
          <label htmlFor="phone" className="text-[0.6875rem] uppercase tracking-wider font-bold text-gray-600 dark:text-gray-400">Phone Number</label>
          <input
            id="phone"
            type="tel"
            placeholder="(555) 000-0000"
            {...register("phone", { 
              required: "Phone Number is required",
              validate: (value) => isValidPhoneNumber(value) || "Invalid Phone Number format"
            })}
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            className={`text-gray-900 dark:text-white placeholder:text-gray-400 bg-white dark:bg-gray-900 border ${errors.phone ? 'border-red-500' : 'border-transparent dark:border-white/5'} rounded-xl px-4 py-3 focus:ring-2 focus:ring-emerald-600/20 transition-all outline-none`}
          />
          {errors.phone && <span id="phone-error" className="text-red-500 text-xs mt-1">{errors.phone.message}</span>}
        </div>
        {/* Employee Count */}
        <div className="flex flex-col gap-2 relative">
          <label htmlFor="employeeCount" className="text-[0.6875rem] uppercase tracking-wider font-bold text-gray-600">Employee Count</label>
          <div className="relative">
            <select
              id="employeeCount"
              {...register("employeeCount", { required: true })}
              className="w-full text-gray-900 dark:text-white bg-white dark:bg-gray-900 border-none dark:border dark:border-white/5 rounded-xl px-4 py-3 focus:ring-2 focus:ring-emerald-600/20 transition-all outline-none appearance-none cursor-pointer [color-scheme:light] dark:[color-scheme:dark]"
            >
              {EMPLOYEE_COUNT_OPTIONS.map((option) => (
                <option key={option} value={option} className="bg-white dark:bg-gray-950 text-gray-900 dark:text-white">
                  {option}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 dark:text-gray-400 pointer-events-none" />
          </div>
        </div>
        {/* Preferred Date */}
        <div className="flex flex-col gap-2">
          <label htmlFor="preferredDate" className="text-[0.6875rem] uppercase tracking-wider font-bold text-gray-600">Preferred Date</label>
          <input
            id="preferredDate"
            type="date"
            {...register("preferredDate", { required: "Preferred Date is required" })}
            aria-invalid={!!errors.preferredDate}
            aria-describedby={errors.preferredDate ? "preferredDate-error" : undefined}
            min={new Date().toISOString().split("T")[0]}
            className={`text-gray-900 dark:text-white placeholder:text-gray-400 bg-white dark:bg-gray-900 border ${errors.preferredDate ? 'border-red-500' : 'border-transparent dark:border-white/5'} rounded-xl px-4 py-3 focus:ring-2 focus:ring-emerald-600/20 transition-all outline-none w-full [color-scheme:light] dark:[color-scheme:dark]`}
          />
          {errors.preferredDate && <span id="preferredDate-error" className="text-red-500 text-xs mt-1">{errors.preferredDate.message}</span>}
        </div>
      </div>

      {/* Event Location */}
      <div className="flex flex-col gap-2">
        <label htmlFor="location" className="text-[0.6875rem] uppercase tracking-wider font-bold text-gray-600 dark:text-gray-400">Event Location</label>
        <input
          id="location"
          type="text"
          placeholder="Office Address, City, State"
          {...register("location", { required: "Event Location is required" })}
          aria-invalid={!!errors.location}
          aria-describedby={errors.location ? "location-error" : undefined}
          className={`text-gray-900 dark:text-white placeholder:text-gray-400 bg-white dark:bg-gray-900 border ${errors.location ? 'border-red-500' : 'border-transparent dark:border-white/5'} rounded-xl px-4 py-3 focus:ring-2 focus:ring-emerald-600/20 transition-all outline-none`}
        />
        {errors.location && <span id="location-error" className="text-red-500 text-xs mt-1">{errors.location.message}</span>}
      </div>

      {/* Additional Details */}
      <div className="flex flex-col gap-2">
        <label htmlFor="details" className="text-[0.6875rem] uppercase tracking-wider font-bold text-gray-600 dark:text-gray-400">Additional Details</label>
        <textarea
          id="details"
          {...register("details")}
          rows={4}
          placeholder="Tell us about your event goals or specific requirements..."
          className="text-gray-900 dark:text-white placeholder:text-gray-400 bg-white dark:bg-gray-900 border dark:border-white/5 rounded-xl px-4 py-3 focus:ring-2 focus:ring-emerald-600/20 transition-all outline-none resize-none"
        />
      </div>

      {/* Google reCAPTCHA v2 */}
      <div className="flex justify-center py-2">
        <ReCAPTCHA
          ref={recaptchaRef}
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 text-white py-5 rounded-xl font-bold text-lg hover:brightness-110 active:scale-[0.98] transition-all shadow-lg shadow-emerald-600/20 dark:shadow-emerald-900/40 disabled:opacity-70 flex justify-center items-center"
      >
        {isSubmitting ? (
          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
        ) : (
          "Request a Quote"
        )}
      </button>
    </form>
  );
}