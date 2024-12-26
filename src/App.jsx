import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ShowcasePage from './pages/ShowcasePage';
import CartPage from './pages/CartPage';
import OrderPlacedPage from './pages/OrderPlacedPage';
import PreviousOrdersPage from './pages/PreviousOrdersPage';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background text-foreground">
        <Toaster position="top-right" />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/showcase/:service" element={<ShowcasePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/order-placed" element={<OrderPlacedPage />} />
          <Route path="/previous-orders" element={<PreviousOrdersPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

