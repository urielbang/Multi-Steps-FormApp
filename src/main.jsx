import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import "./index.css";
import ErrorPage from "./error-page";
import YourInfo from "./components/YourInfo";
import AddOns from "./components/AddOns";
import Summary from "./components/Summary";
import SelectPlan from "./components/SelectPlan";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/yourInfo",
        element: <YourInfo />,
      },
      {
        path: "/AddOns",
        element: <AddOns />,
      },
      {
        path: "/Summary",
        element: <Summary />,
      },
      {
        path: "/SelectPlan",
        element: <SelectPlan />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
