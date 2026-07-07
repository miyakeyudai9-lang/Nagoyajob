"use client";

import { motion } from "framer-motion";
import { COURSE_ROADMAP_CONTENT } from "@/constants/home/course.constant";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowRight } from "lucide-react";

export default function CourseRoadmapSection() {
  const { lang } = useLanguage();

  return (
    <section id="courses" className="relative overflow-hidden py-20 sm:py-24">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-80px] top-20 h-72 w-72 rounded-full bg-black/[0.03] blur-3xl" />
        <div className="absolute right-[-100px] bottom-0 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />
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
            {lang === "ja" ? "コースロードマップ" : "Course Roadmap"}
          </span>

          <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-primary sm:text-4xl lg:text-5xl">
            {COURSE_ROADMAP_CONTENT.headline[lang]}
          </h2>

          <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
            {COURSE_ROADMAP_CONTENT.intro[lang]}
          </p>
        </motion.div>

        {/* Roadmap cards */}
        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-5">
          {COURSE_ROADMAP_CONTENT.levels.map((item, index) => {
            const Icon = item.icon;
            const isFeatured = index === 2;

            return (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: COURSE_ROADMAP_CONTENT.animation.duration,
                  delay: COURSE_ROADMAP_CONTENT.animation.enabled
                    ? index * COURSE_ROADMAP_CONTENT.animation.delayStep
                    : 0,
                  ease: "easeOut",
                }}
                className={[
                  "group relative flex h-full flex-col overflow-hidden rounded-[28px] border transition-shadow duration-300",
                  " hover:shadow-[0_18px_50px_rgba(15,23,42,0.08)]",
                  isFeatured
                    ? "border-black/[0.1] bg-primary p-6 text-white"
                    : "border-black/[0.08] bg-white/85 p-6 shadow-[0_8px_30px_rgba(15,23,42,0.05)] backdrop-blur-sm",
                ].join(" ")}
              >
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/[0.05] via-transparent to-black/[0.03] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="relative flex h-full flex-col">
                  <div className="flex items-start justify-between gap-4">
                    <span
                      className={[
                        "inline-flex rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em]",
                        isFeatured
                          ? "bg-white/10 text-white"
                          : "bg-[#f3f3f1] text-slate-600",
                      ].join(" ")}
                    >
                      {item.level}
                    </span>

                    <div
                      className={[
                        "flex h-11 w-11 items-center justify-center rounded-2xl",
                        isFeatured
                          ? "bg-white/10 text-white"
                          : "bg-primary text-white",
                      ].join(" ")}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>

                  <h3
                    className={[
                      "mt-8 text-xl font-semibold tracking-[-0.02em]",
                      isFeatured ? "text-white" : "text-primary",
                    ].join(" ")}
                  >
                    {item.title[lang]}
                  </h3>

                  <p
                    className={[
                      "mt-4 text-sm leading-7",
                      isFeatured ? "text-white/75" : "text-slate-600",
                    ].join(" ")}
                  >
                    {item.description[lang]}
                  </p>

                  <div className="mt-auto pt-8">
                    <div
                      className={[
                        "h-px w-full",
                        isFeatured ? "bg-white/10" : "bg-black/[0.08]",
                      ].join(" ")}
                    />
                    <div className="mt-4 flex items-center justify-between">
                      <span
                        className={[
                          "text-[11px] font-medium uppercase tracking-[0.18em]",
                          isFeatured ? "text-white/50" : "text-slate-400",
                        ].join(" ")}
                      >
                        {lang === "ja" ? "学習ステップ" : "Learning Step"}
                      </span>

                      <ArrowRight
                        className={[
                          "h-4 w-4 transition-transform duration-300 group-hover:translate-x-1",
                          isFeatured ? "text-white/70" : "text-slate-400",
                        ].join(" ")}
                      />
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Extra labels */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          {COURSE_ROADMAP_CONTENT.extraLabels.map((label) => {
            const Icon = label.icon;

            return (
              <div
                key={label.id}
                className="inline-flex items-center gap-2 rounded-full border border-black/[0.08] bg-white/85 px-4 py-2 text-sm font-medium text-slate-700 shadow-[0_6px_20px_rgba(15,23,42,0.04)] backdrop-blur-sm"
              >
                <Icon className="h-4 w-4 text-primary" />
                <span>{label.text[lang]}</span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
