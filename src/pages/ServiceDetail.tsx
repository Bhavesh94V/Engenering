import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { services } from "@/data/services";
import heroStructure2 from "@/assets/hero-structure-2.jpg";

const ServiceDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const service = services.find((s) => s.id === id);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Service Not Found</h1>
          <Button onClick={() => navigate("/services")}>Back to Services</Button>
        </div>
      </div>
    );
  }

  const currentIndex = services.findIndex((s) => s.id === id);
  const prevService = currentIndex > 0 ? services[currentIndex - 1] : null;
  const nextService = currentIndex < services.length - 1 ? services[currentIndex + 1] : null;

  return (
    <div className="min-h-screen">
      {/* Sticky Quick Navigation */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-4">
        <Link
          to="/services"
          className="w-12 h-12 bg-background border border-border hover:border-primary flex items-center justify-center group transition-all hover:shadow-red"
          title="Back to Services"
        >
          <ArrowLeft className="h-5 w-5 group-hover:text-primary transition-colors" />
        </Link>
        {prevService && (
          <Link
            to={`/services/${prevService.id}`}
            className="w-12 h-12 bg-background border border-border hover:border-primary flex items-center justify-center group transition-all hover:shadow-red"
            title={`Previous: ${prevService.title}`}
          >
            <ArrowLeft className="h-5 w-5 group-hover:text-primary transition-colors" />
          </Link>
        )}
        {nextService && (
          <Link
            to={`/services/${nextService.id}`}
            className="w-12 h-12 bg-background border border-border hover:border-primary flex items-center justify-center group transition-all hover:shadow-red"
            title={`Next: ${nextService.title}`}
          >
            <ArrowRight className="h-5 w-5 group-hover:text-primary transition-colors" />
          </Link>
        )}
      </div>

      {/* Hero Section - Double Header */}
      <section
        className="relative h-[60vh] flex items-center justify-center"
        style={{
          backgroundImage: `url(${service.image})`,
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
            <Link to="/services" className="hover:text-primary transition-colors">Services</Link>
            <span>/</span>
            <span className="text-primary">{service.title}</span>
          </div>
          
          <p className="text-primary text-sm uppercase tracking-widest">Our Expertise</p>
          <h1 className="text-5xl md:text-7xl font-bold">{service.title}</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {service.tagline}
          </p>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-24 md:py-32 container-fluid">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold">Service Overview</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {service.fullDescription}
            </p>
          </div>

          {/* Key Features */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold">Key Features</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {service.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-muted/30">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Capabilities */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold">Technical Capabilities</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {service.capabilities.map((capability, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 bg-background border border-border hover:border-primary transition-all hover:shadow-red"
                >
                  <div className="w-2 h-2 bg-primary flex-shrink-0 mt-2" />
                  <span className="text-muted-foreground text-sm">{capability}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 md:py-32 bg-muted/30">
        <div className="container-fluid">
          <div className="max-w-5xl mx-auto">
            <h3 className="text-3xl font-bold mb-12 text-center">By The Numbers</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {service.stats.map((stat, index) => (
                <div key={index} className="text-center p-8 bg-background">
                  <p className="text-5xl font-bold text-primary mb-2">{stat.value}</p>
                  <p className="text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Image */}
      <section className="py-24 md:py-32 container-fluid">
        <div className="max-w-6xl mx-auto">
          <img
            src={heroStructure2}
            alt={service.title}
            className="w-full h-auto"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-muted/30">
        <div className="container-fluid text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">Ready To Discuss Your Project?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Let's explore how our {service.title.toLowerCase()} expertise can bring your vision to life.
          </p>
          <div className="flex flex-wrap gap-4 justify-center pt-4">
            <Link to="/contact">
              <Button variant="hero" size="lg">
                Get In Touch
              </Button>
            </Link>
            <Link to="/projects">
              <Button variant="outline" size="lg">
                View Related Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Navigation Footer */}
      <section className="py-12 border-t border-border">
        <div className="container-fluid">
          <div className="flex justify-between items-center">
            {prevService ? (
              <Link
                to={`/services/${prevService.id}`}
                className="group flex items-center gap-3 hover:text-primary transition-colors"
              >
                <ArrowLeft className="h-5 w-5" />
                <div className="text-left">
                  <p className="text-xs text-muted-foreground uppercase">Previous Service</p>
                  <p className="font-bold">{prevService.title}</p>
                </div>
              </Link>
            ) : (
              <div />
            )}
            {nextService ? (
              <Link
                to={`/services/${nextService.id}`}
                className="group flex items-center gap-3 hover:text-primary transition-colors"
              >
                <div className="text-right">
                  <p className="text-xs text-muted-foreground uppercase">Next Service</p>
                  <p className="font-bold">{nextService.title}</p>
                </div>
                <ArrowRight className="h-5 w-5" />
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
