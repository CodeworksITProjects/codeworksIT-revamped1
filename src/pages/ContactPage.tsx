import Header from "@/components/Header";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="pt-24 md:pt-28">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;


