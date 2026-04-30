import { CatsSection } from "@/components/site/CatsSection";
import { ExperienceSection } from "@/components/site/ExperienceSection";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { HelpSection } from "@/components/site/HelpSection";
import { Hero } from "@/components/site/Hero";
import { MenuSection } from "@/components/site/MenuSection";
import { ReservationSection } from "@/components/site/ReservationSection";
import { RulesSection } from "@/components/site/RulesSection";
import { SocialSection } from "@/components/site/SocialSection";

export default function HomePage() {
  return (
    <main>
      <Header />
      <Hero />
      <ExperienceSection />
      <ReservationSection />
      <MenuSection />
      <CatsSection />
      <RulesSection />
      <HelpSection />
      <SocialSection />
      <Footer />
    </main>
  );
}
