import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Building2, Clock, Users, Lightbulb, Shield, Settings, Award, Leaf } from "lucide-react";
import faqPattern from "@/assets/faq-pattern.jpg";

interface FAQItem {
  question: string;
  answer: string;
  icon: React.ReactNode;
}

const faqData: FAQItem[] = [
  {
    question: "What types of projects do you specialize in?",
    answer: "We specialize in commercial buildings, industrial facilities, infrastructure projects including bridges and highways, and residential developments. Our expertise covers seismic design, high-rise construction, and sustainable engineering solutions.",
    icon: <Building2 className="w-5 h-5" />
  },
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary based on scope and complexity. Small projects may take 2-3 months, while large infrastructure projects can span 1-2 years. We provide detailed timelines during initial consultation and maintain clear communication throughout.",
    icon: <Clock className="w-5 h-5" />
  },
  {
    question: "Do you work with architects and contractors?",
    answer: "Yes, we collaborate closely with architects, contractors, and other stakeholders throughout the project lifecycle. Our integrated approach ensures seamless coordination and optimal outcomes.",
    icon: <Users className="w-5 h-5" />
  },
  {
    question: "What is your design philosophy?",
    answer: "We combine innovation with proven engineering principles, prioritizing safety, sustainability, and cost-effectiveness. Every design is optimized for structural integrity while meeting aesthetic and functional requirements.",
    icon: <Lightbulb className="w-5 h-5" />
  },
  {
    question: "Are your designs compliant with local building codes?",
    answer: "Absolutely. We ensure full compliance with all local, national, and international building codes and standards. Our team stays current with code updates and regulatory changes.",
    icon: <Shield className="w-5 h-5" />
  },
  {
    question: "How do you handle project changes or modifications?",
    answer: "We maintain flexibility throughout the design process. Changes are evaluated for structural impact, cost implications, and timeline effects. We work collaboratively with clients to implement modifications efficiently.",
    icon: <Settings className="w-5 h-5" />
  },
  {
    question: "What makes your firm different from competitors?",
    answer: "Our combination of technical expertise, innovative problem-solving, and client-focused service sets us apart. We leverage advanced technology while maintaining personal attention to every project detail.",
    icon: <Award className="w-5 h-5" />
  },
  {
    question: "Do you offer sustainability consulting?",
    answer: "Yes, sustainable design is integrated into all our projects. We provide LEED consultation, energy efficiency optimization, and sustainable material selection to minimize environmental impact.",
    icon: <Leaf className="w-5 h-5" />
  }
];

const FAQ = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url(${faqPattern})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background pointer-events-none" />

      <div className="container relative z-10 max-w-5xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Got Questions?
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Find answers to common questions about our structural engineering services and processes
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="animate-slide-in-right">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqData.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border bg-card rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[var(--shadow-card)] hover:border-primary/20"
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <AccordionTrigger className="px-6 py-5 text-left hover:no-underline group">
                  <div className="flex items-start gap-4 w-full">
                    <div className="mt-1 flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110">
                      {faq.icon}
                    </div>
                    <div className="flex-1 pr-4">
                      <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                        {faq.question}
                      </h3>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="pl-14 pr-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* CTA Card */}
        <div className="mt-16 animate-scale-in">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary to-primary-glow p-8 md:p-12 text-center shadow-[var(--shadow-engineering)]">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
                Still have questions?
              </h3>
              <p className="text-primary-foreground/90 mb-8 max-w-lg mx-auto text-lg">
                Our team is here to help. Get in touch with us for personalized assistance.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-white/90 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Contact Our Team
                <svg
                  className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
