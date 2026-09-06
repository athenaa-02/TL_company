import PracticeAreasPaper from "./PracticeAreasPaper";

function PracticalAreasGeneral() {
  return (
    <>
      <picture className="block w-full ">
        <source
          media="(min-width: 1200px)"
          srcSet="/columns/columns-big-desktop.png"
        />
        <source
          media="(min-width: 425px)"
          srcSet="/columns/columns-desktop.png"
        />
        <img
          src="/columns/columns-mobile.png"
          alt="Our practice areas"
          className="block h-auto w-full m-auto max-h-130 lg:max-h-150 lg:max-w-500"
        />
      </picture>
      <section
        className="relative z-0 w-full overflow-visible bg-primary-red  py-16 text-basic  sm:py-20"
        aria-label="Practice areas"
      >
        <PracticeAreasPaper></PracticeAreasPaper>

        <div className="mx-auto mt-24 max-w-xl text-center sm:mt-32">
          <h2 className="font-volkhov text-2xl font-bold leading-tight sm:text-3xl">
            Request a Free Case Review
            <span className="block">No Cost, No Obligation</span>
          </h2>
          <p className="mt-8 text-sm text-fwhite">500 Terry Francine Street</p>
          <p className="text-sm text-fwhite">San Francisco, CA 94158</p>
          <p className="mt-5 text-sm text-fwhite">Tel: 123-456-7890</p>
        </div>
      </section>
    </>
  );
}

export default PracticalAreasGeneral;
