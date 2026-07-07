"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CONTACT_CONTENT } from "@/constants/home/contact.constant";
import { useLanguage } from "@/context/LanguageContext";
import {
  MapPin,
  Phone,
  Mail,
  Loader2,
  Smartphone,
  ArrowUpRight,
  ChevronRight,
} from "lucide-react";
import toast from "react-hot-toast";

type FormState = {
  fullName: string;
  nationality: string;
  currentLocation: string;
  whatsapp: string;
  email: string;
  japaneseLevel: string;
  interestedService: string;
  visaStatus: string;
  preferredStudyMode: string;
  message: string;
};

const initialFormState: FormState = {
  fullName: "",
  nationality: "",
  currentLocation: "",
  whatsapp: "",
  email: "",
  japaneseLevel: "",
  interestedService: "",
  visaStatus: "",
  preferredStudyMode: "",
  message: "",
};

export default function ContactSection() {
  const { lang } = useLanguage();
  const [formData, setFormData] = useState<FormState>(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const data = new FormData();
    data.append("fullName", formData.fullName);
    data.append("nationality", formData.nationality);
    data.append("currentLocation", formData.currentLocation);
    data.append("whatsapp", formData.whatsapp);
    data.append("email", formData.email);
    data.append("japaneseLevel", formData.japaneseLevel);
    data.append("interestedService", formData.interestedService);
    data.append("visaStatus", formData.visaStatus);
    data.append("preferredStudyMode", formData.preferredStudyMode);
    data.append("message", formData.message);
    data.append("language", lang);
    data.append("agreeToTerms", "true");

    try {
      const res = await fetch("https://nagoyajob.jp/send.php", {
        method: "POST",
        body: data,
      });

      if (!res.ok) {
        toast.error("Failed to send message");
        return;
      }

      toast.success("Message sent successfully");
      setFormData(initialFormState);
    } catch (error) {
      console.log(error);
      toast.error("Failed to send message");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass =
    "w-full rounded-2xl border border-black/[0.08] bg-[#f8f8f6] px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-slate-900 focus:bg-white focus:ring-4 focus:ring-black/[0.04]";

  const labelClass =
    "mb-2 block text-[13px] font-medium tracking-[-0.01em] text-slate-700";

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#f6f6f4] py-20 sm:py-24"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-100px] top-16 h-72 w-72 rounded-full bg-black/[0.03] blur-3xl" />
        <div className="absolute right-[-80px] bottom-0 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center rounded-full border border-black/10 bg-white/80 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500 backdrop-blur-sm">
            {lang === "ja" ? "お問い合わせ" : "Contact"}
          </span>

          <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-primary sm:text-4xl lg:text-5xl">
            {CONTACT_CONTENT.headline[lang]}
          </h2>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-[0.9fr_1.1fr] items-start">
          {/* Left info panel */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="overflow-hidden rounded-[32px] bg-primary text-white shadow-[0_20px_70px_rgba(15,23,42,0.16)] lg:sticky lg:top-20"
          >
            <div className="relative h-full p-8 sm:p-10">
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] via-transparent to-primary/[0.10]" />

              <div className="relative">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/55">
                  {lang === "ja" ? "相談窓口" : "Support Desk"}
                </p>

                <h3 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl">
                  {CONTACT_CONTENT.schoolInfo.name[lang]}
                </h3>

                <p className="mt-4 max-w-md text-sm leading-7 text-white/72 sm:text-[15px]">
                  {lang === "ja"
                    ? "日本語学習から就職・ビザ相談まで、一人ひとりに合わせてご案内します。"
                    : "From Japanese study to career and visa support, we guide each learner with practical next steps."}
                </p>

                <div className="mt-8 space-y-5">
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-1 h-5 w-5 shrink-0 text-white/85" />
                    <p className="text-sm leading-7 text-white/72">
                      {CONTACT_CONTENT.schoolInfo.address[lang]}
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="mt-1 h-5 w-5 shrink-0 text-white/85" />
                    <a
                      href={`mailto:${CONTACT_CONTENT.schoolInfo.email}`}
                      className="text-sm leading-7 text-white/72 transition hover:text-white"
                    >
                      {CONTACT_CONTENT.schoolInfo.email}
                    </a>
                  </div>
                </div>

                {/* Campus Locations Section */}
                {CONTACT_CONTENT.campusLocations && (
                  <div className="mt-8 pt-6 border-t border-white/15">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/55">
                      {CONTACT_CONTENT.campusLocations.headline[lang]}
                    </p>
                    <div className="mt-4 space-y-4">
                      {CONTACT_CONTENT.campusLocations.locations.map(
                        (location) => (
                          <div key={location.id} className="space-y-1">
                            <p className="text-sm font-semibold text-white">
                              {location.name[lang]}
                            </p>
                            <p className="text-xs leading-5 text-white/65">
                              {location.address[lang]}
                            </p>
                            <a
                              href={`tel:${location.phone}`}
                              className="inline-flex items-center gap-1 text-xs text-white/55 transition hover:text-white/85"
                            >
                              <Phone className="h-3 w-3" />
                              {location.phone}
                            </a>
                          </div>
                        ),
                      )}
                    </div>
                  </div>
                )}

                <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                  {CONTACT_CONTENT.quickActions.map((action) => {
                    const Icon = action.icon;

                    return (
                      <a
                        key={action.id}
                        href={action.href}
                        target="_blank"
                        rel="noreferrer"
                        className="group inline-flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm font-medium text-white/90 transition hover:bg-white/[0.10]"
                      >
                        <span className="inline-flex items-center gap-2">
                          <Icon className="h-4 w-4" />
                          {action.text[lang]}
                        </span>
                        <ArrowUpRight className="h-4 w-4 opacity-60 transition group-hover:opacity-100" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right form */}
          <motion.form
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.06, ease: "easeOut" }}
            onSubmit={handleSubmit}
            className="rounded-[32px] border border-black/[0.08] bg-white/88 p-6 shadow-[0_8px_30px_rgba(15,23,42,0.05)] backdrop-blur-sm sm:p-8"
          >
            <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                  {lang === "ja" ? "相談フォーム" : "Inquiry Form"}
                </p>
                <h3 className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-primary">
                  {lang === "ja"
                    ? "お気軽にご相談ください"
                    : "Tell us about your goals"}
                </h3>
              </div>

              <p className="max-w-sm text-sm leading-7 text-slate-500">
                {lang === "ja"
                  ? "必要な内容を入力いただければ、状況に応じてご案内します。"
                  : "Share a few details and we'll guide you to the right next step."}
              </p>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="fullName" className={labelClass}>
                  {CONTACT_CONTENT.form.fields.fullName.label[lang]}
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder={
                    CONTACT_CONTENT.form.fields.fullName.placeholder[lang]
                  }
                  className={inputClass}
                  required
                />
              </div>

              <div>
                <label htmlFor="nationality" className={labelClass}>
                  {CONTACT_CONTENT.form.fields.nationality.label[lang]}
                </label>
                <input
                  id="nationality"
                  name="nationality"
                  value={formData.nationality}
                  onChange={handleChange}
                  placeholder={
                    CONTACT_CONTENT.form.fields.nationality.placeholder[lang]
                  }
                  className={inputClass}
                />
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="currentLocation" className={labelClass}>
                  {CONTACT_CONTENT.form.fields.currentLocation.label[lang]}
                </label>
                <input
                  id="currentLocation"
                  name="currentLocation"
                  value={formData.currentLocation}
                  onChange={handleChange}
                  placeholder={
                    CONTACT_CONTENT.form.fields.currentLocation.placeholder[
                      lang
                    ]
                  }
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="whatsapp" className={labelClass}>
                  {CONTACT_CONTENT.form.fields.whatsapp.label[lang]}
                </label>
                <input
                  id="whatsapp"
                  name="whatsapp"
                  value={formData.whatsapp}
                  onChange={handleChange}
                  placeholder={
                    CONTACT_CONTENT.form.fields.whatsapp.placeholder[lang]
                  }
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="email" className={labelClass}>
                  {CONTACT_CONTENT.form.fields.email.label[lang]}
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={
                    CONTACT_CONTENT.form.fields.email.placeholder[lang]
                  }
                  className={inputClass}
                  required
                />
              </div>

              <div>
                <label htmlFor="japaneseLevel" className={labelClass}>
                  {CONTACT_CONTENT.form.fields.japaneseLevel.label[lang]}
                </label>
                <select
                  id="japaneseLevel"
                  name="japaneseLevel"
                  value={formData.japaneseLevel}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option value="">
                    {
                      CONTACT_CONTENT.form.fields.japaneseLevel.placeholder[
                        lang
                      ]
                    }
                  </option>
                  {CONTACT_CONTENT.form.japaneseLevelOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label[lang]}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="interestedService" className={labelClass}>
                  {CONTACT_CONTENT.form.fields.interestedService.label[lang]}
                </label>
                <select
                  id="interestedService"
                  name="interestedService"
                  value={formData.interestedService}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option value="">
                    {
                      CONTACT_CONTENT.form.fields.interestedService.placeholder[
                        lang
                      ]
                    }
                  </option>
                  {CONTACT_CONTENT.form.serviceOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label[lang]}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="visaStatus" className={labelClass}>
                  {CONTACT_CONTENT.form.fields.visaStatus.label[lang]}
                </label>
                <input
                  id="visaStatus"
                  name="visaStatus"
                  value={formData.visaStatus}
                  onChange={handleChange}
                  placeholder={
                    CONTACT_CONTENT.form.fields.visaStatus.placeholder[lang]
                  }
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="preferredStudyMode" className={labelClass}>
                  {CONTACT_CONTENT.form.fields.preferredStudyMode.label[lang]}
                </label>
                <select
                  id="preferredStudyMode"
                  name="preferredStudyMode"
                  value={formData.preferredStudyMode}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option value="">
                    {
                      CONTACT_CONTENT.form.fields.preferredStudyMode
                        .placeholder[lang]
                    }
                  </option>
                  {CONTACT_CONTENT.form.studyModeOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label[lang]}
                    </option>
                  ))}
                </select>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="message" className={labelClass}>
                  {CONTACT_CONTENT.form.fields.message.label[lang]}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={
                    CONTACT_CONTENT.form.fields.message.placeholder[lang]
                  }
                  className={`${inputClass} min-h-36 resize-none`}
                />
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-4 border-t border-black/[0.06] pt-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-slate-500">
                {lang === "ja"
                  ? "通常1〜2営業日以内にご返信します。"
                  : "We usually reply within 1–2 business days."}
              </p>

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex min-w-[200px] items-center justify-center rounded-2xl bg-primary px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-black disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  CONTACT_CONTENT.form.submitText[lang]
                )}
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
