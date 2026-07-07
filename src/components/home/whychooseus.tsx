"use client";

import { motion } from "framer-motion";
import { WHY_CHOOSE_CONTENT } from "@/constants/home/why-choose-us.constant";
import { useLanguage } from "@/context/LanguageContext";
import {
  ArrowUpRight,
  Sparkles,
  Shield,
  Zap,
  TrendingUp,
  Award,
  Users,
} from "lucide-react";

const iconMap = {
  Sparkles,
  Shield,
  Zap,
  TrendingUp,
  Award,
  Users,
};

export default function WhyChooseSection() {
  const { lang } = useLanguage();
  const locale = lang === "ja" ? "ja" : "en";

  const getText = (textObj: any, fallback: string) => {
    if (!textObj) return fallback;
    if (typeof textObj === "string") return textObj;
    return textObj[locale] || textObj.en || fallback;
  };

  const stats = [
    {
      value: "500+",
      label: locale === "ja" ? "生徒様支援" : "Students Supported",
    },
    {
      value: "98%",
      label: locale === "ja" ? "満足度" : "Satisfaction Rate",
    },
    {
      value: "15+",
      label: locale === "ja" ? "提携企業" : "Partner Companies",
    },
    {
      value: "24/7",
      label: locale === "ja" ? "サポート体制" : "Support Available",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#f8fbfc] py-20 sm:py-24 lg:py-28">
      {/* Soft background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-cyan-500/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          {/* Left content panel */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65, ease: "easeOut" }}
              className="relative overflow-hidden rounded-[32px] bg-primary px-6 py-8 text-white shadow-[0_24px_80px_rgba(6,47,56,0.18)] sm:px-8 sm:py-10 lg:sticky lg:top-24"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.16),transparent_32%)]" />
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-white/10 blur-3xl" />

              <div className="relative z-10">
                <div className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/75 backdrop-blur-sm">
                  {locale === "ja" ? "選ばれる理由" : "Why Choose Us"}
                </div>

                <h2 className="mt-5 text-3xl font-bold leading-tight tracking-[-0.03em] sm:text-4xl lg:text-5xl">
                  {getText(
                    WHY_CHOOSE_CONTENT.headline,
                    "Why Choose Nagoya Job",
                  )}
                </h2>

                <p className="mt-5 max-w-xl text-sm leading-7 text-white/78 sm:text-base">
                  {locale === "ja"
                    ? "日本語学習だけでなく、生活・仕事・将来設計まで見据えた実践的な支援を、一人ひとりに合わせてご提供します。"
                    : "We go beyond language learning with practical support for life, work, and long-term success in Japan."}
                </p>

                <div className="mt-8 grid grid-cols-2 gap-3">
                  {stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-2xl border border-white/12 bg-white/10 px-4 py-4 backdrop-blur-sm"
                    >
                      <div className="text-2xl font-bold">{stat.value}</div>
                      <div className="mt-1 text-sm text-white/68">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 h-px w-full bg-white/12" />

                <a
                  href={locale === "ja" ? "/#contact" : "/en/#contact"}
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary transition hover:-translate-y-0.5 hover:bg-white/95"
                >
                  {locale === "ja"
                    ? "無料相談を予約する"
                    : "Book Free Consultation"}
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right feature grid */}
          <div className="lg:col-span-7">
            <div className="grid gap-5 sm:grid-cols-2">
              {WHY_CHOOSE_CONTENT.points.map((point, index) => {
                const Icon =
                  iconMap[point.icon as keyof typeof iconMap] || Sparkles;
                const featured = index === 0;

                return (
                  <motion.article
                    key={point.id}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{
                      duration: 0.55,
                      delay: index * 0.08,
                      ease: "easeOut",
                    }}
                    className={[
                      "group relative overflow-hidden rounded-[28px] border border-slate-200/70 bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.06)] transition-shadow duration-300 hover:shadow-[0_18px_50px_rgba(15,23,42,0.10)]",
                      featured ? "sm:col-span-2 p-7 sm:p-8" : "",
                    ].join(" ")}
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(13,148,136,0.08),transparent_30%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                    <div className="relative z-10 flex h-full flex-col">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-white shadow-sm transition duration-300 group-hover:scale-105">
                          <Icon className="h-6 w-6" />
                        </div>

                        <div className="h-px flex-1 self-center bg-gradient-to-r from-slate-200 to-transparent" />
                      </div>

                      <div className="mt-6">
                        <h3 className="text-xl font-semibold tracking-[-0.02em] text-slate-900">
                          {getText(point.title, "Feature Title")}
                        </h3>

                        <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-[15px]">
                          {getText(
                            point.description,
                            "Feature description goes here",
                          )}
                        </p>
                      </div>

                      <div className="mt-6 pt-2">
                        <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition group-hover:gap-3">
                          {locale === "ja" ? "詳細を見る" : "Learn More"}
                          <ArrowUpRight className="h-4 w-4" />
                        </span>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
