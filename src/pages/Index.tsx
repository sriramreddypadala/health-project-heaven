import Header from "@/components/Header";
import ProjectGrid from "@/components/ProjectGrid";
import TeamSection from "@/components/TeamSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <ProjectGrid />
        <TeamSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
