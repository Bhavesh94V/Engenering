import { Quote, Star, Building2 } from "lucide-react";
import heroStructure2 from "@/assets/hero-structure-2.jpg";

const clients = [
  "TechCorp Global", "Metropolitan Development", "Skyline Architects", "Urban Infrastructure LLC",
  "Industrial Solutions Inc", "Residential Builders Group", "Infrastructure Partners", "Commercial Realty Corp",
  "Global Engineering Co", "Structural Innovations Ltd", "BuildTech Industries", "Modern Architecture Firm",
  "City Development Authority", "National Infrastructure", "Premier Construction", "Elite Properties Group",
];

const testimonials = [
  {
    quote: "Their structural engineering expertise transformed our vision into reality. The team's precision and innovation exceeded all expectations. Every calculation was perfect, every deadline met.",
    author: "Sarah Mitchell",
    position: "CEO, TechCorp Global",
    rating: 5,
  },
  {
    quote: "Outstanding technical capability combined with creative problem-solving. They delivered our complex 45-story project on time and 15% under budget while maintaining the highest safety standards.",
    author: "James Rodriguez",
    position: "Director, Metropolitan Development",
    rating: 5,
  },
  {
    quote: "The level of detail and structural integrity they bring to every project is unmatched. True partners in architectural excellence who understand both engineering and design vision.",
    author: "Emily Chen",
    position: "Principal Architect, Skyline Architects",
    rating: 5,
  },
  {
    quote: "We've worked with many engineering firms, but none match their combination of technical expertise and client service. They turned our challenging bridge project into a landmark achievement.",
    author: "Michael Anderson",
    position: "Project Manager, Infrastructure Partners",
    rating: 5,
  },
  {
    quote: "Their seismic retrofitting solutions saved our historic building while meeting all modern safety codes. Innovative thinking backed by rigorous engineering analysis.",
    author: "Lisa Thompson",
    position: "Director, City Development Authority",
    rating: 5,
  },
  {
    quote: "From initial consultation to final approval, their team demonstrated exceptional professionalism. The structural design for our manufacturing facility was both efficient and cost-effective.",
    author: "David Park",
    position: "VP Operations, Industrial Solutions Inc",
    rating: 5,
  },
];

const caseStudies = [
  {
    title: "Metropolitan Tower Complex",
    client: "Metropolitan Development",
    challenge: "Design 45-story mixed-use tower in seismic zone",
    solution: "Advanced base isolation system with steel moment frames",
    result: "Completed 3 months ahead of schedule, 15% under budget",
  },
  {
    title: "Industrial Hub Expansion",
    client: "Industrial Solutions Inc",
    challenge: "Heavy-load manufacturing facility with large spans",
    solution: "Custom steel framework with integrated crane systems",
    result: "50% faster construction time, 20% cost savings",
  },
  {
    title: "Urban Bridge Connection",
    client: "Infrastructure Partners",
    challenge: "Complex multi-span bridge over busy waterway",
    solution: "Cable-stayed design with minimal environmental impact",
    result: "Award-winning design, zero construction delays",
  },
];

const Clients = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative h-[60vh] flex items-center justify-center"
        style={{
          backgroundImage: `url(${heroStructure2})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        <div className="relative container-fluid text-center space-y-4">
          <p className="text-primary text-sm uppercase tracking-widest">Our Clients</p>
          <h1 className="text-5xl md:text-7xl font-bold">Trusted By Industry Leaders</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Building lasting partnerships through exceptional engineering and unwavering commitment to excellence.
          </p>
        </div>
      </section>

      {/* Client Logos Grid */}
      <section className="py-24 border-y border-border/30">
        <div className="container-fluid">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {clients.map((client, index) => (
              <div
                key={index}
                className="group relative bg-muted/20 hover:bg-muted/40 p-8 flex flex-col items-center justify-center text-center transition-all duration-500 hover-lift"
                style={{
                  animation: `fade-in-up 0.4s ease-out ${index * 0.05}s both`,
                }}
              >
                <div className="w-16 h-16 mb-4 flex items-center justify-center bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                  <Building2 className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                  {client}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-24 md:py-32 container-fluid">
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">What Our Clients Say</h2>
          <p className="text-lg text-muted-foreground">
            Real feedback from real projects. Our clients' success stories speak to our commitment to excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-muted/30 p-8 hover-lift hover:shadow-red transition-all duration-500"
              style={{
                animation: `fade-in-up 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>

              <Quote className="h-10 w-10 text-primary/20 mb-6" />
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                "{testimonial.quote}"
              </p>
              
              <div className="pt-4 border-t border-border/50">
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground mt-1">{testimonial.position}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 md:py-32 bg-muted/30">
        <div className="container-fluid">
          <div className="max-w-3xl mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">Case Studies</h2>
            <p className="text-lg text-muted-foreground">
              In-depth looks at how we solved complex engineering challenges for our clients.
            </p>
          </div>

          <div className="space-y-8">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="bg-background p-8 md:p-12 hover-lift hover:shadow-red transition-all duration-500"
                style={{
                  animation: `fade-in-up 0.6s ease-out ${index * 0.2}s both`,
                }}
              >
                <div className="grid lg:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <p className="text-primary text-sm uppercase tracking-widest">
                      Case Study {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="text-3xl font-bold">{study.title}</h3>
                    <p className="text-muted-foreground">Client: {study.client}</p>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-sm font-semibold text-primary mb-2">Challenge</h4>
                      <p className="text-muted-foreground">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-primary mb-2">Solution</h4>
                      <p className="text-muted-foreground">{study.solution}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-primary mb-2">Result</h4>
                      <p className="text-muted-foreground">{study.result}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 md:py-32 container-fluid">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center p-8">
            <p className="text-5xl font-bold text-primary mb-2">98%</p>
            <p className="text-muted-foreground">Client Satisfaction</p>
          </div>
          <div className="text-center p-8">
            <p className="text-5xl font-bold text-primary mb-2">500+</p>
            <p className="text-muted-foreground">Projects Delivered</p>
          </div>
          <div className="text-center p-8">
            <p className="text-5xl font-bold text-primary mb-2">95%</p>
            <p className="text-muted-foreground">On-Time Delivery</p>
          </div>
          <div className="text-center p-8">
            <p className="text-5xl font-bold text-primary mb-2">35</p>
            <p className="text-muted-foreground">Countries Served</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Clients;
