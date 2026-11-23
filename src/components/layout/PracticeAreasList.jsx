const practiceAreas = [
  {
    name: "Administrative Law",
    image: "/practiceAreas/administrative.webp",
    description:
      "Guidance on matters involving public authorities, regulatory requirements, administrative decisions, and available review or appeal processes.",
  },
  {
    name: "Contract Law",
    image: "/practiceAreas/contract.webp",
    description:
      "Support with preparing, reviewing, and interpreting agreements, as well as resolving disputes about contractual rights and obligations.",
  },
  {
    name: "Family Law",
    image: "/practiceAreas/familylaw.png",
    description:
      "Assistance with family-related matters, including separation, divorce, parenting arrangements, and related agreements.",
  },
  {
    name: "Financial Law",
    image: "/practiceAreas/financial.png",
    description:
      "Advice on financial transactions and obligations, including the review of financing arrangements and support with financial disputes.Advice on financial transactions and obligations, including the review of financing arrangements and support with financial disputes.Advice on financial transactions and obligations, including the review of financing arrangements and support with financial disputes.Advice on financial transactions and obligations, including the review of financing arrangements and support with financial disputes.",
  },
  {
    name: "Land Law",
    image: "/practiceAreas/landlaw.png",
    description:
      "Help with property and land matters, such as ownership, transfers, leases, registrations, and disputes over land rights.",
  },
  {
    name: "Wills and Estates",
    image: "/practiceAreas/will.webp",
    description:
      "Support with preparing wills and planning estates, along with guidance on administration and the transfer of assets after death.",
  },
];

function PracticeAreasList() {
  return (
    <section
      aria-label="Our practice areas"
      className="bg-white px-6 py-16 text-heading sm:px-18 sm:py-20 lg:py-24"
    >
      <div className="mx-auto grid max-w-[1066px] gap-y-12 md:gap-y-44">
        {practiceAreas.map((area) => (
          <article
            key={area.name}
            className="grid min-w-0 grid-cols-1 items-center gap-6 md:grid-cols-[202px_minmax(0,1fr)] md:gap-x-[82px] md:gap-y-0"
          >
            <img
              src={area.image}
              alt={area.name}
              loading="lazy"
              className="mx-auto h-[198px] w-fit  max-w-full object-cover md:mx-0"
            />
            <div className="max-w-[691px] text-center md:text-left">
              <h2 className="font-volkhov text-2xl font-bold leading-tight sm:text-3xl">
                {area.name}
              </h2>
              <p className="mt-4 text-sm leading-7 text-text-basic sm:text-base">
                {area.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default PracticeAreasList;
