import React from 'react';
import { Outlet } from 'react-router';
import styled from 'styled-components';
import { Navbar } from '~/components/Navbar';

const StyledLayout = styled.div`
  ${({ theme }) => `
    width: 100vw;
    height: 100vh;
    position: relative;
    overflow: hidden;
    padding: ${theme.spacing(2)};
    background-color: ${theme.palette.background.paper};
  `}
`;

export const Layout = () => {
  return (
    <StyledLayout>
      <Outlet />
      <Navbar />
    </StyledLayout>
  );
};
