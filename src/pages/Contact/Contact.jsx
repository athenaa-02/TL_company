import PinkSection from "../../components/common/PinkSection";
import HeroSection from "../../components/layout/HeroSection";
import Columns from "../../components/common/Columns";
import FreeRequestOffer from "../../components/common/FreeRequestOffer";
import Map from "../../components/map/Map";

function Contact() {
  return (
    <>
      <div className="mobile_bg xs:desktop_bg bg-fixed min-h-180 flex w-full justify-center bg-cover bg-no-repeat xs:bg-cover xs:bg-top">
        <HeroSection></HeroSection>
      </div>
      <PinkSection
        header={"contact us"}
        paragraph={`We ensure that you’ll embark on a perfectly planned, safe vacation at a price you can afford. `}
      />
      <Columns></Columns>
      <section
        className=" w-full overflow-visible bg-primary-red  pb-16 pt-1 text-basic  sm:pt-1 sm:pb-24"
        aria-label="Practice areas"
      >
        <FreeRequestOffer></FreeRequestOffer>
      </section>
      <Map></Map>
    </>
  );
}

export default Contact;
