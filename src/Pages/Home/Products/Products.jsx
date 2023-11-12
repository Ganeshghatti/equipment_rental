import React, { useEffect, useState } from "react";
import "./Products.scss";
import axios from "axios";
import { useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Products() {
  const navigate = useNavigate();

  const handleOpen = (product) => {
    navigate(`/${product.name}`);
  };

  const { category } = useParams();

  function handleClick(event) {
    event.preventDefault();
  }

  useEffect(() => {
    const getaccdata = async () => {
      try {
        console.log(category);
        // const response = await axios.get(
        //   `http://localhost:5173/categories/${category}`
        // );
      } catch (error) {
        console.log(error);
      }
    };
    getaccdata();
  }, []);

  //Data will be fetched from backend according to Category clicked

  const data = [
    {
      name: "Product1",
      description:
        "  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus omnis unde porro quasi molestiae. Sed, porro vero vel laborum hic quod fugiat cumque odit magnam id eveniet, cum natus laudantium!",
      img: "https://themes.webdevia.com/backhoe-heavy-construction-equipment-rentals-machinery-wordpress-theme/wp-content/uploads/2019/09/product_0005__-700x700.jpg",
      price: "10",
    },
    {
      name: "Product2",
      description:
        "  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus omnis unde porro quasi molestiae. Sed, porro vero vel laborum hic quod fugiat cumque odit magnam id eveniet, cum natus laudantium!",
      img: "https://themes.webdevia.com/backhoe-heavy-construction-equipment-rentals-machinery-wordpress-theme/wp-content/uploads/2019/09/product_0005__-700x700.jpg",
      price: "10",
    },
    {
      name: "Product3",
      description:
        "  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus omnis unde porro quasi molestiae. Sed, porro vero vel laborum hic quod fugiat cumque odit magnam id eveniet, cum natus laudantium!",
      img: "https://themes.webdevia.com/backhoe-heavy-construction-equipment-rentals-machinery-wordpress-theme/wp-content/uploads/2019/09/product_0005__-700x700.jpg",
      price: "10",
    },
    {
      name: "Product4",
      description:
        "  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus omnis unde porro quasi molestiae. Sed, porro vero vel laborum hic quod fugiat cumque odit magnam id eveniet, cum natus laudantium!",
      img: "https://themes.webdevia.com/backhoe-heavy-construction-equipment-rentals-machinery-wordpress-theme/wp-content/uploads/2019/09/product_0005__-700x700.jpg",
      price: "10",
    },
    {
      name: "Product5",
      description:
        "  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus omnis unde porro quasi molestiae. Sed, porro vero vel laborum hic quod fugiat cumque odit magnam id eveniet, cum natus laudantium!",
      img: "https://themes.webdevia.com/backhoe-heavy-construction-equipment-rentals-machinery-wordpress-theme/wp-content/uploads/2019/09/product_0005__-700x700.jpg",
      price: "10",
    },
    {
      name: "Product6",
      description:
        "  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus omnis unde porro quasi molestiae. Sed, porro vero vel laborum hic quod fugiat cumque odit magnam id eveniet, cum natus laudantium!",
      img: "https://themes.webdevia.com/backhoe-heavy-construction-equipment-rentals-machinery-wordpress-theme/wp-content/uploads/2019/09/product_0005__-700x700.jpg",
      price: "10",
    },
    {
      name: "Product7",
      description:
        "  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus omnis unde porro quasi molestiae. Sed, porro vero vel laborum hic quod fugiat cumque odit magnam id eveniet, cum natus laudantium!",
      img: "https://themes.webdevia.com/backhoe-heavy-construction-equipment-rentals-machinery-wordpress-theme/wp-content/uploads/2019/09/product_0005__-700x700.jpg",
      price: "10",
    },
    {
      name: "Product8",
      description:
        "  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus omnis unde porro quasi molestiae. Sed, porro vero vel laborum hic quod fugiat cumque odit magnam id eveniet, cum natus laudantium!",
      img: "https://themes.webdevia.com/backhoe-heavy-construction-equipment-rentals-machinery-wordpress-theme/wp-content/uploads/2019/09/product_0005__-700x700.jpg",
      price: "10",
    },
    {
      name: "Product9",
      description:
        "  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus omnis unde porro quasi molestiae. Sed, porro vero vel laborum hic quod fugiat cumque odit magnam id eveniet, cum natus laudantium!",
      img: "https://themes.webdevia.com/backhoe-heavy-construction-equipment-rentals-machinery-wordpress-theme/wp-content/uploads/2019/09/product_0005__-700x700.jpg",
      price: "10",
    },
  ];

  return (
    <section id="products">
      <div className="products-title-div" onClick={handleClick}>
        <Breadcrumbs aria-label="breadcrumb" style={{ color: "white" }}>
          <Link to="/" style={{ color: "white" }}>
            Home
          </Link>
          <Link to="/#category" style={{ color: "white" }}>
            Categories
          </Link>
          <Typography color="text.primary">
            <h2>{category}</h2>
          </Typography>
        </Breadcrumbs>
      </div>
      <div className="products-div">
        {data.map((item, index) => (
          <Card
            className="product-card"
            key={index}
            onClick={() => handleOpen(item)}
          >
            <CardMedia
              component="img"
              alt={item.name}
              height="140"
              image={item.img}
              title={item.name}
              style={{ objectFit: "contain" }}
            />
            <CardContent>
              <Typography gutterBottom component="div">
                <h4>{item.name}</h4>
              </Typography>
              <Typography color="text.secondary">
                <h6>{item.price}Rs /day</h6>
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
