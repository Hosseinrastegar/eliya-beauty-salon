import LuxuryNavbar from '@/components/LuxuryNavbar';
import HeroSection from '@/components/HeroSection';
import CategoryCapsules from '@/components/CategoryCapsules';
import PricingCatalog from '@/components/PricingCatalog';
import LookbookGallery from '@/components/LookbookGallery';
import InteractiveCalendarBooking from '@/components/InteractiveCalendarBooking';
import PremiumFooter from '@/components/PremiumFooter';
import AmbientElements from '@/components/AmbientElements';

export default function Home() {
  return (
    <main className="relative bg-background min-h-screen font-sans">
      <AmbientElements />
      <LuxuryNavbar />
      <HeroSection />
      <CategoryCapsules />
      <PricingCatalog />
      <LookbookGallery />
      <InteractiveCalendarBooking />
      <PremiumFooter />
    </main>
  );
}
