import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Clock, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-foreground">Get In Touch</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to schedule an appointment or have questions? We're here to help.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="border-border hover:border-primary/50 transition-all duration-300">
            <CardHeader>
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Call Us</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Speak with our team directly
              </p>
              <a 
                href="tel:0795209202"
                className="text-2xl font-semibold text-primary hover:underline"
              >
                0795 209 202
              </a>
            </CardContent>
          </Card>

          <Card className="border-border hover:border-secondary/50 transition-all duration-300">
            <CardHeader>
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary/10 mb-4">
                <Clock className="h-6 w-6 text-secondary" />
              </div>
              <CardTitle>Opening Hours</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-2">
                Monday - Friday
              </p>
              <p className="text-xl font-semibold text-foreground">
                9:00 AM - 4:00 PM
              </p>
            </CardContent>
          </Card>

          <Card className="border-border hover:border-accent/50 transition-all duration-300">
            <CardHeader>
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 mb-4">
                <MapPin className="h-6 w-6 text-accent" />
              </div>
              <CardTitle>Location</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-2">
                Nairobi Hospital
              </p>
              <p className="text-lg font-semibold text-foreground">
                Doctors Plaza<br />
                1st Floor, Room 101
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <Button 
            size="lg"
            onClick={() => window.location.href = 'tel:0795209202'}
          >
            <Phone className="mr-2 h-5 w-5" />
            Call Now to Book an Appointment
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
