
import { SectionHeader } from "../ui/section-header";
import { Briefcase } from "lucide-react";
import { Card, CardContent } from "../ui/card";

interface ResearchExperience {
  institution: string;
  period: string;
  advisor?: string;
  project?: string;
  achievements?: string[];
  institutionLogo?: string;
}

export function UnifiedResearchSection() {
  const researchExperiences: ResearchExperience[] = [
    {
      institution: "NASA Goddard Space Flight Center Theoretical Astrophysics Group",
      period: "Summer 2025",
      advisor: "Scott Noble",
      project: "Project t.b.d.",
      institutionLogo: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?w=50&h=50&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    },
    {
      institution: "The University of Kansas Particle Astrophysics Group",
      period: "2020 – Present",
      advisor: "Dave Besson",
      achievements: [
        "Did things"
      ],
      institutionLogo: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=50&h=50&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    },
    {
      institution: "NSF Neutrino Physics REU @ South Dakota School of Mines",
      period: "Summer 2023",
      project: "Analytical & Monte Carlo Approximations of the Phased Array Trigger Rate Observed in UHE Neutrino Observatories",
      institutionLogo: "https://images.unsplash.com/photo-1431576901776-e539bd916ba2?w=50&h=50&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    },
    {
      institution: "NSF Neutrino Physics REU @ The University of Alabama",
      period: "Summer 2022",
      project: "Estimating the Detector Efficiency of the Askaryan Radio Array Utilizing Simulated Neutrino Pulses",
      institutionLogo: "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?w=50&h=50&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    },
    {
      institution: "NSF Neutrino Physics REU @ The University of Delaware",
      period: "Summer 2021",
      project: "Convolutional Neural Network-based Directional Reconstruction of Neutrino & Cosmic Ray Events",
      institutionLogo: "https://images.unsplash.com/photo-1431576901776-e539bd916ba2?w=50&h=50&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    }
  ];

  return (
    <section className="mb-8">
      <SectionHeader title="Research Experience" className="flex items-center gap-2">
        <Briefcase className="h-6 w-6" />
        Research Experience
      </SectionHeader>
      <div className="space-y-4">
        {researchExperiences.map((exp, idx) => (
          <Card key={idx} className="overflow-hidden">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                {exp.institutionLogo && (
                  <img 
                    src={exp.institutionLogo} 
                    alt={`${exp.institution} logo`}
                    className="w-12 h-12 object-cover rounded-md grayscale"
                  />
                )}
                <div className="flex-1">
                  <h3 className="text-lg font-serif font-semibold text-[#1a1f2c]">{exp.institution}</h3>
                  <p className="text-gray-600 text-sm mb-2">{exp.period}</p>
                  {exp.advisor && <p className="text-gray-700 mb-2">Advisor: {exp.advisor}</p>}
                  {exp.project && <p className="text-gray-700 mb-2">{exp.project}</p>}
                  {exp.achievements && (
                    <ul className="list-disc ml-5 space-y-1 text-gray-700">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
