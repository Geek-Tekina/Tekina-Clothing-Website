import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { ProductsProvider } from "./context/products_context";
import { FilterProvider } from "./context/filter_context";
import { CartProvider } from "./context/cart_context";
import { UserProvider } from "./context/user_context";
import { Auth0Provider } from "@auth0/auth0-react";
import { Cart } from "./pages";
// PIoyJq4Wempw4tHtahvgEwHyijtswQs2
// dev-nm4g6iw3i0afwbpv.us.auth0.com
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Auth0Provider
    domain="dev-nm4g6iw3i0afwbpv.us.auth0.com"
    clientId="PIoyJq4Wempw4tHtahvgEwHyijtswQs2"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
    cacheLocation="localstorage"
  >
  <UserProvider>
  <ProductsProvider>
      <FilterProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </FilterProvider>
    </ProductsProvider>
  </UserProvider>
  </Auth0Provider>
);
