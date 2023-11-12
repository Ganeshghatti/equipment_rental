import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import logo from "./logoplaceholder.png";
import { useSelector } from "react-redux";
import Avatar from "@mui/material/Avatar";
import "./Navbar.scss";
import Button from "@mui/material/Button";

export default function NavbarComponent() {
  const [menu, setmenu] = useState(false);

  const menuf = () => {
    setmenu(!menu);
  };

  const dropdownf = (link) => {
    console.log("object");
    setmenu(!menu);
    console.log(link);
    window.location.href = `${link}`;
  };

  const categories = [
    { category: "a", link: "/categories/a" },
    { category: "a", link: "/categories/a" },
    { category: "a", link: "/categories/a" },
    { category: "a", link: "/categories/a" },
    { category: "a", link: "/categories/a" },
    { category: "a", link: "/categories/a" },
  ];

  const cartItems = useSelector((state) => state.cart.items);
  const cartItemsLength = cartItems.length;

  return (
    <nav id="navbar">
      <Link to="/">
        <img src={logo} alt="logo" style={{ width: "75px" }} />
      </Link>
      {menu ? (
        <>
          <div className="navbar-overlay" onClick={menuf}></div>
          <div className="navbar-mobile">
            <ul className="navbar-mobile-ul">
              <li onClick={menuf}>
                <Link to="/" style={{ color: "white" }}>
                  <b>Home</b>
                </Link>
              </li>
              <li onClick={menuf}>
                <Link to="/#features" style={{ color: "white" }}>
                  <b>Features</b>
                </Link>
              </li>
              <li onClick={menuf}>
                <Link to="/#HowDoesItWork" style={{ color: "white" }}>
                  <b>Working</b>
                </Link>
              </li>
              <li>
                <select
                  style={{
                    backgroundColor: "#1d1d1d",
                    color: "white",
                    border: "none",
                    fontWeight: "800",
                  }}
                  onChange={(e) => dropdownf(e.target.value)}
                >
                  <option
                    value={null}
                    style={{ backgroundColor: "#1d1d1d", color: "white" }}
                  >
                    Select a category
                  </option>
                  {categories.map((item, index) => (
                    <option
                      value={item.link}
                      key={index}
                      // onChange={() => dropdownf(item.link)}
                      style={{ backgroundColor: "#1d1d1d", color: "white" }}
                    >
                      {item.category}
                    </option>
                  ))}
                </select>
              </li>
            </ul>

            <Link
              onClick={menuf}
              to="/cart"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "15vh",
              }}
            >
              <FontAwesomeIcon icon={faCartShopping} />
              {cartItemsLength && (
                <span
                  style={{
                    color: "orange",
                    fontSize: "125%",
                  }}
                >
                  {cartItemsLength}
                </span>
              )}
            </Link>

            {/* if user is logged in then display  accounts avatar else show login , signup  */}

            <Link to="/account" onClick={menuf}>
              <Avatar>H</Avatar>
            </Link>

            <Link to="/signup" onClick={menuf}>
              <Button variant="contained">Signup</Button>
            </Link>

            <Link to="/login" onClick={menuf}>
              <Button variant="contained">Login</Button>
            </Link>
          </div>
        </>
      ) : (
        ""
      )}

      {window.innerWidth > 770 ? (
        <>
          <ul>
            <li>
              <Link to="/" style={{ color: "white" }}>
                <b>Home</b>
              </Link>
            </li>
            <li>
              <Link to="/#features" style={{ color: "white" }}>
                <b>Features</b>
              </Link>
            </li>
            <li>
              <Link to="/#HowDoesItWork" style={{ color: "white" }}>
                <b>Working</b>
              </Link>
            </li>
            <li>
              <div className="w3-dropdown-hover">
                <button className="w3-button">Categories</button>
                <div className="w3-dropdown-content w3-bar-block w3-border">
                  {categories.map((item, index) => (
                    <Link to={item.link} className="w3-bar-item w3-button">
                      {item.category}
                    </Link>
                  ))}
                </div>
              </div>
            </li>
          </ul>

          <Link
            to="/cart"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <FontAwesomeIcon icon={faCartShopping} />
            {cartItemsLength && (
              <span
                style={{
                  color: "orange",
                  fontSize: "125%",
                }}
              >
                {cartItemsLength}
              </span>
            )}
          </Link>

          {/* if user is logged in then display  accounts avatar else show login , signup  */}

          <Link to="/account">
            <Avatar>H</Avatar>
          </Link>

          <Link to="/signup">
            <Button variant="contained">Signup</Button>
          </Link>

          <Link to="/login">
            <Button variant="contained">Login</Button>
          </Link>
        </>
      ) : (
        <FontAwesomeIcon
          icon={faBars}
          onClick={menuf}
          style={{ color: "white", fontSize: "150%", cursor: "pointer" }}
        />
      )}
    </nav>
  );
}
