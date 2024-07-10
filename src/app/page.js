import Landing from "@/components/Landing";
import AboutJM from "@/components/home/AboutJM";
import OurManufacturingServices from "@/components/home/OurManufacturingServices";
import PhotoStrip from "@/components/home/PhotoStrip";
import Button from "@/components/Button";

const Home = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-10">
      <Button text={"Learn More"} link={"/about"} />
      <Landing />
      <AboutJM />
      <OurManufacturingServices />
      <PhotoStrip />
    </div>
  );
};
export default Home;
