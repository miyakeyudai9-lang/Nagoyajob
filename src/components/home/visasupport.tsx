"use client";

import { motion } from "framer-motion";
import { CAREER_VISA_SUPPORT_CONTENT } from "@/constants/home/visasupport.constant";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowUpRight } from "lucide-react";

export default function CareerVisaSupportSection() {
  const { lang } = useLanguage();

  return (
    <section
      id="career-support"
      className="relative overflow-hidden py-20 sm:py-24"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-100px] top-20 h-72 w-72 rounded-full bg-black/[0.03] blur-3xl" />
        <div className="absolute right-[-80px] bottom-0 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top header */}
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="inline-flex items-center rounded-full border border-black/10 bg-white/80 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500 backdrop-blur-sm">
              {lang === "ja" ? "キャリア・ビザ支援" : "Career & Visa Support"}
            </span>

            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-primary sm:text-4xl lg:text-5xl">
              {CAREER_VISA_SUPPORT_CONTENT.headline[lang]}
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.05, ease: "easeOut" }}
            className="max-w-2xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8 lg:ml-auto"
          >
            {CAREER_VISA_SUPPORT_CONTENT.intro[lang]}
          </motion.p>
        </div>

        {/* Featured support panel */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="mt-14"
        >
          <div className="relative overflow-hidden rounded-[32px] bg-primary p-8 text-white shadow-[0_20px_70px_rgba(15,23,42,0.16)] sm:p-10">
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] via-transparent to-primary/[0.10]" />

            <div className="relative grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
              {/* Left block */}
              <div>
                <div className="inline-flex rounded-full border border-white/10 bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/75">
                  {CAREER_VISA_SUPPORT_CONTENT.importantNoteLabel[lang]}
                </div>

                <p className="mt-5 text-sm leading-7 text-white/80 sm:text-base sm:leading-8">
                  {CAREER_VISA_SUPPORT_CONTENT.importantNote[lang]}
                </p>

                <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                  <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-white/45">
                    {lang === "ja" ? "対応内容" : "Coverage"}
                  </p>
                  <p className="mt-2 text-lg font-semibold text-white">
                    {lang === "ja"
                      ? "就職準備・応募支援・ビザ相談まで一貫サポート"
                      : "End-to-end support for career preparation, applications, and visa-related consultation"}
                  </p>
                </div>
              </div>

              {/* Right support points */}
              <div className="grid gap-4 sm:grid-cols-2">
                {CAREER_VISA_SUPPORT_CONTENT.supportPoints.map(
                  (point, index) => {
                    const Icon = point.icon;

                    return (
                      <motion.div
                        key={point.id}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{
                          duration: 0.45,
                          delay: CAREER_VISA_SUPPORT_CONTENT.animation.enabled
                            ? index * 0.06
                            : 0,
                          ease: "easeOut",
                        }}
                        className="group rounded-[24px] border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-all duration-300 hover:bg-white/[0.08]"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-white">
                            <Icon className="h-5 w-5" />
                          </div>

                          <ArrowUpRight className="h-4 w-4 text-white/40 transition group-hover:text-white/80" />
                        </div>

                        <p className="mt-5 text-sm leading-6 text-white/80 sm:text-[15px]">
                          {point.text[lang]}
                        </p>
                      </motion.div>
                    );
                  },
                )}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom visa categories */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.65, delay: 0.08, ease: "easeOut" }}
          className="mt-8"
        >
          <div className="rounded-[32px] border border-black/[0.08] bg-white/85 p-6 shadow-[0_8px_30px_rgba(15,23,42,0.05)] backdrop-blur-sm sm:p-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-400">
                  {lang === "ja" ? "サポート対象" : "Eligible Support"}
                </p>
                <h3 className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-primary sm:text-3xl">
                  {CAREER_VISA_SUPPORT_CONTENT.visaCategoriesTitle[lang]}
                </h3>
              </div>

              <p className="max-w-md text-sm leading-7 text-slate-600">
                {lang === "ja"
                  ? "状況に応じて必要な手続きや準備内容をわかりやすく整理し、次のステップへ進めるよう支援します。"
                  : "We help organize the right preparation steps and guidance based on each learner’s career and residency situation."}
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {CAREER_VISA_SUPPORT_CONTENT.visaCategories.map(
                (category, index) => {
                  const Icon = category.icon;

                  return (
                    <motion.div
                      key={category.id}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{
                        duration:
                          CAREER_VISA_SUPPORT_CONTENT.animation.duration,
                        delay: CAREER_VISA_SUPPORT_CONTENT.animation.enabled
                          ? index *
                            CAREER_VISA_SUPPORT_CONTENT.animation.delayStep
                          : 0,
                        ease: "easeOut",
                      }}
                      className="group rounded-[24px] bg-[#f3f3f1] p-5 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_16px_40px_rgba(15,23,42,0.06)]"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary text-white">
                          <Icon className="h-5 w-5" />
                        </div>

                        <div>
                          <p className="text-sm font-medium leading-6 text-slate-800 sm:text-[15px]">
                            {category.text[lang]}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                },
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
