import React from 'react';
import loadable from '@loadable/component';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const MainPage = loadable(() => import('@/pages/MainPage'));
const RepositoryPage = loadable(() => import('@/pages/RepositoryPage'));
const RepositoryDetailPage = loadable(() => import('@/pages/RepositoryDetailPage'));
const NotFoundPage = loadable(() => import('@/pages/NotFoundPage'));

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/repository" element={<RepositoryPage />} />
        <Route path="/repository/:repositoryId" element={<RepositoryDetailPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
