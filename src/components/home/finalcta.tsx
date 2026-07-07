"use client";

import { motion } from "framer-motion";
import { FINAL_CTA_CONTENT } from "@/constants/home/finalcta.constant";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowRight } from "lucide-react";

export default function FinalCtaSection() {
  const { lang } = useLanguage();

  return (
    <section
      id="final-cta"
      className="relative overflow-hidden bg-[#f8fbfc] py-20 sm:py-24 lg:py-28"
    >
      {/* Soft background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-120px] top-10 h-72 w-72 rounded-full bg-primary/8 blur-3xl" />
        <div className="absolute right-[-100px] bottom-0 h-80 w-80 rounded-full bg-sky-200/40 blur-3xl" />
        <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/70 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[36px] border border-slate-200/70 bg-white/85 shadow-[0_25px_80px_rgba(15,23,42,0.08)] backdrop-blur-xl">
          <div className="grid gap-0 lg:grid-cols-[1.08fr_0.92fr]">
            {/* Left content */}
            <div className="relative px-6 py-12 sm:px-10 sm:py-14 lg:px-14 lg:py-16">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(13,148,136,0.10),transparent_28%)]" />

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, ease: "easeOut" }}
                className="relative"
              >
                <span className="inline-flex items-center rounded-full border border-primary/10 bg-primary/[0.06] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary/80">
                  {lang === "ja"
                    ? "無料相談受付中"
                    : "Free Consultation Available"}
                </span>

                <h2 className="mt-6 max-w-3xl text-3xl font-semibold tracking-[-0.05em] text-slate-900 sm:text-4xl lg:text-5xl xl:text-[56px] xl:leading-[1.02]">
                  {FINAL_CTA_CONTENT.headline[lang]}
                </h2>

                <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                  {FINAL_CTA_CONTENT.description[lang]}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: 0.12, ease: "easeOut" }}
                className="mt-10 flex flex-wrap gap-3"
              >
                <div className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600 shadow-sm">
                  {lang === "ja" ? "オンライン対応" : "Online Support"}
                </div>
                <div className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600 shadow-sm">
                  {lang === "ja" ? "対面相談可能" : "In-Person Available"}
                </div>
                <div className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600 shadow-sm">
                  {lang === "ja" ? "日本語・英語対応" : "Japanese & English"}
                </div>
              </motion.div>
            </div>

            {/* Right action panel */}
            <div className="relative border-t border-slate-200/70 bg-slate-50/80 px-6 py-10 sm:px-10 lg:border-l lg:border-t-0 lg:px-12 lg:py-16">
              <div className="absolute inset-0 bg-gradient-to-br from-white/70 via-transparent to-primary/[0.04]" />

              <div className="relative">
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <p className="text-sm font-medium text-slate-500">
                    {lang === "ja"
                      ? "今すぐ次の一歩を始めましょう"
                      : "Take the next step today"}
                  </p>
                </motion.div>

                <div className="mt-6 flex flex-col gap-4">
                  {FINAL_CTA_CONTENT.buttons.map((btn, index) => {
                    const Icon = btn.icon;
                    const isPrimary = index === 0 || btn.variant === "primary";

                    return (
                      <motion.a
                        key={btn.id}
                        href={btn.href[lang]}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{
                          duration: FINAL_CTA_CONTENT.animation.duration,
                          delay: FINAL_CTA_CONTENT.animation.enabled
                            ? index * FINAL_CTA_CONTENT.animation.delayStep
                            : 0,
                          ease: "easeOut",
                        }}
                        className={[
                          "group inline-flex w-full items-center justify-between rounded-[22px] border px-5 py-4 text-left transition-all duration-300 hover:-translate-y-0.5",
                          isPrimary
                            ? "border-transparent bg-primary text-white shadow-[0_14px_34px_rgba(13,148,136,0.22)] hover:bg-primary/95"
                            : "border-slate-200 bg-white text-slate-900 hover:border-slate-300 hover:bg-slate-50",
                        ].join(" ")}
                      >
                        <span className="flex items-center gap-3">
                          <span
                            className={[
                              "flex h-10 w-10 items-center justify-center rounded-full",
                              isPrimary
                                ? "bg-white/14 text-white"
                                : "bg-slate-100 text-slate-700",
                            ].join(" ")}
                          >
                            <Icon className="h-4 w-4" />
                          </span>

                          <span className="text-sm font-semibold sm:text-base">
                            {btn.text[lang]}
                          </span>
                        </span>

                        <ArrowRight
                          className={[
                            "h-4 w-4 transition-transform duration-300 group-hover:translate-x-1",
                            isPrimary ? "text-white/90" : "text-slate-500",
                          ].join(" ")}
                        />
                      </motion.a>
                    );
                  })}
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
                  className="mt-8 rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <p className="text-sm text-slate-600">
                    {lang === "ja"
                      ? "学習、就職、生活支援まで一貫してご案内します。"
                      : "We guide you across study, career support, and life in Japan in one place."}
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
