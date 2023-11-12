import React, { useState, useEffect } from "react";
import "./Account.scss";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";

export default function Account() {
  const [userdata, setuserdata] = useState({
    name: "Ganesh",
    email: "ganeshghatti6@gmail.com",
    phone: "9449610077",
    onrent: [
      {
        name: "Excavator",
        price: "12",
        img: "https://themes.webdevia.com/backhoe-heavy-construction-equipment-rentals-machinery-wordpress-theme/wp-content/uploads/2019/09/product_0005__-700x700.jpg",
        startDate: "2023-11-09",
        endDate: "2023-11-21",
        duration: 12,
        total: 144,
      },
      {
        name: "Excavator",
        price: "12",
        img: "https://themes.webdevia.com/backhoe-heavy-construction-equipment-rentals-machinery-wordpress-theme/wp-content/uploads/2019/09/product_0005__-700x700.jpg",
        startDate: "2023-11-09",
        endDate: "2023-11-21",
        duration: 12,
        total: 144,
      },
    ],
    renthistory: [
      {
        name: "Excavator",
        price: "12",
        img: "https://themes.webdevia.com/backhoe-heavy-construction-equipment-rentals-machinery-wordpress-theme/wp-content/uploads/2019/09/product_0005__-700x700.jpg",
        startDate: "2023-11-09",
        endDate: "2023-11-21",
        duration: 12,
        total: 144,
      },
      {
        name: "Excavator",
        price: "12",
        img: "https://themes.webdevia.com/backhoe-heavy-construction-equipment-rentals-machinery-wordpress-theme/wp-content/uploads/2019/09/product_0005__-700x700.jpg",
        startDate: "2023-11-09",
        endDate: "2023-11-21",
        duration: 12,
        total: 144,
      },
    ],
  });

  useEffect(() => {
    const fetchuserdata = async () => {
      try {
        const response = await axios.get(`http://localhost:5173/account`);
        setuserdata(response.data);
      } catch (e) {
        console.log(e.message);
      }
    };
    fetchuserdata();
  }, []);

  return (
    <section id="account">
      <h2>My account</h2>
      {userdata ? (
        <>
          <div className="account-userdetails">
            <h5>{userdata.name} </h5>
            <h6>
              <b>email :</b> {userdata.email}
            </h6>
            <h6>
              <b>phone : </b>
              {userdata.phone}
            </h6>
          </div>
          <div className="account-onrent">
            <h4> Equipments on Rent </h4>
            <div className="account-onrent-div">
              {userdata.onrent.map((item, index) => (
                <Card className="account-onrent-div-card" key={index}>
                  <CardMedia
                    component="img"
                    alt={item.name}
                    height="140"
                    image={item.img}
                    title={item.name}
                    style={{ objectFit: "contain" }}
                  />
                  <CardContent
                    style={{ marginTop: "50px" }}
                    className="account-onrent-div-card-content"
                  >
                    <h5> {item.name}</h5>
                    <h6>{item.price}Rs /day</h6>
                    <p>
                      <b>duration : </b>
                      {item.duration}
                    </p>
                    <p>
                      <b>total : </b>
                      {item.total}
                    </p>
                    <p>
                      <b>Rented on : </b>
                      {item.startDate}
                    </p>
                    <p>
                      <b>Equipment to be returned on : </b>
                      {item.endDate}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          <div className="account-renthistory">
            <h4> Rent History </h4>
            <div className="account-renthistory-div">
              {userdata.onrent.map((item, index) => (
                <Card className="account-renthistory-card" key={index}>
                  <CardMedia
                    component="img"
                    alt={item.name}
                    height="140"
                    image={item.img}
                    title={item.name}
                    style={{ objectFit: "contain" }}
                  />
                  <CardContent
                    style={{ marginTop: "50px" }}
                    className="account-renthistory-card-content"
                  >
                    <h5> {item.name}</h5>
                    <h6>{item.price}Rs /day</h6>
                    <p>
                      <b>duration : </b>
                      {item.duration}
                    </p>
                    <p>
                      <b>total : </b>
                      {item.total}
                    </p>
                    <p>
                      <b>Rented on : </b>
                      {item.startDate}
                    </p>
                    <p>
                      <b>Equipment Returned on : </b>
                      {item.endDate}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </>
      ) : (
        <div
          style={{
            width: "100vw",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Spinner animation="border" />
        </div>
      )}
    </section>
  );
}
