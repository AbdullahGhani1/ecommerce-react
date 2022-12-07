import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Navigation from "./components/navigation/Navigation";
import Products from "./components/products/Products";
import SingleProduct from "./components/product/SingleProduct";
import Error from "./components/pageNotFound/Error";
import Cart from "./components/cart/Cart";
import AllProducts from "./components/products/AllProducts";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navigation />,
      children: [
        {
          index: true,
          path: "/",
          element: <Home />,
        },
        {
          path: "/products",
          element: <AllProducts />,
        },
        {
          path: "/products/:id",
          element: <SingleProduct />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/cart/:id",
          element: <Cart />,
        },
        {
          path: "*",
          element: <Error />,
        },
      ],
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />

      {/* <Routes>
        <Route path="/" element={<Navigation />}>
          <Route path="home" element={<Home />} />
          <Route index element={<Home />} />
          <Route path="home/products/:id" element={<SingleProduct />} />
          <Route path="home/products/:id/cart/:id" element={<Cart />} />

          <Route path="about" element={<About />} />
          <Route exect path="products" element={<Products />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes> */}
    </div>
  );
}

export default App;
