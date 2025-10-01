import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Activity, 
  TrendingUp, 
  Users, 
  Heart, 
  Brain, 
  Bone, 
  Scale 
} from "lucide-react";

const services = [
  {
    icon: Activity,
    title: "Diabetes Care",
    description: "Complete management for Type 1 and Type 2 diabetes, insulin therapy & pump training, continuous glucose monitoring (CGM), and diabetes education for children & families.",
    color: "text-primary"
  },
  {
    icon: TrendingUp,
    title: "Growth Evaluation & Hormone Therapy",
    description: "Assessment and treatment for short stature or slow growth, excessive growth concerns, and growth hormone testing & treatment.",
    color: "text-secondary"
  },
  {
    icon: Users,
    title: "Puberty Disorders",
    description: "Expert care for early (precocious) puberty, delayed puberty, and hormonal balance and development tracking.",
    color: "text-accent"
  },
  {
    icon: Heart,
    title: "Thyroid Conditions",
    description: "Diagnosis and management of hypothyroidism & hyperthyroidism, congenital thyroid disorders, and ongoing hormone therapy monitoring.",
    color: "text-primary"
  },
  {
    icon: Brain,
    title: "Adrenal & Pituitary Disorders",
    description: "Specialized treatment for adrenal insufficiency, Cushing's syndrome, pituitary tumors, and hormone deficiencies.",
    color: "text-secondary"
  },
  {
    icon: Bone,
    title: "Metabolic & Bone Health",
    description: "Supporting healthy development by treating rickets and vitamin D deficiency, calcium or phosphorus imbalances, and other rare bone metabolism disorders.",
    color: "text-accent"
  },
  {
    icon: Scale,
    title: "Pediatric Obesity & Weight Concerns",
    description: "Holistic approach to managing hormonal causes of obesity, nutritional and lifestyle guidance, and screening for metabolic syndrome.",
    color: "text-primary"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-foreground">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            At Paediatric Centre, we offer expert, compassionate care for children and adolescents 
            with hormone-related and growth concerns.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="transition-all duration-300 hover:shadow-lg border-border hover:border-primary/50"
            >
              <CardHeader>
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-muted mb-4 ${service.color}`}>
                  <service.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 max-w-4xl mx-auto bg-card p-8 rounded-xl border border-border">
          <h3 className="text-2xl font-semibold mb-4 text-center text-foreground">
            Family-Centered Approach
          </h3>
          <p className="text-lg text-muted-foreground text-center">
            We work closely with parents and caregivers to ensure each child receives personalized, 
            age-appropriate care that supports lifelong health.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
