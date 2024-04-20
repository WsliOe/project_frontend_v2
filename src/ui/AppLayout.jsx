import { Outlet } from "react-router-dom";
import Header from "./Header";
import styled from "styled-components";

const Main = styled.main`
  background-color: var(--color-slate-100);
  padding: 4rem 4.8rem 6.4rem;
  overflow: scroll;
`;

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

function AppLayout() {
  return (
    <>
      <Header />
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
    </>
  );
}

export default AppLayout;
