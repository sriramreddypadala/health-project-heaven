import Header from "@/components/Header";
import ProjectGrid from "@/components/ProjectGrid";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-8">
        <ProjectGrid />
      </main>
    </div>
  );
};

export default Index;
