import {
  Wifi,
  Clock3,
  Briefcase,
  BookOpen,
  Layers3,
  TrendingUp,
  BadgeCheck,
} from "lucide-react";

export const COURSE_ROADMAP_CONTENT = {
  headline: {
    ja: "日本語学習ステップガイド：N5からN1への道筋",
    en: "Step-by-Step Japanese Learning Guide: From N5 to N1",
  },

  intro: {
    ja: "あなたの日本語レベルや日本での目的に合わせて、ぴったりのコースをお選びいただけます。",
    en: "Choose the right course based on your Japanese proficiency and your objectives in Japan.",
  },

  levels: [
    {
      id: "n5",
      level: "N5",
      title: {
        ja: "N5 スタートアップコース",
        en: "N5 Starter Course",
      },
      description: {
        ja: "ひらがな・カタカナの読み書き、基礎単語、簡単な文章構造、あいさつや短い日常会話を身につけます。",
        en: "Learn to read and write hiragana/katakana, basic vocabulary, simple sentence structures, greetings, and short everyday conversations.",
      },
      icon: BookOpen,
    },
    {
      id: "n4",
      level: "N4",
      title: {
        ja: "N4 実用日常会話コース",
        en: "N4 Practical Daily Conversation Course",
      },
      description: {
        ja: "文法・読解・リスニングの土台を強化し、日常生活でスムーズに使える日本語力を育てます。",
        en: "Build a solid foundation in grammar, reading, and listening to develop Japanese skills you can use confidently in daily life.",
      },
      icon: Layers3,
    },
    {
      id: "n3",
      level: "N3",
      title: {
        ja: "N3 中級応用コース",
        en: "N3 Intermediate Application Course",
      },
      description: {
        ja: "語彙を広げながら、自然な日常会話や文章理解を深め、職場でのやり取りにも対応できる力を養います。",
        en: "Expand your vocabulary while improving natural conversation and reading comprehension, preparing you for workplace communication.",
      },
      icon: TrendingUp,
    },
    {
      id: "n2",
      level: "N2",
      title: {
        ja: "N2 キャリア準備コース",
        en: "N2 Career Preparation Course",
      },
      description: {
        ja: "ビジネスで役立つ実践的な日本語、面接対策、そして高度な読解力をしっかり習得します。",
        en: "Master practical Japanese for business settings, interview strategies, and advanced reading comprehension.",
      },
      icon: Briefcase,
    },
    {
      id: "n1",
      level: "N1",
      title: {
        ja: "N1 マスターコース",
        en: "N1 Mastery Course",
      },
      description: {
        ja: "高度な表現力と正確な言語運用を身につけ、ビジネスや専門分野でも通用する日本語レベルを目指します。",
        en: "Attain high-level expression and precise language control, aiming for Japanese proficiency that succeeds in business and specialized fields.",
      },
      icon: BadgeCheck,
    },
  ],

  extraLabels: [
    {
      id: "online-class",
      text: {
        ja: "オンラインで受講可能",
        en: "Online attendance available",
      },
      icon: Wifi,
    },
    {
      id: "flexible-learning",
      text: {
        ja: "自分のペースで進められる",
        en: "Learn at your own pace",
      },
      icon: Clock3,
    },
    {
      id: "job-seekers-students",
      text: {
        ja: "学生・就職希望者の両方に対応",
        en: "Suitable for both students and job seekers",
      },
      icon: Briefcase,
    },
  ],

  animation: {
    enabled: true,
    duration: 0.6,
    delayStep: 0.08,
  },
} as const;

export type CourseRoadmapContent = typeof COURSE_ROADMAP_CONTENT;
