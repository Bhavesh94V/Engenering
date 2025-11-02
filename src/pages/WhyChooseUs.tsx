import { Award, Target, Users, Lightbulb, Shield, TrendingUp, Clock, Globe } from "lucide-react";
import { useState, useEffect } from "react";
import heroStructure3 from "@/assets/hero-structure-3.jpg";
import aboutBlueprint from "@/assets/about-blueprint.jpg";

const strengths = [
  {
    icon: Award,
    title: "Industry Excellence",
    description: "25+ years delivering award-winning structural engineering solutions globally.",
  },
  {
    icon: Target,
    title: "Technical Precision",
    description: "Unmatched accuracy in structural calculations and engineering analysis.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "50+ certified engineers with specialized expertise across all sectors.",
  },
  {
    icon: Lightbulb,
    title: "Innovation Driven",
    description: "Pioneering sustainable design methodologies and cutting-edge technologies.",
  },
  {
    icon: Shield,
    title: "Safety First",
    description: "Zero-compromise approach to structural integrity and building safety.",
  },
  {
    icon: TrendingUp,
    title: "Proven Track Record",
    description: "500+ successfully completed projects with 98% client satisfaction rate.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "95% of projects delivered on schedule without quality compromise.",
  },
  {
    icon: Globe,
    title: "Global Experience",
    description: "International project experience across 35 countries and multiple sectors.",
  },
];

const stats = [
  { value: 25, suffix: "+", label: "Years Experience" },
  { value: 500, suffix: "+", label: "Projects Completed" },
  { value: 50, suffix: "+", label: "Expert Engineers" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
];

const AnimatedCounter = ({ end, duration = 2000, suffix = "" }: { end: number; duration?: number; suffix?: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return <span>{count}{suffix}</span>;
};

const WhyChooseUs = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative h-[60vh] flex items-center justify-center"
        style={{
          backgroundImage: `url(${heroStructure3})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        <div className="relative container-fluid text-center space-y-4">
          <p className="text-primary text-sm uppercase tracking-widest">Our Advantage</p>
          <h1 className="text-5xl md:text-7xl font-bold">Why Choose Us</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Engineering excellence built on precision, innovation, and unwavering commitment to your success.
          </p>
        </div>
      </section>

      {/* Animated Stats */}
      <section className="py-24 md:py-32 bg-muted/30">
        <div className="container-fluid">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-8 bg-background hover-lift hover:shadow-red transition-all duration-500"
                style={{
                  animation: `scale-in 0.6s ease-out ${index * 0.1}s both`,
                }}
              >
                <p className="text-5xl md:text-6xl font-bold text-primary mb-3">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-muted-foreground font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Strengths - Floating Grid */}
      <section className="py-24 md:py-32 container-fluid">
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">What Sets Us Apart</h2>
          <p className="text-lg text-muted-foreground">
            A combination of technical excellence, proven experience, and client-focused approach
            that delivers exceptional results every time.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {strengths.map((strength, index) => (
            <div
              key={index}
              className="group relative bg-background p-8 hover-lift hover:shadow-red transition-all duration-500"
              style={{
                animation: `fade-in-up 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              {/* Background Accent */}
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Icon */}
              <div className="relative mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <strength.icon className="h-8 w-8" />
                </div>
              </div>

              {/* Content */}
              <div className="relative space-y-3">
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                  {strength.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {strength.description}
                </p>
              </div>

              {/* Bottom Accent */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-primary group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 md:py-32 bg-muted/30">
        <div className="container-fluid">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <img
                src={aboutBlueprint}
                alt="Engineering process"
                className="w-full h-auto"
              />
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Process</h2>
                <p className="text-lg text-muted-foreground">
                  A systematic approach that ensures quality, precision, and timely delivery at every stage.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  { step: "01", title: "Consultation & Analysis", desc: "Understanding project requirements and constraints" },
                  { step: "02", title: "Concept Development", desc: "Creating structural solutions and design alternatives" },
                  { step: "03", title: "Engineering & Calculation", desc: "Detailed analysis and technical documentation" },
                  { step: "04", title: "Review & Optimization", desc: "Refining design for efficiency and safety" },
                  { step: "05", title: "Delivery & Support", desc: "Final documentation and ongoing consultation" },
                ].map((process, index) => (
                  <div key={index} className="flex gap-6 items-start group">
                    <div className="text-4xl font-bold text-primary/20 group-hover:text-primary transition-colors">
                      {process.step}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {process.title}
                      </h3>
                      <p className="text-muted-foreground">{process.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyChooseUs;
