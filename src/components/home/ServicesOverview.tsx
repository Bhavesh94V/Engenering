import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { services } from "@/data/services";

const ServicesOverview = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      <div className="container-fluid relative">
        <div className="max-w-3xl mb-16">
          <p className="text-primary text-sm font-medium uppercase tracking-widest mb-4">
            What We Do
          </p>
          <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Comprehensive Engineering Solutions
          </h2>
          <p className="text-lg text-muted-foreground">
            From structural analysis to seismic design, we deliver precision engineering across
            every discipline.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const heights = ["min-h-[320px]", "min-h-[280px]", "min-h-[320px]", "min-h-[300px]", "min-h-[280px]", "min-h-[320px]"];
            const heightClass = heights[index % heights.length];
            
            return (
              <Link
                key={service.id}
                to={`/services/${service.id}`}
                className={`group relative bg-background ${heightClass} overflow-hidden`}
                style={{
                  animation: `fade-in-up 0.6s ease-out ${index * 0.1}s both`,
                }}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-background/70" />
                </div>

                <div className="relative h-full p-8 flex flex-col">
                  <div className="mb-6 inline-flex items-center justify-center w-16 h-16 bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                    <service.icon className="h-8 w-8" />
                  </div>

                  <div className="flex-1 space-y-3">
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 text-primary text-sm font-medium mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span>Learn More</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>

                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-primary group-hover:w-full transition-all duration-700" />
                </div>
              </Link>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-primary hover:text-primary-glow transition-colors group"
          >
            <span className="font-medium">Explore All Services</span>
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
