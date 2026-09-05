import { useEffect, useRef, useState } from "react";
import { ShieldCheck } from "lucide-react";

function BlurrBox() {
  const boxRef = useRef(null);
  const [hasAppeared, setHasAppeared] = useState(false);

  useEffect(() => {
    const revealAfterScroll = () => {
      if (window.scrollY < 150) return;

      setHasAppeared(true);
      window.removeEventListener("scroll", revealAfterScroll);
    };

    window.addEventListener("scroll", revealAfterScroll, { passive: true });

    return () => window.removeEventListener("scroll", revealAfterScroll);
  }, []);

  return (
    <>
      <div
        ref={boxRef}
        className={`hero-box hero-box--second mx-auto w-full max-w-md border border-fwhite/25 bg-heading/70 p-6 text-fwhite shadow-2xl backdrop-blur-md sm:p-8 lg:mx-0 lg:mt-48 lg:justify-self-end ${
          hasAppeared ? "hero-box--revealed" : "hero-box--waiting"
        }`}
      >
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-light-yellow">
          Why TL Company
        </p>
        <h3 className="mt-4 font-volkhov text-2xl leading-snug text-basic sm:text-3xl">
          Counsel built around your priorities.
        </h3>
        <div className="mt-7 flex justify-around  border-t border-fwhite/20 pt-6">
          <img
            className="h-26 w-26 rounded-full"
            src="/public/giorgi.jpg"
            alt=""
          />

          <img
            className=" h-26 w-26 rounded-full"
            src="/public/keti.jpg"
            alt=""
          />
        </div>
        <div className="mt-7 flex items-start gap-3 border-t border-fwhite/20 pt-5 text-sm leading-6 text-fwhite/80">
          <ShieldCheck
            size={20}
            className="mt-0.5 shrink-0 text-light-yellow"
            aria-hidden="true"
          />
          <p>Clear advice, careful preparation, and a steady partner.</p>
        </div>
      </div>
    </>
  );
}

export default BlurrBox;
