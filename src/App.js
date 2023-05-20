import React, { Children } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

// pages
import Home from "./pages/Home";
import ProductsDetail from "./pages/ProductDetails";
import Products from "./pages/Products";
import Search from "./pages/Search";

// components
import Header from "./components/Header";
import Footer from "./components/Footer";

// Layouts
const Layouts = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

// create react ruter
const router = createBrowserRouter([
  {
    element: <Layouts />,
    children: [
      {path: '/', element: <Home />},
      {path: '/products', element: <ProductsDetail />},
      {path: '/product', element: <Products />},
      {path: '/search', element: <Search />},
    ],
  },
]);

const App = () => {
    return (
      <div>
        <RouterProvider router={router} />
      </div>
    )
};

export default App;
