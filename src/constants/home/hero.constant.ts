import {
  MessageCircle,
  BookOpen,
  Phone,
  Check,
  Globe,
  Zap,
} from "lucide-react";

export const HERO_CONTENT = {
  headline: {
    ja: "学びと仕事の両面から、日本でのキャリアと未来をしっかりサポートします。",
    en: "Supporting Your Career and Future in Japan Through Education and Employment.",
  },

  subheadline: {
    ja: "N5からN1までの日本語授業に加え、面接練習、仕事探しの支援、ビジネスマナーの指導、ビザ関連の情報調整までワンストップで提供します。",
    en: "A one-stop solution — from N5 to N1 Japanese classes to interview drills, job hunting assistance, business etiquette coaching, and visa-related coordination.",
  },

  supplemental: {
    ja: "Nagoya Job は、日本で働きながら学び、長期的な安定を目指す外国籍の方々を支援しています。日本語学習から就職準備、面接対策、翻訳・通訳の補助、ビザに関する基礎情報の提供まで、親身でわかりやすいサポートを心がけています。",
    en: "Nagoya Job supports international individuals who want to learn while working in Japan and pursue long-term stability. We offer caring, easy-to-understand assistance — from language learning and career preparation to interview coaching, translation/interpreting help, and foundational visa information.",
  },

  ctaButtons: [
    {
      id: "free-consultation",
      text: {
        ja: "無料相談を予約する",
        en: "Schedule a Free Consultation",
      },
      url: {
        ja: "/#contact",
        en: "/en/#contact",
      },
      type: "primary",
      icon: MessageCircle,
    },
    {
      id: "register-course",
      text: {
        ja: "コースに申し込む",
        en: "Enroll in a Course",
      },
      url: {
        ja: "/#contact",
        en: "/en/#contact",
      },
      type: "secondary",
      icon: BookOpen,
    },
    {
      id: "job-support",
      text: {
        ja: "就職サポートを受ける",
        en: "Receive Job Assistance",
      },
      url: {
        ja: "/#contact",
        en: "/en/#contact",
      },
      type: "tertiary",
      icon: Phone,
    },
  ],

  background: {
    type: "image",
    src: "/banner.webp",
    alt: {
      ja: "日本語学習とキャリア支援を受ける外国人学習者のイメージ",
      en: "International students receiving Japanese language and career support",
    },
    overlay: {
      opacity: 0.7,
      color: "#000000",
    },
  },

  animation: {
    enabled: true,
    type: "fade-up",
    duration: 0.8,
    delay: 0.2,
  },
} as const;

export type HeroContent = typeof HERO_CONTENT;
