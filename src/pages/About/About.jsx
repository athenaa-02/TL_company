import AboutTl from "../../components/layout/AboutTl";
import AboutTlBox from "../../components/layout/AboutTlBox";
import LawyersBioCard from "../../components/lawyers/LawyersBioCard";
import ValuesBar from "../../components/common/ValuesBar";


function About() {
  return (
    <>
      <main className="relative overflow-visible">
        <AboutTl />
        <div className="relative z-0 -mt-10 h-150 bg-[url(/win-win/chess.png)] bg-fixed bg-center bg-no-repeat sm:h-220" />
        <div className="mx-auto flex max-w-[1650px] md:justify-end md:pr-40">
          <AboutTlBox />
        </div>
        <div className="mt-24 mb-24">
          <LawyersBioCard/>
        </div>
        <ValuesBar></ValuesBar>
      </main>
    </>
  );
}

export default About;
