
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Transform Your Business with 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500"> Smart IT Solutions</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Professional IT services and consulting to accelerate your digital transformation. 
                From cloud solutions to cybersecurity, we've got you covered.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3">
                Get Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-3">
                View Our Work
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-gray-600">24/7 Support</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-gray-600">Local South African Team</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-gray-600">Certified Experts</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl p-8 shadow-2xl">
              <img
                src="/api/placeholder/600/400"
                alt="IT Solutions Dashboard"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-lg p-4 shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-700">Systems Online</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
