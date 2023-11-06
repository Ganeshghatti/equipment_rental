import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./Features.scss";

export default function Features() {
  return (
    <section id="features">
      <h1>FEATURES</h1>
      <div className="features-div">
        <Card sx={{ maxWidth: 345 }} className="card">
          <img
            src="https://themes.webdevia.com/backhoe-heavy-construction-equipment-rentals-machinery-wordpress-theme/wp-content/uploads/2019/10/precision-icon.svg"
            alt=""
            height="80"
          />
          <CardContent>
            <Typography gutterBottom component="div">
              <h4>Precison</h4>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <p>
                Accurately understand the needs of customers, provide efficient
                and cost-effective construction equipment for various customers
                in different operations.
              </p>
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ maxWidth: 345 }} className="card">
          <img
            src="https://themes.webdevia.com/backhoe-heavy-construction-equipment-rentals-machinery-wordpress-theme/wp-content/uploads/2019/10/precision-icon.svg"
            alt=""
            height="80"
          />
          <CardContent>
            <Typography gutterBottom component="div">
              <h4>Precison</h4>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <p>
                Accurately understand the needs of customers, provide efficient
                and cost-effective construction equipment for various customers
                in different operations.
              </p>
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ maxWidth: 345 }} className="card">
          <img
            src="https://themes.webdevia.com/backhoe-heavy-construction-equipment-rentals-machinery-wordpress-theme/wp-content/uploads/2019/10/precision-icon.svg"
            height="80"
            alt=""
          />
          <CardContent>
            <Typography gutterBottom component="div">
              <h4>Precison</h4>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <p>
                Accurately understand the needs of customers, provide efficient
                and cost-effective construction equipment for various customers
                in different operations.
              </p>
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ maxWidth: 345 }} className="card">
          <img
            src="https://themes.webdevia.com/backhoe-heavy-construction-equipment-rentals-machinery-wordpress-theme/wp-content/uploads/2019/10/precision-icon.svg"
            height="80"
            alt=""
          />
          <CardContent>
            <Typography gutterBottom component="div">
              <h4>Precison</h4>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <p>
                Accurately understand the needs of customers, provide efficient
                and cost-effective construction equipment for various customers
                in different operations.
              </p>
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ maxWidth: 345 }} className="card">
          <img
            src="https://themes.webdevia.com/backhoe-heavy-construction-equipment-rentals-machinery-wordpress-theme/wp-content/uploads/2019/08/bulldozer-420x290.jpg"
            style={{ objectFit: "contain" }}
            alt=""
          />
        </Card>

        <Card sx={{ maxWidth: 345 }} className="card">
          <img
            src="https://themes.webdevia.com/backhoe-heavy-construction-equipment-rentals-machinery-wordpress-theme/wp-content/uploads/2019/10/precision-icon.svg"
            height="80"
            alt=""
          />
          <CardContent>
            <Typography gutterBottom component="div">
              <h4>Precison</h4>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <p>
                Accurately understand the needs of customers, provide efficient
                and cost-effective construction equipment for various customers
                in different operations.
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
