import { SectionHeader } from "../ui/section-header";
import { School } from "lucide-react";

export function TeachingSection() {
  const teaching = [
    {
      institution: "Trinity College",
      role: "Teaching Assistant",
      courses: [
        { name: "E&M, Thermodynamics, Relativity (PH102)", period: "Spring 2024" },
        { name: "Electricity & Magnetism (PH231)", period: "Spring 2023" },
        { name: "Calculus III (MA234)", period: "Fall 2023" },
        { name: "Calculus I (MA131)", period: "Fall 2022" }
      ],
      description: "Responsible for hosting supplemental instruction lectures, grading homework & exams, facilitating experimental labs, and maintaining/setting up/troubleshooting laboratory equipment."
    },
    {
      institution: "Metropolitan Community College",
      role: "Tutor, Research Advisor, & Supplemental Instructor",
      courses: [
        { name: "General Physics I/II & Engineering Physics I/II", period: "Fall 2024/Spring 2025" },
        { name: "Calculus I/II/III", period: "Fall 2024/Spring 2025" }
      ],
      description: "Responsible for hosting supplemental instruction lectures and advising student research projects in physics and applied mathematics."
    }
  ];

  return (
    <section className="mb-8">
      <SectionHeader title="Teaching Experience" className="flex items-center gap-2">
        <School className="h-6 w-6" />
        Teaching Experience
      </SectionHeader>
      <div className="space-y-6">
        {teaching.map((position, idx) => (
          <div key={idx} className="bg-white/50 backdrop-blur-sm rounded-lg p-6 shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold font-serif text-[#1a1f2c]">{position.institution}</h3>
            <p className="text-gray-700 font-medium mb-2">{position.role}</p>
            <p className="text-gray-600 mb-4 text-sm">{position.description}</p>
            <div className="space-y-2">
              {position.courses.map((course, courseIdx) => (
                <div key={courseIdx} className="flex justify-between items-center text-sm">
                  <span className="text-gray-700">{course.name}</span>
                  <span className="text-gray-500">{course.period}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
