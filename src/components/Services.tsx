
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cloud, Shield, Laptop, Server, Smartphone, Headphones } from "lucide-react";

const services = [
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Migrate to the cloud with confidence. Azure, AWS, and Google Cloud expertise.",
    features: ["Cloud Migration", "Infrastructure Setup", "Cost Optimization"]
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Protect your business with enterprise-grade security solutions.",
    features: ["Security Audits", "Threat Monitoring", "Compliance Management"]
  },
  {
    icon: Server,
    title: "IT Infrastructure",
    description: "Reliable network and server solutions for businesses of all sizes.",
    features: ["Network Design", "Server Management", "Backup Solutions"]
  },
  {
    icon: Laptop,
    title: "IT Support",
    description: "Comprehensive IT support to keep your business running smoothly.",
    features: ["Help Desk", "Remote Support", "On-site Services"]
  },
  {
    icon: Smartphone,
    title: "Digital Transformation",
    description: "Modernize your business processes with cutting-edge technology.",
    features: ["Process Automation", "Digital Strategy", "Technology Consulting"]
  },
  {
    icon: Headphones,
    title: "Managed Services",
    description: "Let us handle your IT so you can focus on growing your business.",
    features: ["Proactive Monitoring", "Maintenance", "Strategic Planning"]
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive IT Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From small businesses to large enterprises, we provide tailored IT solutions 
            that drive growth and efficiency.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-gray-200 hover:border-blue-300">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-500 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
