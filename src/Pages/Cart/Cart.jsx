import React, { useEffect, useState } from "react";
import "./Cart.scss";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { MDBRow, MDBCol } from "mdb-react-ui-kit";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart, clearCart } from "../../features/Cart";

export default function Cart() {
  const dispatch = new useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  const clearcartf = () => {
    dispatch(clearCart());
  };
  const removeFromCartHandler = (index) => {
    dispatch(removeFromCart(index));
  };

  return (
    <section id="cart">
      {cartItems && cartItems.length > 0 ? (
        <div className="cart-div">
          <div
            className="cart-div-title"
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <h1>Cart</h1>
            <Button variant="outlined" onClick={clearcartf} style={{marginRight:"4vw"}}>
              Clear Cart
            </Button>
          </div>
          <div className="cart-items-div">
            {cartItems.map((item, index) => (
              <MDBRow key={index} className="cart-items-card">
                <MDBCol
                  md="8"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    gap: "5vw",
                  }}
                >
                  <img
                    src="https://themes.webdevia.com/backhoe-heavy-construction-equipment-rentals-machinery-wordpress-theme/wp-content/uploads/2019/09/product_0005__-700x700.jpg"
                    alt="product-img" width={200}
                  />
                  <div>
                    <h3>{item.name}</h3>
                    <h5>{item.price}Rs /Day</h5>
                  </div>
                  <div>
                    <h5>
                      {item.startDate} to {item.endDate}
                    </h5>
                    <h5>duration: {item.duration} Days</h5>
                    <h5>Total amount : {item.total}Rs</h5>
                  </div>
                </MDBCol>
                <MDBCol
                  md="4"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent:"flex-end",
                  }}
                >
                  <Button
                    variant="outlined"
                    onClick={() => removeFromCartHandler(index)}
                  >
                    <h6 style={{ margin: "auto", paddingRight: "10px" }}>
                      Remove from cart
                    </h6>
                    <FontAwesomeIcon icon={faTrash} />
                  </Button>
                </MDBCol>
              </MDBRow>
            ))}
          </div>
          <Link to="/">
            <Button variant="contained">Checkout!</Button>
          </Link>
        </div>
      ) : (
        <section
          style={{
            width: "100vw",
            height: "100vh",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: "10px",
            flexDirection: "column",
          }}
        >
          <img src="./Asssets/Images/cart/cartempty.jpg" alt="" width={400} />
          <h2>Cart is empty</h2>
          <p>Please add elements in the cart</p>
          <Link to="/">
            <Button variant="contained">Back Home</Button>
          </Link>
        </section>
      )}
    </section>
  );
}
