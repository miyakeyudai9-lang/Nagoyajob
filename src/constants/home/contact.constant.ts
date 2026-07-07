import { Phone, Facebook } from "lucide-react";

export const CONTACT_CONTENT = {
  headline: {
    ja: "お問い合わせ",
    en: "Contact Us",
  },

  schoolInfo: {
    name: {
      ja: "Nagoya Job ",
      en: "Nagoya Job ",
    },
    address: {
      ja: "〒271-0091千葉県松戸市本町12-5 ",
      en: "12-5, Honcho, Matsudo City, Chiba Prefecture 271-0091, Japan",
    },
    email: "info@nagoyajob.jp ",
  },

  campusLocations: {
    headline: {
      ja: "キャンパス所在地",
      en: "Campus Locations",
    },
    locations: [
      {
        id: "matsudo",
        name: {
          ja: "松戸校",
          en: "Matsudo Campus",
        },
        address: {
          ja: "〒271-0091 千葉県松戸市本町12-5",
          en: "12-5, Honcho, Matsudo City, Chiba 271-0091, Japan",
        },
        phone: "050-7103-7137",
      },
      {
        id: "fukuoka",
        name: {
          ja: "福岡校",
          en: "Fukuoka Campus",
        },
        address: {
          ja: "〒812-0013 福岡県福岡市博多区博多駅東1丁目2-19",
          en: "1-2-19, Hakataeki East, Hakata Ward, Fukuoka City, Fukuoka 812-0013, Japan",
        },
        phone: "050-7103-7137",
      },
      {
        id: "tokyo",
        name: {
          ja: "東京校",
          en: "Tokyo Campus",
        },
        address: {
          ja: "〒169-0073 東京都新宿区百人町1丁目19番13号",
          en: "1-19-13, Hyakunincho, Shinjuku Ward, Tokyo 169-0073, Japan",
        },
        phone: "050-7103-7137",
      },
    ],
  },

  form: {
    fields: {
      fullName: {
        label: { ja: "氏名", en: "Full Name" },
        placeholder: {
          ja: "お名前を入力してください",
          en: "Enter your full name",
        },
      },
      nationality: {
        label: { ja: "国籍", en: "Nationality" },
        placeholder: { ja: "例：ネパール", en: "e.g. Nepal" },
      },
      currentLocation: {
        label: { ja: "現在の国・都市", en: "Current Country / Current City" },
        placeholder: {
          ja: "例：日本・東京 / ネパール・カトマンズ",
          en: "e.g. Japan, Tokyo / Nepal, Kathmandu",
        },
      },
      whatsapp: {
        label: { ja: "WhatsApp番号", en: "WhatsApp Number" },
        placeholder: {
          ja: "WhatsApp番号を入力",
          en: "Enter your WhatsApp number",
        },
      },
      email: {
        label: { ja: "メールアドレス", en: "Email Address" },
        placeholder: {
          ja: "メールアドレスを入力",
          en: "Enter your email address",
        },
      },
      japaneseLevel: {
        label: { ja: "日本語レベル", en: "Japanese Level" },
        placeholder: { ja: "レベルを選択", en: "Select your level" },
      },
      interestedService: {
        label: { ja: "希望サービス", en: "Interested Service" },
        placeholder: { ja: "サービスを選択", en: "Select a service" },
      },
      visaStatus: {
        label: { ja: "在留資格・ビザ状況", en: "Visa Status" },
        placeholder: {
          ja: "現在のビザ状況を入力",
          en: "Enter your current visa status",
        },
      },
      preferredStudyMode: {
        label: { ja: "希望受講形式", en: "Preferred Study Mode" },
        placeholder: { ja: "受講形式を選択", en: "Select study mode" },
      },
      message: {
        label: { ja: "メッセージ", en: "Message" },
        placeholder: {
          ja: "ご相談内容をご記入ください",
          en: "Tell us about your goals or questions",
        },
      },
    },

    serviceOptions: [
      {
        value: "japanese-language-course",
        label: { ja: "日本語コース", en: "Japanese Language Course" },
      },
      {
        value: "business-manner-course",
        label: { ja: "ビジネスマナー講座", en: "Business Manner Course" },
      },
      {
        value: "interview-support",
        label: { ja: "面接サポート", en: "Interview Support" },
      },
      {
        value: "job-placement-support",
        label: { ja: "就職支援", en: "Job Placement Support" },
      },
      {
        value: "visa-support-consultation",
        label: { ja: "ビザサポート相談", en: "Visa Support Consultation" },
      },
      {
        value: "translation-interpretation-support",
        label: {
          ja: "翻訳・通訳サポート",
          en: "Translation / Interpretation Support",
        },
      },
    ],

    japaneseLevelOptions: [
      { value: "none", label: { ja: "未経験", en: "No Experience" } },
      { value: "n5", label: { ja: "N5", en: "N5" } },
      { value: "n4", label: { ja: "N4", en: "N4" } },
      { value: "n3", label: { ja: "N3", en: "N3" } },
      { value: "n2", label: { ja: "N2", en: "N2" } },
      { value: "n1", label: { ja: "N1", en: "N1" } },
      { value: "other", label: { ja: "その他", en: "Other" } },
    ],

    studyModeOptions: [
      { value: "online", label: { ja: "オンライン", en: "Online" } },
      { value: "offline", label: { ja: "対面", en: "In-person" } },
      { value: "either", label: { ja: "どちらでも可", en: "Either" } },
    ],

    submitText: {
      ja: "送信する",
      en: "Submit Inquiry",
    },
  },

  quickActions: [
    {
      id: "call-now",
      text: { ja: "今すぐ電話", en: "Call Now" },
      href: "tel:050-7103-7137",
      icon: Phone,
      variant: "secondary",
    },
    {
      id: "facebook",
      text: { ja: "Facebook", en: "Facebook" },
      href: "/#",
      icon: Facebook,
      variant: "primary",
    },
  ],
} as const;

export type ContactContent = typeof CONTACT_CONTENT;
