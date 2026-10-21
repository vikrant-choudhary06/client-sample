"use client";

import React, { useState } from "react";
import { Phone, CheckCircle2, AlertCircle, Send, RotateCcw, MapPin, Sparkles, Loader2 } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import rawLocations from "@/data/locations.json";

interface EnquiryFormProps {
  initialLocationName?: string;
  sourceContext?: string;
}

export default function EnquiryForm({
  initialLocationName = "",
  sourceContext = "General Consultation",
}: EnquiryFormProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    locality: initialLocationName || "Andheri",
    layout: "Parallel Kitchen",
    stage: "New Flat Possession",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submittedData, setSubmittedData] = useState<typeof formData | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Please enter your full name.";
    }

    const cleanPhone = formData.phone.replace(/[\s\-+]/g, "");
    if (!cleanPhone) {
      newErrors.phone = "Phone number is required.";
    } else if (cleanPhone.length < 10) {
      newErrors.phone = "Please enter a valid 10-digit phone number.";
    }

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.locality) {
      newErrors.locality = "Please select your locality in Mumbai.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate brief client-side processing
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedData({ ...formData });
    }, 500);
  };

  const handleReset = () => {
    setSubmittedData(null);
    setFormData({
      fullName: "",
      phone: "",
      email: "",
      locality: initialLocationName || "Andheri",
      layout: "Parallel Kitchen",
      stage: "New Flat Possession",
      message: "",
    });
    setErrors({});
  };

  return (
    <div
      id="enquire"
      className="bg-white rounded-lg border border-stone-200/90 shadow-sm p-5 sm:p-7 lg:p-8 transition-shadow duration-300 hover:shadow-md"
    >
      <div className="mb-6">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C5A880] mb-1.5">
          <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
          <span>Complimentary 3D Design Consultation</span>
        </div>
        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#141414] leading-tight">
          {initialLocationName
            ? `Plan Your Kitchen in ${initialLocationName}`
            : "Request a Turnkey Kitchen Estimate"}
        </h3>
        <p className="text-xs sm:text-sm text-stone-600 mt-1.5 leading-relaxed">
          Speak directly with our spatial planning team. Laser measurement, 3D layouts, and material quotation.
        </p>
      </div>

      {submittedData ? (
        <div className="space-y-5 animate-fadeIn">
          {/* Transparent demo submission alert */}
          <div className="p-4 sm:p-5 rounded-md bg-stone-50 border border-stone-300 text-stone-800 space-y-3.5 shadow-sm">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-stone-900 text-sm">
                  Frontend Form Validation Successful!
                </h4>
                <p className="text-xs text-stone-600 mt-0.5">
                  Your inquiry parameters have been validated and recorded locally.
                </p>
              </div>
            </div>

            {/* Clear identified demo state banner */}
            <div className="p-3 bg-amber-50/80 border border-amber-200 rounded text-xs text-amber-950 leading-relaxed">
              <strong className="font-semibold">Demo Notice:</strong> This prototype is running without an
              active email/SMS backend. In production, this trigger sends an instant WhatsApp/SMS notification to our design desk.
              To speak with Miiday Studio immediately, please call or connect via Google Business Profile:
            </div>

            {/* Submitted payload summary */}
            <div className="p-3 bg-white rounded border border-stone-200 text-xs space-y-1.5 font-mono text-stone-700">
              <div className="font-sans font-semibold text-stone-900 pb-1 border-b border-stone-100 flex items-center justify-between">
                <span>Inquiry Summary</span>
                <span className="text-[10px] text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded font-mono">
                  Validated
                </span>
              </div>
              <p><span className="text-stone-500">Name:</span> {submittedData.fullName}</p>
              <p><span className="text-stone-500">Phone:</span> {submittedData.phone}</p>
              {submittedData.email && <p><span className="text-stone-500">Email:</span> {submittedData.email}</p>}
              <p><span className="text-stone-500">Mumbai Locality:</span> {submittedData.locality}</p>
              <p><span className="text-stone-500">Preferred Layout:</span> {submittedData.layout}</p>
              <p><span className="text-stone-500">Stage:</span> {submittedData.stage}</p>
              {submittedData.message && <p><span className="text-stone-500">Note:</span> {submittedData.message}</p>}
            </div>

            <div className="flex flex-col sm:flex-row gap-2.5 pt-1">
              <a
                href={SITE_CONFIG.telLink}
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-sm bg-[#141414] text-white text-xs sm:text-sm font-semibold hover:bg-stone-800 transition-colors shadow-sm"
              >
                <Phone className="w-4 h-4 text-[#C5A880]" />
                <span>Call {SITE_CONFIG.phoneDisplay}</span>
              </a>
              <button
                type="button"
                onClick={handleReset}
                className="inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-sm border border-stone-300 text-stone-700 text-xs sm:text-sm font-medium hover:bg-stone-100 transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset Form</span>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
          {/* Full Name */}
          <div>
            <label className="block font-medium text-stone-800 mb-1">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="e.g. Rahul Sharma"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              className={`w-full px-3.5 py-2.5 sm:py-3 rounded-sm border text-[16px] sm:text-sm ${
                errors.fullName ? "border-red-500 bg-red-50/20" : "border-stone-300"
              } focus:outline-none focus:ring-2 focus:ring-[#141414] focus:border-transparent transition-all`}
            />
            {errors.fullName && (
              <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                <span>{errors.fullName}</span>
              </p>
            )}
          </div>

          {/* Phone and Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-medium text-stone-800 mb-1">
                Contact Phone <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                placeholder="+91 98765 43210"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className={`w-full px-3.5 py-2.5 sm:py-3 rounded-sm border text-[16px] sm:text-sm ${
                  errors.phone ? "border-red-500 bg-red-50/20" : "border-stone-300"
                } focus:outline-none focus:ring-2 focus:ring-[#141414] focus:border-transparent transition-all`}
              />
              {errors.phone && (
                <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  <span>{errors.phone}</span>
                </p>
              )}
            </div>

            <div>
              <label className="block font-medium text-stone-800 mb-1">
                Email Address <span className="text-stone-400 text-xs font-normal">(Optional)</span>
              </label>
              <input
                type="email"
                placeholder="name@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className={`w-full px-3.5 py-2.5 sm:py-3 rounded-sm border text-[16px] sm:text-sm ${
                  errors.email ? "border-red-500 bg-red-50/20" : "border-stone-300"
                } focus:outline-none focus:ring-2 focus:ring-[#141414] focus:border-transparent transition-all`}
              />
              {errors.email && (
                <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  <span>{errors.email}</span>
                </p>
              )}
            </div>
          </div>

          {/* Locality in Mumbai */}
          <div>
            <label className="block font-medium text-stone-800 mb-1">
              Select Mumbai Locality <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <select
                value={formData.locality}
                onChange={(e) => setFormData({ ...formData, locality: e.target.value })}
                className="w-full px-3.5 py-2.5 sm:py-3 rounded-sm border border-stone-300 bg-white text-[16px] sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#141414] focus:border-transparent transition-all text-stone-800"
              >
                {rawLocations.map((loc) => (
                  <option key={loc.id} value={loc.name}>
                    {loc.name} ({loc.region})
                  </option>
                ))}
              </select>
            </div>
            {errors.locality && (
              <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                <span>{errors.locality}</span>
              </p>
            )}
          </div>

          {/* Preferred Layout and Kitchen Stage */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-medium text-stone-800 mb-1">
                Preferred Kitchen Layout
              </label>
              <select
                value={formData.layout}
                onChange={(e) => setFormData({ ...formData, layout: e.target.value })}
                className="w-full px-3.5 py-2.5 sm:py-3 rounded-sm border border-stone-300 bg-white text-[16px] sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#141414] focus:border-transparent transition-all text-stone-800"
              >
                <option value="Parallel Kitchen">Parallel (Galley) Kitchen</option>
                <option value="L-Shaped Kitchen">L-Shaped Modular Kitchen</option>
                <option value="Island Kitchen">Island Kitchen</option>
                <option value="U-Shaped Kitchen">U-Shaped Kitchen</option>
                <option value="Straight Kitchen">Straight (Single Wall) Kitchen</option>
                <option value="Need Architect Recommendation">Need Recommendation</option>
              </select>
            </div>

            <div>
              <label className="block font-medium text-stone-800 mb-1">
                Project Stage
              </label>
              <select
                value={formData.stage}
                onChange={(e) => setFormData({ ...formData, stage: e.target.value })}
                className="w-full px-3.5 py-2.5 sm:py-3 rounded-sm border border-stone-300 bg-white text-[16px] sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#141414] focus:border-transparent transition-all text-stone-800"
              >
                <option value="New Flat Possession">New Flat Possession</option>
                <option value="Renovating Old Kitchen">Renovating Old Kitchen</option>
                <option value="Under Construction (Possession in 3-6 mos)">Under Construction</option>
                <option value="Interior Designer / Architect Project">Designer / Architect</option>
              </select>
            </div>
          </div>

          {/* Message / Dimensions */}
          <div>
            <label className="block font-medium text-stone-800 mb-1">
              Project Notes / Dimensions <span className="text-stone-400 text-xs font-normal">(Optional)</span>
            </label>
            <textarea
              rows={2}
              placeholder="e.g. 10x8 ft kitchen area, interested in matte PU finish and quartz counters..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-sm border border-stone-300 text-[16px] sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#141414] focus:border-transparent transition-all"
            />
          </div>

          {/* Submit CTA */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-sm bg-[#141414] hover:bg-stone-800 text-white font-semibold text-sm transition-all duration-200 shadow-md active:scale-98 disabled:opacity-70"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin text-[#C5A880]" />
                  <span>Validating Request...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4 text-[#C5A880]" />
                  <span>Request Free 3D Design & Price Estimate</span>
                </>
              )}
            </button>
            <p className="text-[11px] text-center text-stone-500 mt-2">
              No spam. Direct coordination from our Mumbai design studio.
            </p>
          </div>
        </form>
      )}
    </div>
  );
}
