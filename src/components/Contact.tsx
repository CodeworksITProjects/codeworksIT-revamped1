
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: ["+27 11 123 4567", "+27 82 987 6543"],
    primary: "+27 11 123 4567"
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@codeworksit.co.za", "support@codeworksit.co.za"],
    primary: "info@codeworksit.co.za"
  },
  {
    icon: MapPin,
    title: "Address",
    details: ["Johannesburg, South Africa", "Serving all of SA"],
    primary: "Johannesburg, SA"
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Mon - Fri: 8:00 - 17:00", "Emergency: 24/7"],
    primary: "Mon-Fri 8-5"
  }
];

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your IT infrastructure? Contact us for a free consultation 
            and discover how we can help your business thrive.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="border-gray-200">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">Send us a message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <Input placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <Input placeholder="Doe" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <Input type="email" placeholder="john@company.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Company
                </label>
                <Input placeholder="Your Company" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <Textarea 
                  placeholder="Tell us about your IT needs..."
                  className="min-h-[120px]"
                />
              </div>
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-6">
                Send Message
              </Button>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Contact Information
              </h3>
              <p className="text-gray-600 mb-8">
                We're here to help with all your IT needs. Reach out through any 
                of these channels and we'll get back to you promptly.
              </p>
            </div>

            <div className="grid gap-6">
              {contactInfo.map((item, index) => (
                <Card key={index} className="border-gray-200 hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <item.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">
                          {item.title}
                        </h4>
                        {item.details.map((detail, idx) => (
                          <p key={idx} className="text-gray-600 text-sm">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
