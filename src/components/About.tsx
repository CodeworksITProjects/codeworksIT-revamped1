
import { Card, CardContent } from "@/components/ui/card";
import { Users, Award, Target, Globe } from "lucide-react";

const stats = [
  { icon: Users, label: "Happy Clients", value: "200+" },
  { icon: Award, label: "Years in Business", value: "12+" },
  { icon: Target, label: "Projects Delivered", value: "750+" },
  { icon: Globe, label: "Uptime Guarantee", value: "99.9%" }
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                About CodeWorks IT
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Founded in Johannesburg, we've been at the forefront of South Africa's digital revolution, 
                  helping businesses harness the power of technology to achieve unprecedented growth.
                </p>
                <p>
                  Our team of certified professionals combines deep technical expertise with a passion for 
                  innovation, delivering solutions that don't just meet today's needs but anticipate tomorrow's challenges.
                </p>
                <p>
                  From startups to enterprise corporations, we've built lasting partnerships by consistently 
                  delivering exceptional results and maintaining the highest standards of service excellence.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <stat.icon className="h-7 w-7 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600 font-medium">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-purple-100 to-indigo-100 rounded-3xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Team collaboration"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl">
              <div className="flex items-center space-x-4">
                <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
                <div>
                  <div className="text-sm font-semibold text-gray-900">Systems Operational</div>
                  <div className="text-xs text-gray-500">All services running smoothly</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
