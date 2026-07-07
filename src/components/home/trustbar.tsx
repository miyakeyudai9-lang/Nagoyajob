"use client";

import { motion } from "framer-motion";
import { TRUST_BAR_CONTENT } from "@/constants/home/trustbar.constant";
import { useLanguage } from "@/context/LanguageContext";

type TrustBarProps = {
  className?: string;
};

export default function TrustBar({ className = "" }: TrustBarProps) {
  const { lang } = useLanguage();
  const locale = lang === "ja" ? "ja" : "en";

  return (
    <section
      id="trust-bar"
      className={`relative bg-transparent py-14 md:py-20 ${className}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-12 items-start">
          {/* Left intro block */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative overflow-hidden rounded-[32px] border border-white/10 bg-primary p-8 text-white shadow-[0_24px_80px_rgba(2,12,27,0.18)] lg:col-span-5 lg:p-10 lg:sticky lg:top-20"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.14),transparent_32%)]" />
            <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-white/10 blur-3xl" />

            <div className="relative z-10">
              <p className="text-sm font-medium tracking-[0.18em] text-white/65 uppercase">
                {locale === "ja" ? "信頼できるサポート" : "Trusted Support"}
              </p>

              <h2 className="mt-4 text-3xl font-bold leading-tight tracking-[-0.03em] md:text-4xl">
                {locale === "ja"
                  ? "日本での学びと仕事を、もっと確かなものに。"
                  : "A stronger path to study, work, and build your future in Japan."}
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-white/72 md:text-base">
                {locale === "ja"
                  ? "語学学習から就職支援、生活情報まで。必要なサポートを一つにつなげて、次の一歩を安心して進められるようにします。"
                  : "From language learning to job support and practical guidance, we bring the key services together so your next step feels clear and confident."}
              </p>

              <div className="mt-8 grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-white/12 bg-white/8 px-4 py-4 backdrop-blur-sm">
                  <p className="text-2xl font-semibold">N5–N1</p>
                  <p className="mt-1 text-sm text-white/65">
                    {locale === "ja"
                      ? "日本語レベル対応"
                      : "Japanese level support"}
                  </p>
                </div>
                <div className="rounded-2xl border border-white/12 bg-white/8 px-4 py-4 backdrop-blur-sm">
                  <p className="text-2xl font-semibold">1:1</p>
                  <p className="mt-1 text-sm text-white/65">
                    {locale === "ja" ? "個別サポート" : "Personalized guidance"}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right card grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:col-span-7">
            {TRUST_BAR_CONTENT.cards.map((card, index) => {
              const Icon = card.icon;
              const isWide = index === 0;

              return (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.55,
                    ease: "easeOut",
                    delay: TRUST_BAR_CONTENT.animation.enabled
                      ? index * TRUST_BAR_CONTENT.animation.delayStep
                      : 0,
                  }}
                  className={[
                    "group relative overflow-hidden rounded-[28px] border border-slate-200/70 bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(15,23,42,0.10)]",
                    isWide ? "md:col-span-2" : "",
                  ].join(" ")}
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(13,148,136,0.08),transparent_28%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <div className="relative z-10 flex h-full flex-col">
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-white shadow-sm">
                        <Icon className="h-6 w-6" />
                      </div>

                      <div className="h-px flex-1 bg-gradient-to-r from-slate-200 to-transparent" />
                    </div>

                    <div className="mt-7">
                      <h3 className="text-xl font-semibold tracking-[-0.02em] text-slate-900">
                        {card.title[locale]}
                      </h3>

                      <p className="mt-3 max-w-[48ch] text-sm leading-7 text-slate-600 sm:text-[15px]">
                        {card.description[locale]}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
