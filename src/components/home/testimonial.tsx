"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import Image from "next/image";
import { TESTIMONIALS_CONTENT } from "@/constants/home/testimonial.constant";
import { useLanguage } from "@/context/LanguageContext";

export default function TestimonialsSection() {
  const { lang } = useLanguage();
  const locale = lang === "ja" ? "ja" : "en";
  const items = TESTIMONIALS_CONTENT.items;

  const featured = items[0];
  const secondary = items.slice(1, 5);
  const compact = items.slice(5);

  const sectionLabel = locale === "ja" ? "受講者の声" : "Testimonials";

  const bottomText =
    locale === "ja"
      ? "学習から就職まで、多くの受講生に選ばれています"
      : "Chosen by students building their future through study and career support";

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-[#f8fafc] py-20 sm:py-24 lg:py-28"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-120px] top-10 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute right-[-100px] top-1/3 h-72 w-72 rounded-full bg-violet-400/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-sky-300/10 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.03)_1px,transparent_1px)] bg-[size:32px_32px] opacity-30" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="inline-flex items-center rounded-full border border-primary/10 bg-white/80 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500 shadow-sm backdrop-blur-sm">
            {sectionLabel}
          </div>

          <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-primary sm:text-4xl lg:text-5xl">
            {TESTIMONIALS_CONTENT.headline[locale]}
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
            {TESTIMONIALS_CONTENT.intro[locale]}
          </p>
        </motion.div>

        {/* Main creative layout */}
        <div className="mt-14 grid gap-6 lg:grid-cols-12">
          {/* Featured card */}
          {featured && (
            <motion.article
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative overflow-hidden rounded-[32px] bg-[#10233e] p-8 text-white shadow-[0_24px_80px_rgba(15,23,42,0.22)] lg:col-span-5 lg:p-10"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.14),transparent_30%)]" />
              <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-white/10 blur-3xl" />
              <Quote className="absolute right-8 top-8 h-20 w-20 text-white/10" />

              <div className="relative z-10 flex h-full flex-col">
                <div className="flex items-center gap-4">
                  <div className="relative h-14 w-14 overflow-hidden rounded-2xl ring-2 ring-white/15">
                    <Image
                      src={featured.image}
                      alt={featured.title?.[locale] || featured.name}
                      fill
                      sizes="56px"
                      className="object-cover"
                    />
                  </div>

                  <div>
                    <h3 className="text-base font-semibold">{featured.name}</h3>
                    <p className="text-sm text-white/65">
                      {locale === "ja"
                        ? "受講者 / 卒業生"
                        : "Verified Graduate"}
                    </p>
                  </div>
                </div>

                <blockquote className="mt-8 text-xl font-medium leading-9 tracking-[-0.02em] text-white/95 sm:text-2xl">
                  “{featured.quote[locale]}”
                </blockquote>

                <div className="mt-8 flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-current text-amber-300"
                    />
                  ))}
                </div>

                <p className="mt-4 max-w-md text-sm leading-6 text-white/65">
                  {featured.title?.[locale] ??
                    (locale === "ja"
                      ? "サポート体験に関するレビュー"
                      : "Review about the support experience")}
                </p>
              </div>
            </motion.article>
          )}

          {/* Right stacked grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:col-span-7">
            {secondary.map((item, index) => {
              const tones = [
                "bg-white text-slate-900 border-slate-200/70",
                "bg-[#6f3df4] text-white border-transparent",
                "bg-[#eaf2ff] text-slate-900 border-transparent",
                "bg-[#1e293b] text-white border-transparent",
              ];

              const tone = tones[index % tones.length];
              const isDark = tone.includes("text-white");

              return (
                <motion.article
                  key={item.id}
                  initial={{ opacity: 0, y: 26 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.06,
                    ease: "easeOut",
                  }}
                  className={`group relative overflow-hidden rounded-[28px] border p-6 shadow-[0_10px_30px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-1 ${tone}`}
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_28%)] opacity-80" />

                  <div className="relative z-10 flex h-full flex-col">
                    <div className="flex items-center gap-3">
                      <div className="relative h-11 w-11 overflow-hidden rounded-2xl bg-white/20 ring-1 ring-black/5">
                        <Image
                          src={item.image}
                          alt={item.title?.[locale] || item.name}
                          fill
                          sizes="44px"
                          className="object-cover"
                        />
                      </div>

                      <div>
                        <h3
                          className={`text-sm font-semibold ${
                            isDark ? "text-white" : "text-slate-900"
                          }`}
                        >
                          {item.name}
                        </h3>
                        <p
                          className={`text-[11px] ${
                            isDark ? "text-white/65" : "text-slate-500"
                          }`}
                        >
                          {locale === "ja"
                            ? "受講者 / 卒業生"
                            : "Verified Graduate"}
                        </p>
                      </div>
                    </div>

                    <blockquote
                      className={`mt-5 text-[15px] leading-7 ${
                        isDark ? "text-white/90" : "text-slate-700"
                      }`}
                    >
                      “{item.quote[locale]}”
                    </blockquote>

                    <div className="mt-auto pt-6">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-3.5 w-3.5 fill-current ${
                              isDark ? "text-white/80" : "text-amber-400"
                            }`}
                          />
                        ))}
                      </div>

                      <p
                        className={`mt-3 text-xs leading-5 ${
                          isDark ? "text-white/65" : "text-slate-500"
                        }`}
                      >
                        {item.title?.[locale] ??
                          (locale === "ja"
                            ? "サポート体験に関するレビュー"
                            : "Review about the support experience")}
                      </p>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* Bottom ribbon testimonials */}
        {compact.length > 0 && (
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {compact.map((item, index) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.5,
                  delay: 0.12 + index * 0.05,
                  ease: "easeOut",
                }}
                className="relative overflow-hidden rounded-[24px] border border-slate-200/70 bg-white/80 p-5 shadow-[0_8px_24px_rgba(15,23,42,0.06)] backdrop-blur-sm"
              >
                <div className="flex items-start gap-4">
                  <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-2xl">
                    <Image
                      src={item.image}
                      alt={item.title?.[locale] || item.name}
                      fill
                      sizes="48px"
                      className="object-cover"
                    />
                  </div>

                  <div className="min-w-0">
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="text-sm font-semibold text-slate-900">
                        {item.name}
                      </h3>

                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-3.5 w-3.5 fill-current text-amber-400"
                          />
                        ))}
                      </div>
                    </div>

                    <blockquote className="mt-2 text-sm leading-6 text-slate-600">
                      “{item.quote[locale]}”
                    </blockquote>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        )}

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, delay: 0.12 }}
          className="mt-10 text-center text-sm text-slate-500"
        >
          {bottomText}
        </motion.p>
      </div>
    </section>
  );
}
