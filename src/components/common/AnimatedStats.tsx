// import { useAnimatedCounter } from "@/hooks/useAnimatedCounter";

// const stats = [
//   { value: 500, suffix: "+", label: "Projects Completed" },
//   { value: 25, suffix: "+", label: "Years Experience" },
//   { value: 98, suffix: "%", label: "Client Satisfaction" },
//   { value: 150, suffix: "+", label: "Team Members" },
// ];

// const AnimatedStats = () => {
//   return (
//     <section className="py-24 md:py-32 bg-primary/5">
//       <div className="container-fluid">
//         <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
//           {stats.map((stat, index) => {
//             const { count, ref } = useAnimatedCounter(stat.value);
            
//             return (
//               <div
//                 key={index}
//                 ref={ref}
//                 className="text-center p-8 bg-card border border-border hover:border-primary transition-colors group"
//               >
//                 <div className="text-5xl md:text-6xl font-bold text-primary mb-3 font-poppins">
//                   {count}{stat.suffix}
//                 </div>
//                 <div className="text-muted-foreground text-sm uppercase tracking-wider">
//                   {stat.label}
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AnimatedStats;


import { useAnimatedCounter } from "@/hooks/useAnimatedCounter";

const stats = [
  { value: 500, suffix: "+", label: "Projects Completed" },
  { value: 25, suffix: "+", label: "Years Experience" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
  { value: 150, suffix: "+", label: "Team Members" },
];

const AnimatedStats = () => {
  return (
    <section className="py-24 md:py-32 bg-primary/5">
      <div className="container-fluid">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const { count, ref } = useAnimatedCounter(stat.value);

            return (
              <div
                key={index}
                ref={ref}
                className="text-center p-8 bg-card border border-border hover:border-primary transition-colors group"
              >
                <div className="text-5xl md:text-6xl font-bold text-primary mb-3 font-poppins">
                  {count}{stat.suffix}
                </div>
                <div className="text-muted-foreground text-sm uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AnimatedStats;
