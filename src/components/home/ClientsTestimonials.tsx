import { Quote } from "lucide-react";

const clients = [
  "TechCorp Global",
  "Metropolitan Development",
  "Skyline Architects",
  "Urban Infrastructure LLC",
  "Industrial Solutions Inc",
  "Residential Builders Group",
  "Infrastructure Partners",
  "Commercial Realty Corp",
];

const testimonials = [
  {
    quote:
      "Their structural engineering expertise transformed our vision into reality. The team's precision and innovation exceeded expectations.",
    author: "Sarah Mitchell",
    position: "CEO, TechCorp Global",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
  },
  {
    quote:
      "Outstanding technical capability combined with creative problem-solving. They delivered our complex project on time and within budget.",
    author: "James Rodriguez",
    position: "Director, Metropolitan Development",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
  },
  {
    quote:
      "The level of detail and structural integrity they bring to every project is unmatched. True partners in architectural excellence.",
    author: "Emily Chen",
    position: "Principal Architect, Skyline Architects",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
  },
];

const ClientsTestimonials = () => {
  return (
    <section className="py-24 md:py-32 bg-muted/30">
      <div className="container-fluid">
        {/* Testimonials */}
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            What Our Clients Say
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="relative overflow-hidden group hover-lift hover:shadow-red transition-all duration-500 min-h-[400px]"
                style={{
                  animation: `fade-in-up 0.6s ease-out ${index * 0.2}s both`,
                }}
              >
                {/* Background Image with Overlay */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{
                    backgroundImage: `url(${testimonial.image})`,
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-background/60" />
                
                {/* Content */}
                <div className="relative p-8 h-full flex flex-col justify-end">
                  <Quote className="h-10 w-10 text-primary mb-6" />
                  <p className="text-foreground leading-relaxed mb-6 font-medium">
                    "{testimonial.quote}"
                  </p>
                  <div className="pt-4 border-t border-primary/30">
                    <p className="font-bold text-foreground">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground mt-1">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsTestimonials;
