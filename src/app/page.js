import BlueBoxes from "@/components/BlueBoxes";
import Header from "@/components/about/Header";

const Home = () => {
  return (
    <>
      <div className="flex justify-center items-center space-x-4 my-10 h-20"></div>
      <Header />
      <BlueBoxes text1={"Box 1"} text2={"Box 2"} text3={"Box 3"} />
    </>
  );
};

export default Home;
