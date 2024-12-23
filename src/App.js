import {
  createBrowserRouter,
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Layout from "./Components/Layout/Layout";
import Product from "./Components/Products/Products";
import Categories from "./Components/Categories/Categories";
import Brands from "./Components/Brands/Brands";
import Cart from "./Components/Cart/Cart";
import Signin from "./Components/Signin/Signin";
import Register from "./Components/Register/Register";
import AuthLayout from "./Components/AuthLayout/AuthLayout";
import Notfound from "./Components/Notfound/Notfound";
import "@fortawesome/fontawesome-free";
import "./App.css";
import Wishlist from "./Components/Wishlist/Wishlist";
import { Offline, Online } from "react-detect-offline";
import Signup from "./Components/Register/Register";
import ProtectedRoutes from "./Components/ProtectedRoutes/ProtectedRoutes";

function App() {
  let routes = createHashRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: (
            <ProtectedRoutes>
              {" "}
              <Home />{" "}
            </ProtectedRoutes>
          ),
        },
        {
          path: "home",
          element: (
            <ProtectedRoutes>
              {" "}
              <Home />{" "}
            </ProtectedRoutes>
          ),
        },
        {
          path: "products",
          element: (
            <ProtectedRoutes>
              {" "}
              <Product />{" "}
            </ProtectedRoutes>
          ),
        },
        {
          path: "categories",
          element: (
            <ProtectedRoutes>
              {" "}
              <Categories />{" "}
            </ProtectedRoutes>
          ),
        },
        {
          path: "brands",
          element: (
            <ProtectedRoutes>
              {" "}
              <Brands />{" "}
            </ProtectedRoutes>
          ),
        },
        {
          path: "cart",
          element: (
            <ProtectedRoutes>
              {" "}
              <Cart />{" "}
            </ProtectedRoutes>
          ),
        },
        {
          path: "wishlist",
          element: (
            <ProtectedRoutes>
              {" "}
              <Wishlist />{" "}
            </ProtectedRoutes>
          ),
        },
        { path: "*", element: <Notfound /> },
      ],
    },
    {
      path: "/",
      element: <AuthLayout />,
      children: [
        { path: "signin", element: <Signin /> },
        { path: "register", element: <Register /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
      <div className="offline">
        <Offline>You offline Now! (surprise!)</Offline>
      </div>
    </>
  );
}

export default App;
