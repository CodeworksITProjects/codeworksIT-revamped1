import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Award, Target, Globe, CheckCircle } from "lucide-react";

const stats = [
  { icon: Users, label: "Happy Clients", value: "200+", description: "Businesses transformed" },
  { icon: Award, label: "Years Experience", value: "12+", description: "In the industry" },
  { icon: Target, label: "Projects Delivered", value: "750+", description: "Successfully completed" },
  { icon: Globe, label: "Uptime Guarantee", value: "99.9%", description: "Service reliability" }
];

const achievements = [
  "ISO 27001 Certified Security Standards",
  "Microsoft Gold Partner Status",
  "AWS Advanced Consulting Partner",
  "24/7 Local Support Team"
];

// AnimatedCounter component
function AnimatedCounter({ end }: { end: string }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let numericEnd = parseInt(end);
    if (isNaN(numericEnd)) numericEnd = 0;
    let start = 0;
    const duration = 1000;
    const increment = Math.ceil(numericEnd / (duration / 16));
    const timer = setInterval(() => {
      start += increment;
      if (start >= numericEnd) {
        setCount(numericEnd);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [end]);
  return (
    <span>
      {count}
      {end.includes("+") ? "+" : ""}
      {end.includes("%") ? "%" : ""}
    </span>
  );
}

const About = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-gray-50 to-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-700 text-sm font-medium mb-4">
                About CodeWorksIT
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Your Trusted Technology Partner
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  For over a decade, CodeWorksIT has been at the forefront of South Africa's digital 
                  transformation, helping businesses harness technology to achieve unprecedented growth 
                  and operational excellence.
                </p>
                <p>
                  Our team of certified professionals combines deep technical expertise with strategic 
                  thinking, delivering solutions that not only meet today's requirements but anticipate 
                  tomorrow's opportunities.
                </p>
              </div>
            </div>

            {/* Achievements */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Certifications and Partnerships</h3>
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-600">{achievement}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats & Visual */}
          <div className="space-y-8">
            {/* Hero Image */}
            <div className="relative">
              <div className="aspect-[4/3] bg-gradient-to-br from-blue-100 to-indigo-100 rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Professional team collaboration"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating status card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
                <div className="flex items-center space-x-4">
                  <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">All Systems Operational</div>
                    <div className="text-xs text-gray-500">Monitoring 24/7</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <stat.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900 mb-1">
                      <AnimatedCounter end={stat.value} />
                    </div>
                    <div className="text-sm font-medium text-gray-900 mb-1">
                      {stat.label}
                    </div>
                    <div className="text-xs text-gray-500">
                      {stat.description}
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

export default About;