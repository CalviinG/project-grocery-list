import React from 'react';
import { CssBaseline } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Layout } from '~/components/Layout';
import { AppRoutes } from '~/constants';
import { Groceries, Grocery, Home, List, Lists } from '~/modules';
import { theme } from './theme';

export const App = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path={AppRoutes.Groceries} element={<Groceries />} />
              <Route path={AppRoutes.Grocery} element={<Grocery />} />
              <Route path={AppRoutes.Lists} element={<Lists />} />
              <Route path={AppRoutes.List} element={<List />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </React.Fragment>
  );
};
