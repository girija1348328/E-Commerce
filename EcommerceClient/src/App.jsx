import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home.jsx';
import ProductDetails from './pages/ProductDetails/ProductDetails.jsx';
import Wishlist from './pages/Wishlist/Wishlist.jsx';
import Cart from './pages/Cart/Cart.jsx';
import Checkout from './pages/Checkout/Checkout.jsx';
import SignUpPage from './pages/SignUp/SignUp.jsx';
import Login from './pages/Login/Login.jsx';
import ProductList from './pages/ProductList/ProductList.jsx';
// import About from './pages/About';
// import Contact from './pages/Contact';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/productList/:categoryId" element={<ProductList/>}/>
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/cart/:cartId/:userId" element={<Cart />} />
            <Route path="/checkout/:cartId/:userId" element={<Checkout />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/login" element={<Login />} />
            {/* <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} /> */}
          </Routes>
        </Layout>
      </Router>
    </Provider>
  );
};

export default App;
