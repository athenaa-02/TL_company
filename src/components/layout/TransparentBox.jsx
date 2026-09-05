import { ArrowUpRight, ShieldCheck } from "lucide-react";

function TransparentBox() {
  return (
    <>
      <div className="hero-box hero-box--first mx-auto w-full max-w-3xl rounded-sm border border-fwhite/20 bg-heading/70 p-6 text-fwhite shadow-2xl backdrop-blur-md md:max-w-[34rem] sm:p-8 lg:mx-0 lg:max-w-none lg:p-10">
        <div className="max-w-2xl text-center lg:text-left">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-light-yellow/50 bg-heading/35 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-light-yellow backdrop-blur-sm">
            <ShieldCheck size={15} aria-hidden="true" />
            Trusted legal counsel
          </div>
          <h2 className="font-volkhov text-4xl leading-tight text-basic sm:text-5xl lg:text-6xl">
            Clarity when your
            <span className="gold-text block">next move matters.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-white sm:text-base lg:mx-0">
            Practical, thoughtful legal guidance for the moments that shape your
            business, your family, and your future.
          </p>
          <div className="mt-8 flex max-w-xl flex-col items-center gap-3 lg:flex-row lg:justify-start">
            <a
              href="#contact"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-sm bg-accent px-6 py-3 text-sm font-semibold text-heading transition-colors duration-300 hover:bg-light-yellow lg:w-auto"
            >
              Book a consultation
              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </a>

            <a
              href="#practice-areas"
              className="inline-flex w-full items-center justify-center rounded-sm border border-fwhite/60 px-6 py-3 text-center text-sm font-medium text-white transition-colors duration-300 hover:border-light-yellow hover:text-light-yellow lg:w-auto"
            >
              Explore our practice areas
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default TransparentBox;
