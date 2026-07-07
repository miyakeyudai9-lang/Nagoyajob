import {
  BookOpen,
  Briefcase,
  FileCheck,
  Users,
  Languages,
  Laptop,
} from "lucide-react";

export const TRUST_BAR_CONTENT = {
  sectionLabel: {
    ja: "選ばれる理由",
    en: "Why Trust Us",
  },

  headline: {
    ja: "日本での生活とキャリア構築に必要なサポートを、すべて一箇所で提供します。",
    en: "Everything you need to build your life and career in Japan, offered in a single place",
  },

  cards: [
    {
      id: "japanese-courses",
      title: {
        ja: "日本語レッスン",
        en: "Japanese Language Classes",
      },
      description: {
        ja: "初心者から上級者まで、レベルに合わせて確実に日本語力を伸ばせます。",
        en: "Steadily improve your Japanese at the right level, whether you're a beginner or advanced learner.",
      },
      icon: BookOpen,
    },
    {
      id: "career-support",
      title: {
        ja: "就職活動サポート",
        en: "Job Hunting Assistance",
      },
      description: {
        ja: "面接対策や企業とのやり取りをしっかりとサポートします。",
        en: "Receive thorough support with interview preparation and communication with potential employers.",
      },
      icon: Briefcase,
    },
    {
      id: "visa-guidance",
      title: {
        ja: "ビザに関する案内",
        en: "Visa Information",
      },
      description: {
        ja: "申請の手順や必要書類を説明し、必要に応じて専門家とも連携します。",
        en: "We walk you through application steps and required paperwork, and collaborate with specialists when necessary.",
      },
      icon: FileCheck,
    },
    {
      id: "business-manner-training",
      title: {
        ja: "ビジネスマナー研修",
        en: "Workplace Etiquette Training",
      },
      description: {
        ja: "日本の職場で求められるマナーや習慣を実践的に学べます。",
        en: "Learn the manners and customs expected in Japanese workplaces through hands-on training.",
      },
      icon: Users,
    },
    {
      id: "translation-help",
      title: {
        ja: "翻訳・通訳サポート",
        en: "Translation & Interpretation Assistance",
      },
      description: {
        ja: "書類作成や日常のコミュニケーションを言語面でサポートします。",
        en: "We offer language support for document preparation and everyday conversations.",
      },
      icon: Languages,
    },
    {
      id: "online-learning",
      title: {
        ja: "オンライン授業対応",
        en: "Online Class Access",
      },
      description: {
        ja: "場所を選ばず、自分のペースで学習を進められます。",
        en: "Learn from any location and move forward at a pace that suits you.",
      },
      icon: Laptop,
    },
  ],

  animation: {
    enabled: true,
    type: "fade-up",
    duration: 0.6,
    delayStep: 0.08,
  },
} as const;

export type TrustBarContent = typeof TRUST_BAR_CONTENT;
