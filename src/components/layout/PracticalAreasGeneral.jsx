function PracticalAreasGeneral() {
  return (
    <section
      className="w-full overflow-hidden bg-heading"
      aria-label="Practice areas"
    >
      <picture className="block w-full">
        <source media="(min-width: 425px)" srcSet="/columns-desktop.png" />
        <img
          src="/columns-mobile.png"
          alt="Our practice areas"
          className="block h-auto w-full"
        />
      </picture>
    </section>
  );
}

export default PracticalAreasGeneral;
