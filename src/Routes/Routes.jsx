import { createBrowserRouter } from "react-router";

import Home from "../Pages/Home";
import Products from "../Pages/Products";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import WishList from "../Pages/WishList";
import ProductDetails from "../Pages/ProductDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement:<ErrorPage></ErrorPage>,
    hydrateFallbackElement:<p>Loading...</p> ,
    children: [
      {
        index:true,
        element: <Home></Home>,
      },
      {
        path: "/products",
        element: <Products></Products>,
      },
      {
        path: "/wishlist",
        element: <WishList></WishList>
      },
      {
        path: "/product/:id",
        element: <ProductDetails></ProductDetails>
      },
    ],
  },
//   {
//     path:"*",
//     element:<ErrorPage></ErrorPage>
//   }
]);

export default router;
