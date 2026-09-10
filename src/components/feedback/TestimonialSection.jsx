import { useEffect, useRef, useState } from "react";

function TestimonialSection() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex bg-position-[10%] min-h-130 items-center justify-center overflow-hidden bg-cover bg-fixed bg-secondary-red px-6 py-20 sm:min-h-140 sm:px-10"
      style={{ backgroundImage: "url('/homepage/office.png')" }}
      aria-label="Testimonial"
    >
      <blockquote
        className={`max-w-190 text-center font-volkhov text-2xl font-bold leading-tight text-white transition-all duration-1600 ease-out motion-reduce:transition-none sm:text-4xl ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        &quot;This is a Testimonial. Let your customers tell the world how great
        you are.&quot;
      </blockquote>
    </section>
  );
}

export default TestimonialSection;
