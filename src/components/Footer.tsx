
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="md:col-span-2 space-y-6">
            <div>
              <span className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                CodeWorks
              </span>
            </div>
            <p className="text-gray-400 text-lg leading-relaxed max-w-md">
              Empowering South African businesses with cutting-edge IT solutions. 
              Your trusted partner in digital transformation and technology excellence.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                LinkedIn
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                Twitter
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                Facebook
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Services</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-purple-400 transition-colors">Cloud Migration</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Cybersecurity</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Infrastructure</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Digital Transformation</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">IT Consulting</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Contact Info</h4>
            <ul className="space-y-3 text-gray-400">
              <li>+27 11 123 4567</li>
              <li>hello@codeworksit.co.za</li>
              <li>Johannesburg, South Africa</li>
              <li>Mon-Fri: 8AM-6PM</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; 2024 CodeWorks IT. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-purple-400 text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-purple-400 text-sm transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
