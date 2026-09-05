import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Navigation from "../navbar/Navigation";

function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const scrollDelta = useRef(0);
  const HIDE_THRESHOLD = 200;
  const DELTA_TO_HIDE = 80;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const diff = currentScrollY - lastScrollY.current;

      if (currentScrollY < HIDE_THRESHOLD) {
        // near the top, always show
        setIsVisible(true);
        scrollDelta.current = 0;
      } else if (diff > 0) {
        // scrolling down
        scrollDelta.current += diff;
        if (scrollDelta.current > DELTA_TO_HIDE) {
          setIsVisible(false);
        }
      } else {
        // scrolling up
        scrollDelta.current = 0;
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed left-0 right-0 top-0 z-50 h-24 px-0 py-0 transition-transform duration-500 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex h-full w-full items-center justify-between border-b border-fwhite/15 bg-heading/95 px-5 shadow-2xl backdrop-blur-md sm:px-8 lg:px-12">
          <Link to="/" className="group flex items-center gap-3">
            <img
              src="/tl_small_logo.webp"
              className="h-10 w-10 object-contain transition-transform duration-300 group-hover:scale-105 sm:h-11 sm:w-11"
              alt="tl company logo"
            />
            <span className="border-l border-fwhite/25 pl-3">
              <span className="block font-montserrat text-lg font-bold leading-none text-basic sm:text-xl">
                <span className="gold-text">TL</span>Company
              </span>
              <span className="mt-1 block text-[9px] font-medium uppercase tracking-[0.22em] text-fwhite/65">
                Legal counsel
              </span>
            </span>
          </Link>
          <div className="flex items-center gap-4 sm:gap-6">
            <Navigation />
            <Link
              to="/contact"
              className="hidden items-center gap-2 border-l border-fwhite/20 pl-5 text-xs font-semibold uppercase tracking-[0.16em] text-light-yellow transition-colors duration-300 hover:text-basic lg:flex"
            >
              Start a conversation
              <span aria-hidden="true" className="text-base leading-none">
                ↗
              </span>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
