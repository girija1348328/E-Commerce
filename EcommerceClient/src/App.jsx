import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home.jsx';
import ProductDetails from './pages/ProductDetails/ProductDetails.jsx';
import Wishlist from './pages/Wishlist/Wishlist.jsx';
import Cart from './pages/Cart/Cart.jsx';
// import About from './pages/About';
// import Contact from './pages/Contact';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<ProductDetails />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/cart" element={<Cart />} />
          {/* <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
