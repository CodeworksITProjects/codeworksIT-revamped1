
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { Cloud, Shield, Server, Smartphone, Headphones, Laptop, ArrowRight, CheckCircle, Zap, Users, Settings, Target, Lightbulb, BarChart3 } from "lucide-react";

const services = [
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Seamless cloud migration and management with enterprise-grade security and scalability.",
    features: ["AWS & Azure", "Migration Support", "24/7 Monitoring"],
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50",
    iconBg: "bg-blue-100"
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Advanced threat protection and compliance solutions to safeguard your digital assets.",
    features: ["Threat Detection", "Compliance", "Security Audits"],
    color: "from-red-500 to-pink-500",
    bgColor: "bg-red-50",
    iconBg: "bg-red-100"
  },
  {
    icon: Server,
    title: "Infrastructure",
    description: "Robust server solutions and network architecture designed for peak performance.",
    features: ["Server Management", "Network Design", "Performance Optimization"],
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-50",
    iconBg: "bg-green-100"
  },
  {
    icon: Smartphone,
    title: "Digital Transformation",
    description: "Modernize your business processes with innovative technology and automation.",
    features: ["Process Automation", "Digital Strategy", "Technology Integration"],
    color: "from-purple-500 to-indigo-500",
    bgColor: "bg-purple-50",
    iconBg: "bg-purple-100"
  },
  {
    icon: Laptop,
    title: "IT Consulting",
    description: "Strategic technology guidance to align IT investments with business objectives.",
    features: ["IT Strategy", "Technology Planning", "Digital Roadmap"],
    color: "from-orange-500 to-yellow-500",
    bgColor: "bg-orange-50",
    iconBg: "bg-orange-100"
  },
  {
    icon: Headphones,
    title: "Managed Services",
    description: "Comprehensive IT management and monitoring to keep your systems optimal.",
    features: ["Proactive Monitoring", "Help Desk", "Maintenance"],
    color: "from-teal-500 to-blue-500",
    bgColor: "bg-teal-50",
    iconBg: "bg-teal-100"
  }
];

// (intentionally no top-level testing cards section)

// Testing Process Stages (photos instead of emojis)
const testingProcess = [
  {
    stage: "Stage 1",
    title: "Requirements Gathering and Analysis",
    description: "Understanding your project requirements to define testing objectives.",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80"
  },
  {
    stage: "Stage 2", 
    title: "Design",
    description: "Creating detailed test plans and test cases based on design specifications.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80"
  },
  {
    stage: "Stage 3",
    title: "Implementation", 
    description: "Executing test cases and identifying defects during development.",
    image: "/Implement.jpg"
  },
  {
    stage: "Stage 4",
    title: "Deployment",
    description: "Conducting final testing before the software goes live to ensure readiness.",
    image: "/deploy.png"
  },
  {
    stage: "Stage 5",
    title: "Operation and Monitoring",
    description: "Ongoing testing and monitoring to maintain software quality post-deployment.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80"
  }
];

// Types of Testing (photos instead of emojis)
const testingTypes = [
  {
    title: "Functional Testing",
    description: "Verifying that each function of the software operates in conformance with the requirement specification.",
    details: `Functional Testing focuses on checking if every feature in your software works correctly according to its requirements.
We test all functions - such as user logins, data processing, buttons, forms, and system workflows - to make sure they deliver the expected results.
This helps find bugs or missing functionality early, ensuring your software performs exactly as users expect.`,
    image: "/functional testing.png"
  },
  {
    title: "Usability Testing",
    description: "Evaluating the user interface and overall user experience.",
    details: `Usability Testing is about making sure your software is easy, clear, and pleasant to use.
We observe how real users interact with your application to identify confusing layouts, hard-to-find features, or design issues.
This helps improve user satisfaction, navigation, and overall user experience - so your software feels natural and professional.`,
    image: "/usability.webp"
  },
  {
    title: "Performance Testing", 
    description: "Assessing the speed, responsiveness, and stability of the software under a workload.",
    details: `Performance Testing checks how fast, stable, and reliable your software is under different conditions.
We test how your system handles heavy traffic, multiple users, or large amounts of data -ensuring it remains quick and responsive.
This process helps prevent crashes, slowdowns, or failures when your business scales or faces high demand.`,
    image: "/performance.jpg"
  },
  {
    title: "Security Testing",
    description: "Identifying vulnerabilities and ensuring that data and resources are protected.",
    details: `Security Testing protects your software and data from hackers, leaks, and system vulnerabilities.
We check for weak points that could allow unauthorized access or data theft, and ensure compliance with modern security standards.
Our goal is to keep your IT systems safe, reliable, and fully protected against potential threats.`,
    image: "/security.png"
  },
  {
    title: "Automated Testing",
    description: "Utilizing automated tools to execute test cases efficiently and consistently.",
    details: `Automated Testing uses software tools to run tests automatically - faster and more accurately than manual testing alone.
We use automation to repeat important tests, check multiple platforms, and catch issues early in development.
This helps deliver consistent quality, faster updates, and lower testing costs - all while improving efficiency and reliability.`,
    image: "/automated.png"
  }
];

