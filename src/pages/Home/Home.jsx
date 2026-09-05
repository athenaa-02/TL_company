import Header from "../../components/layout/Header";
import HeroSection from "../../components/layout/HeroSection";

function Home() {
  return (
    <>
      <div className="h-24 relative">
        <Header />
      </div>
      <main className="">
        <div className="">
          <div className="mobile_bg xs:desktop_bg bg-fixed h-180 flex w-full justify-center bg-cover bg-no-repeat xs:bg-cover xs:bg-top">
            <HeroSection></HeroSection>
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;
