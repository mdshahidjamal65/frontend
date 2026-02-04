import Hero from "../components/home/Hero";
import AboutSection from "../components/home/AboutSection";
import OurImpact from "../components/home/OurImpact";
import ServicesSection from "../components/home/ServicesSection";
import CountriesSection from "../components/home/CountriesSection";

const Home = () => {
  return (
    <>
      <Hero />
      <AboutSection />
      <OurImpact />
      <ServicesSection/>
      <CountriesSection/>
      {/* Other home sections will go here */}
    </>
  );
};

export default Home;
