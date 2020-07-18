import React from "react";
import { Consumer } from "../../ContextAPI";
// Components
import Title from "../E-bodyItems/Title";
import CartColums from "./CartContainer";
import EmptyCart from "./EmptyCart";
import Carttotals from "./Carttotals";

function Cart() {
  return (
    <section>
      <Consumer>
        {(value) => {
          const { cart } = value;

          if (cart.length > 0) {
            return (
              <>
                <Title name="your" title="Cart" />
                <CartColums value={value} />
                <Carttotals {...value} />
              </>
            );
          } else {
            return <EmptyCart />;
          }
        }}
      </Consumer>
    </section>
  );
}

export default Cart;
