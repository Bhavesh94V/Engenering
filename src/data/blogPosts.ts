import projectCommercial from "@/assets/project-commercial-1.jpg";
import projectIndustrial from "@/assets/project-industrial-1.jpg";
import projectInfrastructure from "@/assets/project-infrastructure-1.jpg";

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  featured?: boolean;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Innovations in Sustainable Steel Design",
    excerpt: "Exploring cutting-edge methodologies that reduce environmental impact while maintaining structural integrity in modern construction.",
    author: "Dr. Sarah Mitchell",
    date: "December 15, 2024",
    readTime: "8 min read",
    category: "Sustainability",
    image: projectCommercial,
    featured: true,
    content: `<p class="lead-paragraph">The construction industry stands at a pivotal moment where sustainability and structural integrity must work in harmony. Recent innovations in sustainable steel design are reshaping how we approach modern construction projects.</p>
    
<h2>The Challenge of Sustainable Construction</h2>
<p>Traditional steel production accounts for approximately 7% of global CO2 emissions. As structural engineers, we bear responsibility for specifying materials that balance performance requirements with environmental impact. The industry faces mounting pressure to reduce its carbon footprint while maintaining the strength and reliability that modern structures demand.</p>

<h2>Breakthrough Technologies</h2>
<p>Recent advancements in electric arc furnace technology and hydrogen-based steel production offer promising pathways toward carbon-neutral construction. These innovations allow us to significantly reduce emissions during the manufacturing process without compromising material properties.</p>

<h2>Design Optimization</h2>
<p>Advanced computational tools enable engineers to optimize steel usage, reducing material waste by 15-20% while maintaining structural performance. Through topology optimization and generative design, we can create more efficient structural systems that use less material.</p>

<h2>Recycled Steel Integration</h2>
<p>Modern recycling processes allow for high-grade structural steel with up to 90% recycled content. This circular economy approach dramatically reduces the environmental impact of new construction while maintaining all necessary performance characteristics.</p>

<h2>Future Outlook</h2>
<p>As green building certifications become increasingly stringent, sustainable steel design will become not just an option but a requirement. Engineers must stay informed about emerging technologies and best practices to lead the industry toward a more sustainable future.</p>`,
  },
  {
    id: 2,
    title: "The Future of Infrastructure Engineering",
    excerpt: "How emerging technologies and smart materials are revolutionizing bridge and highway design for the next generation.",
    author: "James Rodriguez, PE",
    date: "November 28, 2024",
    readTime: "10 min read",
    category: "Infrastructure",
    image: projectInfrastructure,
    featured: true,
    content: `<p class="lead-paragraph">Infrastructure engineering is experiencing a technological revolution that promises to transform how we design, build, and maintain critical structures. From smart sensors to self-healing materials, the future of infrastructure is taking shape today.</p>

<h2>Smart Materials Revolution</h2>
<p>Self-healing concrete and shape-memory alloys offer unprecedented durability and longevity. These materials can automatically repair micro-cracks and adapt to changing conditions, potentially extending infrastructure lifespan by decades.</p>

<h2>Digital Twin Technology</h2>
<p>Creating digital replicas of physical infrastructure allows for real-time monitoring and predictive maintenance. Engineers can now simulate various scenarios and optimize performance before implementing changes in the real world.</p>

<h2>Sustainable Infrastructure Solutions</h2>
<p>Green infrastructure integrates natural systems with engineered solutions. Permeable pavements, bioswales, and green roofs reduce environmental impact while providing essential infrastructure services.</p>

<h2>Advanced Monitoring Systems</h2>
<p>IoT sensors and AI-powered analytics enable continuous structural health monitoring. These systems can detect potential issues before they become critical, improving safety and reducing maintenance costs.</p>

<h2>Resilient Design Approaches</h2>
<p>Climate change necessitates infrastructure that can withstand extreme events. Modern design approaches incorporate resilience planning, ensuring critical systems remain functional during and after natural disasters.</p>`,
  },
  {
    id: 3,
    title: "Seismic Design Best Practices",
    excerpt: "Essential techniques and calculations for earthquake-resistant structures in high-risk zones.",
    author: "Emily Chen, SE",
    date: "November 15, 2024",
    readTime: "10 min read",
    category: "Seismic",
    image: projectIndustrial,
    content: `<p class="lead-paragraph">Designing structures to withstand seismic forces requires specialized knowledge and adherence to rigorous standards. This comprehensive guide covers the fundamental principles and advanced techniques that ensure building safety in earthquake-prone regions.</p>

<h2>Understanding Seismic Forces</h2>
<p>Earthquakes generate complex loading patterns that differ fundamentally from static loads. Engineers must account for both horizontal and vertical ground motion, considering the structure's natural period and damping characteristics.</p>

<h2>Base Isolation Systems</h2>
<p>Modern seismic design often incorporates base isolation technology, which decouples the structure from ground motion. These systems can reduce seismic forces by up to 75%, significantly improving structural performance during major earthquakes.</p>

<h2>Energy Dissipation Devices</h2>
<p>Dampers and energy dissipation systems absorb seismic energy, reducing structural damage. Various types including viscous dampers, friction dampers, and metallic yielding devices offer different advantages for specific applications.</p>

<h2>Capacity Design Principles</h2>
<p>Ensuring predictable structural behavior during earthquakes requires careful application of capacity design principles. This approach identifies and strengthens critical elements while allowing controlled yielding in designated zones.</p>

<h2>Performance-Based Design</h2>
<p>Modern codes increasingly adopt performance-based approaches, allowing engineers to design for specific performance objectives beyond minimum code requirements. This methodology provides greater flexibility while ensuring enhanced safety and functionality.</p>`,
  },
  {
    id: 4,
    title: "High-Rise Construction Challenges",
    excerpt: "Overcoming technical obstacles in designing and building ultra-tall structures in urban environments.",
    author: "Michael Anderson",
    date: "October 30, 2024",
    readTime: "7 min read",
    category: "Commercial",
    image: projectCommercial,
    content: `<p class="lead-paragraph">Designing and constructing high-rise buildings presents unique engineering challenges that require innovative solutions and meticulous attention to detail. From wind loads to construction logistics, every aspect demands careful consideration.</p>

<h2>Wind Engineering Considerations</h2>
<p>Wind loads become increasingly critical as building height increases. Advanced wind tunnel testing and computational fluid dynamics analysis help optimize building shapes and structural systems for wind resistance.</p>

<h2>Vertical Transportation Systems</h2>
<p>Efficient elevator systems are crucial for tall buildings. Modern designs incorporate sky lobbies, double-deck elevators, and destination dispatch systems to optimize vertical circulation.</p>

<h2>Foundation Design</h2>
<p>Supporting massive vertical loads requires sophisticated foundation systems. Deep piles, mat foundations, and soil improvement techniques ensure stable support for these imposing structures.</p>

<h2>Construction Sequencing</h2>
<p>Building tall requires careful coordination of multiple trades working simultaneously at different levels. Advanced scheduling techniques and construction management systems ensure efficient project delivery.</p>`,
  },
  {
    id: 5,
    title: "Industrial Facility Load Analysis",
    excerpt: "Comprehensive guide to calculating and designing for heavy loads in manufacturing environments.",
    author: "Lisa Thompson, PE",
    date: "October 18, 2024",
    readTime: "9 min read",
    category: "Industrial",
    image: projectIndustrial,
    content: `<p class="lead-paragraph">Industrial facilities present unique loading conditions that require specialized engineering analysis. From overhead cranes to heavy machinery, proper load calculation and structural design are essential for safe and efficient operations.</p>

<h2>Crane Load Analysis</h2>
<p>Overhead crane systems generate complex loading patterns including vertical loads, horizontal forces, and impact effects. Proper analysis requires understanding of crane operations, load cycles, and fatigue considerations.</p>

<h2>Heavy Equipment Foundations</h2>
<p>Large machinery requires specialized foundation systems that account for static loads, dynamic forces, and vibration isolation. Proper design ensures equipment performance while protecting the surrounding structure.</p>

<h2>Floor Loading Considerations</h2>
<p>Manufacturing facilities often require floors capable of supporting extremely heavy loads. Design must account for concentrated loads, distributed loads, and potential impact forces from material handling equipment.</p>

<h2>Vibration Control</h2>
<p>Industrial operations can generate significant vibrations that affect both equipment performance and structural integrity. Isolation systems and proper structural design mitigate these effects.</p>`,
  },
  {
    id: 6,
    title: "Modern Bridge Engineering Techniques",
    excerpt: "Advanced cable-stayed and suspension bridge design principles for contemporary infrastructure projects.",
    author: "David Park",
    date: "October 5, 2024",
    readTime: "11 min read",
    category: "Infrastructure",
    image: projectInfrastructure,
    content: `<p class="lead-paragraph">Bridge engineering continues to evolve with new materials, analytical methods, and construction techniques. Modern bridges represent the pinnacle of structural engineering, combining functionality with aesthetic excellence.</p>

<h2>Cable-Stayed Bridge Design</h2>
<p>Cable-stayed systems offer efficient solutions for medium to long spans. Advanced analysis techniques account for cable behavior, deck deformation, and dynamic effects under traffic and wind loads.</p>

<h2>Suspension Bridge Technology</h2>
<p>For the longest spans, suspension bridges remain the optimal solution. Modern designs incorporate aerodynamic decks, improved cable systems, and advanced foundation techniques.</p>

<h2>Seismic Design of Bridges</h2>
<p>Bridges in seismic regions require special attention to earthquake resistance. Isolation systems, energy dissipation devices, and ductile design ensure performance during major seismic events.</p>

<h2>Accelerated Bridge Construction</h2>
<p>ABC techniques minimize traffic disruption while improving construction quality. Prefabricated elements and innovative connection details enable rapid bridge replacement and construction.</p>`,
  },
];
