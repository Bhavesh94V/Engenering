import { CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroStructure1 from "@/assets/hero-structure-1.jpg";
import { services } from "@/data/services";

const Services = () => {
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
            <span className="text-primary">Services</span>
          </div>
          
          <p className="text-primary text-sm uppercase tracking-widest">Our Expertise</p>
          <h1 className="text-5xl md:text-7xl font-bold">Comprehensive Engineering Solutions</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From concept through completion, delivering integrated structural engineering across all major sectors.
          </p>
        </div>
      </section>

      {/* Services Grid - Staggered Asymmetric Layout */}
      <section className="py-24 md:py-32 container-fluid">
        <div className="space-y-32">
          {services.map((service, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                index % 2 === 1 ? "lg:grid-flow-dense" : ""
              }`}
              style={{
                animation: `fade-in-up 0.8s ease-out ${index * 0.2}s both`,
              }}
            >
              {/* Image Side */}
              <div className={`relative group ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Floating Icon */}
                  <div className="absolute top-8 right-8 w-20 h-20 bg-primary text-primary-foreground flex items-center justify-center shadow-red">
                    <service.icon className="h-10 w-10" />
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className={`space-y-6 ${index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-3">
                    <div className="w-12 h-px bg-primary" />
                    <p className="text-primary text-sm font-medium uppercase tracking-widest">
                      Service {String(index + 1).padStart(2, "0")}
                    </p>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                    {service.title}
                  </h2>
                </div>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-3 pt-4">
                  {service.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex gap-4 pt-4">
                  <Link to={`/services/${service.id}`}>
                    <Button variant="hero" size="lg" className="group">
                      Learn More
                      <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                  <Link to="/contact">
                    <Button variant="outline" size="lg">
                      Get In Touch
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-muted/30">
        <div className="container-fluid text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">Ready To Start Your Project?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Let's discuss how our engineering expertise can bring your vision to life.
          </p>
          <div className="flex flex-wrap gap-4 justify-center pt-4">
            <Link to="/contact">
              <Button variant="hero" size="lg">
                Get In Touch
              </Button>
            </Link>
            <Link to="/projects">
              <Button variant="outline" size="lg">
                View Past Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
