function PinkSection({header, paragraph}) {
  return (
    <section className="flex min-h-112 w-full flex-col items-center justify-center lg:justify-start bg-[#f7e3e3] px-6  text-center  ">
      <div className="h-28 w-px bg-heading/40 sm:h-40" aria-hidden="true" />
      <h2 className="mt-8 font-volkhov text-3xl font-bold leading-tight text-heading drop-shadow-sm sm:text-4xl">
        {header}
      </h2>
      <p className="mt-8 max-w-md text-sm leading-6 text-text-basic sm:text-base sm:leading-7">
        {paragraph}
      </p>
    </section>
  );
}

export default PinkSection;
