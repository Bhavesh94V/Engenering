import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import aboutBlueprint from "@/assets/about-blueprint.jpg";
import heroStructure1 from "@/assets/hero-structure-1.jpg";

const NavigationPanels = () => {
  return (
    <section className="py-24 md:py-32 container-fluid">
      <div className="grid lg:grid-cols-2 gap-8">
        {/* About Section Panel */}
        <Link
          to="/about"
          className="group relative overflow-hidden aspect-[4/3] lg:aspect-auto lg:min-h-[500px]"
        >
          <div className="absolute inset-0">
            <img
              src={aboutBlueprint}
              alt="About Us - Engineering Excellence"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent group-hover:via-background/50 transition-all duration-500" />
          </div>

          <div className="relative h-full flex flex-col justify-end p-8 md:p-12">
            <div className="space-y-4 transform transition-transform duration-500 group-hover:translate-y-0">
              <p className="text-primary text-sm uppercase tracking-widest font-medium">
                Discover Our Story
              </p>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                About Our Engineering Excellence
              </h2>
              <p className="text-muted-foreground max-w-md">
                25+ years of structural innovation, precision engineering, and architectural
                collaboration across the globe.
              </p>
              <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-4 transition-all">
                Learn More
                <ArrowRight className="h-5 w-5" />
              </div>
            </div>
          </div>

          {/* Hover Accent */}
          <div className="absolute bottom-0 left-0 w-0 h-1 bg-primary group-hover:w-full transition-all duration-700" />
        </Link>

        {/* Blog/Ideas Section Panel */}
        <Link
          to="/blog"
          className="group relative overflow-hidden aspect-[4/3] lg:aspect-auto lg:min-h-[500px]"
        >
          <div className="absolute inset-0">
            <img
              src={heroStructure1}
              alt="Engineering Insights & Ideas"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent group-hover:via-background/50 transition-all duration-500" />
          </div>

          <div className="relative h-full flex flex-col justify-end p-8 md:p-12">
            <div className="space-y-4 transform transition-transform duration-500 group-hover:translate-y-0">
              <p className="text-primary text-sm uppercase tracking-widest font-medium">
                Engineering Insights
              </p>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Ideas & Innovation
              </h2>
              <p className="text-muted-foreground max-w-md">
                Explore technical articles, industry insights, and the latest innovations
                shaping structural engineering.
              </p>
              <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-4 transition-all">
                Read Our Blog
                <ArrowRight className="h-5 w-5" />
              </div>
            </div>
          </div>

          {/* Hover Accent */}
          <div className="absolute bottom-0 left-0 w-0 h-1 bg-primary group-hover:w-full transition-all duration-700" />
        </Link>
      </div>
    </section>
  );
};

export default NavigationPanels;
