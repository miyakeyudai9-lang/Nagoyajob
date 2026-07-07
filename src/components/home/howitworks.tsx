"use client";

import { motion } from "framer-motion";
import { HOW_IT_WORKS_CONTENT } from "@/constants/home/howitworks.constant";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowRight } from "lucide-react";

export default function HowItWorksSection() {
  const { lang } = useLanguage();

  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden py-20 sm:py-24"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-100px] top-16 h-72 w-72 rounded-full bg-black/[0.03] blur-3xl" />
        <div className="absolute right-[-80px] bottom-0 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center rounded-full border border-black/10 bg-white/80 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500 backdrop-blur-sm">
            {lang === "ja" ? "ご利用の流れ" : "How It Works"}
          </span>

          <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-primary sm:text-4xl lg:text-5xl">
            {HOW_IT_WORKS_CONTENT.headline[lang]}
          </h2>
        </motion.div>

        {/* Journey layout */}
        <div className="mt-14 space-y-4">
          {/* Featured first step */}
          {HOW_IT_WORKS_CONTENT.steps[0] &&
            (() => {
              const Icon = HOW_IT_WORKS_CONTENT.steps[0].icon;
              return (
                <motion.article
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.55, ease: "easeOut" }}
                  className="overflow-hidden rounded-[30px] bg-primary text-white shadow-[0_20px_70px_rgba(15,23,42,0.16)]"
                >
                  <div className="grid gap-6 p-8 sm:p-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
                    <div>
                      <div className="inline-flex rounded-full border border-white/10 bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/70">
                        STEP 01
                      </div>

                      <h3 className="mt-6 text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl">
                        {HOW_IT_WORKS_CONTENT.steps[0].title[lang]}
                      </h3>
                    </div>

                    <div className="flex items-start gap-5">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-white">
                        <Icon className="h-6 w-6" />
                      </div>

                      <p className="max-w-2xl text-sm leading-7 text-white/78 sm:text-[15px]">
                        {HOW_IT_WORKS_CONTENT.steps[0].description[lang]}
                      </p>
                    </div>
                  </div>
                </motion.article>
              );
            })()}

          {/* Remaining steps */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
            {HOW_IT_WORKS_CONTENT.steps.slice(1).map((step, index) => {
              const Icon = step.icon;
              const stepNumber = index + 2;

              return (
                <motion.article
                  key={step.id}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: HOW_IT_WORKS_CONTENT.animation.duration,
                    delay: HOW_IT_WORKS_CONTENT.animation.enabled
                      ? index * HOW_IT_WORKS_CONTENT.animation.delayStep
                      : 0,
                    ease: "easeOut",
                  }}
                  className="group relative flex h-full flex-col overflow-hidden rounded-[28px] border border-black/[0.08] bg-white/85 p-6 shadow-[0_8px_30px_rgba(15,23,42,0.05)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(15,23,42,0.08)]"
                >
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/[0.04] via-transparent to-black/[0.02] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <div className="relative flex h-full flex-col">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-white shadow-sm">
                        <Icon className="h-5 w-5" />
                      </div>

                      <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-400">
                        {String(stepNumber).padStart(2, "0")}
                      </span>
                    </div>

                    <h3 className="mt-8 text-xl font-semibold tracking-[-0.02em] text-primary">
                      {step.title[lang]}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-[15px]">
                      {step.description[lang]}
                    </p>

                    <div className="mt-auto pt-8">
                      <div className="h-px w-full bg-black/[0.08]" />
                      <div className="mt-4 flex items-center justify-between">
                        <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-400">
                          {lang === "ja" ? "次のステップへ" : "Next Step"}
                        </span>
                        <ArrowRight className="h-4 w-4 text-slate-400 transition-transform duration-300 group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.12, ease: "easeOut" }}
          className="mt-10 rounded-[28px] border border-black/[0.08] bg-white/85 p-6 text-center shadow-[0_8px_30px_rgba(15,23,42,0.05)] backdrop-blur-sm sm:p-8"
        >
          <h3 className="text-lg font-semibold tracking-[-0.02em] text-primary sm:text-xl">
            {lang === "ja"
              ? "一人ひとりに合った流れでサポートします"
              : "We guide you with the right support at every step"}
          </h3>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            {lang === "ja"
              ? "日本語学習、面接準備、就職サポート、ビザに関する流れまで、目標に合わせて分かりやすくご案内します。"
              : "Whether your goal is learning Japanese, preparing for interviews, finding a job, or understanding visa options, we help you move forward with clarity and confidence."}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
