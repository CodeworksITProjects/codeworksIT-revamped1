
import { Card, CardContent } from "@/components/ui/card";
import { Users, Award, Target, Globe, CheckCircle, MapPin, Calendar } from "lucide-react";

const stats = [
  { icon: Users, label: "Happy Clients", value: "30+", description: "Businesses served" },
  { icon: Award, label: "Years Experience", value: "9+", description: "Since 2015" },
  { icon: Target, label: "Projects Delivered", value: "30+", description: "Successfully completed" },
  { icon: Globe, label: "Global Vision", value: "100%", description: "Innovation focused" }
];

const coreValues = [
  "Innovation: Staying at the forefront of technology trends",
  "Excellence: Pursuing excellence in everything we do",
  "Client-Centric: Our clients' success is our top priority",
  "Integrity: We uphold ethical standards in all interactions",
  "Team Collaboration: We value teamwork and collective expertise"
];

// services list removed as requested

const completedProjects = [
  "ABSA: Tested life funeral products",
  "Mutual and Federal: Tested insurance products", 
  "Momentum: Tested investment products"
];

const currentProjects = [
  "ENDULGE EN AIR – Ecommerce development",
  "Ringa – Mobile application"
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-gray-50 to-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-blue-100 rounded-full text-blue-700 text-sm font-medium mb-6">
            <Calendar className="h-4 w-4 mr-2" />
            About CodeWorks IT Solutions
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Leading Technology Solutions
            <span className="block text-blue-600">Since 2015</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            CodeWorks IT Solutions is a leading technology company that specializes in delivering 
            cutting-edge IT solutions to businesses of all sizes. Founded in 2015, we are headquartered 
            at Kyalami.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Mission, Vision, Values */}
          <div className="space-y-12">
            {/* Mission & Vision Cards */}
            <div className="space-y-6">
              <Card className="p-8 bg-gradient-to-br from-blue-50 to-indigo-50 border-0 shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Mission</h3>
                    <p className="text-gray-700 leading-relaxed">
                      At CodeWorks IT Solutions, our mission is to empower businesses with the most advanced 
                      and reliable technology solutions, enhancing competitiveness and growth.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 bg-gradient-to-br from-green-50 to-emerald-50 border-0 shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Globe className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Vision</h3>
                    <p className="text-gray-700 leading-relaxed">
                      To be a globally recognized leader in IT solutions, setting the standard for innovation, 
                      quality, and client satisfaction.
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Core Values */}
            <Card className="p-8 bg-white border-0 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Award className="h-6 w-6 text-blue-500 mr-3" />
                Our Core Values
              </h3>
              <div className="space-y-4">
                {coreValues.map((value, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-5 w-5 text-blue-500" />
                    </div>
                    <span className="text-gray-700 font-medium">{value}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Right Column - Projects, Stats */}
          <div className="space-y-12">
            {/* Services section removed as requested */}

            {/* Projects */}
            <Card className="p-8 bg-white border-0 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Users className="h-6 w-6 text-blue-500 mr-3" />
                Our Work
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    Completed Projects
                  </h4>
                  <div className="space-y-3">
                    {completedProjects.map((project, index) => (
                      <div key={index} className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                        <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700 font-medium">{project}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <div className="w-5 h-5 bg-blue-500 rounded-full animate-pulse mr-2"></div>
                    Current Projects
                  </h4>
                  <div className="space-y-3">
                    {currentProjects.map((project, index) => (
                      <div key={index} className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                        <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700 font-medium">{project}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Impact</h3>
            <p className="text-lg text-gray-600">Numbers that speak to our commitment and success</p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl group">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-lg font-semibold text-gray-900 mb-2">
                    {stat.label}
                  </div>
                  <div className="text-sm text-gray-500">
                    {stat.description}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
