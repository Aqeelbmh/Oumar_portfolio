
import { ThemeProvider } from "@/context/ThemeContext";
import Layout from "@/components/Layout";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import EducationSection from "@/components/sections/EducationSection";
import CertificationsSection from "@/components/sections/CertificationsSection";
import LanguagesSection from "@/components/sections/LanguagesSection";
import ContactSection from "@/components/sections/ContactSection";

const Index = () => {
  return (
    <ThemeProvider>
      <Layout>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <EducationSection />
        <CertificationsSection />
        <LanguagesSection />
        <ContactSection />
      </Layout>
    </ThemeProvider>
  );
};

export default Index;
