import styled from "styled-components";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";

function Header() {
  return (
    <>
      <header className="h-24 p-7 md:pr-12 md:pl-10 lg:pr-31 lg:pl-16 bg-primary-red flex items-center justify-between ">
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
