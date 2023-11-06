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
      img: "./Asssets/Images/Featured/1.png",
    },
    {
      title: "Category 2",
      img: "./Asssets/Images/Featured/1.png",
    },
    {
      title: "Category 3",
      img: "./Asssets/Images/Featured/1.png",
    },
    {
      title: "Category 4",
      img: "./Asssets/Images/Featured/1.png",
    },
    {
      title: "Category 5",
      img: "./Asssets/Images/Featured/1.png",
    },
    {
      title: "Category 6",
      img: "./Asssets/Images/Featured/1.png",
    },
    {
        title: "Category 7",
        img: "./Asssets/Images/Featured/1.png",
      },
      {
        title: "Category 8",
        img: "./Asssets/Images/Featured/1.png",
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
            sx={{ maxWidth: 345 }}
            key={index}
            className="category-div"
            onClick={() => handleClick(category.title)}
          >
            <CardMedia
              component="img"
              image={category.img}
              title={category.title}
              style={{ objectFit: "contain" }}
            />
            <CardContent
              style={{ padding: "10px", margin: "0" }}
            >
              <Typography
                gutterBottom
                variant="h5"
                component="p"
                style={{ textAlign: "center", padding: "0", margin: "0" }}
              >
                {category.title}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
