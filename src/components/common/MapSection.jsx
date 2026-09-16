import Map from "../map/Map";

function MapSection() {
  return (
    <section
      className="bg-[#f7e3e3] px-5 py-28 sm:px-10 sm:py-24 lg:px-12 lg:py-30"
      aria-label="Our office location"
    >
      <div className="mx-auto w-full max-w-300">
        <Map />
      </div>
    </section>
  );
}

export default MapSection;
