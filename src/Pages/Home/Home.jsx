import About from "../About/About";
import Banar from "../Banar/Banar";
import Hero from "../Hero/Hero";
import Navbar from "../Navbar/Navbar";
import OurCustomers from "../OurCustomers/OurCustomers";
import WhatsApp from "../WhatsApp/WhatsApp";

export default function Home() {
  return (
    <>
      <Banar />
      <Navbar />
      <Hero />
      <About />
      <OurCustomers />
      <WhatsApp />
    </>
  );
}
