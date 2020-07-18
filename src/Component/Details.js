import React from "react";
import { Consumer } from "../ContextAPI";
//components
import { Link } from "react-router-dom";
import { Button } from "./style/style";
function Details() {
  return (
    <Consumer>
      {(item) => {
        const { id, company, img, info, price, title, inCart } = item.details;
        return (
          <div className="container">
            {/* title */}
            <div className="row">
              <div className="col-10 mx-auto text-center text-slanted main-blue">
                <h1>{title}</h1>
              </div>
            </div>
            {/* end of title */}
            {/* poduct info  */}
            <div className="row">
              <div className="col-10 mx-auto col-md-6 my-3  ">
                <img src={img} className="img-fluid" alt="proudect" />
              </div>
              <div className="col-10 mx-auto col-md-6 my-3 text-captilize ">
                {/* modal name */}
                <h2>model : {title}</h2>
                {/* made by */}
                <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                  made By : <span className="text-uppercase">{company}</span>
                </h4>
                {/* price */}
                <h4 className="main-blue">
                  <strong>
                    price : <span>$</span>
                    {price}
                  </strong>
                </h4>
                {/* info */}
                <p className="text-capitaize font-wight-bold mt-3 mb-0">
                  some info about products :
                  <p className="text-muted lead">{info}</p>
                </p>
                {/* btns */}
                <Link to="/">
                  <Button>back to products</Button>
                </Link>
                <Button
                  cart
                  disabled={inCart ? true : false}
                  onClick={() => {
                    item.addToCart(id);
                    item.openModel(id);
                  }}
                >
                  {inCart ? "in Cart" : "Add to Cart"}
                </Button>
                {/* end of btns */}
              </div>
            </div>

            {/* end of poduct info  */}
          </div>
        );
      }}
    </Consumer>
  );
}

export default Details;
