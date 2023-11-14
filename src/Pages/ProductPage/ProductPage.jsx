import React, { useState, useEffect } from "react";
import "./ProductPage.scss";
import moment from "moment";
import { add, format, isAfter, isValid, parseISO } from "date-fns";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { addToCart } from "../../features/Cart";
import { useDispatch } from "react-redux";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import { MDBRow, MDBCol } from "mdb-react-ui-kit";

export default function ProductPage() {
  const [openalert, setOpenalert] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [duration, setDuration] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState({
    name: "Product1",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus omnis unde porro quasi molestiae. Sed, porro vero vel laborum hic quod fugiat cumque odit magnam id eveniet, cum natus laudantium!",
    img: "https://themes.webdevia.com/backhoe-heavy-construction-equipment-rentals-machinery-wordpress-theme/wp-content/uploads/2019/09/product_0005__-700x700.jpg",
    price: "10",
  });
  const dispatch = new useDispatch();

  const alertopen = () => {
    setOpenalert(true);
  };
  const alertclose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenalert(false);
  };

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const { productname } = useParams();

  useEffect(() => {
    const getaccdata = async () => {
      try {
        console.log(productname);
        // const response = await axios.get(
        //   `http://localhost:5173/${productname}`
        // );
        // setSelectedProduct(response)
      } catch (error) {
        console.log(error);
      }
    };
    getaccdata();
  }, []);

  const total = selectedProduct ? selectedProduct.price * duration : 0;

  const handleStartDateChange = (event) => {
    const selectedDate = new Date(event.target.value);
    if (isValid(selectedDate) && isAfter(selectedDate, new Date())) {
      setStartDate(selectedDate);
      updateDuration(selectedDate, endDate);
    } else {
      alertopen();
    }
  };

  const handleEndDateChange = (event) => {
    const selectedDate = new Date(event.target.value);
    if (isValid(selectedDate) && isAfter(selectedDate, startDate)) {
      setEndDate(selectedDate);
      updateDuration(startDate, selectedDate);
    } else {
      alertopen();
    }
  };

  const updateDuration = (start, end) => {
    if (isAfter(end, start)) {
      const days = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
      setDuration(days);
    } else {
      setDuration(null);
      setEndDate(null);
    }
  };
  const addtocartf = () => {
    if (!startDate && !endDate) {
      return alert("Please enter startDate and endDate");
    }
    const newitem = {
      name: selectedProduct.name,
      price: selectedProduct.price,
      duration: duration,
      startDate: format(startDate, "yyyy-MM-dd"),
      endDate: format(endDate, "yyyy-MM-dd"),
      total: total,
    };
    dispatch(addToCart(newitem));
    alert("added to cart");
    setDuration(null);
    setStartDate(null);
    setEndDate(null);
  };

  return (
    <section id="productpage">
      <Snackbar open={openalert} autoHideDuration={6000} onClose={alertclose}>
        <Alert onClose={alertclose} severity="error" sx={{ width: "100%" }}>
          Enter Valid Date!
        </Alert>
      </Snackbar>
      {selectedProduct && (
        <MDBRow className="productpage-productcard">
          <MDBCol md="6">
            <img
              src={selectedProduct.img}
              alt={selectedProduct.name}
              title={selectedProduct.name}
              style={{
                objectFit: "contain",
                width: "100%",
                margin: "auto",
                height: "100%",
              }}
            />
          </MDBCol>
          <MDBCol
            md="6"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "30px",
            }}
          >
            <h3>{selectedProduct.name} </h3>
            <h5>
              <span style={{ color: "#FAB900" }}>{selectedProduct.price}</span>
              Rs /Day
            </h5>
            <p>{selectedProduct.description}</p>
            <div style={{ display: "flex", gap: "5vw" }}>
              <div>
                <label htmlFor="startDate">Start Date:</label>
                <br />
                <input
                  type="date"
                  id="startDate"
                  value={startDate ? format(startDate, "yyyy-MM-dd") : ""}
                  onChange={handleStartDateChange}
                />
              </div>
              <div>
                <label htmlFor="endDate">End Date:</label>
                <br />
                <input
                  type="date"
                  id="endDate"
                  value={endDate ? format(endDate, "yyyy-MM-dd") : ""}
                  onChange={handleEndDateChange}
                />
              </div>
            </div>
            <div className="products-price-div">
              <FontAwesomeIcon
                icon={faCheck}
                style={{
                  fontSize: "40px",
                  color: "#26A242",
                  paddingTop: "10px",
                }}
              />
              <div>
                <h5 style={{ fontWeight: "100" }}>Duration:{duration} Days</h5>
                <h5>Total : {total} Rs</h5>
              </div>
            </div>

            <Button variant="contained" onClick={addtocartf}>
              Add to Cart!
            </Button>
          </MDBCol>
        </MDBRow>
      )}
    </section>
  );
}
