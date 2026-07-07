import ContactSection from "@/components/home/contact";
import CourseRoadmapSection from "@/components/home/courseRoadmap";
import FaqSection from "@/components/home/faq";
import FinalCtaSection from "@/components/home/finalcta";
import { HeroSection } from "@/components/home/hero";
import HowItWorksSection from "@/components/home/howitworks";
import ServicesSection from "@/components/home/services";
import TestimonialsSection from "@/components/home/testimonial";
import TrustBar from "@/components/home/trustbar";
import CareerVisaSupportSection from "@/components/home/visasupport";
import WhyChooseSection from "@/components/home/whychooseus";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <ServicesSection />
      <WhyChooseSection />
      <CourseRoadmapSection />
      <CareerVisaSupportSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <FaqSection />
      <FinalCtaSection />
      <ContactSection />
      
    </>
  );
}
