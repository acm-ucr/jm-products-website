import Bluebox from "@/components/BlueBoxes";

const Home = () => {
  return (
    <div>
      <p class="font-sans break-normal mb-8 indent-4 font-san mt-6"> Navbar</p>
      <Bluebox text={"Box 1"} />

      <p className="mb-4"></p>
      <p className="font-sans text-center break-normal mb-8"> Landing</p>
      <p className="font-sans text-center break-normal mb-8"> AboutJM</p>
      <p className="font-sans text-center mb-8"> OurManufacturingServices</p>
      <p className="font-sans text-center mb-16"> PhotoStrip</p>
      <p className="font-san mt-32 indent-4"> Footer</p>
    </div>
  );
};

export default Home;
