import React, { useEffect } from "react";
import "./Products.scss";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function Products() {
  const { category } = useParams();

  useEffect(() => {
    const getaccdata = async () => {
      try {
        console.log(category)
        const response = await axios.get(
          `http://localhost:5173/categories/${category}`
        );
      } catch (error) {
        console.log(error)
      }
    };
    getaccdata();
  }, []);

  return <section id="products">{category}</section>;
}
