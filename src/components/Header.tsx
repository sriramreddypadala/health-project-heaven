import { useState, useEffect } from "react";
import { Stethoscope, Activity, Heart, Phone, BarChart3 } from "lucide-react";

const Header = () => {
  const [typedText, setTypedText] = useState("");
  const fullText = "From rural healthcare to telemedicine and pharmacy management.";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, []);

  const categories = [
    { icon: "🏡", label: "Rural Healthcare", color: "from-teal-500 to-cyan-500" },
    { icon: "💊", label: "Pharmacy", color: "from-blue-500 to-indigo-500" },
    { icon: "📞", label: "Telemedicine", color: "from-cyan-500 to-blue-500" },
    { icon: "📊", label: "Health Monitoring", color: "from-teal-600 to-emerald-500" }
  ];

  return (
    <header className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-400 via-cyan-500 to-blue-600">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 via-transparent to-blue-500/20 animate-pulse"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-white/20 animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}></div>
          <div className="absolute top-40 right-32 w-24 h-24 rounded-full bg-white/15 animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }}></div>
          <div className="absolute bottom-32 left-32 w-20 h-20 rounded-full bg-white/25 animate-bounce" style={{ animationDelay: '2s', animationDuration: '5s' }}></div>
        </div>
      </div>

      {/* Healthcare Background Illustrations */}
      <div className="absolute inset-0 opacity-5">
        <Stethoscope className="absolute top-1/4 left-1/4 w-32 h-32 text-white animate-pulse" />
        <Activity className="absolute top-1/3 right-1/4 w-28 h-28 text-white animate-pulse" style={{ animationDelay: '1s' }} />
        <Heart className="absolute bottom-1/3 left-1/3 w-24 h-24 text-white animate-pulse" style={{ animationDelay: '2s' }} />
        <BarChart3 className="absolute bottom-1/4 right-1/3 w-30 h-30 text-white animate-pulse" style={{ animationDelay: '3s' }} />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        {/* Main Heading */}
        <div className="mb-8">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="p-4 bg-white/20 rounded-3xl backdrop-blur-lg border border-white/30 shadow-2xl">
              <Stethoscope className="w-12 h-12 text-white" />
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Healthcare Projects Hub
          </h1>
          <div className="h-8 mb-8">
            <p className="text-xl md:text-2xl text-white/90 font-light">
              {typedText}
              <span className="animate-pulse">|</span>
            </p>
          </div>
        </div>

        {/* Category Tags */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`group px-6 py-3 rounded-full bg-gradient-to-r ${category.color} text-white font-semibold shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 hover:glow border border-white/20 backdrop-blur-sm`}
            >
              <span className="mr-2 text-lg">{category.icon}</span>
              {category.label}
            </button>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;