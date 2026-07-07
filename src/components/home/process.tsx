"use client";

import { PROCESS_CONTENT } from "@/constants/home/process.constant";
import { useLanguage } from "@/context/LanguageContext";
import { Phone } from "lucide-react";
import { motion, type Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.08,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1 },
};

export const ProcessSection = () => {
  const { lang } = useLanguage();
  const language = lang;
  const content = PROCESS_CONTENT;

  return (
    <section className="py-20 bg-white">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-10"
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {content.section.title[language]}
          </h2>
          <p className="text-xl text-gray-600">
            {content.section.subtitle[language]}
          </p>
        </motion.div>

        {/* Process Steps */}
        <motion.div variants={itemVariants} className="relative">
          {/* Connection Line (hidden on mobile) */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-blue-200" />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative"
          >
            {content.steps.map((step, index) => (
              <motion.div
                variants={itemVariants}
                key={step.id}
                className="relative shadow-md bg-white p-4 lg:p-6"
              >
                {/* Step Number */}
                <div className="text-5xl font-bold text-blue-100 mb-4">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="w-16 h-16 bg-blue-50  flex items-center justify-center mb-6 relative z-10">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title[language]}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-4">
                  {step.description[language]}
                </p>

                {/* Additional Details (for step 2) */}
                {/* {step.details && (
                  <ul className="space-y-1 mb-4">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="text-sm text-gray-500 flex items-center">
                        <span className="w-1 h-1 bg-blue-400 rounded-full mr-2" />
                        {detail[language]}
                      </li>
                    ))}
                  </ul>
                )} */}

                {/* Feature/Note Badge */}
                {/* {(step.feature || step.note) && (
                  <div className="inline-block bg-green-50 text-green-700 text-xs font-medium px-3 py-1 rounded-full">
                    {step.feature?.[language] || step.note?.[language]}
                  </div>
                )} */}

                {/* Arrow indicator (except last item) */}
                {/* {index < content.steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-4 top-20 text-blue-300">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                )} */}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div variants={itemVariants} className="mt-20 text-center">
          <div className="bg-gray-50 rounded-3xl p-8 md:p-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              {content.cta.title[language]}
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {content.cta.buttons.map((button) => (
                <a
                  key={button.id}
                  href={button.url[language]}
                  className={`
                    px-8 py-4  font-bold text-center
                    transition-all duration-300 transform hover:scale-105
                    flex items-center justify-center gap-2
                    ${button.type === "primary" && "bg-primary hover:bg-primary/90 text-white shadow-lg"}
                    ${button.type === "secondary" && "bg-white text-primary border-2 border-primary hover:bg-blue-50"}
                  `}
                >
                  {button.type === "secondary" && <Phone className="w-5 h-5" />}
                  <span>{button.text[language]}</span>
                  {/* {button.phone && language === "ja" && (
                    <span className="text-sm opacity-90 ml-2">
                      {button.phone}
                    </span>
                  )} */}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};
