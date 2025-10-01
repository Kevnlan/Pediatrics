import { Heart, Users, Award } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-center text-foreground">
            About Us
          </h2>
          
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-6 mb-12">
            <p className="text-lg leading-relaxed">
              At Paediatric Centre, we specialize in providing expert, compassionate care to children 
              and adolescents with hormone-related conditions. As a dedicated paediatric endocrinology 
              clinic, our mission is to support young patients in achieving healthy growth, development, 
              and overall well-being.
            </p>
            
            <p className="text-lg leading-relaxed">
              We manage a wide range of endocrine disorders, including diabetes, growth and puberty concerns, 
              thyroid disorders, adrenal and pituitary conditions, and metabolic bone diseases. Our team of 
              experienced paediatric endocrinologists, nurses, and support staff work closely with families 
              to deliver personalized, family-centered care in a safe and welcoming environment.
            </p>
            
            <p className="text-lg leading-relaxed">
              At Paediatric Centre, we believe in empowering families through education, early diagnosis, 
              and long-term support. Whether your child is newly diagnosed or requires ongoing management, 
              we're here to walk the journey with you every step of the way.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Compassionate Care</h3>
              <p className="text-sm text-muted-foreground">
                Dedicated to providing warm, understanding support for every family
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10 mb-4">
                <Award className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Expert Team</h3>
              <p className="text-sm text-muted-foreground">
                Experienced paediatric endocrinologists and specialized staff
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-4">
                <Users className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Family-Centered</h3>
              <p className="text-sm text-muted-foreground">
                Working together with families for personalized treatment plans
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
