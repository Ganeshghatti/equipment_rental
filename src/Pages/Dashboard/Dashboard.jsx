import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "./Dashboard.scss";
import axios from "axios";
import { useSelector } from "react-redux";
import { MDBRow, MDBCol } from "mdb-react-ui-kit";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";

export default function Dashboard() {
  const [value, setValue] = useState(0);
  const [searchvalue, setsearchvalue] = useState("");

  const allproducts = [
    {
      name: "WidgetX",
      quantity: 3,
      productid: 1,
      price: 20,
      img: "https://themes.webdevia.com/backhoe-heavy-construction-equipment-rentals-machinery-wordpress-theme/wp-content/uploads/2019/09/product_0005__-700x700.jpg",
      category: "category1",
    },
    {
      name: "GizmoPro",
      quantity: 4,
      productid: 2,
      price: 42,
      img: "https://themes.webdevia.com/backhoe-heavy-construction-equipment-rentals-machinery-wordpress-theme/wp-content/uploads/2019/09/product_0005__-700x700.jpg",
      category: "category3",
    },
    {
      name: "TechBlitz",
      quantity: 7,
      productid: 3,
      price: 15,
      img: "https://themes.webdevia.com/backhoe-heavy-construction-equipment-rentals-machinery-wordpress-theme/wp-content/uploads/2019/09/product_0005__-700x700.jpg",
      category: "category2",
    },
    {
      name: "InnoMax",
      quantity: 2,
      productid: 4,
      price: 28,
      img: "https://themes.webdevia.com/backhoe-heavy-construction-equipment-rentals-machinery-wordpress-theme/wp-content/uploads/2019/09/product_0005__-700x700.jpg",
      category: "category5",
    },
    {
      name: "EvoTech",
      quantity: 8,
      productid: 5,
      price: 37,
      img: "https://themes.webdevia.com/backhoe-heavy-construction-equipment-rentals-machinery-wordpress-theme/wp-content/uploads/2019/09/product_0005__-700x700.jpg",
      category: "category4",
    },
    {
      name: "SmartWave",
      quantity: 5,
      productid: 6,
      price: 18,
      img: "https://themes.webdevia.com/backhoe-heavy-construction-equipment-rentals-machinery-wordpress-theme/wp-content/uploads/2019/09/product_0005__-700x700.jpg",
      category: "category1",
    },
    {
      name: "NanoPulse",
      quantity: 9,
      productid: 7,
      price: 46,
      img: "https://themes.webdevia.com/backhoe-heavy-construction-equipment-rentals-machinery-wordpress-theme/wp-content/uploads/2019/09/product_0005__-700x700.jpg",
      category: "category3",
    },
    {
      name: "QuantumFlow",
      quantity: 3,
      productid: 8,
      price: 24,
      img: "https://themes.webdevia.com/backhoe-heavy-construction-equipment-rentals-machinery-wordpress-theme/wp-content/uploads/2019/09/product_0005__-700x700.jpg",
      category: "category2",
    },
    {
      name: "LuminaTech",
      quantity: 6,
      productid: 9,
      price: 31,
      img: "https://themes.webdevia.com/backhoe-heavy-construction-equipment-rentals-machinery-wordpress-theme/wp-content/uploads/2019/09/product_0005__-700x700.jpg",
      category: "category5",
    },
    {
      name: "FutureSpark",
      quantity: 1,
      productid: 10,
      price: 12,
      img: "https://themes.webdevia.com/backhoe-heavy-construction-equipment-rentals-machinery-wordpress-theme/wp-content/uploads/2019/09/product_0005__-700x700.jpg",
      category: "category4",
    },
    {
      name: "InnoTech",
      quantity: 8,
      productid: 11,
      price: 39,
      img: "https://themes.webdevia.com/backhoe-heavy-construction-equipment-rentals-machinery-wordpress-theme/wp-content/uploads/2019/09/product_0005__-700x700.jpg",
      category: "category1",
    },
    {
      name: "PulseXpress",
      quantity: 5,
      productid: 12,
      price: 21,
      img: "https://themes.webdevia.com/backhoe-heavy-construction-equipment-rentals-machinery-wordpress-theme/wp-content/uploads/2019/09/product_0005__-700x700.jpg",
      category: "category3",
    },
    {
      name: "XceleroTech",
      quantity: 2,
      productid: 13,
      price: 35,
      img: "https://themes.webdevia.com/backhoe-heavy-construction-equipment-rentals-machinery-wordpress-theme/wp-content/uploads/2019/09/product_0005__-700x700.jpg",
      category: "category2",
    },
    {
      name: "ZenithTech",
      quantity: 7,
      productid: 14,
      price: 16,
      img: "https://themes.webdevia.com/backhoe-heavy-construction-equipment-rentals-machinery-wordpress-theme/wp-content/uploads/2019/09/product_0005__-700x700.jpg",
      category: "category5",
    },
    {
      name: "VivoPulse",
      quantity: 4,
      productid: 15,
      price: 27,
      img: "https://themes.webdevia.com/backhoe-heavy-construction-equipment-rentals-machinery-wordpress-theme/wp-content/uploads/2019/09/product_0005__-700x700.jpg",
      category: "category4",
    },
    {
      name: "QuantumMax",
      quantity: 9,
      productid: 16,
      price: 43,
      img: "https://themes.webdevia.com/backhoe-heavy-construction-equipment-rentals-machinery-wordpress-theme/wp-content/uploads/2019/09/product_0005__-700x700.jpg",
      category: "category1",
    },
    {
      name: "PulseWave",
      quantity: 3,
      productid: 17,
      price: 19,
      img: "https://themes.webdevia.com/backhoe-heavy-construction-equipment-rentals-machinery-wordpress-theme/wp-content/uploads/2019/09/product_0005__-700x700.jpg",
      category: "category3",
    },
    {
      name: "TechXpress",
      quantity: 6,
      productid: 18,
      price: 32,
      img: "https://themes.webdevia.com/backhoe-heavy-construction-equipment-rentals-machinery-wordpress-theme/wp-content/uploads/2019/09/product_0005__-700x700.jpg",
      category: "category2",
    },
    {
      name: "InnoPulse",
      quantity: 1,
      productid: 19,
      price: 13,
      img: "https://themes.webdevia.com/backhoe-heavy-construction-equipment-rentals-machinery-wordpress-theme/wp-content/uploads/2019/09/product_0005__-700x700.jpg",
      category: "category5",
    },
    {
      name: "EvoSpark",
      quantity: 5,
      productid: 20,
      price: 40,
      img: "https://themes.webdevia.com/backhoe-heavy-construction-equipment-rentals-machinery-wordpress-theme/wp-content/uploads/2019/09/product_0005__-700x700.jpg",
      category: "category4",
    },
    {
      name: "SparkTech",
      quantity: 8,
      productid: 21,
      price: 25,
      img: "https://themes.webdevia.com/backhoe-heavy-construction-equipment-rentals-machinery-wordpress-theme/wp-content/uploads/2019/09/product_0005__-700x700.jpg",
      category: "category1",
    },
    {
      name: "InnoPro",
      quantity: 4,
      productid: 22,
      price: 14,
      img: "https://themes.webdevia.com/backhoe-heavy-construction-equipment-rentals-machinery-wordpress-theme/wp-content/uploads/2019/09/product_0005__-700x700.jpg",
      category: "category3",
    },
    {
      name: "PulseBlitz",
      quantity: 7,
      productid: 23,
      price: 29,
      img: "https://themes.webdevia.com/backhoe-heavy-construction-equipment-rentals-machinery-wordpress-theme/wp-content/uploads/2019/09/product_0005__-700x700.jpg",
      category: "category2",
    },
    {
      name: "TechMax",
      quantity: 2,
      productid: 24,
      price: 38,
      img: "https://themes.webdevia.com/backhoe-heavy-construction-equipment-rentals-machinery-wordpress-theme/wp-content/uploads/2019/09/product_0005__-700x700.jpg",
      category: "category5",
    },
    {
      name: "InnoWave",
      quantity: 8,
      productid: 25,
      price: 17,
      img: "https://themes.webdevia.com/backhoe-heavy-construction-equipment-rentals-machinery-wordpress-theme/wp-content/uploads/2019/09/product_0005__-700x700.jpg",
      category: "category4",
    },
    {
      name: "TechPulse",
      quantity: 5,
      productid: 26,
      price: 33,
      img: "https://themes.webdevia.com/backhoe-heavy-construction-equipment-rentals-machinery-wordpress-theme/wp-content/uploads/2019/09/product_0005__-700x700.jpg",
      category: "category1",
    },
    {
      name: "QuantumPro",
      quantity: 9,
      productid: 27,
      price: 44,
      img: "https://themes.webdevia.com/backhoe-heavy-construction-equipment-rentals-machinery-wordpress-theme/wp-content/uploads/2019/09/product_0005__-700x700.jpg",
      category: "category3",
    },
    {
      name: "WaveTech",
      quantity: 3,
      productid: 28,
      price: 20,
      img: "https://themes.webdevia.com/backhoe-heavy-construction-equipment-rentals-machinery-wordpress-theme/wp-content/uploads/2019/09/product_0005__-700x700.jpg",
      category: "category2",
    },
    {
      name: "PulseTech",
      quantity: 6,
      productid: 29,
      price: 30,
      img: "https://themes.webdevia.com/backhoe-heavy-construction-equipment-rentals-machinery-wordpress-theme/wp-content/uploads/2019/09/product_0005__-700x700.jpg",
      category: "category5",
    },
    {
      name: "TechBlitz",
      quantity: 1,
      productid: 30,
      price: 11,
      img: "https://themes.webdevia.com/backhoe-heavy-construction-equipment-rentals-machinery-wordpress-theme/wp-content/uploads/2019/09/product_0005__-700x700.jpg",
      category: "category4",
    },
  ];

  const onrent = [
    {
      name: "Excavator",
      price: "12",
      img: "https://themes.webdevia.com/backhoe-heavy-construction-equipment-rentals-machinery-wordpress-theme/wp-content/uploads/2019/09/product_0005__-700x700.jpg",
      startDate: "2023-11-09",
      endDate: "2023-11-21",
      duration: 12,
      total: "144",
      rentedbyname: "John Doe",
      rentedbyemail: "johndoe@gmail.com",
      rentedbyphone: "5678234567",
    },
    {
      name: "Bulldozer",
      price: "45",
      img: "https://themes.webdevia.com/backhoe-heavy-construction-equipment-rentals-machinery-wordpress-theme/wp-content/uploads/2019/09/product_0005__-700x700.jpg",
      startDate: "2023-11-09",
      endDate: "2023-11-19",
      duration: 10,
      total: "450",
      rentedbyname: "Alice Johnson",
      rentedbyemail: "alicejohnson@gmail.com",
      rentedbyphone: "7890345678",
    },
    {
      name: "Crane",
      price: "78",
      img: "https://themes.webdevia.com/backhoe-heavy-construction-equipment-rentals-machinery-wordpress-theme/wp-content/uploads/2019/09/product_0005__-700x700.jpg",
      startDate: "2023-11-09",
      endDate: "2023-11-16",
      duration: 7,
      total: "546",
      rentedbyname: "Bob Smith",
      rentedbyemail: "bobsmith@gmail.com",
      rentedbyphone: "1234567890",
    },
    {
      name: "Loader",
      price: "23",
      img: "https://themes.webdevia.com/backhoe-heavy-construction-equipment-rentals-machinery-wordpress-theme/wp-content/uploads/2019/09/product_0005__-700x700.jpg",
      startDate: "2023-11-09",
      endDate: "2023-11-15",
      duration: 6,
      total: "138",
      rentedbyname: "Emily Davis",
      rentedbyemail: "emilydavis@gmail.com",
      rentedbyphone: "8901234567",
    },
    {
      name: "Backhoe",
      price: "67",
      img: "https://themes.webdevia.com/backhoe-heavy-construction-equipment-rentals-machinery-wordpress-theme/wp-content/uploads/2019/09/product_0005__-700x700.jpg",
      startDate: "2023-11-09",
      endDate: "2023-11-20",
      duration: 11,
      total: "737",
      rentedbyname: "Michael Johnson",
      rentedbyemail: "michaeljohnson@gmail.com",
      rentedbyphone: "2345678901",
    },
    {
      name: "Skid Steer",
      price: "34",
      img: "https://themes.webdevia.com/backhoe-heavy-construction-equipment-rentals-machinery-wordpress-theme/wp-content/uploads/2019/09/product_0005__-700x700.jpg",
      startDate: "2023-11-09",
      endDate: "2023-11-18",
      duration: 9,
      total: "306",
      rentedbyname: "Olivia Miller",
      rentedbyemail: "oliviamiller@gmail.com",
      rentedbyphone: "6789012345",
    },
    {
      name: "Dump Truck",
      price: "89",
      img: "https://themes.webdevia.com/backhoe-heavy-construction-equipment-rentals-machinery-wordpress-theme/wp-content/uploads/2019/09/product_0005__-700x700.jpg",
      startDate: "2023-11-09",
      endDate: "2023-11-14",
      duration: 5,
      total: "445",
      rentedbyname: "David Wilson",
      rentedbyemail: "davidwilson@gmail.com",
      rentedbyphone: "3456789012",
    },
    {
      name: "Concrete Mixer",
      price: "56",
      img: "https://themes.webdevia.com/backhoe-heavy-construction-equipment-rentals-machinery-wordpress-theme/wp-content/uploads/2019/09/product_0005__-700x700.jpg",
      startDate: "2023-11-09",
      endDate: "2023-11-17",
      duration: 8,
      total: "448",
      rentedbyname: "Sophia Brown",
      rentedbyemail: "sophiabrown@gmail.com",
      rentedbyphone: "4567890123",
    },
    {
      name: "Compactor",
      price: "90",
      img: "https://themes.webdevia.com/backhoe-heavy-construction-equipment-rentals-machinery-wordpress-theme/wp-content/uploads/2019/09/product_0005__-700x700.jpg",
      startDate: "2023-11-09",
      endDate: "2023-11-13",
      duration: 4,
      total: "360",
      rentedbyname: "James Smith",
      rentedbyemail: "jamessmith@gmail.com",
      rentedbyphone: "5678901234",
    },
    {
      name: "Aerial Lift",
      price: "43",
      img: "https://themes.webdevia.com/backhoe-heavy-construction-equipment-rentals-machinery-wordpress-theme/wp-content/uploads/2019/09/product_0005__-700x700.jpg",
      startDate: "2023-11-09",
      endDate: "2023-11-22",
      duration: 13,
      total: "559",
      rentedbyname: "Emma White",
      rentedbyemail: "emmawhite@gmail.com",
      rentedbyphone: "6789012345",
    },
    {
      name: "Forklift",
      price: "67",
      img: "https://themes.webdevia.com/backhoe-heavy-construction-equipment-rentals-machinery-wordpress-theme/wp-content/uploads/2019/09/product_0005__-700x700.jpg",
      startDate: "2023-11-09",
      endDate: "2023-11-21",
      duration: 12,
      total: "804",
      rentedbyname: "Andrew Taylor",
      rentedbyemail: "andrewtaylor@gmail.com",
      rentedbyphone: "7890123456",
    },
  ];

  const itemstobecollectedback = [
    {
      name: "Excavator",
      price: "12",
      img: "https://themes.webdevia.com/backhoe-heavy-construction-equipment-rentals-machinery-wordpress-theme/wp-content/uploads/2019/09/product_0005__-700x700.jpg",
      startDate: "2023-11-09",
      endDate: "2023-11-21",
      duration: 12,
      total: "144",
      rentedbyname: "John Doe",
      rentedbyemail: "johndoe@gmail.com",
      rentedbyphone: "5678234567",
    },
    {
      name: "Bulldozer",
      price: "45",
      img: "https://themes.webdevia.com/backhoe-heavy-construction-equipment-rentals-machinery-wordpress-theme/wp-content/uploads/2019/09/product_0005__-700x700.jpg",
      startDate: "2023-11-09",
      endDate: "2023-11-19",
      duration: 10,
      total: "450",
      rentedbyname: "Alice Johnson",
      rentedbyemail: "alicejohnson@gmail.com",
      rentedbyphone: "7890345678",
    },
    {
      name: "Crane",
      price: "78",
      img: "https://themes.webdevia.com/backhoe-heavy-construction-equipment-rentals-machinery-wordpress-theme/wp-content/uploads/2019/09/product_0005__-700x700.jpg",
      startDate: "2023-11-09",
      endDate: "2023-11-16",
      duration: 7,
      total: "546",
      rentedbyname: "Bob Smith",
      rentedbyemail: "bobsmith@gmail.com",
      rentedbyphone: "1234567890",
    },
    {
      name: "Loader",
      price: "23",
      img: "https://themes.webdevia.com/backhoe-heavy-construction-equipment-rentals-machinery-wordpress-theme/wp-content/uploads/2019/09/product_0005__-700x700.jpg",
      startDate: "2023-11-09",
      endDate: "2023-11-15",
      duration: 6,
      total: "138",
      rentedbyname: "Emily Davis",
      rentedbyemail: "emilydavis@gmail.com",
      rentedbyphone: "8901234567",
    },
    {
      name: "Backhoe",
      price: "67",
      img: "https://themes.webdevia.com/backhoe-heavy-construction-equipment-rentals-machinery-wordpress-theme/wp-content/uploads/2019/09/product_0005__-700x700.jpg",
      startDate: "2023-11-09",
      endDate: "2023-11-20",
      duration: 11,
      total: "737",
      rentedbyname: "Michael Johnson",
      rentedbyemail: "michaeljohnson@gmail.com",
      rentedbyphone: "2345678901",
    },
    {
      name: "Skid Steer",
      price: "34",
      img: "https://themes.webdevia.com/backhoe-heavy-construction-equipment-rentals-machinery-wordpress-theme/wp-content/uploads/2019/09/product_0005__-700x700.jpg",
      startDate: "2023-11-09",
      endDate: "2023-11-18",
      duration: 9,
      total: "306",
      rentedbyname: "Olivia Miller",
      rentedbyemail: "oliviamiller@gmail.com",
      rentedbyphone: "6789012345",
    },
    {
      name: "Dump Truck",
      price: "89",
      img: "https://themes.webdevia.com/backhoe-heavy-construction-equipment-rentals-machinery-wordpress-theme/wp-content/uploads/2019/09/product_0005__-700x700.jpg",
      startDate: "2023-11-09",
      endDate: "2023-11-14",
      duration: 5,
      total: "445",
      rentedbyname: "David Wilson",
      rentedbyemail: "davidwilson@gmail.com",
      rentedbyphone: "3456789012",
    },
    {
      name: "Concrete Mixer",
      price: "56",
      img: "https://themes.webdevia.com/backhoe-heavy-construction-equipment-rentals-machinery-wordpress-theme/wp-content/uploads/2019/09/product_0005__-700x700.jpg",
      startDate: "2023-11-09",
      endDate: "2023-11-17",
      duration: 8,
      total: "448",
      rentedbyname: "Sophia Brown",
      rentedbyemail: "sophiabrown@gmail.com",
      rentedbyphone: "4567890123",
    },
    {
      name: "Compactor",
      price: "90",
      img: "https://themes.webdevia.com/backhoe-heavy-construction-equipment-rentals-machinery-wordpress-theme/wp-content/uploads/2019/09/product_0005__-700x700.jpg",
      startDate: "2023-11-09",
      endDate: "2023-11-13",
      duration: 4,
      total: "360",
      rentedbyname: "James Smith",
      rentedbyemail: "jamessmith@gmail.com",
      rentedbyphone: "5678901234",
    },
    {
      name: "Aerial Lift",
      price: "43",
      img: "https://themes.webdevia.com/backhoe-heavy-construction-equipment-rentals-machinery-wordpress-theme/wp-content/uploads/2019/09/product_0005__-700x700.jpg",
      startDate: "2023-11-09",
      endDate: "2023-11-22",
      duration: 13,
      total: "559",
      rentedbyname: "Emma White",
      rentedbyemail: "emmawhite@gmail.com",
      rentedbyphone: "6789012345",
    },
    {
      name: "Forklift",
      price: "67",
      img: "https://themes.webdevia.com/backhoe-heavy-construction-equipment-rentals-machinery-wordpress-theme/wp-content/uploads/2019/09/product_0005__-700x700.jpg",
      startDate: "2023-11-09",
      endDate: "2023-11-21",
      duration: 12,
      total: "804",
      rentedbyname: "Andrew Taylor",
      rentedbyemail: "andrewtaylor@gmail.com",
      rentedbyphone: "7890123456",
    },
  ];
  const [inventory, setinventory] = useState(allproducts);

  const searchf = (e) => {
    const searchValue = e.target.value.toLowerCase();

    const filteredInventory = allproducts.filter((item) =>
      item.name.toLowerCase().includes(searchValue)
    );

    setsearchvalue(searchValue);
    setinventory(filteredInventory);
  };

  function TabPanel(props) {
    const { children, value, index, ...other } = props;
    const dispatch = useDispatch();
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
      >
        {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
      </div>
    );
  }

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };

  function a11yProps(index) {
    return {
      id: `vertical-tab-${index}`,
      "aria-controls": `vertical-tabpanel-${index}`,
    };
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const backtoinventoryf = (index) => {
    itemstobecollectedback.splice(index, 1);
  };

  return (
    <section id="dashboard">
      <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="Inventory" {...a11yProps(0)} />
          <Tab label="Items on Rent" {...a11yProps(1)} />
          <Tab label="Items to be collected back" {...a11yProps(2)} />
        </Tabs>
        <TabPanel value={value} index={0}>
          <section id="dashboard-inventory">
            <form>
              <input
                autoFocus
                type="search"
                className="form-control dashboard-inventory-search"
                placeholder="Type Product Name"
                aria-label="Search"
                value={searchvalue}
                onChange={searchf}
              />
            </form>
            <div className="dashboard-inventory-items">
              {inventory.map((item, index) => (
                <Card className="dashboard-inventory-card" key={index}>
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
                    className="dashboard-inventory-card-content"
                  >
                    <h5> {item.name}</h5>
                    <h6>{item.price}Rs /day</h6>
                    <h6>
                      <b>Quantity :</b> {item.quantity}
                    </h6>
                    <p>
                      <b>Product id :</b> {item.productid}
                    </p>
                    <p>
                      <b>Porduct Category :</b> {item.category}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <section id="dashboard-onrent">
            <h1>Items on rent</h1>
            <div className="dashboard-onrent-div">
              {onrent.map((item, index) => (
                <Card className="dashboard-onrent-card" key={index}>
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
                    className="dashboard-onrent-card-content"
                  >
                    <MDBRow>
                      <MDBCol md="6">
                        <h3>Product details</h3>
                        <h6>
                          <b>Product :</b> {item.name}
                        </h6>
                        <h6>
                          <b>Price :</b>
                          {item.price}Rs /day
                        </h6>
                        <h6>
                          <b>Duration :</b>
                          {item.duration}
                        </h6>
                        <h6>
                          <b>Total :</b>
                          {item.total}Rs
                        </h6>
                        <p>
                          <b>start date : {item.startDate}</b>
                        </p>
                        <p>
                          <b>end date : {item.endDate}</b>
                        </p>
                      </MDBCol>
                      <MDBCol md="6">
                        <h3>User Details</h3>
                        <h6>
                          <b>Username : </b> {item.rentedbyname}
                        </h6>
                        <h6>
                          <b>Email : </b> {item.rentedbyemail}
                        </h6>
                        <h6>
                          <b>Phone no : </b> {item.rentedbyphone}
                        </h6>
                      </MDBCol>
                    </MDBRow>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <section id="dashboard-itemstobecollectedback">
            <h1>Items to be collected back</h1>
            <div className="dashboard-itemstobecollectedback-div">
              {itemstobecollectedback.map((item, index) => (
                <Card
                  className="dashboard-itemstobecollectedback-card"
                  key={index}
                >
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
                    className="dashboard-itemstobecollectedback-card-content"
                  >
                    <MDBRow>
                      <MDBCol md="6">
                        <h3>Product details</h3>
                        <h6>
                          <b>Product :</b> {item.name}
                        </h6>
                        <h6>
                          <b>Price :</b>
                          {item.price}Rs /day
                        </h6>
                        <h6>
                          <b>Duration :</b>
                          {item.duration}
                        </h6>
                        <h6>
                          <b>Total :</b>
                          {item.total}Rs
                        </h6>
                        <p>
                          <b>start date : {item.startDate}</b>
                        </p>
                        <p>
                          <b>end date : {item.endDate}</b>
                        </p>
                      </MDBCol>
                      <MDBCol md="6">
                        <h3>User Details</h3>
                        <h6>
                          <b>Username : </b> {item.rentedbyname}
                        </h6>
                        <h6>
                          <b>Email : </b> {item.rentedbyemail}
                        </h6>
                        <h6>
                          <b>Phone no : </b> {item.rentedbyphone}
                        </h6>
                      </MDBCol>
                    </MDBRow>
                  </CardContent>
                  <Button
                    variant="contained"
                    onClick={() => backtoinventoryf(index)}
                  >
                    send back to inventory
                  </Button>
                </Card>
              ))}
            </div>
          </section>
        </TabPanel>
      </Box>
    </section>
  );
}
