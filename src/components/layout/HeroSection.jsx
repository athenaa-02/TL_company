import BlurrBox from '../layout/BlurrBox.jsx'
import TransparentBox from './TransparentBox.jsx';


function HeroSection() {
  return (
    <>
      <section className="w-full max-w-7xl px-5 pt-15  sm:px-8 lg:pt-50 lg:px-12 ">
      
          <div className="grid items-center gap-8 lg:items-start lg:grid-cols-[minmax(0,1.1fr)_minmax(20rem,0.9fr)] lg:gap-16">
       
            <TransparentBox />
            <BlurrBox />
        </div>
      </section>
    </>
  );
}

export default HeroSection;
