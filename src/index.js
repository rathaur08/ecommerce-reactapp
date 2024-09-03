import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AppProvider } from './components/context/ProductContext';
import { FilterContextProvider } from './components/context/FilterContext';
import { CartProvider } from './components/context/CartContext';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain="dev-8thz7ce7804yyioy.us.auth0.com"
    clientId="gndTnvbjQAazydfA7WLB6iSnz5PS8k7q"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}>
    <AppProvider>
      <FilterContextProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </FilterContextProvider>
    </AppProvider>
  </Auth0Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
