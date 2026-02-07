import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Categories from "@/components/Categories";
import Expertise from "@/components/Expertise";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16 md:pt-20">
        <Hero />
        <TrustBar />
        <Categories />
        <Expertise />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
