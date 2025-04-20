import { HeaderSection } from "@/components/cv/header-section";
import { EducationSection } from "@/components/cv/education-section";
import { UnifiedResearchSection } from "@/components/cv/unified-research-section";
import { TeachingSection } from "@/components/cv/teaching-section";
import { SkillsSection } from "@/components/cv/skills-section";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-50">
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <HeaderSection />
        <main className="prose max-w-none font-serif">
          <EducationSection />
          <UnifiedResearchSection />
          <TeachingSection />
          <SkillsSection />
        </main>
      </div>
    </div>
  );
};

export default Index;
