import { Award, ShieldCheck, Trophy, CheckCircle2, Medal, Star } from "lucide-react";

const certifications = [
  {
    icon: Award,
    title: "ISO 9001:2015 Certified",
    year: "2020",
    description: "International standard for Quality Management Systems demonstrating our commitment to delivering consistent, high-quality engineering services.",
    authority: "International Organization for Standardization"
  },
  {
    icon: ShieldCheck,
    title: "LEED Accredited Professionals",
    year: "2018",
    description: "Multiple team members certified in Leadership in Energy and Environmental Design, ensuring sustainable building practices.",
    authority: "U.S. Green Building Council"
  },
  {
    icon: Trophy,
    title: "AIA Engineering Excellence Award",
    year: "2023",
    description: "Recognized for outstanding structural engineering design and innovation in commercial architecture.",
    authority: "American Institute of Architects"
  },
  {
    icon: CheckCircle2,
    title: "Professional Engineering Licenses",
    year: "Active",
    description: "All senior engineers hold PE licenses in multiple states, ensuring compliance and professional standards.",
    authority: "State Engineering Boards"
  },
  {
    icon: Medal,
    title: "AISC Certified Fabricator",
    year: "2019",
    description: "Partnership with certified steel fabricators ensuring highest quality structural steel construction.",
    authority: "American Institute of Steel Construction"
  },
  {
    icon: Star,
    title: "OSHA Safety Excellence",
    year: "2022",
    description: "Recognized for maintaining exceptional safety standards across all project sites and operations.",
    authority: "Occupational Safety and Health Administration"
  },
];

const awards = [
  {
    year: "2023",
    title: "Best Infrastructure Project",
    project: "Metropolitan Transit Bridge",
    organization: "Engineering News-Record"
  },
  {
    year: "2022",
    title: "Innovation in Structural Design",
    project: "Skyline Tower Complex",
    organization: "Structural Engineers Association"
  },
  {
    year: "2021",
    title: "Sustainable Engineering Award",
    project: "Green Industrial Facility",
    organization: "American Society of Civil Engineers"
  },
  {
    year: "2020",
    title: "Project of the Year",
    project: "Regional Medical Center",
    organization: "Construction Management Association"
  },
];

const Certifications = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-32 md:py-40 bg-muted/30">
        <div className="container-fluid">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Certifications & Awards
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Recognized excellence in structural engineering and commitment to industry standards
            </p>
          </div>
        </div>
      </section>

      {/* Certifications Grid */}
      <section className="py-24 md:py-32">
        <div className="container-fluid">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            Professional Certifications
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-card border border-border p-8 hover:border-primary transition-all duration-300 hover-lift"
                style={{
                  animation: `fade-in-up 0.6s ease-out ${index * 0.1}s both`,
                }}
              >
                <cert.icon className="h-12 w-12 text-primary mb-6" />
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold">{cert.title}</h3>
                  <span className="text-sm text-primary font-semibold">{cert.year}</span>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {cert.description}
                </p>
                <p className="text-sm text-muted-foreground italic">
                  — {cert.authority}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Timeline */}
      <section className="py-24 md:py-32 bg-muted/30">
        <div className="container-fluid">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            Industry Awards
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {awards.map((award, index) => (
              <div
                key={index}
                className="flex gap-8 items-start bg-background border border-border p-8 hover:border-primary transition-colors"
                style={{
                  animation: `fade-in-up 0.6s ease-out ${index * 0.15}s both`,
                }}
              >
                <div className="flex-shrink-0">
                  <div className="text-4xl font-bold text-primary font-poppins">
                    {award.year}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">{award.title}</h3>
                  <p className="text-muted-foreground mb-2">
                    Project: <span className="text-foreground">{award.project}</span>
                  </p>
                  <p className="text-sm text-muted-foreground italic">
                    {award.organization}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Certifications;