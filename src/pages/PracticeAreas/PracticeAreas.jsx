import PracticeHeroSection from "../../components/layout/PracticeHeroSection";
import PinkSection from "../../components/common/PinkSection";
import PracticeAreasList from "../../components/layout/PracticeAreasList";

function PracticeAreas() {
  return (
    <>
      
      <PracticeHeroSection/>
      <PinkSection header={'Practice Areas'} paragraph={`We ensure that you’ll embark on a perfectly planned, safe vacation at a price you can afford.`}></PinkSection>
      <PracticeAreasList />
    </>
  );
}

export default PracticeAreas;
