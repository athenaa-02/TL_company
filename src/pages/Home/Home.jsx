import Header from "../../components/layout/Header";
import HeroSection from "../../components/layout/HeroSection";
import PinkSection from "../../components/common/PinkSection";
import PracticalAreasGeneral from "../../components/layout/PracticalAreasGeneral";
import LawyersGeneral from "../../components/lawyers/LawyersGeneral";
import MapSection from "../../components/common/MapSection";
import TestimonialSection from "../../components/layout/QuoteSection";

function Home() {
  return (
    <>
      <div className="h-24 relative"></div>
      <main className="">
        <div className="mobile_bg xs:desktop_bg bg-fixed min-h-180 flex w-full justify-center bg-cover bg-no-repeat xs:bg-cover xs:bg-top">
          <HeroSection></HeroSection>
        </div>

        <PinkSection></PinkSection>
        <PracticalAreasGeneral></PracticalAreasGeneral>
        <LawyersGeneral></LawyersGeneral>
        <TestimonialSection></TestimonialSection>
        <MapSection></MapSection>
      </main>
    </>
  );
}

export default Home;
