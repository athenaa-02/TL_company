import Map from "../map/Map";

function MapSection() {
  return (
    <section
      className="bg-[#f7e3e3] px-5 py-16 sm:px-8 sm:py-20 lg:px-9 lg:py-24"
      aria-label="Our office location"
    >
      <div className="mx-auto w-full max-w-300">
        <Map />
      </div>
    </section>
  );
}

export default MapSection;
