import Header from "@/components/Header";
import Services from "@/components/Services";
import Footer from "@/components/Footer";

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="pt-24 md:pt-28">
        <Services />
      </div>
      <Footer />
    </div>
  );
};

export default ServicesPage;


