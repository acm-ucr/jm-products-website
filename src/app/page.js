import Landing from "@/components/Landing";
import AboutJM from "@/components/home/AboutJM";
import OurManufacturingServices from "@/components/home/OurManufacturingServices";
import PhotoStrip from "@/components/home/PhotoStrip";
import BlueBoxes from "@/components/BlueBoxes";

const Home = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-10">
      {/* Props go here */}
      <BlueBoxes text1="Box1" text2="Box2" text3="Box3" />
      <Landing />
      <AboutJM />
      <OurManufacturingServices />
      <PhotoStrip />
    </div>
  );
};
export default Home;
