import React,{useEffect} from "react";
import Hero from "./Hero/Hero";
import Brands from "./Brands/Brands";
import Category from "./Category/Category";
import Benifits1 from "./Benifits1/Benifits1";
import Features from "./Features/Features";
import Benifits2 from "./Benifits2/Benifits2";
import HowDoesItWork from "./HowDoesItWork/HowDoesItWork";
import Testimonials from "./Testimonials/Testimonials";
import { useLocation } from "react-router-dom";
import "./Home.scss";

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const targetSection = document.querySelector(location.hash);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <>
      <Hero />
      <Category />
      <Benifits1 />
      <Brands />
      <Features />
      <Benifits2 />
      <HowDoesItWork />
      <Testimonials />
    </>
  );
}
