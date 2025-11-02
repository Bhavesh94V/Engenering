import { MapPin, Phone, Mail } from "lucide-react";

const locations = [
  {
    name: "Headquarters",
    address: "123 Engineering Plaza, Tech District, CA 94105",
    phone: "+1 (234) 567-890",
    email: "info@structuraleng.com",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019313947424!2d-122.39968668468197!3d37.78579797975781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085807c4e0a9c95%3A0x7b5c8e0e5e0e5e0e!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
  },
  {
    name: "Regional Office",
    address: "456 Innovation Drive, Business Park, NY 10001",
    phone: "+1 (234) 567-891",
    email: "ny@structuraleng.com",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.0!2d-74.0!3d40.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzAwLjAiTiA3NMKwMDAnMDAuMCJX!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
  },
];

const MapSection = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="container-fluid">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our Locations
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Visit us at our offices or schedule a consultation
          </p>
        </div>

        <div className="space-y-16">
          {locations.map((location, index) => (
            <div
              key={index}
              className="grid lg:grid-cols-2 gap-8"
              style={{
                animation: `fade-in-up 0.6s ease-out ${index * 0.2}s both`,
              }}
            >
              <div className="space-y-6">
                <h3 className="text-3xl font-bold">{location.name}</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <p className="text-muted-foreground">{location.address}</p>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <Phone className="h-6 w-6 text-primary flex-shrink-0" />
                    <a
                      href={`tel:${location.phone}`}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {location.phone}
                    </a>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <Mail className="h-6 w-6 text-primary flex-shrink-0" />
                    <a
                      href={`mailto:${location.email}`}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {location.email}
                    </a>
                  </div>
                </div>

                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors font-semibold"
                >
                  Get Directions
                </a>
              </div>

              <div className="aspect-video lg:aspect-square">
                <iframe
                  src={location.mapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Map of ${location.name}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MapSection;