import { Building2 } from "lucide-react";

const clients = [
  { name: "TechCorp Global", logo: "https://logo.clearbit.com/microsoft.com" },
  { name: "Metropolitan Development", logo: "https://logo.clearbit.com/bmw.com" },
  { name: "Skyline Architects", logo: "https://logo.clearbit.com/samsung.com" },
  { name: "Urban Infrastructure LLC", logo: "https://logo.clearbit.com/siemens.com" },
  { name: "Industrial Solutions Inc", logo: "https://logo.clearbit.com/ge.com" },
  { name: "Residential Builders Group", logo: "https://logo.clearbit.com/dell.com" },
  { name: "Infrastructure Partners", logo: "https://logo.clearbit.com/cisco.com" },
  { name: "Commercial Realty Corp", logo: "https://logo.clearbit.com/oracle.com" },
  { name: "Global Engineering Co", logo: "https://logo.clearbit.com/ibm.com" },
  { name: "Structural Innovations Ltd", logo: "https://logo.clearbit.com/hp.com" },
  { name: "BuildTech Industries", logo: "https://logo.clearbit.com/intel.com" },
  { name: "Modern Architecture Firm", logo: "https://logo.clearbit.com/adobe.com" },
  { name: "City Development Authority", logo: "https://logo.clearbit.com/sony.com" },
  { name: "National Infrastructure", logo: "https://logo.clearbit.com/panasonic.com" },
  { name: "Premier Construction", logo: "https://logo.clearbit.com/philips.com" },
  { name: "Elite Properties Group", logo: "https://logo.clearbit.com/bosch.com" },
  { name: "Apex Engineering", logo: "https://logo.clearbit.com/caterpillar.com" },
  { name: "Urban Design Studio", logo: "https://logo.clearbit.com/deere.com" },
  { name: "Construction Dynamics", logo: "https://logo.clearbit.com/volvo.com" },
  { name: "Heritage Builders", logo: "https://logo.clearbit.com/shell.com" },
  { name: "Innovative Structures", logo: "https://logo.clearbit.com/toshiba.com" },
  { name: "Prime Developments", logo: "https://logo.clearbit.com/hitachi.com" },
  { name: "Skyward Engineering", logo: "https://logo.clearbit.com/mitsubishi.com" },
  { name: "Foundation Works", logo: "https://logo.clearbit.com/schneider-electric.com" },
];

const ClientLogos = () => {
  return (
    <div className="py-24 border-y border-border/30 bg-muted/10">
      <div className="container-fluid">
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-bold uppercase tracking-widest mb-4">
            Trusted By Industry Leaders
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Companies That Rely On Us
          </h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {clients.map((client, index) => (
            <div
              key={index}
              className="group relative bg-background border border-border/30 hover:border-primary/50 p-6 flex items-center justify-center transition-all duration-500 hover-lift hover:shadow-red"
              style={{
                animation: `fade-in-up 0.4s ease-out ${index * 0.03}s both`,
              }}
            >
              <div className="w-full h-16 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-500">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-w-full max-h-full object-contain opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                  onError={(e) => {
                    // Fallback to icon if logo fails to load
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = `<div class="w-12 h-12 flex items-center justify-center bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 7h.01"/><path d="M17 7h.01"/><path d="M7 17h.01"/><path d="M17 17h.01"/></svg></div>`;
                    }
                  }}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground text-sm">
            And many more leading organizations across the globe
          </p>
        </div>
      </div>
    </div>
  );
};

export default ClientLogos;
