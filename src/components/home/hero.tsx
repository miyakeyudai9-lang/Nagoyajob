"use client";

import { HERO_CONTENT } from "@/constants/home/hero.constant";
import { useLanguage } from "@/context/LanguageContext";
import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.08,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

const getLocalizedText = (
  value: string | { ja: string; en: string } | undefined,
  language: "ja" | "en",
  fallback = "",
) => {
  if (!value) return fallback;
  if (typeof value === "string") return value;
  return value[language] || value.en || fallback;
};

const splitHeadline = (headline: string) => {
  if (!headline) return ["", ""];

  const words = headline.trim().split(" ");
  if (words.length <= 4) return [headline, ""];

  const mid = Math.ceil(words.length / 2);
  return [words.slice(0, mid).join(" "), words.slice(mid).join(" ")];
};

export const HeroSection = () => {
  const { lang } = useLanguage();
  const [mounted, setMounted] = useState(false);
  const language = (lang === "ja" ? "ja" : "en") as "ja" | "en";
  const content = HERO_CONTENT;

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!content) {
    return <div>Error: Hero content missing</div>;
  }

  const headline = getLocalizedText(
    content.headline,
    language,
    "Welcome to Nagoya Job",
  );

  const subheadline = getLocalizedText(
    content.subheadline,
    language,
    "Your trusted partner for Japanese language learning and career support in Japan",
  );

  const supplemental = getLocalizedText(content.supplemental, language, "");

  const backgroundSrc = content.background?.src || "/banner.webp";
  const backgroundAlt = getLocalizedText(
    content.background?.alt,
    language,
    "Hero background image",
  );

  const [titleLine1, titleLine2] = splitHeadline(headline);
  const primaryCta = content.ctaButtons?.[0];
  const secondaryCtas = content.ctaButtons?.slice(1) || [];

  if (!mounted) {
    return (
      <section className="relative min-h-screen overflow-hidden bg-primary">
        <div className="min-h-screen" />
      </section>
    );
  }

  return (
    <section className="relative min-h-screen overflow-hidden bg-primary">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src={backgroundSrc}
          alt={backgroundAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-[#062f38]/70" />
        {/* Optional soft gradient for depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#062f38]/90 via-[#062f38]/65 to-[#062f38]/40" />
      </div>

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex min-h-screen items-center"
      >
        <div className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 md:px-10 lg:px-16">
          <div className="max-w-[720px]">
            <motion.p
              variants={itemVariants}
              className="mb-5 inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium tracking-wide text-white/80 backdrop-blur-sm"
            >
              {language === "ja"
                ? "日本語学習・就職支援・将来設計"
                : "Education, Employment, and Future Support in Japan"}
            </motion.p>

            <motion.h1
              variants={itemVariants}
              className="text-4xl font-extrabold leading-[1.02] tracking-[-0.04em] text-white sm:text-5xl md:text-5xl"
            >
              {titleLine1 && <span className="block">{titleLine1}</span>}
              {titleLine2 && <span className="block">{titleLine2}</span>}
              {!titleLine1 && !titleLine2 && (
                <span className="block">Welcome to Nagoya Job</span>
              )}
            </motion.h1>

            {subheadline && (
              <motion.p
                variants={itemVariants}
                className="mt-6 max-w-[620px] text-sm leading-7 text-white/80 md:text-base"
              >
                {subheadline}
              </motion.p>
            )}

            {supplemental && (
              <motion.p
                variants={itemVariants}
                className="mt-4 max-w-[620px] text-sm leading-7 text-white/60"
              >
                {supplemental}
              </motion.p>
            )}

            <motion.div
              variants={itemVariants}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              {primaryCta && (
                <Link
                  href={getLocalizedText(primaryCta.url, language, "#")}
                  className="inline-flex items-center justify-center rounded-md bg-secondary px-6 py-3 text-sm font-semibold text-neutral-800 transition hover:-translate-y-0.5 hover:brightness-105"
                >
                  {getLocalizedText(primaryCta.text, language)}
                </Link>
              )}

              {secondaryCtas.map((button) => (
                <Link
                  key={button.id}
                  href={getLocalizedText(button.url, language, "#")}
                  className="inline-flex items-center justify-center rounded-md border border-white/20 bg-white/10 px-5 py-3 text-sm font-medium text-white backdrop-blur-sm transition hover:bg-white/15"
                >
                  {getLocalizedText(button.text, language)}
                </Link>
              ))}
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mt-8 flex flex-wrap items-center gap-3 text-sm text-white/75"
            >
              <div className="rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur-sm">
                {language === "ja" ? "N5 から N1 まで対応" : "From N5 to N1"}
              </div>
              <div className="rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur-sm">
                {language === "ja"
                  ? "面接・就職サポート"
                  : "Interview & Job Support"}
              </div>
              <div className="rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur-sm">
                {language === "ja"
                  ? "ビザ情報連携"
                  : "Visa Information Coordination"}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Decorative accent */}
      <div className="pointer-events-none absolute bottom-14 right-8 hidden md:block">
        <div className="grid grid-cols-2 gap-3 opacity-30">
          <div className="h-10 w-10 bg-white/10" />
          <div className="h-10 w-10 bg-white/5" />
          <div className="h-10 w-10 bg-white/5" />
          <div className="h-10 w-10 bg-white/10" />
        </div>
      </div>
    </section>
  );
};
