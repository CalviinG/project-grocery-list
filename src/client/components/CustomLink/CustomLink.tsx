import React from 'react';
import { Link, useResolvedPath, useMatch } from 'react-router-dom';
import { ICustomLinkProps } from './CustomLink.interfaces';

export const CustomLink: React.FC<ICustomLinkProps> = ({ route, render }) => {
  const resolved = useResolvedPath(route);
  const match = useMatch({ path: resolved.pathname, end: false });
  const active = match !== null;

  return <Link to={route}>{render(active)}</Link>;
};
