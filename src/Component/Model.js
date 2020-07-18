import React from "react";
import { Link } from "react-router-dom";
import { Consumer } from "../ContextAPI";
import { ModelContainer, Button } from "./style/style";
function Model() {
  return (
    <Consumer>
      {(value) => {
        const { closeModel, modelOpen } = value;
        const { img, price, title } = value.modelproduct;
        if (!modelOpen) {
          return null;
        } else {
          return (
            <ModelContainer>
              <div className="container">
                <div className="row">
                  <div
                    id="model"
                    className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5"
                  >
                    {/* modal body */}
                    <h5>Item added To Cart </h5>
                    <img src={img} className="img-fluid" alt="product" />
                    <h5>{title}</h5>
                    <h5 className="text-muted">price: $ {price}</h5>
                    {/* btns */}
                    <Link to="/">
                      <Button
                        onClick={() => {
                          closeModel();
                        }}
                      >
                        Go store
                      </Button>
                    </Link>
                    <Link to="/Store">
                      <Button
                        cart
                        onClick={() => {
                          closeModel();
                        }}
                      >
                        Go to Cart
                      </Button>
                    </Link>
                    {/* end btns */}
                  </div>
                  {/* end modal body */}
                </div>
              </div>
            </ModelContainer>
          );
        }
      }}
    </Consumer>
  );
}

export default Model;
