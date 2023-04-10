import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header, StyledLink, NavList } from './Layout.styled';

export const Layout = () => {
  return (
    <>
      <Header>
        <NavList>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </NavList>
      </Header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
