import Header from "../../components/layout/Header";
import HeroSection from "../../components/layout/HeroSection";

function Home() {
  return (
    <>
      <div className="h-24 relative">
        <Header />
      </div>
      <main>
        <div className="">
          <div className=" mobile_bg xs:desktop_bg  xs:bg-top xs:bg-scroll bg-fixed w-full h-screen bg-no-repeat bg-cover  xs:bg-auto ">
            <HeroSection></HeroSection>
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;
