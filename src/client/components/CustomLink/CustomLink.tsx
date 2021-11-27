import React from 'react';
import { useLocation } from 'react-router';
import { Link, useResolvedPath, useMatch } from 'react-router-dom';
import { AppRoutes } from '~/constants';
import { ICustomLinkProps } from './CustomLink.interfaces';

export const CustomLink: React.FC<ICustomLinkProps> = ({ route, render }) => {
  const resolved = useResolvedPath(route);
  const match = useMatch({ path: resolved.pathname, end: false });
  const location = useLocation();

  const isActive = () => {
    const active = match !== null;

    if (route === AppRoutes.Home) {
      return active && location.pathname === AppRoutes.Home;
    }

    return active;
  };

  return <Link to={route}>{render(isActive())}</Link>;
};
