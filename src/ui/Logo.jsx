import styled from "styled-components";
// import { useDarkMode } from "../context/DarkModeContext";

const StyledLogo = styled.div`
  text-align: center;
  padding-top: 3.2rem;
`;

const Img = styled.img`
  height: 7rem;
  width: auto;
`;
function Logo() {
  // const { isDarkMode } = useDarkMode();

  // const src = isDarkMode ? "/logo-dark.png" : "/logo-light.png";

  return (
    <StyledLogo>
      <Img src="/logo.png" alt="Logo" />
    </StyledLogo>
  );
}

export default Logo;
