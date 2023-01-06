import React from "react";
import "./index.css";
import { Provider } from 'react-redux';
import { store } from './main/store';
import { createRoot } from "react-dom/client";

const container = document.getElementById("root");

if (!container) throw new Error("Could not find root element with id 'root'");

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import HomeScreen from "./presentation/home/home-screen";
import ErrorPage from "./presentation/components/error";
import Login from "./presentation/login/login-screen";
import ProductsScreen from "./presentation/products/products-screen";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeScreen />,
    errorElement: <ErrorPage />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "products",
    element: <ProductsScreen />,
  },
]);

const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
