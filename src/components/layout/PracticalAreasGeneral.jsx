import PracticeAreasPaper from "./PracticeAreasPaper";
import Columns from "../common/Columns";
import FreeRequestOffer from "../common/FreeRequestOffer";
function PracticalAreasGeneral() {
  return (
    <>
<<<<<<< HEAD
    <Columns></Columns>

=======
      <picture className="block w-full ">
        <source
          media="(min-width: 1200px)"
          srcSet="/columns/columns-big-desktop.webp"
        />
        <source
          media="(min-width: 425px)"
          srcSet="/columns/columns-desktop.webp"
        />
        <img
          src="/columns/columns-mobile.webp"
          alt="Our practice areas"
          className="block h-auto w-full m-auto max-h-130 lg:max-h-150 lg:max-w-500"
        />
      </picture>
>>>>>>> ac36f59ab8c11afff4f6393c8b01f74775278361
      <section
        className="relative z-0 w-full overflow-visible bg-primary-red  py-16 text-basic  sm:py-20"
        aria-label="Practice areas"
      >
        <PracticeAreasPaper></PracticeAreasPaper>

       <FreeRequestOffer></FreeRequestOffer>
      </section>
    </>
  );
}

export default PracticalAreasGeneral;
