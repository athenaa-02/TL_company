import styled from "styled-components";
import { Link } from "react-router-dom";



function Header() {
  return (
    <>
      {/* <HomeLink to="/" >
        <LogoContainer>
          <Logo
            src="../../public/tl small logo 1.png"
            alt="TL Company logo"
          ></Logo>
          <CompanyName>TLCompany</CompanyName>
        </LogoContainer>
      </HomeLink> */}

      <header className="h-24 bg-primary-red flex items-center">
        <div className="container flex items-center">
          <img
            src="/public/tl_small_logo.webp"
            className="h-14"
            alt="tl company logo"
          />
          <h1 className="font-montserrat text-3xl font-bold text-basic ">
            <span className="gold-text font-bold ">TL</span>Company
          </h1>
        </div>
        <div className="">
          <nav>

          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
