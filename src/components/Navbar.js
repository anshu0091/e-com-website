import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import logo from "./websitelogo.png";
const Navbar = () => {
  const items = useSelector((state) => state.cart);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <span>
        <img src={logo} style={{ height: 25, width: 25 }} />{" "}
      </span>
      <div>
        <Link className="navLink" to="/">
          Home
        </Link>
        <Link className="navLink" to="/thejourney">
          TheJourney
        </Link>
        <Link className="navLink" to="/team">
          Team
        </Link>
        <Link className="navLink" to="/store">
          STORE
        </Link>
        <Link className="navLink" to="/contact">
          Contact
        </Link>
        <Link className="navLink" to="/cart">
          Cart
        </Link>
        <span className="cartCount">Cart items: {items.length}</span>
      </div>
    </div>
  );
};

export default Navbar;
