import styled from "styled-components";

const StyledLogo = styled.div`
  text-align: left;
`;

const Img = styled.img`
  max-height: 5rem;
  width: auto;
`;

function Logo() {
  return (
    <StyledLogo>
      <Img src="/logo.png" alt="Logo" />
    </StyledLogo>
  );
}

export default Logo;
