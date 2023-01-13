import React from "react";
import Products from "../components/Products";
import Cart from "./Cart";
const Store = () => {
  return (
    <div className="contionerc">
      <section className="carta">
        <Products />
      </section>
      <section className="cartb">
        <Cart />
      </section>
    </div>
  );
};

export default Store;
