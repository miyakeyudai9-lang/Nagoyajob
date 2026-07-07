// constants/finalCtaContent.ts
import { MessageCircle, BookOpen, Briefcase } from "lucide-react";

export const FINAL_CTA_CONTENT = {
  headline: {
    ja: "日本での未来を一緒に築きませんか？",
    en: "Shape Your Future in Japan — Begin Here",
  },

  description: {
    ja: "Nagoya Job が日本語学習、キャリアづくり、そしてきめ細かなサポートを提供します。安心して次の一歩を踏み出してください。",
    en: "Nagoya Job provides Japanese language learning, career building, and attentive support. Take your next step with peace of mind.",
  },

  buttons: [
    {
      id: "free-consultation",
      text: {
        ja: "無料相談を予約する",
        en: "Schedule a Free Consultation",
      },
      href: { ja: "/#contact", en: "/en/#contact" },
      icon: MessageCircle,
      variant: "primary",
    },
    {
      id: "join-course",
      text: {
        ja: "日本語コースに申し込む",
        en: "Enroll in a Japanese Course",
      },
      href: { ja: "/#contact", en: "/en/#contact" },
      icon: BookOpen,
      variant: "secondary",
    },
    {
      id: "job-support",
      text: {
        ja: "就職サポートについてお問い合わせ",
        en: "Get Information on Job Support",
      },
      href: { ja: "/#contact", en: "/en/#contact" },
      icon: Briefcase,
      variant: "tertiary",
    },
  ],

  animation: {
    enabled: true,
    duration: 0.6,
    delayStep: 0.08,
  },
} as const;

export type FinalCtaContent = typeof FINAL_CTA_CONTENT;
