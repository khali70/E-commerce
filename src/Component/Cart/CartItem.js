import React from "react";

export default ({
  id,
  img,
  title,
  price,
  count,
  total,
  changCount,
  deleteItem,
}) => {
  return (
    <div className="row text-capitalize text-center">
      <div className="col-10 mx-auto col-lg-2">
        <img
          src={img}
          alt={title}
          style={{ width: "5rem", height: "5rem" }}
          className="img-fluid"
        />
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none"> Product: </span>
        {title}
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none"> Price: </span>$ {price}
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <div className="d-flex justify-content-center">
          <span
            className="btn btnBlack mx-1"
            onClick={() => {
              changCount(id, "dec");
            }}
          >
            -
          </span>
          <span className="btn btnBlack mx-1">{count}</span>
          <span
            className="btn btnBlack mx-1"
            onClick={() => {
              changCount(id, "add");
            }}
          >
            +
          </span>
        </div>
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <div
          className="cartIcon"
          onClick={() => {
            deleteItem(id);
          }}
        >
          <i className="fa fa-trash"></i>
        </div>
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <strong>item total : $ {total}</strong>
      </div>
      <div className="col-10 mx-auto col-lg-2">{/* TODO paybal button */}</div>
    </div>
  );
};
