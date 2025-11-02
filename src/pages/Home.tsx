import AboutPreview from "@/components/home/AboutPreview";
import ServicesOverview from "@/components/home/ServicesOverview";
import ProjectsShowcase from "@/components/home/ProjectsShowcase";
import ClientLogos from "@/components/home/ClientLogos";
import ClientsTestimonials from "@/components/home/ClientsTestimonials";
import NavigationPanels from "@/components/home/NavigationPanels";
import ContactCTA from "@/components/home/ContactCTA";
import ProcessTimeline from "@/components/common/ProcessTimeline";
import AnimatedStats from "@/components/common/AnimatedStats";
import CertificationBadges from "@/components/common/CertificationBadges";
import VideoSection from "@/components/common/VideoSection";
import FAQ from "@/components/common/FAQ";
import WhatsAppButton from "@/components/common/WhatsAppButton";
import StickyContactButton from "@/components/common/StickyContactButton";
import HeroCarousel from "@/components/home/HeroCarousel";

const Home = () => {
  return (
    <div className="min-h-screen">
      <HeroCarousel />
      <AboutPreview />
      <AnimatedStats />
      <ServicesOverview />
      <ProcessTimeline />
      <ProjectsShowcase />
      <VideoSection />
      <CertificationBadges />
      <ClientLogos />
      <ClientsTestimonials />
      <FAQ />
      <NavigationPanels />
      <ContactCTA />
      <WhatsAppButton />
      <StickyContactButton />
    </div>
  );
};

export default Home;
