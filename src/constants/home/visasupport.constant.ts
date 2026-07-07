import {
  BriefcaseBusiness,
  FileText,
  MessageSquareMore,
  Languages,
  CircleHelp,
  ShieldCheck,
  Scale,
  ArrowRightLeft,
} from "lucide-react";

export const CAREER_VISA_SUPPORT_CONTENT = {
  headline: {
    ja: "日本での就職・ビザに関するサポート",
    en: "Career & Visa Support for Living in Japan",
  },

  intro: {
    ja: "Nagoya Job は、日本での将来を目指す外国籍の方々を多面的にサポートします。日本語習得から面接対策、就職活動の補助、手続きの理解に至るまで、段階を踏んで確実に進めるようお手伝いします。",
    en: "Nagoya Job offers well-rounded support for international individuals pursuing a future in Japan. We guide you step by step — from language learning and interview preparation to job search assistance and navigating procedures — so you can move forward with confidence.",
  },

  visaCategoriesTitle: {
    ja: "対応する在留資格と支援分野",
    en: "Residence Statuses & Support Areas We Cover",
  },

  visaCategories: [
    {
      id: "engineer-humanities-international",
      text: {
        ja: "技術・人文知識・国際業務",
        en: "Engineer / Humanities / International Services",
      },
      icon: BriefcaseBusiness,
    },
    {
      id: "specified-skilled-worker",
      text: {
        ja: "特定技能",
        en: "Specified Skilled Worker",
      },
      icon: ShieldCheck,
    },
    {
      id: "part-time-job-support",
      text: {
        ja: "アルバイト関連サポート",
        en: "Part-time Work Assistance",
      },
      icon: ArrowRightLeft,
    },
  ],

  importantNote: {
    ja: "当事業所は行政書士事務所ではございません。申請や法的な手続きについては資格を有する専門家の対応が必要となるため、必要に応じて入管手続きに対応可能な行政書士や専門家と連携し、サポートを行います。",
    en: "Our office is not a certified administrative scrivener practice. For applications or legal procedures requiring qualified professionals, we coordinate with licensed immigration specialists or scriveners as needed to provide appropriate support.",
  },

  importantNoteLabel: {
    ja: "補足事項",
    en: "Note",
  },

  supportPoints: [
    {
      id: "document-guidance",
      text: {
        ja: "書類作成のアドバイス",
        en: "Assistance with document preparation",
      },
      icon: FileText,
    },
    {
      id: "interview-employer-support",
      text: {
        ja: "面接対策と企業対応の補助",
        en: "Interview practice and help communicating with employers",
      },
      icon: MessageSquareMore,
    },
    {
      id: "translation-support",
      text: {
        ja: "翻訳・通訳サービス",
        en: "Translation & interpreting services",
      },
      icon: Languages,
    },
    {
      id: "process-explanation",
      text: {
        ja: "手続きの流れを丁寧に説明",
        en: "Step-by-step walkthrough of procedures",
      },
      icon: CircleHelp,
    },
    {
      id: "expert-referral",
      text: {
        ja: "必要な場合の専門家紹介",
        en: "Referral to specialists when required",
      },
      icon: Scale,
    },
  ],

  animation: {
    enabled: true,
    duration: 0.6,
    delayStep: 0.08,
  },
} as const;

export type CareerVisaSupportContent = typeof CAREER_VISA_SUPPORT_CONTENT;
