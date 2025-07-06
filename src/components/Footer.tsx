
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.02\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"2\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
      
      <div className="relative py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12">
            {/* Brand */}
            <div className="md:col-span-2 space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">C</span>
                </div>
                <span className="text-3xl font-bold text-white">
                  CodeWorks
                </span>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed max-w-md">
                Empowering South African businesses with cutting-edge IT solutions. 
                Your trusted partner in digital transformation and technology excellence.
              </p>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm font-medium">
                  LinkedIn
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm font-medium">
                  Twitter
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm font-medium">
                  Facebook
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-bold text-lg mb-6 text-white">Our Services</h4>
              <ul className="space-y-3 text-gray-300">
                <li><a href="#" className="hover:text-blue-400 transition-colors duration-200 text-sm">Cloud Solutions</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors duration-200 text-sm">Cybersecurity</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors duration-200 text-sm">Infrastructure</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors duration-200 text-sm">Digital Transformation</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors duration-200 text-sm">IT Consulting</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors duration-200 text-sm">Managed Services</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold text-lg mb-6 text-white">Contact Info</h4>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start space-x-2">
                  <span className="text-blue-400 text-sm">Phone:</span>
                  <span className="text-sm">+27 11 123 4567</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-blue-400 text-sm">Email:</span>
                  <span className="text-sm">hello@codeworksit.co.za</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-blue-400 text-sm">Location:</span>
                  <span className="text-sm">Johannesburg, South Africa</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-blue-400 text-sm">Hours:</span>
                  <span className="text-sm">Mon-Fri: 8AM-6PM SAST</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom section */}
          <div className="border-t border-gray-700 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-400 text-sm">
                &copy; 2024 CodeWorks IT. All rights reserved. | Proudly South African
              </p>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors duration-200">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors duration-200">
                  Terms of Service
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors duration-200">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
