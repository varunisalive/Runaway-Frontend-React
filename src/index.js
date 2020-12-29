import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AuthProvider } from "./Context/AuthContext";
import { CartProvider } from "./Context/CartContext";


ReactDOM.render(
  <AuthProvider>
    <CartProvider>
      <App />
    </CartProvider>
  </AuthProvider>,
  document.getElementById('root')
);

