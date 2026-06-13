import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Docs } from './pages/Docs';
import { Changelog } from './pages/Changelog';
import { Browse } from './pages/Browse';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-full bg-[#1a1a1a] text-white">
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/browse" element={<Browse />} />
            <Route path="/docs" element={<Docs />} />
            <Route path="/changelog" element={<Changelog />} />
          </Route>
        </Routes>
        <Toaster position="bottom-right" theme="dark" />
      </div>
    </BrowserRouter>
  );
}
