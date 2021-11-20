import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppRoutes } from './constants';
import { Groceries, Grocery, List, Lists } from './modules';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoutes.Groceries} element={<Groceries />} />
        <Route path={AppRoutes.Grocery} element={<Grocery />} />
        <Route path={AppRoutes.Lists} element={<Lists />} />
        <Route path={AppRoutes.List} element={<List />} />
        <Route path="*" element={<Lists />} />
      </Routes>
    </BrowserRouter>
  );
};
