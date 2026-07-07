import "./globals.css";
import type { Metadata } from "next";
import SidebarNavigation from "@/components/layout/Navbar";
import { Poppins } from "next/font/google";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/layout/Footer";
import { LanguageProvider } from "@/context/LanguageContext";
import Script from "next/script";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.nagoyajob.jp"),

  title: {
    default: "Nagoya Job | Learn Japanese & Build Your Career in Japan",
    template: "%s | Nagoya Job",
  },

  description:
    "Nagoya Job provides Japanese language education from beginner to advanced levels, along with career coaching, interview practice, workplace culture training, job search assistance, and visa guidance for international residents in Japan.",

  applicationName: "Nagoya Job",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",

  keywords: [
    "Nagoya Job",
    "Nexora Job",
    "Japanese language courses for international students in Japan",
    "learn Japanese online N5 to N1",
    "Japanese classes beginner to advanced Japan",
    "career help for foreigners in Japan",
    "interview coaching for jobs in Japan",
    "visa assistance for overseas workers Japan",
    "Japanese workplace etiquette training",
    "job finding support Japan",
    "career guidance for global talent in Japan",
    "Japanese school for international learners",
    "study Japanese language in Japan",
    "online Japanese lessons for non-native speakers",
    "work in Japan support services",
    "engineering humanities international visa support",
    "specified skilled visa support",
    "Japanese language online school for foreigners",
  ],

  authors: [{ name: "Nagoya Job" }],
  creator: "Nagoya Job",
  publisher: "Nagoya Job",
  category: "Education",

  alternates: {
    canonical: "/",
    languages: {
      en: "/en",
      ja: "/",
    },
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.nagoyajob.jp",
    siteName: "Nagoya Job",
    title: "Nagoya Job | Japanese Language & Career Success in Japan",
    description:
      "Study Japanese from N5 to N1, receive career coaching, interview training, job placement help, and visa coordination — all in one place.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Nagoya Job — language and career support for international residents in Japan",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Nagoya Job | Learn Japanese & Advance Your Career in Japan",
    description:
      "Japanese courses from beginner to advanced levels, interview prep, business culture training, job placement support, and visa guidance.",
    images: ["/logo.png"],
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: [{ url: "/favicon.ico" }, { url: "/logo.png", type: "image/png" }],
    apple: [{ url: "/apple-icon.png" }],
    shortcut: ["/favicon.ico"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const schemaData = {
  //   "@context": "https://schema.org",
  //   "@type": "Organization",
  //   name: "Nagoya Job ",
  //   image: "https://www.nagoyajob.jp/logo.png",
  //   "@id": "https://www.nagoyajob.jp",
  //   url: "https://www.nagoyajob.jp",
  //   telephone: "047-369-7440",
  //   email: "info@nagoyajob.jp",
  //   address: {
  //     "@type": "PostalAddress",
  //     streetAddress: "東京都新宿区百人町1丁目19番13号",
  //     addressLocality: "新宿区",
  //     addressRegion: "東京都",
  //     postalCode: "169-0073",
  //     addressCountry: "JP",
  //   },
  //   geo: {
  //     "@type": "GeoCoordinates",
  //     latitude: 35.7013,
  //     longitude: 139.7001,
  //   },
  //   areaServed: [
  //     {
  //       "@type": "City",
  //       name: "Tokyo",
  //     },
  //     {
  //       "@type": "Country",
  //       name: "Japan",
  //     },
  //   ],
  //   description:
  //     "東京都新宿区の警備会社。警備1号・2号に対応し、若い警備スタッフの機動力で交通誘導やイベント警備をスピーディーに提供します。",
  //   brand: {
  //     "@type": "Brand",
  //     name: "Nexora",
  //   },
  //   offers: {
  //     "@type": "Offer",
  //     description: "Free consultation and quotation for security services.",
  //   },
  // };
  return (
    <html lang="ja">
      <head>
        {/* <Script
          id="taishin-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        /> */}
      </head>
      <body
        className={`${poppins.variable} antialiased font-poppins flex flex-col min-h-screen`}
      >
        <LanguageProvider>
          <SidebarNavigation />
          <main className="flex-1">{children}</main>
          <Footer />
        </LanguageProvider>
        <Toaster />
      </body>
    </html>
  );
}
