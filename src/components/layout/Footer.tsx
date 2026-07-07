"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { FOOTER_CONTENT } from "@/constants/footer.constant";
import { navItems, navItemsEn } from "@/constants/navbar.constant";

export default function Footer() {
  const { lang } = useLanguage();
  const links = lang === "ja" ? navItems : navItemsEn;

  return (
    <footer className="relative overflow-hidden bg-[#0b1f2a] text-white">
      {/* Glow background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-120px] top-[-120px] h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute right-[-100px] bottom-[-120px] h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main footer */}
        <div className="grid grid-cols-1 gap-12 pb-12 pt-6 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-semibold">{FOOTER_CONTENT.name}</h3>

            <p className="mt-4 max-w-md text-sm leading-7 text-white/70">
              {FOOTER_CONTENT.tagline[lang]}
            </p>

            <div className="mt-6 text-sm text-white/70 space-y-2">
              <p>
                <span className="text-white font-medium">Address:</span>{" "}
                {FOOTER_CONTENT.address[lang]}
              </p>

              <p>
                <span className="text-white font-medium">TEL:</span>{" "}
                <a href={`tel:${FOOTER_CONTENT.phone.primary}`}>
                  {FOOTER_CONTENT.phone.primary}
                </a>{" "}
                /{" "}
                <a href={`tel:${FOOTER_CONTENT.phone.secondary}`}>
                  {FOOTER_CONTENT.phone.secondary}
                </a>
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-white/80">
              {lang === "ja" ? "メニュー" : "Navigation"}
            </h4>

            <ul className="mt-5 space-y-3 text-sm text-white/70">
              {links.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="transition hover:text-white hover:translate-x-1 inline-block"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-white/80">
              {lang === "ja" ? "サポート" : "Support"}
            </h4>

            <div className="mt-5 space-y-3 text-sm text-white/70">
              <p>
                {lang === "ja"
                  ? "ご質問やご相談はいつでもお気軽にご連絡ください。"
                  : "We're here to help you anytime."}
              </p>

              <a
                href={lang === "ja" ? "/#contact" : "/en/#contact"}
                className="inline-block rounded-xl bg-secondary px-4 py-2 text-sm font-semibold text-white transition hover:bg-secondary/90"
              >
                {lang === "ja" ? "お問い合わせ" : "Contact Us"}
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-white/10" />

        {/* Bottom */}
        <div className="flex flex-col items-center justify-center gap-4 py-6 text-xs text-white/60 sm:flex-row">
          <p>{FOOTER_CONTENT.copyright.en}</p>
        </div>
      </div>
    </footer>
  );
}
