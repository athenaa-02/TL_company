import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";

function Header() {
  const [isVisible, setIsVisible] = useState(true);
const lastScrollY = useRef(0);
const scrollDelta = useRef(0);
  const HIDE_THRESHOLD = 200;
  const DELTA_TO_HIDE = 80

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
        className={`h-24 p-7 fixed right-0 left-0 top-0 z-50 md:pr-12 md:pl-10 lg:pr-31 lg:pl-16 bg-primary-red flex items-center justify-between smooth_transition ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {" "}
        <div className="flex items-center md:gap-4 lg:gap-6 gap-3 ">
          <Link to={"/"}>
            <img
              src="/tl_small_logo.webp"
              className="md:h-14 h-11 "
              alt="tl company logo"
            />
          </Link>

          <Link to={"/"}>
            <h1 className="font-montserrat md:text-3xl text-2xl font-bold text-basic ">
              <span className="gold-text font-bold ">TL</span>Company
            </h1>
          </Link>
        </div>
        <div className="">
          <Navigation></Navigation>
        </div>
      </header>
    </>
  );
}

export default Header;
