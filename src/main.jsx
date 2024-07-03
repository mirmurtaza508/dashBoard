import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./components/Dashboard.jsx";
import Statistics from "./components/Statistics.jsx";
import Users from "./components/Users.jsx";
import Inventory from "./components/Inventory.jsx";
import Billings from "./components/Billings.jsx";
import Settings from "./components/Settings.jsx";
import Orders from "./components/Orders.jsx";
import Help from "./components/Help.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/Statistics",
        element: <Statistics />,
      },
      {
        path: "/Users",
        element: <Users />,
      },
      {
        path: "/Inventory",
        element: <Inventory />,
      },
      {
        path: "/Billings",
        element: <Billings />,
      },
      {
        path: "/Settings",
        element: <Settings />,
      },
      {
        path: "/Help",
        element: <Help />,
      },
      {
        path: "/Orders",
        element: <Orders />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
