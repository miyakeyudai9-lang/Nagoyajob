"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Menu, X as XIcon, ChevronRight } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { navItems, navItemsEn } from "@/constants/navbar.constant";

export default function NavbarNavigation() {
  const { lang } = useLanguage();
  const pathname = usePathname();
  const router = useRouter();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const lastScroll = useRef(0);

  // Handle Language Switching Logic
  const toggleLanguage = () => {
    if (lang === "ja") {
      // Switch to English: prepend /en to current path
      router.push(`/en${pathname}`);
    } else {
      // Switch to Japanese: remove /en prefix
      const newPath = pathname.replace(/^\/en/, "") || "/";
      router.push(newPath);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY;
      if (currentPosition > lastScroll.current && currentPosition > 100) {
        setIsSticky(false);
      } else {
        setIsSticky(true);
      }
      lastScroll.current = currentPosition;
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!mobileOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileOpen]);

  const NavList = ({ variant }: { variant: "desktop" | "mobile" }) => {
    const isMobile = variant === "mobile";
    const items = lang === "ja" ? navItems : navItemsEn;

    const handleLangChange = (targetLang: "en" | "ja") => {
      if (lang === targetLang) return;

      if (targetLang === "en") {
        router.push(`/en${pathname}`);
      } else {
        const newPath = pathname.replace(/^\/en/, "") || "/";
        router.push(newPath);
      }
    };

    return (
      <div
        className={isMobile ? "flex flex-col gap-8" : "flex items-center gap-7"}
      >
        <ul
          className={
            isMobile ? "flex flex-col gap-2 mx-4" : "flex items-center gap-7"
          }
        >
          {items.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={`${variant}-${item.href}`}>
                <Link
                  href={item.href}
                  onClick={() => isMobile && setMobileOpen(false)}
                  className={[
                    isMobile
                      ? "flex items-center justify-between  px-4 py-3 text-neutral-900 hover:bg-neutral-50 transition"
                      : "text-sm font-medium  transition-colors underline-offset-4 hover:text-primary",
                    isMobile && isActive ? "bg-neutral-100 font-bold" : "",
                    !isMobile && isActive ? "text-primary font-bold" : "",
                  ].join(" ")}
                >
                  <span>{item.label}</span>
                  {isMobile && (
                    <ChevronRight className="h-4 w-4 text-neutral-400" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Segmented Language Switcher */}
        <div className={`flex items-center ${isMobile ? "px-4" : ""}`}>
          <div className="relative flex items-center rounded-full bg-neutral-100 p-1 border border-neutral-200">
            <motion.div
              className="absolute h-[calc(100%-8px)] w-[calc(50%-4px)] bg-white shadow-sm rounded-full"
              initial={false}
              animate={{ x: lang === "en" ? "100%" : "0%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />

            <button
              onClick={() => handleLangChange("ja")}
              className={`relative z-10 px-4 py-1 text-[10px] font-bold transition-colors duration-200 ${
                lang === "ja"
                  ? "text-neutral-900"
                  : "text-neutral-400 hover:text-neutral-600"
              }`}
            >
              JA 🇯🇵
            </button>
            <button
              onClick={() => handleLangChange("en")}
              className={`relative z-10 px-4 py-1 text-[10px] font-bold transition-colors duration-200 ${
                lang === "en"
                  ? "text-neutral-900"
                  : "text-neutral-400 hover:text-neutral-600"
              }`}
            >
              EN 🇺🇸
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <header
        className={[
          "fixed w-full top-0 z-90",
          scrolled ? "bg-white shadow-md" : "text-white bg-transparent",
          "transition-all duration-500",
        ].join(" ")}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="h-16 flex items-center justify-between">
            <Link href={lang === "en" ? "/en" : "/"}>
              <div className="relative h-15 w-15  overflow-hidden bg-transparent">
                <Image
                  src="/logo.png"
                  fill
                  sizes="112px"
                  className="object-contain"
                  alt="logo"
                  priority
                />
              </div>
            </Link>

            <nav className="hidden lg:flex items-center">
              <NavList variant="desktop" />
            </nav>

            <button
              type="button"
              onClick={() => setMobileOpen((p) => !p)}
              className="lg:hidden inline-flex items-center justify-center  p-2 hover:bg-primary transition"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? (
                <XIcon className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Overlay */}
      <div
        className={[
          "fixed inset-0 z-95 bg-black/50 backdrop-blur-lg transition-all duration-300 lg:hidden",
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none",
        ].join(" ")}
        onClick={() => setMobileOpen(false)}
      />

      {/* Mobile Panel */}
      <aside
        className={[
          "fixed top-0 right-0 z-96 h-full w-[86vw] max-w-90 bg-white shadow-2xl border-l border-neutral-200 lg:hidden",
          "transition-transform duration-300 ease-out overflow-auto",
          mobileOpen ? "translate-x-0" : "translate-x-full",
        ].join(" ")}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <div className="h-full flex flex-col">
          <div className="px-4 py-4 border-b border-neutral-200 flex items-center justify-between">
            <div className="relative h-9 w-24 overflow-hidden  bg-white">
              <Image
                src="/logo.png"
                fill
                sizes="96px"
                className="object-contain"
                alt="logo"
                priority
              />
            </div>
            <button
              onClick={() => setMobileOpen(false)}
              className="p-2 hover:bg-neutral-100  transition"
            >
              <XIcon className="h-5 w-5" />
            </button>
          </div>
          <nav className="mt-4">
            <NavList variant="mobile" />
          </nav>

          {/* <a
            href="https://line.me/R/oaMessage/ab1shek"
            target="_blank"
            rel="noopener"
            className="text-xs text-white bg-secondary rounded-full mx-5 mt-8 hover:opacity-75 transition-all px-4 py-2 flex items-center"
          >
            <MessageCircle className="mr-2 w-3 h-3" />
            <span>LINEでお問い合わせ</span>
          </a> */}

          <div className="mt-auto px-4 py-4 border-t border-neutral-200 text-center text-xs text-neutral-500">
            © Nagoya Job
          </div>
        </div>
      </aside>
    </>
  );
}
