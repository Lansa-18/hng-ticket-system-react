import { Hero } from "@/components/landing/hero";
import { Features } from "@/components/landing/features";
import { Footer } from "@/components/landing/footer";

export default function Home() {
  return (
    <div className="min-h-screen font-sans">
      <Hero />
      <Features />
      <Footer />
    </div>
  );
}
