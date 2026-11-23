import PracticeHeroSection from "../../components/layout/PracticeHeroSection";
import PinkSection from "../../components/common/PinkSection";
import PracticeAreasList from "../../components/layout/PracticeAreasList";
import QuoteSection from "../../components/layout/QuoteSection";
import MapSection from "../../components/common/MapSection";

function PracticeAreas() {
  return (
    <>
      
      <PracticeHeroSection/>
      <PinkSection header={'Practice Areas'} paragraph={`We ensure that you’ll embark on a perfectly planned, safe vacation at a price you can afford.`}></PinkSection>
      <PracticeAreasList />
      <QuoteSection></QuoteSection>
      <MapSection></MapSection>
    </>
  );
}

export default PracticeAreas;
