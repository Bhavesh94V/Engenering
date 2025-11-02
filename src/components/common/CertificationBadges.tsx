// import { Award, ShieldCheck, Trophy, Star } from "lucide-react";

// const certifications = [
//   {
//     icon: Award,
//     title: "ISO 9001:2015",
//     description: "Quality Management",
//   },
//   {
//     icon: ShieldCheck,
//     title: "LEED Certified",
//     description: "Green Building",
//   },
//   {
//     icon: Trophy,
//     title: "AIA Award",
//     description: "Design Excellence",
//   },
//   {
//     icon: Star,
//     title: "PE Licensed",
//     description: "Professional Engineers",
//   },
// ];

// const CertificationBadges = () => {
//   return (
//     <section className="py-16 bg-muted/20">
//       <div className="container-fluid">
//         <div className="text-center mb-16">
//           {/* <p className="text-primary text-sm font-bold uppercase tracking-widest mb-4">
//             Our certifications
//           </p> */}
//           <h2 className="text-3xl md:text-4xl font-bold">
//             Our certificate of excellence
//           </h2>
//         </div>

//         <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//           {certifications.map((cert, index) => (
//             <div
//               key={index}
//               className="flex flex-col items-center text-center p-6 bg-background border border-border hover:border-primary transition-all duration-300 group hover-lift"
//             >
//               <cert.icon className="h-12 w-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
//               <h3 className="font-bold mb-1">{cert.title}</h3>
//               <p className="text-sm text-muted-foreground">{cert.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CertificationBadges;




import { Award, ShieldCheck, Trophy, Star } from "lucide-react";

const certifications = [
  {
    icon: Award,
    title: "ISO 9001:2015",
    description: "Quality Management",
  },
  {
    icon: ShieldCheck,
    title: "LEED Certified",
    description: "Green Building",
  },
  {
    icon: Trophy,
    title: "AIA Award",
    description: "Design Excellence",
  },
  {
    icon: Star,
    title: "PE Licensed",
    description: "Professional Engineers",
  },
];

const CertificationBadges = () => {
  return (
    <section className="py-16 bg-muted/20">
      <div className="container-fluid">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 bg-background border border-border hover:border-primary transition-all duration-300 group hover-lift"
            >
              <cert.icon className="h-12 w-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold mb-1">{cert.title}</h3>
              <p className="text-sm text-muted-foreground">{cert.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationBadges;
