import { useEffect } from "react";
import ClubHeader from "@/components/club/ClubHeader";
import ClubHero from "@/components/club/ClubHero";
import StatsCounters from "@/components/club/StatsCounters";
import AboutClub from "@/components/club/AboutClub";
import PresidentSection from "@/components/club/PresidentSection";
import AchievementsTimeline from "@/components/club/AchievementsTimeline";
import CodeOfTheLion from "@/components/club/CodeOfTheLion";
import Gallery from "@/components/club/Gallery";
import JoinCTA from "@/components/club/JoinCTA";
import ContactSection from "@/components/club/ContactSection";
import ClubFooter from "@/components/club/ClubFooter";

const Index = () => {
  useEffect(() => {
    document.title = "СК Берое — Канадска борба | Стара Загора";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <ClubHeader />
      <main className="flex-1">
        <ClubHero />
        <StatsCounters />
        <AboutClub />
        <PresidentSection />
        <AchievementsTimeline />
        <CodeOfTheLion />
        <Gallery />
        <JoinCTA />
        <ContactSection />
      </main>
      <ClubFooter />
    </div>
  );
};

export default Index;
