import {
  MessageCircle,
  ClipboardList,
  FileText,
  PlayCircle,
} from "lucide-react";

export const PROCESS_CONTENT = {
  section: {
    title: {
      ja: "ご利用までの流れ",
      en: "Simple Steps to Begin",
    },
    subtitle: {
      ja: "たった4つのステップで警備を手配",
      en: "Arrange security services in just 4 steps",
    },
  },

  steps: [
    {
      id: "inquiry",
      number: "01",
      icon: MessageCircle,
      title: {
        ja: "お問い合わせ・ご連絡",
        en: "Get in Touch / Discuss Your Needs",
      },
      description: {
        ja: "電話またはフォームからお気軽にご連絡ください。直前のご依頼も承っております。",
        en: "Feel free to contact us by phone or form. Last-minute requests are welcome.",
      },
      action: {
        text: {
          ja: "無料で相談する",
          en: "Get a Free Consultation",
        },
        url: { ja: "/#contact", en: "/en/#contact" },
      },
    },
    {
      id: "review",
      number: "02",
      icon: ClipboardList,
      title: {
        ja: "現場内容の確認",
        en: "Confirm Your Site Requirements",
      },
      description: {
        ja: "現場の場所、日時、必要人数、警備内容を詳しくお聞きし、最適な体制を検討します。",
        en: "We gather details about the location, date/time, required staff count, and security needs to determine the best approach.",
      },
      details: [
        {
          ja: "現場住所",
          en: "Site location",
        },
        {
          ja: "日時・時間帯",
          en: "Date and time slot",
        },
        {
          ja: "必要人数",
          en: "Number of personnel required",
        },
      ],
    },
    {
      id: "proposal",
      number: "03",
      icon: FileText,
      title: {
        ja: "ご提案・お見積もり",
        en: "Proposal & Quotation",
      },
      description: {
        ja: "案件に合わせた警備計画と明確な見積もりをご提出いたします。",
        en: "We provide a tailored security plan and a transparent quote based on your project.",
      },
      feature: {
        ja: "見積もりは無料",
        en: "Free quotations",
      },
    },
    {
      id: "start",
      number: "04",
      icon: PlayCircle,
      title: {
        ja: "警備を開始",
        en: "Security Services Commence",
      },
      description: {
        ja: "ご契約後、すぐに警備スタッフを手配し、現場に合わせた体制で警備を実施します。",
        en: "After contract signing, we promptly assign security personnel and carry out operations tailored to your site.",
      },
      note: {
        ja: "当日対応も可能",
        en: "Same-day service available",
      },
    },
  ],

  cta: {
    title: {
      ja: "まずはお気軽にご相談ください",
      en: "Reach out today for a free consultation",
    },
    buttons: [
      {
        id: "request-form",
        text: {
          ja: "警備を依頼する",
          en: "Request Security Services",
        },
        url: {
          ja: "/#contact",
          en: "/en/#contact",
        },
        type: "primary",
      },
      {
        id: "call",
        text: {
          ja: "電話で問い合わせる",
          en: "Call to Inquire",
        },
        url: {
          ja: "tel:047-369-7440",
          en: "tel:047-369-7440",
        },
        type: "secondary",
        phone: "047-369-7440",
      },
    ],
  },
} as const;

export type ProcessContent = typeof PROCESS_CONTENT;
