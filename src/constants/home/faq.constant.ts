export const FAQ_CONTENT = {
  headline: {
    ja: "よくあるご質問",
    en: "Frequently Asked Questions",
  },

  intro: {
    ja: "コースの詳細、就職サポート、ビザ関連でよく寄せられる質問をまとめています。",
    en: "Answers to common questions about course details, job support, and visa assistance.",
  },

  items: [
    {
      id: "study-online",
      question: {
        ja: "遠隔地から授業を受けることはできますか？",
        en: "Can I attend classes remotely?",
      },
      answer: {
        ja: "はい、可能です。すべての日本語コースとサポートプログラムはオンラインで受講できます。",
        en: "Yes, you can. All Japanese courses and support programs are accessible online.",
      },
    },
    {
      id: "beginner-course",
      question: {
        ja: "日本語の経験がまったくありませんが、始められますか？",
        en: "I have zero experience with Japanese. Can I still start?",
      },
      answer: {
        ja: "はい。初心者向けのN5から上級のN1まで、あらゆるレベルに対応したコースを用意しています。",
        en: "Yes. We offer courses for every level, from complete beginner (N5) to advanced (N1).",
      },
    },
    {
      id: "visa-processing",
      question: {
        ja: "ビザ申請を代わりにしてもらえますか？",
        en: "Can you handle my visa application for me?",
      },
      answer: {
        ja: "直接申請を代行することはありませんが、必要に応じて資格のある専門家と連携し、手続きの流れをサポートします。",
        en: "We don’t submit applications directly, but when needed, we coordinate with qualified professionals and guide you through the process.",
      },
    },
    {
      id: "job-interview-support",
      question: {
        ja: "日本企業の面接に向けた対策は受けられますか？",
        en: "Can I get help preparing for interviews with Japanese companies?",
      },
      answer: {
        ja: "はい。模擬面接、事前課題、実践的なフィードバックを通じて、しっかりとサポートします。",
        en: "Yes. We offer thorough support through mock interviews, pre-session assignments, and practical feedback.",
      },
    },
    {
      id: "job-placement-free",
      question: {
        ja: "就職サポートは無料ですか？",
        en: "Is the job placement support free?",
      },
      answer: {
        ja: "条件や企業の採用方針によっては、無料でご利用いただけるケースもあります。",
        en: "Depending on the terms and each company’s hiring policy, free support may be available.",
      },
    },
    {
      id: "visa-categories",
      question: {
        ja: "どのようなビザに対応していますか？",
        en: "What visa categories do you cover?",
      },
      answer: {
        ja: "技術・人文知識・国際業務、特定技能、アルバイトなど、さまざまな在留資格に向けた準備やアドバイスを提供しています。",
        en: "We provide advice and preparation for various residence statuses, including Engineer/Humanities/International Services, Specified Skilled Worker, and part-time work.",
      },
    },
    {
      id: "who-can-join",
      question: {
        ja: "どのような方が利用できますか？",
        en: "Who can use your services?",
      },
      answer: {
        ja: "ネパール、インド、バングラデシュ、スリランカ、ミャンマー、ベトナムなど、多様な国籍の方々を対象としています。日本での学習や就労を目指す方ならどなたでもご参加いただけます。",
        en: "Our services are designed for people from diverse nationalities, including Nepal, India, Bangladesh, Sri Lanka, Myanmar, Vietnam, and others. Anyone aiming to study or work in Japan is welcome to join.",
      },
    },
  ],
} as const;

export type FaqContent = typeof FAQ_CONTENT;
