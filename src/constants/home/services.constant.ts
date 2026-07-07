import {
  BookOpen,
  BriefcaseBusiness,
  MessagesSquare,
  Handshake,
  FileCheck,
  Languages,
} from "lucide-react";

export const SERVICES_CONTENT = {
  sectionLabel: {
    ja: "サービス内容",
    en: "Our Services",
  },

  headline: {
    ja: "Nagoya Job が提供する主なサポート",
    en: "Key Support Services from Nagoya Job",
  },

  intro: {
    ja: "Nagoya Job は、日本語教育と実践的なキャリアサポートを組み合わせ、学習から就職までスムーズに進める体制を整えています。",
    en: "Nagoya Job blends Japanese language instruction with hands-on career support, creating a seamless pathway from learning to employment.",
  },

  cards: [
    {
      id: "japanese-language-course",
      title: {
        ja: "日本語講座（N5〜N1レベル）",
        en: "Japanese Language Classes (N5–N1 Levels)",
      },
      description: {
        ja: "日常会話の基礎からビジネスで通用するレベルまで、段階的に日本語力を向上。日本の生活や仕事に直結する実用的な内容です。",
        en: "Build your Japanese skills progressively, from basic everyday conversation to business-ready levels, with practical content directly tied to life and work in Japan.",
      },
      icon: BookOpen,
    },
    {
      id: "business-manner-course",
      title: {
        ja: "日本式ビジネスマナー研修",
        en: "Japanese Business Manner Training",
      },
      description: {
        ja: "職場での基本礼儀、報告・連絡・相談（ほうれんそう）、時間管理、チームワークなど、日本企業で求められる行動を習得できます。",
        en: "Master the conduct expected in Japanese companies, including fundamental manners, Horenso (reporting/informing/consulting), time management, and teamwork.",
      },
      icon: BriefcaseBusiness,
    },
    {
      id: "interview-support",
      title: {
        ja: "面接対策サポート",
        en: "Interview Readiness Support",
      },
      description: {
        ja: "模擬面接、自己紹介の練習、想定質問への回答準備を通じて、実際の面接に自信を持って臨めるようサポートします。",
        en: "Gain confidence for actual interviews through mock sessions, self-introduction drills, and preparing responses to anticipated questions.",
      },
      icon: MessagesSquare,
    },
    {
      id: "job-placement-support",
      title: {
        ja: "求人紹介・マッチング支援",
        en: "Job Referral & Matching Assistance",
      },
      description: {
        ja: "日本での就職を目指す方と企業のニーズを調整し、条件に応じた求人紹介や就職活動のサポートを行います。",
        en: "We align the needs of job seekers with employer requirements, offering job referrals and job-hunting support tailored to individual circumstances.",
      },
      icon: Handshake,
    },
    {
      id: "visa-support-coordination",
      title: {
        ja: "ビザ関連の連携サポート",
        en: "Visa Coordination & Support",
      },
      description: {
        ja: "必要書類や手続きの流れを説明し、状況に応じて専門家と連携しながら手続きをサポートします。",
        en: "We outline required documents and procedural steps, coordinating with specialists as needed to assist with the process.",
      },
      icon: FileCheck,
    },
    {
      id: "translation-interpretation-support",
      title: {
        ja: "翻訳・通訳サポート",
        en: "Translation & Interpretation Help",
      },
      description: {
        ja: "書類の内容理解や、日常・手続き時のコミュニケーションを支援し、言葉の壁による不安を軽減します。",
        en: "We assist with document comprehension and communication during daily tasks or official procedures, reducing worries caused by language barriers.",
      },
      icon: Languages,
    },
  ],

  animation: {
    enabled: true,
    type: "fade-up",
    duration: 0.6,
    delayStep: 0.08,
  },
} as const;

export type ServicesContent = typeof SERVICES_CONTENT;
