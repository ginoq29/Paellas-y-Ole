import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import OfferingSection from "@/components/OfferingSection";
import PaellasSection from "@/components/PaellasSection";
import ChefSection from "@/components/ChefSection";
import DelightsSection from "@/components/DelightsSection";
import ContactSection from "@/components/ContactSection";
import CalendarSection from "@/components/CalendarSection";
import Footer from "@/components/Footer";
import PaymentSection from "@/components/PaymentSection";
export default function Home() {
  return (
    <div className="font-['Montserrat'] bg-[#f9f5f0]">
      <Header />
      <Navigation />
      <Hero />
      <OfferingSection />
      <PaellasSection />
      <ChefSection />
      <DelightsSection />
      <ContactSection />
      <CalendarSection />
      <PaymentSection />
      <Footer />
    </div>
  );
}
