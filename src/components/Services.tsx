
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cloud, Shield, Server, Smartphone, Headphones, Laptop, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Seamless cloud migration and management with enterprise-grade security and scalability.",
    features: ["AWS & Azure", "Migration Support", "24/7 Monitoring"],
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Advanced threat protection and compliance solutions to safeguard your digital assets.",
    features: ["Threat Detection", "Compliance", "Security Audits"],
    color: "from-red-500 to-pink-500"
  },
  {
    icon: Server,
    title: "Infrastructure",
    description: "Robust server solutions and network architecture designed for peak performance.",
    features: ["Server Management", "Network Design", "Performance Optimization"],
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Smartphone,
    title: "Digital Transformation",
    description: "Modernize your business processes with innovative technology and automation.",
    features: ["Process Automation", "Digital Strategy", "Technology Integration"],
    color: "from-purple-500 to-indigo-500"
  },
  {
    icon: Laptop,
    title: "IT Consulting",
    description: "Strategic technology guidance to align IT investments with business objectives.",
    features: ["IT Strategy", "Technology Planning", "Digital Roadmap"],
    color: "from-orange-500 to-yellow-500"
  },
  {
    icon: Headphones,
    title: "Managed Services",
    description: "Comprehensive IT management and monitoring to keep your systems optimal.",
    features: ["Proactive Monitoring", "Help Desk", "Maintenance"],
    color: "from-teal-500 to-blue-500"
  }
];

const positions = [
  {
    title: "Frontend Developer",
    type: "Full-time",
    location: "Remote / Pretoria, SA",
    description: "Build beautiful, performant UIs with React and TypeScript.",
    requirements: [
      "2+ years React experience",
      "Strong CSS/JS/TS skills",
      "Portfolio or GitHub required"
    ]
  },
  {
    title: "Backend Developer",
    type: "Full-time",
    location: "Remote / Pretoria, SA",
    description: "Design scalable APIs and services using Node.js and cloud platforms.",
    requirements: [
      "2+ years Node.js experience",
      "Familiarity with cloud (AWS/Azure)",
      "Database design skills"
    ]
  },
  {
    title: "IT Support Specialist",
    type: "Contract",
    location: "Pretoria, SA",
    description: "Deliver world-class support to our clients and internal teams.",
    requirements: [
      "Excellent communication",
      "Problem-solving mindset",
      "Relevant certifications a plus"
    ]
  },
  {
    title: "DevOps Engineer",
    type: "Full-time",
    location: "Remote / Johannesburg, SA",
    description: "Automate, monitor, and optimize CI/CD pipelines and cloud infrastructure.",
    requirements: [
      "Experience with CI/CD tools (Jenkins, GitHub Actions)",
      "Cloud infrastructure (AWS, Azure, GCP)",
      "Scripting (Bash, Python)"
    ]
  },
  {
    title: "Data Scientist",
    type: "Full-time",
    location: "Remote / Cape Town, SA",
    description: "Analyze data and build predictive models to drive business insights.",
    requirements: [
      "Proficiency in Python/R",
      "Experience with ML frameworks (scikit-learn, TensorFlow)",
      "Strong statistics background"
    ]
  },
  {
    title: "QA Engineer",
    type: "Full-time",
    location: "Remote / Durban, SA",
    description: "Ensure software quality through automated and manual testing.",
    requirements: [
      "Experience with test automation (Selenium, Cypress)",
      "Manual and exploratory testing skills",
      "Attention to detail"
    ]
  },
  {
    title: "UI/UX Designer",
    type: "Full-time",
    location: "Remote / Pretoria, SA",
    description: "Design intuitive and beautiful user interfaces and experiences.",
    requirements: [
      "Portfolio of design work",
      "Figma, Adobe XD, or similar",
      "User research and prototyping"
    ]
  },
  {
    title: "Cloud Architect",
    type: "Full-time",
    location: "Remote / Johannesburg, SA",
    description: "Design and implement scalable, secure cloud solutions.",
    requirements: [
      "5+ years cloud architecture experience",
      "AWS/Azure/GCP certifications",
      "Security and compliance knowledge"
    ]
  },
  {
    title: "Network Engineer",
    type: "Full-time",
    location: "Pretoria, SA",
    description: "Maintain and optimize enterprise network infrastructure.",
    requirements: [
      "Cisco/Juniper certifications",
      "LAN/WAN, VPN, firewall experience",
      "Troubleshooting skills"
    ]
  },
  {
    title: "Security Analyst",
    type: "Full-time",
    location: "Remote / Cape Town, SA",
    description: "Monitor, detect, and respond to security threats and incidents.",
    requirements: [
      "Experience with SIEM tools",
      "Incident response skills",
      "Security certifications (CEH, CompTIA Security+)"
    ]
  },
  {
    title: "Product Manager",
    type: "Full-time",
    location: "Remote / South Africa",
    description: "Lead product development from ideation to launch, working with cross-functional teams.",
    requirements: [
      "Experience in product management",
      "Agile/Scrum methodologies",
      "Strong communication skills"
    ]
  }
];

const Services = () => {
  return (
    <>
      <section id="services" className="py-24 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-700 text-sm font-medium mb-4">
              Our Services
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Comprehensive IT Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From strategy to implementation, we deliver professional technology solutions that drive your business forward.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group relative bg-white hover:shadow-2xl transition-all duration-300 border-0 shadow-lg overflow-hidden rounded-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-blue-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <CardHeader className="relative pb-4">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 mb-2">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative space-y-4">
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-500">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center text-blue-600 font-medium text-sm group-hover:text-blue-700 transition-colors pt-2">
                    Learn More
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          {/* Open Positions Section - visually connected, no extra spacing, white bg */}
          <div className="mt-24">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-10 text-center">Open Positions</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {positions.map((pos, idx) => (
                <Card key={idx} className="bg-white shadow-lg rounded-2xl border-0 hover:shadow-2xl transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-blue-800 mb-2">{pos.title}</CardTitle>
                    <div className="text-sm text-gray-500 mb-1">{pos.type} | {pos.location}</div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-2">{pos.description}</p>
                    <ul className="list-disc pl-5 text-gray-600 text-sm mb-2">
                      {pos.requirements.map((req, i) => (
                        <li key={i}>{req}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
