import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Company from "./pages/Company";
import Thanks from "./pages/Thanks";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import DefaultLayout from "./layouts/DefaultLayout";

export const router = createBrowserRouter([
  {
    element: <DefaultLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/company", element: <Company /> },
      { path: "/thanks", element:<Thanks /> },
      { path: "/privacy-policy", element:<PrivacyPolicy /> },
    ],
  },
]);
