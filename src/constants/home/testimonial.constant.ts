import { MessageSquareQuote, Briefcase, Users } from "lucide-react";

export const TESTIMONIALS_CONTENT = {
  headline: {
    ja: "受講生・求職者の体験談",
    en: "Stories from Our Learners & Job Seekers",
  },

  intro: {
    ja: "このセクションは、実際の声に簡単に差し替えられるよう設計されています。現在はサンプルとして表示中です。",
    en: "This section is built to be easily updated with real feedback. The content below is shown as examples for now.",
  },

  items: [
    {
      id: "language-to-career-growth",
      title: {
        ja: "語学習得からキャリアへ",
        en: "From Language Learning to Career Growth",
      },
      name: "Rajesh Kumar",
      quote: {
        ja: "日本語をまったく知らない状態から始めて、今では面接で自分の言葉でしっかり話せるようになりました。",
        en: "I started with zero Japanese, and now I can express myself clearly in interviews.",
      },
      icon: MessageSquareQuote,
      featured: true,
      image: "/testimonials/arav.webp",
    },
    {
      id: "practical-learning",
      title: {
        ja: "現場で役立つ学び",
        en: "Practical Skills That Matter",
      },
      name: "Ananya Deshmukh",
      quote: {
        ja: "ビジネスマナー研修で、日本の職場での正しい振る舞いや伝え方を実践的に学べました。",
        en: "The business etiquette training taught me proper workplace behavior and communication in Japanese companies.",
      },
      icon: Briefcase,
      featured: false,
      image: "/testimonials/priya.webp",
    },
    {
      id: "supportive-guidance",
      title: {
        ja: "安心して進められる伴走サポート",
        en: "Reassuring Guidance Every Step of the Way",
      },
      name: "Deepak Joshi",
      quote: {
        ja: "手続きの一つひとつを丁寧に説明してくれたので、不安なく前に進めました。",
        en: "They explained each step of the process carefully, so I could move forward without worry.",
      },
      icon: Users,
      featured: false,
      image: "/testimonials/sandeep.webp",
    },
    {
      id: "career-confidence",
      title: {
        ja: "自信をもって就活へ",
        en: "Job Hunting with Confidence",
      },
      name: "Meera Nair",
      quote: {
        ja: "履歴書や面接のサポートのおかげで、自信を持って就職活動に臨めました。",
        en: "Thanks to the resume and interview support, I felt confident taking on my job search.",
      },
      icon: Users,
      featured: false,
      image: "/testimonials/meera.webp",
    },
    {
      id: "smooth-transition",
      title: {
        ja: "スムーズな就職体験",
        en: "A Smooth Transition to Work",
      },
      name: "Kavya Srinivasan",
      quote: {
        ja: "サポートのおかげで仕事探しが順調に進み、新しい環境にもすぐに馴染めました。",
        en: "The support made my job search go smoothly, and I settled into my new environment quickly.",
      },
      icon: Users,
      featured: false,
      image: "/testimonials/simran.webp",
    },
    {
      id: "clear-path-success",
      title: {
        ja: "はっきり見えた将来設計",
        en: "A Clear Path Forward",
      },
      name: "Arjun Reddy",
      quote: {
        ja: "最初は迷いがありましたが、サポートを通じて自分が進むべき道が明確になりました。",
        en: "I had doubts at first, but their guidance helped me see the path I needed to take.",
      },
      icon: Users,
      featured: false,
      image: "/testimonials/rohit.webp",
    },
  ],

  note: {
    ja: "※ 現在はサンプルの体験談を表示しています。後日、実際のレビューに差し替え可能です。",
    en: "Note: These are sample testimonials and can be replaced with actual reviews at any time.",
  },

  animation: {
    enabled: true,
    duration: 0.6,
    delayStep: 0.08,
  },
} as const;

export type TestimonialsContent = typeof TESTIMONIALS_CONTENT;
