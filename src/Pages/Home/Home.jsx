import About from "../About/About";
import Banar from "../Banar/Banar";
import Footer from "../Footer/Footer";
import Hero from "../Hero/Hero";
import Map from "../Map/Map";
import Navbar from "../Navbar/Navbar";
import OurCustomers from "../OurCustomers/OurCustomers";
import OurProjects from "../OurProjects/OurProjects";
import Partners from "../Partners/Partners";
import Pdf from "../Pdf/Pdf";
import WhatsApp from "../WhatsApp/WhatsApp";
import YouTube from "../YouTube/YouTube";

export default function Home() {
  return (
    <>
      <Banar />
      <Navbar />
      <Hero />
      <About />
      <OurCustomers />
      <OurProjects />
      <Partners />
      <Map />
      <YouTube />
      <Pdf />
      <Footer />
      <WhatsApp />
    </>
  );
}
