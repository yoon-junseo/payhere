import React from 'react';
import loadable from '@loadable/component';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const MainPage = loadable(() => import('@/pages/MainPage'));

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
