import { CheckCircle2 } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Initial Consultation",
    description: "We meet with you to understand your project requirements, goals, and constraints.",
  },
  {
    number: "02",
    title: "Conceptual Design",
    description: "Our team develops preliminary structural concepts and feasibility analysis.",
  },
  {
    number: "03",
    title: "Detailed Engineering",
    description: "Complete structural calculations, drawings, and specifications are prepared.",
  },
  {
    number: "04",
    title: "Review & Approval",
    description: "We coordinate with authorities and stakeholders for design approval.",
  },
  {
    number: "05",
    title: "Construction Support",
    description: "Ongoing support during construction with site visits and clarifications.",
  },
  {
    number: "06",
    title: "Project Completion",
    description: "Final inspections and documentation to ensure successful project delivery.",
  },
];

const ProcessTimeline = () => {
  return (
    <section className="py-24 md:py-32 bg-muted/30">
      <div className="container-fluid">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Process</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A systematic approach to delivering exceptional structural engineering solutions
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative group"
                style={{
                  animation: `fade-in-up 0.6s ease-out ${index * 0.1}s both`,
                }}
              >
                <div className="bg-card border border-border p-8 hover:border-primary transition-all duration-300 hover-lift">
                  <div className="flex items-start gap-4 mb-4">
                    <span className="text-5xl font-bold text-primary/20 font-poppins">
                      {step.number}
                    </span>
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-2" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Connector Line - Hidden on last item of each row */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-border group-hover:bg-primary transition-colors" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;