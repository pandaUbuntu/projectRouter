import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from "react-router";
import FirstPage from './pages/page1/index.tsx';
import SecondPage from './pages/page2/index.tsx';
import ProductPage from './pages/product/index.tsx';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/page1" element={<FirstPage />} />
      <Route path="/page2" element={<SecondPage />} />
      <Route path="/product/:id" element={<ProductPage />} />

    </Routes>
  </BrowserRouter>,
)
