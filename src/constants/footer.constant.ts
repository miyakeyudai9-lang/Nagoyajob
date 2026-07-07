// constants/footerContent.ts
export const FOOTER_CONTENT = {
  name: "Nagoya Job ",

  tagline: {
    ja: "日本語教育｜キャリアサポート｜就職支援｜ビザサポート連携",
    en: "Japanese Language Education | Career Support | Job Placement Support | Visa Support Coordination",
  },

  address: {
    ja: "東京都新宿区百人町1丁目19番13号",
    en: "12-5, Honcho, Matsudo City, Chiba Prefecture 271-0091, Japan",
  },

  phone: {
    primary: "090-3057-7999",
    secondary: "047-369-7440",
  },

  compliance: {
    ja: "Nagoya Job は教育、キャリア支援および一般的な案内を提供します。当校は行政書士事務所ではなく、法的に制限された業務は行いません。入管手続きなど資格が必要な場合は、有資格者と連携して対応します。",
    en: "Nagoya Job  provides education, career support, and general guidance. We are not a licensed administrative scrivener office and do not perform restricted legal services. Where licensed immigration procedures are required, we coordinate with qualified professionals.",
  },

  copyright: {
    en: "© Nagoya Job . All rights reserved.",
  },
} as const;

export type FooterContent = typeof FOOTER_CONTENT;
