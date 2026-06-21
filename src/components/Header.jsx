import styled from "styled-components";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";

function Header() {
  return (
    <>
      <header className="h-24 bg-primary-red flex items-center">
        <div className="container flex items-center">
          <Link to={"/"}>
            <img
              src="/public/tl_small_logo.webp"
              className="h-14"
              alt="tl company logo"
            />
          </Link>

          <Link to={"/"}>
            <h1 className="font-montserrat text-3xl font-bold text-basic ">
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
