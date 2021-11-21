import React from 'react';
import KitchenIcon from '@mui/icons-material/Kitchen';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { IconButton, Paper, Stack } from '@mui/material';
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
    color: ${$active ? theme.palette.primary.main : theme.palette.grey[500]};
  `}
`;

export const Navbar = () => {
  const items = [
    {
      icon: <ShoppingBasketIcon />,
      route: AppRoutes.Lists
    },
    {
      icon: <KitchenIcon />,
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
