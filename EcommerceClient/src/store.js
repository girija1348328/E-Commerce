// store.js
import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from './features/categories/categorySlice'
import productReducer from './features/products/productSlice'
import loginReducer  from './features/logIn/loginSlice';
import signUp from './features/signUp/signUpSlice';
import checkoutReducer from './features/checkout/checkout';

const store = configureStore({
  reducer: {
    categories: categoryReducer,
    products: productReducer,
    login: loginReducer,
    signUp:signUp,
    checkout:checkoutReducer
  },
});

export default store;
