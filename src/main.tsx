import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from 'react-redux';
import "./index.css";
import { store } from './main/store';

const container = document.getElementById("root");

if (!container) throw new Error("Could not find root element with id 'root'");

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import ErrorPage from "./presentation/components/error";
import HomeScreen from "./presentation/home/home-screen";
import Login from "./presentation/login/login-screen";

const router = createBrowserRouter([
  {
    path: "/",
    // element: <HomeScreen />,
    element: <HomeScreen />,
    errorElement: <ErrorPage />,
  },
  {
    path: "login",
    element: <Login />,
  }
]);

const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
