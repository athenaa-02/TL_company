import styled from "styled-components";
import { colors } from "../styles/colors";
import { Link } from "react-router-dom";

const HeaderSection = styled.header`
  height: 100px;
  background-color: ${colors.primaryRed};
  display: flex;
  align-items: center;
  padding: 0 30px;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const CompanyName = styled.h1`
  color: ${colors.basic};
  font-family: "Montserrat", sans-serif;
`;
const Logo = styled.img``;

const HomeLink = styled(Link)`
  text-decoration: none;
`;

function Header() {
  return (
    <>
      <HeaderSection>
        <HomeLink to="/">
          <LogoContainer>
            <Logo
              src="../../public/tl small logo 1.png"
              alt="TL Company logo"
            ></Logo>
            <CompanyName>TLCompany</CompanyName>
          </LogoContainer>
        </HomeLink>
      </HeaderSection>
    </>
  );
}

export default Header;
