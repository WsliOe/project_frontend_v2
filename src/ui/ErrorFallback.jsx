import styled from "styled-components";
import Heading from "./Heading";
import GlobalStyles from "../styles/GlobalStyles";
import Button from "./Button";

const StyledErrorFallback = styled.main`
  height: 100vh;
  background-color: var(--color-slate-50);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4.8rem;
`;

const Box = styled.div`
  /* Box */
  background-color: var(--color-slate-0);
  border: 1px solid var(--color-slate-100);
  border-radius: var(--border-radius-md);

  padding: 4.8rem;
  flex: 0 1 96rem;
  text-align: center;

  & h1 {
    margin-bottom: 1.6rem;
  }

  & p {
    font-family: "Sono";
    margin-bottom: 3.2rem;
    color: var(--color-slate-500);
  }
`;
function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <>
      <GlobalStyles />
      <StyledErrorFallback>
        <Box>
          <Heading as="h1">Etwas ist schiefgelaufen.</Heading>
          <p>{error.message}</p>
          <Button size="large" onClick={resetErrorBoundary}>
            Erneut versuchen
          </Button>
        </Box>
      </StyledErrorFallback>
    </>
  );
}

export default ErrorFallback;
