import React from "react";
import { Consumer } from "../../ContextAPI";
//components
import Title from "./Title";
import Item from "./Item";
function Body() {
  return (
    <main className="py-5 text-align-center">
      <div className="container">
        <div className="row">
          <Title name="our" title="prouducts" />
          {/* card item  */}
          <div className="row">
            <Consumer>
              {(data) => {
                return data.store.map((item) => (
                  <Item key={item.id} {...item} />
                ));
              }}
            </Consumer>
          </div>
          {/* end card item  */}
        </div>
      </div>
    </main>
  );
}

export default Body;
