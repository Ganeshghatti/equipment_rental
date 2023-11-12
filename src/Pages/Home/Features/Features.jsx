import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./Features.scss";
import { MDBRow, MDBCol } from "mdb-react-ui-kit";

export default function Features() {
  return (
    <section id="features">
      <h1>FEATURES</h1>
      <MDBRow style={{ width: "80vw" }}>
        <MDBCol md="4">
          <Card sx={{ maxWidth: 385 }} className="features-card">
            <img
              src="https://themes.webdevia.com/backhoe-heavy-construction-equipment-rentals-machinery-wordpress-theme/wp-content/uploads/2019/10/precision-icon.svg"
              alt=""
              height="100"
            />
            <CardContent>
              <Typography gutterBottom component="div">
                <h5>
                  <b>Precison</b>
                </h5>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <p>
                  Accurately understand the needs of customers, provide
                  efficient and cost-effective construction equipment for
                  various customers in different operations.
                </p>
              </Typography>
            </CardContent>
          </Card>
        </MDBCol>
        <MDBCol md="4">
          <Card sx={{ maxWidth: 385 }} className="features-card">
            <img
              src="https://themes.webdevia.com/backhoe-heavy-construction-equipment-rentals-machinery-wordpress-theme/wp-content/uploads/2019/10/precision-icon.svg"
              alt=""
              height="100"
            />
            <CardContent>
              <Typography gutterBottom component="div">
                <h5>
                  <b>Precison</b>
                </h5>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <p>
                  Accurately understand the needs of customers, provide
                  efficient and cost-effective construction equipment for
                  various customers in different operations.
                </p>
              </Typography>
            </CardContent>
          </Card>
        </MDBCol>
        <MDBCol md="4">
          <Card sx={{ maxWidth: 385 }} className="features-card">
            <img
              src="https://themes.webdevia.com/backhoe-heavy-construction-equipment-rentals-machinery-wordpress-theme/wp-content/uploads/2019/10/precision-icon.svg"
              height="100"
              alt=""
            />
            <CardContent>
              <Typography gutterBottom component="div">
                <h5>
                  <b>Precison</b>
                </h5>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <p>
                  Accurately understand the needs of customers, provide
                  efficient and cost-effective construction equipment for
                  various customers in different operations.
                </p>
              </Typography>
            </CardContent>
          </Card>
        </MDBCol>
      </MDBRow>
      <MDBRow style={{ width: "80vw" }}>
        <MDBCol md="4">
          <Card sx={{ maxWidth: 385 }} className="features-card">
            <img
              src="https://themes.webdevia.com/backhoe-heavy-construction-equipment-rentals-machinery-wordpress-theme/wp-content/uploads/2019/10/precision-icon.svg"
              height="100"
              alt=""
            />
            <CardContent>
              <Typography gutterBottom component="div">
                <h5>
                  <b>Precison</b>
                </h5>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <p>
                  Accurately understand the needs of customers, provide
                  efficient and cost-effective construction equipment for
                  various customers in different operations.
                </p>
              </Typography>
            </CardContent>
          </Card>
        </MDBCol>
        <MDBCol md="4">
          <Card sx={{ maxWidth: 385 }} className="features-card features-img-card">
            <img
              src="https://themes.webdevia.com/backhoe-heavy-construction-equipment-rentals-machinery-wordpress-theme/wp-content/uploads/2019/08/bulldozer-420x290.jpg"
              style={{ objectFit: "contain",width:"100%" }}
              alt=""
            />
          </Card>
        </MDBCol>
        <MDBCol md="4">
          <Card sx={{ maxWidth: 385 }} className="features-card">
            <img
              src="https://themes.webdevia.com/backhoe-heavy-construction-equipment-rentals-machinery-wordpress-theme/wp-content/uploads/2019/10/precision-icon.svg"
              height="100"
              alt=""
            />
            <CardContent>
              <Typography gutterBottom component="div">
                <h5>
                  <b>Precison</b>
                </h5>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <p>
                  Accurately understand the needs of customers, provide
                  efficient and cost-effective construction equipment for
                  various customers in different operations.
                </p>
              </Typography>
            </CardContent>
          </Card>
        </MDBCol>
      </MDBRow>
    </section>
  );
}
