import React from "react";
import "./index.css";
import App from "./appBackup";
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { createRoot } from "react-dom/client";

const container = document.getElementById("root");

if (!container) throw new Error("Could not find root element with id 'root'");

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import HomeScren from "./presentation/home/home-screen";
import ErrorPage from "./presentation/components/error";
import Login from "./presentation/login/login-screen";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeScren />,
    errorElement: <ErrorPage />,
  },
  {
    path: "login",
    element: <Login />,
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
