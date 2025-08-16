import { Stethoscope, Linkedin, Github, Twitter } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];

  const socialLinks = [
    { name: "LinkedIn", icon: Linkedin, href: "#", color: "hover:text-blue-400" },
    { name: "GitHub", icon: Github, href: "#", color: "hover:text-gray-300" },
    { name: "Twitter", icon: Twitter, href: "#", color: "hover:text-blue-400" }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-teal-900 to-slate-800 text-white">
      {/* Subtle glow separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-400/50 to-transparent"></div>
      
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          
          {/* Left: Logo + Tagline */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
              <div className="p-3 bg-teal-500/20 rounded-2xl backdrop-blur-sm border border-teal-400/30">
                <Stethoscope className="w-8 h-8 text-teal-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">
                Healthcare Hub
              </h3>
            </div>
            <p className="text-gray-300 leading-relaxed max-w-sm mx-auto md:mx-0">
              Connecting healthcare solutions across rural communities, telemedicine, and pharmacy management.
            </p>
          </div>

          {/* Center: Quick Links */}
          <div className="text-center">
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <div className="flex flex-col space-y-3">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-300 hover:text-teal-400 transition-colors duration-300 font-medium"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Right: Social Icons */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold text-white mb-6">Connect With Us</h4>
            <div className="flex justify-center md:justify-end space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`p-3 bg-white/10 rounded-full backdrop-blur-sm border border-white/20 text-gray-300 ${social.color} transition-all duration-300 hover:scale-110 hover:bg-white/20 hover:shadow-lg`}
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 Healthcare Projects Hub. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm">
              Built with ❤️ for better healthcare accessibility
            </p>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-teal-400 blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 rounded-full bg-blue-400 blur-xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-cyan-400 blur-2xl"></div>
      </div>
    </footer>
  );
};

export default Footer;
