import React from 'react';
import { IconButton, Paper, Stack } from '@mui/material';
import { Box, Home, ShoppingCart } from 'react-feather';
import styled from 'styled-components';
import { CustomLink } from '~/components/CustomLink';
import { AppRoutes } from '~/constants';

const StyledPaper = styled(Paper)`
  ${({ theme }) => `
    position: absolute;
    bottom: ${theme.spacing(2)};
    left: ${theme.spacing(2)};
    width: calc(100% - ${theme.spacing(4)});
    padding: ${theme.spacing(1)};
  `}
`;

const StyledIconButton = styled(IconButton)<{ $active: boolean }>`
  ${({ theme, $active }) => `
    color: ${$active ? theme.palette.primary.main : theme.palette.grey[400]};
  `}
`;

export const Navbar = () => {
  const items = [
    {
      icon: <Home />,
      route: AppRoutes.Home
    },
    {
      icon: <ShoppingCart />,
      route: AppRoutes.Lists
    },
    {
      icon: <Box />,
      route: AppRoutes.Groceries
    }
  ];

  return (
    <StyledPaper elevation={8}>
      <Stack direction="row" justifyContent="space-around">
        {items.map((item) => (
          <CustomLink
            key={item.route}
            route={item.route}
            render={(active: boolean) => <StyledIconButton $active={active}>{item.icon}</StyledIconButton>}
          />
        ))}
      </Stack>
    </StyledPaper>
  );
};
