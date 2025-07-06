
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cloud, Shield, Server, Smartphone, Headphones, Laptop } from "lucide-react";

const services = [
  {
    icon: Cloud,
    title: "Cloud Migration",
    description: "Seamlessly migrate your infrastructure to the cloud with zero downtime and maximum efficiency.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Advanced threat protection and compliance solutions to safeguard your digital assets.",
    color: "from-red-500 to-pink-500"
  },
  {
    icon: Server,
    title: "Infrastructure",
    description: "Robust server solutions and network architecture designed for scalability and performance.",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Smartphone,
    title: "Digital Transformation",
    description: "Modernize your business processes with innovative technology and automation solutions.",
    color: "from-purple-500 to-indigo-500"
  },
  {
    icon: Laptop,
    title: "IT Consulting",
    description: "Strategic technology guidance to align IT investments with your business objectives.",
    color: "from-orange-500 to-yellow-500"
  },
  {
    icon: Headphones,
    title: "Managed Services",
    description: "Comprehensive IT management and monitoring to keep your systems running optimally.",
    color: "from-teal-500 to-blue-500"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive IT solutions tailored to accelerate your business growth and digital transformation journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
              <CardHeader className="text-center pb-2">
                <div className={`mx-auto w-20 h-20 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center px-6 pb-8">
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
