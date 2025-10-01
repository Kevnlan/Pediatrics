import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import heroImage from "@/assets/hero-medical.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[600px] flex items-center">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(to right, hsl(210 40% 98% / 0.95), hsl(210 40% 98% / 0.85)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-foreground leading-tight">
            Paediatric Endocrinology Centre
          </h1>
          <p className="text-xl sm:text-2xl mb-8 text-muted-foreground leading-relaxed">
            Expert, compassionate care for children and adolescents with hormone-related conditions
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="text-lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Phone className="mr-2 h-5 w-5" />
              Contact Us
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="text-lg"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Our Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
