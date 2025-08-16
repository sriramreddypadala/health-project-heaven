import { useState, useEffect } from "react";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

// Import team member images
import sriramImage from "@/images/sriramreddy.jpeg";
import vivekImage from "@/images/v.jpeg";
import bhargaviImage from "@/images/b.jpeg";
import eeshithaImage from "@/images/e.jpeg";
import saiSatyaImage from "@/images/s.jpeg";

interface TeamMember {
  name: string;
  image: string;
  portfolio: string;
  description: string;
}

const TeamSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  const teamMembers: TeamMember[] = [
    {
      name: "P. Sriram Reddy",
      image: sriramImage,
      portfolio: "https://sriram-reddy.netlify.app/",
      description: "Focused on driving innovation within Care4Us, ensuring that the project remains reliable and impactful in the healthcare domain. He works on building scalable solutions that balance practicality with creativity."
    },
    {
      name: "P. Vivek",
      image: vivekImage,
      portfolio: "https://vivekkrishna24.netlify.app/",
      description: "Dedicated to integrating modern technology into Care4Us, making healthcare systems more practical and accessible. He contributes to creating solutions that are adaptable and effective in real-world use."
    },
    {
      name: "S. Bhargavi",
      image: bhargaviImage,
      portfolio: "https://bhargavi1010.netlify.app/",
      description: "Committed to applying technology in meaningful ways that strengthen the impact of Care4Us. She focuses on problem-solving approaches that improve efficiency and reliability."
    },
    {
      name: "M. Eeshitha",
      image: eeshithaImage,
      portfolio: "https://eeshi.netlify.app/",
      description: "Ensures that Care4Us delivers a seamless and intuitive user experience for all. She works on making technology both accessible and engaging for healthcare providers and patients alike."
    },
    {
      name: "Sai Satya",
      image: saiSatyaImage,
      portfolio: "#",
      description: "Contributing to the Care4Us project with technical support and development assistance."
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('team-section');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const handlePortfolioClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section 
      id="team-section"
      className="relative py-24 bg-gradient-to-br from-white via-teal-50/30 to-blue-50/40 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-40 h-40 rounded-full bg-teal-400 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 rounded-full bg-blue-400 blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 rounded-full bg-cyan-300 blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Meet Our Team
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-teal-500 to-blue-500 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-600 mt-8 max-w-3xl mx-auto leading-relaxed">
            Our passionate team of healthcare technology innovators, dedicated to transforming 
            healthcare accessibility and user experience through cutting-edge solutions.
          </p>
        </div>

        {/* Main Team Grid (First 4 members) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          {teamMembers.slice(0, 4).map((member, index) => (
            <Card
              key={index}
              className={`group bg-white/80 backdrop-blur-sm border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02] rounded-3xl overflow-hidden ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardContent className="p-8 text-center relative">
                {/* Gradient Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                
                {/* Profile Image */}
                <div className="relative mb-6 inline-block">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full object-cover mx-auto shadow-xl group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Member Info */}
                <div className="relative z-10 mb-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-teal-600 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg mb-6">
                    {member.description}
                  </p>
                </div>

                {/* Portfolio Button */}
                <Button
                  onClick={() => handlePortfolioClick(member.portfolio)}
                  className="bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white rounded-2xl font-semibold px-8 py-3 text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl group/btn border-0 relative overflow-hidden"
                >
                  {/* Button Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-teal-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
                  
                  <span className="mr-3 relative z-10">View Portfolio</span>
                  <ExternalLink className="w-5 h-5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300 relative z-10" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Team Member (Sai Satya) - Same size, no portfolio */}
        {teamMembers.length > 4 && (
          <div className="flex justify-center mb-12">
            <div className="max-w-md">
              <Card
                className={`group bg-white/80 backdrop-blur-sm border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02] rounded-3xl overflow-hidden ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: '800ms' }}
              >
                <CardContent className="p-8 text-center relative">
                  {/* Gradient Background Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                  
                  {/* Profile Image - Same size as others */}
                  <div className="relative mb-6 inline-block">
                    <img
                      src={teamMembers[4].image}
                      alt={teamMembers[4].name}
                      className="w-32 h-32 rounded-full object-cover mx-auto shadow-xl group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  {/* Member Info - Same styling as others */}
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-teal-600 transition-colors duration-300">
                      {teamMembers[4].name}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      {teamMembers[4].description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {/* Bottom Accent */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/60 backdrop-blur-sm rounded-full border border-teal-200/50 shadow-lg">
            <div className="w-2 h-2 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full animate-pulse"></div>
            <span className="text-gray-600 font-medium">Building the future of healthcare technology</span>
            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
