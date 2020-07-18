import React from "react";
import CartItem from "./CartItem";
export default ({ value }) => {
  const { cart, changCount, deleteItem } = value;
  return (
    <>
      <div className="container-fluid text-center d-none d-lg-block">
        <div className="row">
          <div className="col-10 mx-auto col-lg-2">
            <p className="text-uppercase">product</p>
          </div>
          <div className="col-10 mx-auto col-lg-2">
            <p className="text-uppercase">name of product</p>
          </div>
          <div className="col-10 mx-auto col-lg-2">
            <p className="text-uppercase">price</p>
          </div>
          <div className="col-10 mx-auto col-lg-2">
            <p className="text-uppercase">quantity</p>
          </div>
          <div className="col-10 mx-auto col-lg-2">
            <p className="text-uppercase">remove</p>
          </div>
          <div className="col-10 mx-auto col-lg-2">
            <p className="text-uppercase">total</p>
          </div>
        </div>
      </div>
      {cart.map((item) => (
        <CartItem
          key={item.id}
          changCount={changCount}
          deleteItem={deleteItem}
          {...item}
        />
      ))}
    </>
  );
};