const Services = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setExpandedIndex(prev => (prev === index ? null : index));
  };

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Software Testing Services Section */}
        <div className="-mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 text-center">
            Comprehensive Software Testing Services
          </h2>
          
          {/* Intro paragraph retained; top-level testing cards removed as requested */}

          {/* Why Choose CODEWORKS Section */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Why Choose CODEWORKS for Software Testing?
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-yellow-600" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Experienced QA Professionals:</h4>
                <p className="text-gray-600 text-sm">Our team has extensive experience across various industries.</p>
        </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-blue-600" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Tailored Solutions:</h4>
                <p className="text-gray-600 text-sm">We customize our testing strategies to align with your business objectives.</p>
                    </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-indigo-600" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Advanced Tools:</h4>
                <p className="text-gray-600 text-sm">Leveraging the latest testing tools to ensure comprehensive coverage.</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Settings className="h-8 w-8 text-green-600" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Continuous Improvement:</h4>
                <p className="text-gray-600 text-sm">We focus on enhancing the quality of your software through iterative testing and feedback.</p>
              </div>
            </div>
          </div>

          {/* Our Testing Process */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">
              Our Testing Process
            </h3>
            <p className="text-lg text-gray-600 text-center mb-12 max-w-4xl mx-auto">
              We integrate quality assurance at every stage of the Software Development Life Cycle (SDLC) to ensure optimal results:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              {testingProcess.map((stage, index) => (
                <Card key={index} className="bg-white border border-gray-100 shadow-sm rounded-2xl overflow-hidden hover:shadow-md transition-shadow">
                  <CardContent className="p-0">
                    <div className="flex items-stretch">
                      <div className="w-44 h-32 flex-shrink-0 overflow-hidden">
                        <img src={stage.image} alt={stage.title} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1 p-6">
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold mb-2">
                          {stage.stage}
                        </div>
                        <h4 className="text-xl font-bold text-gray-900 mb-1">
                          {stage.title}
                        </h4>
                        <p className="text-gray-600">{stage.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Types of Testing We Offer */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Types of Testing We Offer
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              {testingTypes.map((type, index) => {
                const isExpanded = expandedIndex === index;
                const contentId = `testing-type-${index}-details`;
                return (
                  <Card key={index} className="bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow rounded-2xl overflow-hidden h-full">
                    <CardContent className="p-0 text-center h-full flex flex-col">
                      <div className="aspect-[4/3] w-full overflow-hidden">
                        <img src={type.image} alt={type.title} className="w-full h-full object-cover" />
                      </div>
                      <div className="p-6 flex-1 flex flex-col text-left">
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold mb-2">
                          {index + 1 < 10 ? `0${index + 1}` : index + 1}
                        </div>
                        <h4 className="text-base font-semibold text-gray-900 mb-2">{type.title}</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">{type.description}</p>

                        <div className="mt-4">
                          <button
                            type="button"
                            aria-expanded={isExpanded}
                            aria-controls={contentId}
                            onClick={() => handleToggle(index)}
                            className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded-md"
                          >
                            {isExpanded ? "Hide details" : "Learn more"}
                            <ArrowRight className={`h-4 w-4 transition-transform ${isExpanded ? "rotate-90" : "translate-x-0"}`} />
                          </button>
                        </div>

                        {isExpanded && (
                          <div id={contentId} className="mt-4 text-sm text-gray-700 border-t border-gray-100 pt-4 whitespace-pre-line">
                            {type.details ? (
                              <p>{type.details}</p>
                            ) : (
                              <p>{type.description}</p>
                            )}
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Back to Services Link */}
          <div className="text-center">
            <a href="#services" className="text-blue-600 hover:text-blue-700 font-medium">
              ← Back to Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
