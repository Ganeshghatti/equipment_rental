import React from "react";
import "./Category.scss";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function Category() {
  const data = [
    {
      title: "Category 1",
      img: "https://themes.webdevia.com/backhoe-heavy-construction-equipment-rentals-machinery-wordpress-theme/wp-content/uploads/2019/09/product_0005__-700x700.jpg",
    },
    {
      title: "Category 2",
      img: "https://themes.webdevia.com/backhoe-heavy-construction-equipment-rentals-machinery-wordpress-theme/wp-content/uploads/2019/09/product_0005__-700x700.jpg",
    },
    {
      title: "Category 3",
      img: "https://themes.webdevia.com/backhoe-heavy-construction-equipment-rentals-machinery-wordpress-theme/wp-content/uploads/2019/09/product_0005__-700x700.jpg",
    },
    {
      title: "Category 4",
      img: "https://themes.webdevia.com/backhoe-heavy-construction-equipment-rentals-machinery-wordpress-theme/wp-content/uploads/2019/09/product_0005__-700x700.jpg",
    },
    {
      title: "Category 5",
      img: "https://themes.webdevia.com/backhoe-heavy-construction-equipment-rentals-machinery-wordpress-theme/wp-content/uploads/2019/09/product_0005__-700x700.jpg",
    },
    {
      title: "Category 6",
      img: "https://themes.webdevia.com/backhoe-heavy-construction-equipment-rentals-machinery-wordpress-theme/wp-content/uploads/2019/09/product_0005__-700x700.jpg",
    },
    {
      title: "Category 7",
      img: "https://themes.webdevia.com/backhoe-heavy-construction-equipment-rentals-machinery-wordpress-theme/wp-content/uploads/2019/09/product_0005__-700x700.jpg",
    },
    {
      title: "Category 8",
      img: "https://themes.webdevia.com/backhoe-heavy-construction-equipment-rentals-machinery-wordpress-theme/wp-content/uploads/2019/09/product_0005__-700x700.jpg",
    },
  ];
  const handleClick = (category) => {
    window.location.href = `/categories/${category}`;
  };

  return (
    <section id="category">
      <h1>Categories</h1>
      <div className="categories-div">
        {data.map((category, index) => (
          <Card
            sx={{ maxWidth: 300 }}
            key={index}
            className="category-div"
            onClick={() => handleClick(category.title)}
          >
            <CardMedia
              component="img"
              image={category.img}
              title={category.title}
              style={{ objectFit: "contain", width: "100%", margin: "auto" }}
            />
            <CardContent style={{ padding: "10px", margin: "0" }}>
              <Typography
                gutterBottom
                style={{ textAlign: "center", padding: "0", margin: "0" }}
              >
                <h4> {category.title}</h4>
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
