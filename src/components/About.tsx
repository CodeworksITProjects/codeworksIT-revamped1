
import { Card, CardContent } from "@/components/ui/card";
import { Users, Award, Clock, MapPin } from "lucide-react";

const stats = [
  { icon: Users, label: "Happy Clients", value: "150+" },
  { icon: Award, label: "Years Experience", value: "10+" },
  { icon: Clock, label: "Projects Completed", value: "500+" },
  { icon: MapPin, label: "Support Response", value: "<2hrs" }
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose CodeWorks IT?
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Based in South Africa, we're a team of certified IT professionals dedicated to 
                delivering exceptional technology solutions. Our local presence means faster 
                response times and personalized service.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We believe technology should empower your business, not complicate it. 
                That's why we focus on practical, scalable solutions that grow with you.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="bg-white/80 backdrop-blur-sm border-gray-200">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <stat.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900 mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="relative">
            <img
              src="/api/placeholder/600/400"
              alt="Our team at work"
              className="w-full h-auto rounded-2xl shadow-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
