"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { FAQ_CONTENT } from "@/constants/home/faq.constant";
import { useLanguage } from "@/context/LanguageContext";

export default function FaqSection() {
  const { lang } = useLanguage();
  const [openId, setOpenId] = useState<string | null>(FAQ_CONTENT.items[0].id);

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="inline-flex items-center rounded-full border border-black/10 bg-white/80 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500 backdrop-blur-sm">
            {lang === "ja" ? "よくある質問" : "FAQs"}
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-primary sm:text-3xl lg:text-4xl mt-4">
            {FAQ_CONTENT.headline[lang]}
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
            {FAQ_CONTENT.intro[lang]}
          </p>
        </motion.div>

        <div className="mt-10 space-y-4">
          {FAQ_CONTENT.items.map((item, index) => {
            const isOpen = openId === item.id;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className="overflow-hidden border border-slate-200 bg-white shadow-sm rounded-2xl"
              >
                <button
                  type="button"
                  onClick={() => toggleItem(item.id)}
                  className="flex w-full items-center cursor-pointer justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${item.id}`}
                >
                  <span className="pr-4 text-sm font-semibold leading-6 text-slate-900 sm:text-base">
                    {item.question[lang]}
                  </span>

                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-slate-500 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-panel-${item.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-slate-100 px-5 py-4 sm:px-6">
                        <p className="text-sm leading-7 text-slate-600 sm:text-[15px]">
                          {item.answer[lang]}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
