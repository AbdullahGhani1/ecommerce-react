import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Navigation from "./components/navigation/Navigation";
import Products from "./components/products/Products";
import SingleProduct from "./components/product/SingleProduct";
import Error from "./components/pageNotFound/Error";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="products" element={<Products />}>
            <Route path=":id" element={<SingleProduct />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
