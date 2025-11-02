import { Linkedin, Mail } from "lucide-react";

const teamMembers = [
  {
    name: "Dr. Sarah Mitchell",
    position: "Chief Structural Engineer",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=600&fit=crop",
    bio: "25+ years of experience in complex structural systems and seismic design",
    linkedin: "#",
    email: "s.mitchell@structuraleng.com"
  },
  {
    name: "James Rodriguez, PE",
    position: "Director of Infrastructure",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=600&fit=crop",
    bio: "Expert in bridge design and large-scale infrastructure projects",
    linkedin: "#",
    email: "j.rodriguez@structuraleng.com"
  },
  {
    name: "Emily Chen, SE",
    position: "Senior Structural Engineer",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&h=600&fit=crop",
    bio: "Specializes in high-rise buildings and seismic retrofitting",
    linkedin: "#",
    email: "e.chen@structuraleng.com"
  },
  {
    name: "Michael Anderson",
    position: "Project Manager",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&h=600&fit=crop",
    bio: "Leads multidisciplinary teams for large commercial projects",
    linkedin: "#",
    email: "m.anderson@structuraleng.com"
  },
  {
    name: "Lisa Thompson, PE",
    position: "Industrial Engineering Lead",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&h=600&fit=crop",
    bio: "20+ years designing manufacturing facilities and industrial structures",
    linkedin: "#",
    email: "l.thompson@structuraleng.com"
  },
  {
    name: "David Park",
    position: "Sustainability Director",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&h=600&fit=crop",
    bio: "LEED AP with focus on sustainable structural solutions",
    linkedin: "#",
    email: "d.park@structuraleng.com"
  },
];

const Team = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 md:py-40 bg-muted/30">
        <div className="container-fluid">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Our Leadership Team
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Meet the experienced professionals driving innovation in structural engineering
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-24 md:py-32">
        <div className="container-fluid">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group hover-lift"
                style={{
                  animation: `fade-in-up 0.6s ease-out ${index * 0.1}s both`,
                }}
              >
                <div className="relative overflow-hidden mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                <p className="text-primary font-semibold mb-3">{member.position}</p>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {member.bio}
                </p>
                
                <div className="flex gap-4">
                  <a
                    href={member.linkedin}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label={`${member.name} LinkedIn`}
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label={`Email ${member.name}`}
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="py-24 bg-primary/5">
        <div className="container-fluid text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Join Our Team
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            We're always looking for talented engineers to join our growing team
          </p>
          <a
            href="/career"
            className="inline-block px-8 py-4 bg-primary text-primary-foreground font-semibold hover:bg-primary-glow transition-colors"
          >
            View Open Positions
          </a>
        </div>
      </section>
    </div>
  );
};

export default Team;