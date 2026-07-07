import {
  MessageCircleMore,
  ClipboardList,
  BookOpenCheck,
  BriefcaseBusiness,
  Rocket,
} from "lucide-react";

export const HOW_IT_WORKS_CONTENT = {
  headline: {
    ja: "成功へのステップ",
    en: "Your Path to Success",
  },

  steps: [
    {
      id: "free-consultation",
      stepNumber: "01",
      title: {
        ja: "無料相談を申し込む",
        en: "Request a Free Consultation",
      },
      description: {
        ja: "日本語の学習、仕事探し、面接対策、ビザに関する質問など、あなたの目標や現状をお聞かせください。",
        en: "Tell us about your goals and current situation — whether it's Japanese studies, job hunting, interview prep, or visa questions.",
      },
      icon: MessageCircleMore,
    },
    {
      id: "right-plan",
      stepNumber: "02",
      title: {
        ja: "あなたに合ったプランの提案",
        en: "Get a Plan Tailored to You",
      },
      description: {
        ja: "現在のスキルレベルや目標に応じて、最適なコースとサポート内容をご提案します。",
        en: "We'll suggest the best course and support package based on your current abilities and aspirations.",
      },
      icon: ClipboardList,
    },
    {
      id: "start-learning",
      stepNumber: "03",
      title: {
        ja: "学習と準備をスタート",
        en: "Start Learning & Preparing",
      },
      description: {
        ja: "オンラインレッスン、ビジネスマナー研修、面接練習などを通じて、着実に準備を進めます。",
        en: "Make steady progress through online lessons, business etiquette workshops, interview practice, and more.",
      },
      icon: BookOpenCheck,
    },
    {
      id: "job-visa-support",
      stepNumber: "04",
      title: {
        ja: "就職・ビザのサポート",
        en: "Job & Visa Assistance",
      },
      description: {
        ja: "必要に応じて、仕事探しの支援や各種手続きに関するアドバイスを受けることができます。",
        en: "Get help with job searching and guidance on necessary procedures whenever needed.",
      },
      icon: BriefcaseBusiness,
    },
    {
      id: "move-forward",
      stepNumber: "05",
      title: {
        ja: "自信を持って次の段階へ",
        en: "Step Forward with Confidence",
      },
      description: {
        ja: "日本語力とキャリア準備を整え、日本での新しい生活に向けて力強く踏み出しましょう。",
        en: "Build your Japanese skills and career readiness, then take a confident leap toward your new life in Japan.",
      },
      icon: Rocket,
    },
  ],

  animation: {
    enabled: true,
    duration: 0.6,
    delayStep: 0.08,
  },
} as const;

export type HowItWorksContent = typeof HOW_IT_WORKS_CONTENT;
