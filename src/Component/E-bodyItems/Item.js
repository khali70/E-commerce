import React from "react";
import { Link } from "react-router-dom";
import { Consumer } from "../../ContextAPI";

function Item({ id, title, img, price, inCart }) {
  return (
    <div className="itemWrapper col-9 col-md-6 col-lg-3 mx-auto my-3">
      <div className="card">
        <Consumer>
          {(value) => (
            <div
              className="imgContainer p-5"
              onClick={() => {
                value.hadelDetails(id);
              }}
            >
              <Link to="/Details">
                <img
                  src={`/E-commerce/${img}`}
                  alt="product"
                  className="card-img-top"
                />
              </Link>
              <button
                className="cartBtn"
                disabled={inCart ? true : false}
                onClick={() => {
                  value.addToCart(id);
                  value.openModel(id);
                }}
              >
                {/* check if the item in cart */}
                {inCart ? (
                  <p className="text-capitalize mb-0" disabled>
                    inCart
                  </p>
                ) : (
                  <i className="fa fa-cart-plus fa-lg"></i>
                )}
              </button>
            </div>
          )}
        </Consumer>
        {/* cart footer */}
        <div className="card-footer d-flex justify-content-between">
          <p className="align-self-center mb-0">{title}</p>
          <h5 className="main-blue font-italic mb-0">
            <span className="me-1">$</span>
            {price}
          </h5>
        </div>
      </div>
    </div>
  );
}

/*TODO check for the prop Types 
 * id: Proptypes.number,
  img: Proptypes.string,
  title: Proptypes.string,
  inCart: Proptypes.bool,
 */
export default Item;
