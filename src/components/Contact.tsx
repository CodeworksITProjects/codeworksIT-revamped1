
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const contactMethods = [
  {
    icon: Phone,
    title: "Call Us",
    details: "+27 11 123 4567",
    description: "Mon-Fri 8AM-6PM"
  },
  {
    icon: Mail,
    title: "Email Us",
    details: "hello@codeworksit.co.za",
    description: "We'll respond within 2 hours"
  },
  {
    icon: MapPin,
    title: "Visit Us",
    details: "Johannesburg, SA",
    description: "Schedule an appointment"
  }
];

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Let's Start Your Digital Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your business? Get in touch with our experts for a free consultation 
            and discover how we can accelerate your success.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Methods */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Get In Touch</h3>
            {contactMethods.map((method, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <method.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        {method.title}
                      </h4>
                      <p className="text-purple-600 font-medium mb-1">
                        {method.details}
                      </p>
                      <p className="text-sm text-gray-500">
                        {method.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-xl">
              <CardHeader className="pb-6">
                <CardTitle className="text-2xl text-gray-900">Send us a message</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      First Name *
                    </label>
                    <Input placeholder="John" className="h-12" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <Input placeholder="Doe" className="h-12" />
                  </div>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email *
                    </label>
                    <Input type="email" placeholder="john@company.com" className="h-12" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone
                    </label>
                    <Input placeholder="+27 11 123 4567" className="h-12" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Company
                  </label>
                  <Input placeholder="Your Company Name" className="h-12" />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    How can we help you? *
                  </label>
                  <Textarea 
                    placeholder="Tell us about your project, timeline, and any specific requirements..."
                    className="min-h-[140px] resize-none"
                  />
                </div>

                <Button className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-lg py-6 rounded-full">
                  Send Message
                  <Send className="ml-2 h-5 w-5" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
