import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../pages/Home";
import CategoryFeature from "../pages/CategoryFeature";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AuthLayout from "../Layouts/AuthLayout";
import Profile from "../pages/Profile";
import FeatureDetails from "../pages/FeatureDetails";
import PrivateRoute from "../Provider/PrivateRoute";
import Terms from "../pages/Terms";
import Loading from "../pages/Loading";
import ForgotPassword from "../pages/ForgotPassword";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },

      {
        path: "/category/:id",
        loader: () => fetch("/features.json"),
        element: <CategoryFeature></CategoryFeature>,
        hydrateFallbackElement: <Loading></Loading>,
      },
    ],
  },
  {
    path: "/profile",
    element: <Profile></Profile>,
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword></ForgotPassword>,
  },
  {
    path: "/feature-details/:id",
    element: (
      <PrivateRoute>
        <FeatureDetails></FeatureDetails>
      </PrivateRoute>
    ),
    loader: () => fetch("/features.json"),
  },
  {
    path: "/*",
    element: <h2>Error 404 found</h2>,
  },
  {
    path: "/terms",
    element: <Terms></Terms>,
  },
]);
