
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, Clock, MessageSquare } from "lucide-react";

const contactMethods = [
  {
    icon: Phone,
    title: "Call Us",
    details: "+27 11 123 4567",
    description: "Mon-Fri 8AM-6PM SAST",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Mail,
    title: "Email Us",
    details: "hello@codeworksit.co.za",
    description: "Response within 2 hours",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: MapPin,
    title: "Visit Us",
    details: "Johannesburg, SA",
    description: "Schedule an appointment",
    color: "from-purple-500 to-indigo-500"
  }
];

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-white to-gray-50 relative">
      <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50/30 to-blue-50/30"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-700 text-sm font-medium mb-4">
            <MessageSquare className="w-4 h-4 mr-2" />
            Get In Touch
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Let's discuss how our expert IT solutions can accelerate your growth. 
            Get a free consultation with our technology specialists.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Methods */}
          <div className="lg:col-span-2 space-y-6">
            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <Card key={index} className="group border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className={`w-14 h-14 bg-gradient-to-r ${method.color} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                        <method.icon className="h-7 w-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-1 text-lg">
                          {method.title}
                        </h4>
                        <p className="text-blue-600 font-medium mb-1">
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

            {/* Business Hours */}
            <Card className="border-0 shadow-lg rounded-2xl">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                    <Clock className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1 text-lg">
                      Business Hours
                    </h4>
                    <p className="text-gray-600 text-sm">Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p className="text-gray-600 text-sm">Weekend: Emergency support only</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <Card className="border-0 shadow-xl rounded-2xl">
              <CardHeader className="pb-6">
                <CardTitle className="text-2xl text-gray-900">Send us a message</CardTitle>
                <p className="text-gray-600">We'll get back to you within 2 hours during business hours.</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-700">
                      First Name *
                    </label>
                    <Input placeholder="John" className="h-12 rounded-xl border-gray-200 focus:border-blue-500" />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-700">
                      Last Name *
                    </label>
                    <Input placeholder="Doe" className="h-12 rounded-xl border-gray-200 focus:border-blue-500" />
                  </div>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-700">
                      Email Address *
                    </label>
                    <Input type="email" placeholder="john@company.com" className="h-12 rounded-xl border-gray-200 focus:border-blue-500" />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-700">
                      Phone Number
                    </label>
                    <Input placeholder="+27 11 123 4567" className="h-12 rounded-xl border-gray-200 focus:border-blue-500" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Company Name
                  </label>
                  <Input placeholder="Your Company Name" className="h-12 rounded-xl border-gray-200 focus:border-blue-500" />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    How can we help you? *
                  </label>
                  <Textarea 
                    placeholder="Tell us about your project, challenges, and what you're looking to achieve..."
                    className="min-h-[120px] resize-none rounded-xl border-gray-200 focus:border-blue-500"
                  />
                </div>

                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-lg py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200">
                  Send Message
                  <Send className="ml-2 h-5 w-5" />
                </Button>

                <p className="text-xs text-gray-500 text-center">
                  By submitting this form, you agree to our privacy policy and terms of service.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
