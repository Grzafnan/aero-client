import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Blogs from "../Pages/Blogs/Blogs";
import Categories from "../Pages/Home/Categories/Categories";
import CategoryProducts from "../Pages/Home/CategoryProducts/CategoryProducts";
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
        element: <CategoryProducts />
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
  }
])