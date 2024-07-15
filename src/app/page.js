import Landing from "@/components/Landing";
import AboutJM from "@/components/home/AboutJM";
import OurManufacturingServices from "@/components/home/OurManufacturingServices";
import PhotoStrip from "@/components/home/PhotoStrip";
import ServiceDescription from "@/components/home/ServiceDescription";
import ClampsAndBracket from "../../public/images/home/ClampsAndBracket.webp";

const Home = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-10">
      <Landing />
      <AboutJM />
      <OurManufacturingServices />
      <ServiceDescription
        img={ClampsAndBracket}
        title="Clamps and Bracket"
        desc="J&M Line Support Clamps and Bracket solutions are utilized to support hydraulic, electrical and pneumatic systems in extreme environmental conditions (temperature variation, fluid exposure, vibration, etc)."
        link="/about"
        float="left"
      />
      <ServiceDescription
        img={ClampsAndBracket}
        title="Clamps and Bracket"
        desc="J&M Line Support Clamps and Bracket solutions are utilized to support hydraulic, electrical and pneumatic systems in extreme environmental conditions (temperature variation, fluid exposure, vibration, etc)."
        link="/about"
        float="right"
      />
      <PhotoStrip />
    </div>
  );
};
export default Home;
