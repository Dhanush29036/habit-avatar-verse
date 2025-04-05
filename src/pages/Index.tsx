
import { Button } from "@/components/ui/button";
import Hero from "@/components/landing/Hero";
import FeatureSection from "@/components/landing/FeatureSection";
import HowItWorks from "@/components/landing/HowItWorks";
import Testimonials from "@/components/landing/Testimonials";
import CallToAction from "@/components/landing/CallToAction";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">HabitAvatarVerse</h1>
        </div>
        <nav className="hidden md:flex space-x-8">
          <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">Features</a>
          <a href="#how-it-works" className="text-gray-600 hover:text-gray-900 transition-colors">How It Works</a>
          <a href="#testimonials" className="text-gray-600 hover:text-gray-900 transition-colors">Testimonials</a>
          <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors">Pricing</a>
        </nav>
        <div className="flex space-x-4">
          <Button variant="outline" className="hidden md:block">Login</Button>
          <Button className="bg-gradient-to-r from-purple-600 to-blue-500 text-white">Get Started</Button>
        </div>
      </header>

      <main>
        <Hero />
        <FeatureSection />
        <HowItWorks />
        <Testimonials />
        <CallToAction />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
