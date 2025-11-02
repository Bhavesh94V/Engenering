import { Link } from "react-router-dom";
import {
  CheckCircle2,
  Award,
  Target,
  Users,
  Lightbulb,
  Building2,
  Shield,
  Zap,
  Heart,
  Quote
} from "lucide-react";
import heroStructure1 from "@/assets/hero-structure-1.jpg";
import aboutBlueprint from "@/assets/about-blueprint.jpg";

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative h-[60vh] flex items-center justify-center"
        style={{
          backgroundImage: `url(${heroStructure1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        <div className="relative container-fluid text-center space-y-4">
          {/* Breadcrumb */}
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <span className="text-primary">About Us</span>
          </div>

          <p className="text-primary text-sm uppercase tracking-widest">Who We Are</p>
          <h1 className="text-5xl md:text-7xl font-bold">Building the Future with Strength and Vision</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Engineering excellence through innovation, precision, and unwavering commitment to structural integrity
          </p>
        </div>
      </section>

      {/* Inspiring Quote Section */}
      <section className="py-20 bg-primary/5 border-y border-primary/20 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

        <div className="container-fluid relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Quote Content */}
            <div className="lg:col-span-8 space-y-6 animate-fade-in">
              <Quote className="h-16 w-16 text-primary" />
              <blockquote className="text-3xl md:text-4xl font-bold text-foreground leading-relaxed">
                "We don't just design structures; we engineer the foundations of tomorrow, where every calculation matters and every beam tells a story of precision, safety, and innovation."
              </blockquote>
              <p className="text-primary font-semibold text-lg">— Our Philosophy</p>
            </div>

            {/* Side Stats/Values */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-background/50 backdrop-blur-sm p-6 rounded-lg border border-primary/20">
                <div className="text-5xl font-bold text-primary mb-2">100%</div>
                <div className="text-foreground font-semibold">Safety Record</div>
                <div className="text-sm text-muted-foreground mt-1">Zero major incidents in 5 years</div>
              </div>
              <div className="bg-background/50 backdrop-blur-sm p-6 rounded-lg border border-primary/20">
                <div className="text-5xl font-bold text-primary mb-2">24/7</div>
                <div className="text-foreground font-semibold">Engineering Support</div>
                <div className="text-sm text-muted-foreground mt-1">Always here when you need us</div>
              </div>
              <div className="bg-background/50 backdrop-blur-sm p-6 rounded-lg border border-primary/20">
                <div className="text-5xl font-bold text-primary mb-2">ISO</div>
                <div className="text-foreground font-semibold">Certified Quality</div>
                <div className="text-sm text-muted-foreground mt-1">International standards compliance</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-24 md:py-32 container-fluid">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div
            className="space-y-6"
            style={{
              animation: "fade-in-up 0.8s ease-out",
            }}
          >
            <div className="inline-block">
              <div className="flex items-center gap-3 mb-4">
                <Building2 className="h-8 w-8 text-primary" />
                <span className="text-primary text-sm uppercase tracking-widest font-medium">Our Story</span>
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">Engineering Legacy Since 2005</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Founded in 2005, <span className="text-foreground font-semibold">Structural ENG</span> has established itself as a premier structural engineering consultancy, specializing in innovative design solutions across commercial, industrial, residential, and infrastructure sectors. From our inception, we have been driven by a singular mission: to deliver engineering excellence that transforms architectural visions into structural reality.
              </p>
              <p>
                Our journey began with a small team of passionate engineers who believed that structural design should seamlessly blend safety, innovation, and sustainability. Today, we are a team of over 50 highly skilled professionals, working on landmark projects that shape skylines and connect communities across the globe.
              </p>
              <p>
                We specialize in advanced structural analysis, seismic engineering, retrofit solutions, and cutting-edge design methodologies. Our expertise spans high-rise towers, industrial facilities, bridges, and complex architectural structures, all engineered with precision and delivered with integrity.
              </p>
            </div>
          </div>

          <div
            className="relative"
            style={{
              animation: "fade-in-up 0.8s ease-out 0.2s both",
            }}
          >
            <img
              src={aboutBlueprint}
              alt="Engineering blueprints and structural designs"
              className="w-full h-auto hover-lift"
            />
            <div className="absolute -bottom-8 -right-8 bg-primary p-8 text-primary-foreground">
              <p className="text-5xl font-bold">19+</p>
              <p className="text-sm uppercase tracking-widest">Years of Excellence</p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 md:py-32 bg-muted/30">
        <div className="container-fluid">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Vision */}
            <div
              className="space-y-6"
              style={{
                animation: "fade-in-up 0.8s ease-out",
              }}
            >
              <div className="flex items-center gap-3">
                <Target className="h-10 w-10 text-primary" />
                <h2 className="text-3xl md:text-4xl font-bold">Vision That Shapes Tomorrow</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To be the global leader in structural engineering innovation, recognized for our commitment to creating resilient, sustainable, and architecturally inspiring structures that stand the test of time. We envision a future where engineering and design converge to build infrastructures that are not only structurally sound but also environmentally responsible and socially impactful.
              </p>
            </div>

            {/* Mission */}
            <div
              className="space-y-6"
              style={{
                animation: "fade-in-up 0.8s ease-out 0.2s both",
              }}
            >
              <div className="flex items-center gap-3">
                <Award className="h-10 w-10 text-primary" />
                <h2 className="text-3xl md:text-4xl font-bold">Mission of Excellence</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our mission is to deliver world-class structural engineering solutions that exceed client expectations through technical excellence, collaborative partnerships, and unwavering dedication to safety and quality. We strive to provide innovative, cost-effective designs while maintaining the highest standards of professional integrity and engineering precision in every project we undertake.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 md:py-32 container-fluid">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Core Values</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The principles that guide every decision, design, and delivery
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: Shield,
              title: "Integrity",
              description: "Unwavering commitment to honesty, transparency, and ethical engineering practices in every project.",
            },
            {
              icon: Lightbulb,
              title: "Innovation",
              description: "Embracing cutting-edge technologies and creative solutions to solve complex structural challenges.",
            },
            {
              icon: CheckCircle2,
              title: "Quality",
              description: "Delivering exceptional engineering excellence with meticulous attention to detail and precision.",
            },
            {
              icon: Heart,
              title: "Collaboration",
              description: "Building strong partnerships with clients, architects, and contractors through open communication.",
            },
          ].map((value, index) => (
            <div
              key={index}
              className="text-center space-y-4 p-6 hover-lift hover:bg-muted/30 transition-all duration-500"
              style={{
                animation: `fade-in-up 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              <div className="w-16 h-16 mx-auto bg-primary/10 flex items-center justify-center">
                <value.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold">{value.title}</h3>
              <p className="text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Engineering Expertise */}
      <section className="py-24 md:py-32 bg-muted/30">
        <div className="container-fluid">
          <div className="max-w-3xl mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Engineering Expertise That Inspires Confidence
            </h2>
            <p className="text-lg text-muted-foreground">
              Our technical capabilities span the full spectrum of structural engineering disciplines, backed by advanced software and proven methodologies.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Structural Design & Analysis",
              "Seismic Engineering & Retrofitting",
              "Foundation Engineering",
              "Steel & Concrete Design",
              "Bridge & Infrastructure Design",
              "Building Rehabilitation",
              "Construction Documentation",
              "Site Inspection & Quality Control",
              "Finite Element Analysis (FEA)",
            ].map((expertise, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 bg-background hover-lift transition-all duration-300"
                style={{
                  animation: `fade-in-up 0.4s ease-out ${index * 0.05}s both`,
                }}
              >
                <Zap className="h-5 w-5 text-primary flex-shrink-0" />
                <p className="font-medium">{expertise}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 bg-primary/5 border-l-4 border-primary">
            <p className="text-lg font-medium mb-2">Advanced Engineering Tools</p>
            <p className="text-muted-foreground">
              STAAD.Pro • ETABS • SAP2000 • AutoCAD • Revit • SAFE • PERFORM-3D • RAM Structural System
            </p>
          </div>
        </div>
      </section>

      {/* Experience & Projects */}
      <section className="py-24 md:py-32 container-fluid">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold">
              Experience and Signature Projects
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With nearly two decades of engineering excellence, our portfolio includes over 500 successfully completed projects spanning commercial high-rises, industrial complexes, residential towers, bridges, and critical infrastructure. Our team brings together over 200 years of combined engineering experience, delivering structural solutions for projects valued at over $2 billion.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">Commercial Excellence</p>
                  <p className="text-muted-foreground">50+ story towers and mixed-use developments</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">Industrial Innovation</p>
                  <p className="text-muted-foreground">Manufacturing plants and distribution centers</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">Infrastructure Impact</p>
                  <p className="text-muted-foreground">Bridges, highways, and transportation systems</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {[
              { value: "500+", label: "Projects Completed" },
              { value: "50+", label: "Engineering Team" },
              { value: "$2B+", label: "Project Value" },
              { value: "35", label: "Countries Served" },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-8 bg-muted/30 hover-lift"
                style={{
                  animation: `scale-in 0.6s ease-out ${index * 0.1}s both`,
                }}
              >
                <p className="text-5xl font-bold text-primary mb-2">{stat.value}</p>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-24 md:py-32 bg-muted/30">
        <div className="container-fluid">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Meet the Minds Behind the Structure
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Led by industry veterans with decades of combined experience in structural engineering
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-background p-8 hover-lift">
              <div className="flex items-center gap-4 mb-4">
                <Users className="h-12 w-12 text-primary" />
                <div>
                  <h3 className="text-2xl font-bold">Engineering Leadership</h3>
                  <p className="text-primary">Structural Engineers | Licensed Professionals</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Our leadership team comprises licensed Professional Engineers with advanced degrees from top institutions and decades of hands-on experience in structural design, analysis, and project management. Each member brings specialized expertise in seismic engineering, high-rise design, industrial structures, or infrastructure projects, ensuring comprehensive coverage across all engineering disciplines.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-background p-6">
                <h4 className="font-bold text-lg mb-2">Qualifications</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Licensed Professional Engineers (PE)</li>
                  <li>• M.S. in Structural Engineering</li>
                  <li>• LEED Accredited Professionals</li>
                  <li>• SEI & ASCE Members</li>
                </ul>
              </div>
              <div className="bg-background p-6">
                <h4 className="font-bold text-lg mb-2">Commitment</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Safety-first approach</li>
                  <li>• Continuous professional development</li>
                  <li>• Mentorship and knowledge sharing</li>
                  <li>• Innovation and research</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 md:py-32 container-fluid">
        <div className="max-w-3xl mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Clients Choose Structural ENG
          </h2>
          <p className="text-lg text-muted-foreground">
            Our client-centric approach, technical excellence, and proven track record set us apart in the structural engineering industry.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "Technical Excellence",
              description: "State-of-the-art analysis tools and cutting-edge engineering methodologies ensure optimal structural solutions.",
            },
            {
              title: "Client-Centric Approach",
              description: "We listen, understand your vision, and collaborate closely throughout the project lifecycle.",
            },
            {
              title: "Timely Delivery",
              description: "95% on-time project completion rate with rigorous project management and quality control.",
            },
            {
              title: "Cost Efficiency",
              description: "Value engineering and optimized designs that reduce construction costs without compromising safety.",
            },
            {
              title: "Comprehensive Services",
              description: "From concept to construction, we provide full-spectrum engineering support and documentation.",
            },
            {
              title: "Safety & Compliance",
              description: "Rigorous adherence to international building codes and seismic design standards.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="p-6 bg-muted/20 hover:bg-muted/40 hover-lift transition-all duration-500"
              style={{
                animation: `fade-in-up 0.5s ease-out ${index * 0.1}s both`,
              }}
            >
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Accreditations */}
      <section className="py-24 md:py-32 bg-muted/30">
        <div className="container-fluid text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Accreditations & Trust Marks
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
            Our certifications and professional affiliations demonstrate our commitment to excellence and industry standards
          </p>

          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              "ISO 9001:2015 Certified",
              "Professional Engineers License",
              "LEED Accredited",
              "ASCE Member Firm",
            ].map((cert, index) => (
              <div
                key={index}
                className="p-6 bg-background hover-lift"
                style={{
                  animation: `scale-in 0.5s ease-out ${index * 0.1}s both`,
                }}
              >
                <Award className="h-10 w-10 text-primary mx-auto mb-3" />
                <p className="font-semibold">{cert}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 container-fluid">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">
            Let's Build the Future Together
          </h2>
          <p className="text-lg text-muted-foreground">
            Partner with us for your next structural engineering project. Whether it's a towering skyscraper, a critical bridge, or an innovative industrial facility, we bring the expertise, precision, and passion to make your vision structurally sound and architecturally inspiring.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact">
              <button className="bg-primary text-primary-foreground px-8 py-4 text-lg font-semibold hover:shadow-red transition-all duration-300">
                Start Your Project
              </button>
            </Link>
            <Link to="/projects">
              <button className="border-2 border-primary text-primary px-8 py-4 text-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                View Our Work
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
