import React from "react";
import { Link } from "react-router-dom";
export default ({ cartTax, cartsubtotal, carttotal, clearCart }) => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-10 mt-2 ml-sm-5 ml-md-auto text-capitalize text-right">
            <Link to="/">
              <button
                className="btn btn-outline-danger text-uppercase mb-3 px-5"
                type="button"
                onClick={() => {
                  clearCart();
                }}
              >
                clear Cart
              </button>
            </Link>
            <h5>
              <span className="text-title">subtotal :</span>
              <strong>$ {cartsubtotal}</strong>
            </h5>
            <h5>
              <span className="text-title">cart Tax :</span>
              <strong>$ {cartTax}</strong>
            </h5>
            <h5>
              <span className="text-title">cart total :</span>
              <strong>$ {carttotal}</strong>
            </h5>
          </div>
        </div>
      </div>
    </>
  );
};
