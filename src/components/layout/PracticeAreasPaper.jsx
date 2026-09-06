const practiceAreas = [
  { name: "Administrative Law", image: "/practiceAreas/administrative.png" },
  { name: "Contract Law", image: "/practiceAreas/contract.png" },
  { name: "Family Law", image: "/practiceAreas/familylaw.png" },
  { name: "Financial Law", image: "/practiceAreas/financial.png" },
  { name: "Land Law", image: "/practiceAreas/landlaw.png" },
  { name: "Wills and Estates", image: "/practiceAreas/will.png" },
];

function PracticeAreasPaper() {
  return (
    <div className="relative z-10 mx-auto -mt-43.25 box-border w-full max-w-232.75 flex flex-col items-center outline-1 outline-accent   -outline-offset-15 bg-white px-6 py-12 text-heading sm:-mt-67 sm:px-10 sm:py-16 lg:px-16">
      <div className="mx-auto max-w-3xl text-center flex flex-col items-center">
    <div className="w-px h-25 bg-heading"></div>
        <h2 className="mt-3 font-volkhov text-3xl font-bold leading-tight sm:text-4xl">
          Practice Areas
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-text-basic">
          Experienced legal guidance for the matters that affect you, your
          family, and your business.
        </p>
      </div>

      <div className="mt-10 w-[84%] grid grid-cols-2 gap-x-5 gap-y-6 sm:gap-x-0 sm:gap-y-14">
        {practiceAreas.map((area) => (
          <article key={area.name} className="text-center">
            <div className="mx-auto flex aspect-square w-full max-w-40 items-center justify-center overflow-hidden">
              <img
                src={area.image}
                alt=""
                className="h-full w-full object-contain"
              />
            </div>
            <h3 className="mt-4 font-montserrat text-sm font-semibold leading-5 sm:text-base">
              {area.name}
            </h3>
          </article>
        ))}
      </div>

      <div className=" text-center mt-18">
        <button
          type="button"
          className="font-montserrat  border-accent border pb-1.5 pt-1.5 pl-4 pr-4 text-center text-sm font-medium transition-colors duration-300  hover:text-white hover:bg-accent   text-accent    hover:opacity-70 cursor-pointer"
        >
          View More
        </button>

      </div>
    </div>
  );
}

export default PracticeAreasPaper;
