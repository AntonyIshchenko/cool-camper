import { lazy, Suspense } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import AppBar from './AppBar/AppBar';
import Layout from './Layout/Layout';

const HomePage = lazy(() => import('../pages/Home/Home'));
const CatalogPage = lazy(() => import('../pages/Catalog/Catalog'));
const FavoritesPage = lazy(() => import('../pages/Favorites/Favorites'));

export default function App() {
  return (
    <>
      <AppBar />
      <Layout>
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Suspense>
      </Layout>
    </>
  );
}
