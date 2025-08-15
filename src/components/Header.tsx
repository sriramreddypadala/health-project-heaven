import { Stethoscope } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-gradient-hero shadow-soft">
      <div className="container mx-auto px-4 py-8 text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="p-3 bg-white/20 rounded-2xl backdrop-blur-sm">
            <Stethoscope className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Healthcare Projects Hub
          </h1>
        </div>
        <p className="text-lg text-white/90 max-w-2xl mx-auto">
          Access all your healthcare applications from one secure, centralized location
        </p>
      </div>
    </header>
  );
};

export default Header;