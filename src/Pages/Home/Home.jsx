import About from "../About/About";
import Banar from "../Banar/Banar";
import Footer from "../Footer/Footer";
import Hero from "../Hero/Hero";
import Map from "../Map/Map";
import Navbar from "../Navbar/Navbar";
import OurCustomers from "../OurCustomers/OurCustomers";
import OurProjects from "../OurProjects/OurProjects";
import WhatsApp from "../WhatsApp/WhatsApp";

export default function Home() {
  return (
    <>
      <Banar />
      <Navbar />
      <Hero />
      <About />
      <OurCustomers />
      <OurProjects />
      <Map />
      <Footer />
      <WhatsApp />
    </>
  );
}
