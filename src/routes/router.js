import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../layout/Dashboard";
import Main from "../layout/Main";
import Blogs from "../Pages/Blogs/Blogs";
import Categories from "../Pages/Home/Categories/Categories";
import CategoryServices from "../Pages/Home/CategoryServices/CategoryServices";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Login/SignUp";
import ErrorPage from "../Pages/Shared/ErrorPage";
import PrivateRoute from "./PrivateRoute";



export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/home',
        element: <Home />
      },
      {
        path: '/categories',
        element: <Categories />
      },
      {
        path: '/category/:id',
        element: <CategoryServices />
      },
      {
        path: '/blogs',
        element: <Blogs />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/sign-up',
        element: <SignUp />
      }
    ]
  },
  {
    path: '/dashboard',
    element: <Dashboard />
  }
])