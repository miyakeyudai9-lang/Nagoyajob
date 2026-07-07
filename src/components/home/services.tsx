"use client";

import { motion } from "framer-motion";
import { SERVICES_CONTENT } from "@/constants/home/services.constant";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowUpRight } from "lucide-react";

type ServicesSectionProps = {
  className?: string;
};

export default function ServicesSection({
  className = "",
}: ServicesSectionProps) {
  const { lang } = useLanguage();
  const locale = lang;

  return (
    <section
      id="services"
      className={`relative overflow-hidden py-20 sm:py-24 ${className}`}
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-100px] top-20 h-72 w-72 rounded-full bg-black/[0.03] blur-3xl" />
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
            {SERVICES_CONTENT.sectionLabel[locale]}
          </span>

          <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-primary sm:text-4xl lg:text-5xl">
            {SERVICES_CONTENT.headline[locale]}
          </h2>

          <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
            {SERVICES_CONTENT.intro[locale]}
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {SERVICES_CONTENT.cards.map((card, index) => {
            const Icon = card.icon;

            return (
              <motion.article
                key={card.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: SERVICES_CONTENT.animation.duration,
                  delay: SERVICES_CONTENT.animation.enabled
                    ? index * SERVICES_CONTENT.animation.delayStep
                    : 0,
                  ease: "easeOut",
                }}
                className="group relative flex h-full flex-col overflow-hidden rounded-[28px] border border-black/[0.08] bg-white/85 p-6 shadow-[0_8px_30px_rgba(15,23,42,0.05)] backdrop-blur-sm transition-shadow duration-300 hover:shadow-[0_18px_50px_rgba(15,23,42,0.08)]"
              >
                {/* subtle glow */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/[0.04] via-transparent to-black/[0.02] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="relative flex h-full flex-col">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary text-white shadow-sm">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>

                  <h3 className="mt-8 text-xl font-semibold tracking-[-0.02em] text-primary">
                    {card.title[locale]}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-[15px]">
                    {card.description[locale]}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
