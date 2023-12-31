import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./Components/ScrollToTop";
import LoginSignupPage from "./Pages/LoginSignupPage";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Shop from "./Pages/Shop";
import Cart from "./Pages/Cart";
import Footer from "./Components/Footer/Footer";
import men_banner from "./Components/Assets/banner_mens.png";
import women_banner from "./Components/Assets/banner_women.png";
import kids_banner from "./Components/Assets/banner_kids.png";

function App() {
  return (
    <div>
      <BrowserRouter>
        {/* <ScrollToTop /> */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route
            path="/decor"
            element={<ShopCategory banner={men_banner} category="decor" />}
          />
          <Route
            path="/plushies"
            element={<ShopCategory banner={women_banner} category="plushies" />}
          />
          <Route
            path="/garden"
            element={<ShopCategory banner={kids_banner} category="garden" />}
          />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignupPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
