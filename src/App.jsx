import React from "react";
import Home from "./Pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Pages/Footer/Footer";
import Navbar from "./Pages/Navbar/Navbar_component";
import PageNotFound from "./Components/NotFound/PageNotFound";
import SignUp from "./Pages/Signup/Signup";
import SignIn from "./Pages/Login/Signin";
import Products from "./Pages/Home/Products/Products";
import Cart from "./Pages/Cart/Cart";
import { store } from "./app/store";
import { Provider } from "react-redux";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Account from "./Pages/Account/Account";
import ProductPage from "./Pages/ProductPage/ProductPage";
import Admin from "./Pages/Admin/Admin";

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/account" element={<Account />} />
          <Route path="/categories/:category" element={<Products />} />
          <Route path="/:productname" element={<ProductPage />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}
