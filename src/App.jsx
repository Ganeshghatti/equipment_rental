import React from "react";
import Home from "./Pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Pages/Footer/Footer";
import Navbar from "./Pages/Navbar/Navbar";
import PageNotFound from "./Components/NotFound/PageNotFound";
import SignUp from "./Pages/Signup/Signup";
import SignIn from "./Pages/Login/Signin";
import Products from "./Pages/Home/Products/Products";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/categories/:category" element={<Products />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
