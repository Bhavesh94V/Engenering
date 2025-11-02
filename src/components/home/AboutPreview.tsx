import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import aboutBlueprint from "@/assets/about-blueprint.jpg";

const AboutPreview = () => {
  return (
    <section className="py-24 md:py-32 container-fluid">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Image Side */}
        <div className="relative group">
          <div className="aspect-[4/3] overflow-hidden">
            <img
              src={aboutBlueprint}
              alt="Engineering blueprints and technical drawings"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-8 shadow-elevation">
            <div className="text-center">
              <p className="text-5xl font-bold">25+</p>
              <p className="text-sm mt-1">Years Experience</p>
            </div>
          </div>
        </div>

        {/* Content Side */}
        <div className="space-y-8">
          <div className="space-y-4">
            <p className="text-primary text-sm font-medium uppercase tracking-widest">
              Who We Are
            </p>
            <h2 className="text-4xl md:text-6xl font-bold leading-tight">
              Engineering The Future, One Structure At A Time
            </h2>
          </div>

          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Since 1999, we've been at the forefront of structural engineering innovation,
              delivering solutions that combine technical precision with architectural vision.
            </p>
            <p>
              Our multidisciplinary team of engineers, designers, and consultants brings decades
              of expertise to every project, ensuring structural integrity without compromising
              aesthetic ambition.
            </p>
            <p>
              From towering commercial complexes to critical infrastructure systems, we
              transform engineering challenges into architectural landmarks.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-6 py-6 border-y border-border/50">
            <div>
              <p className="text-3xl font-bold text-primary">500+</p>
              <p className="text-sm text-muted-foreground mt-1">Projects Delivered</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary">50+</p>
              <p className="text-sm text-muted-foreground mt-1">Expert Engineers</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary">35</p>
              <p className="text-sm text-muted-foreground mt-1">Countries Worldwide</p>
            </div>
          </div>

          <Link to="/about">
            <Button variant="hero" size="lg">
              Learn More About Us
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
