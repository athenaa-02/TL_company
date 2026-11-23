import PracticeAreasPaper from "./PracticeAreasPaper";
import Columns from "../common/Columns";
import FreeRequestOffer from "../common/FreeRequestOffer";
function PracticalAreasGeneral() {
  return (
    <>
    <Columns></Columns>

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
