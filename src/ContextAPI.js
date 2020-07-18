import React, { Component } from "react";
// data from data.json
import { detailProduct, storeProducts } from "./data";
const Context = React.createContext();
class Provider extends Component {
  state = {
    store: [],
    details: detailProduct,
    cart: [],
    modelOpen: false,
    modelproduct: detailProduct,
    cartsubtotal: 0,
    cartTax: 0,
    carttotal: 0,
  };

  componentDidMount() {
    this.setStore();
  }
  // add data to this.state.store function
  setStore = () => {
    let store = [];
    storeProducts.forEach((item) => {
      store = [...store, { ...item }];
    });
    this.setState(() => {
      return { store };
    });
  };
  // function to get the item when clicked to add change or delete the item
  getItem = (id) => {
    const item = this.state.store.find((item) => item.id === id);
    return item;
  };
  // pass the clicked item data to detalils commponent
  hadelDetails = (id) => {
    console.log("handel the details");
    const target = this.getItem(id);
    this.setState(() => {
      return { details: target };
    });
  };
  // add item to cart function
  addToCart = (id) => {
    console.log(`add to cart ${id}`);
    let tempStore = [...this.state.store];
    const index = tempStore.indexOf(this.getItem(id));
    const listItem = tempStore[index];
    listItem.inCart = true;
    listItem.count = 1;
    listItem.total = parseInt(listItem.price);
    this.setState(
      () => {
        return { store: tempStore, cart: [...this.state.cart, listItem] };
      },
      () => {
        this.addTototal();
      }
    );
  };
  // open modal function
  openModel = (id) => {
    const targetprudect = this.getItem(id);
    this.setState(() => {
      return { modelproduct: targetprudect, modelOpen: true };
    });
  };
  // close modal function
  closeModel = () => {
    this.setState({ modelOpen: false });
  };
  // cart functionality

  // change item count at cart
  changCount = (id, type) => {
    console.log("incremet function");
    let tempStore = [...this.state.cart];
    const index = tempStore.indexOf(tempStore.find((item) => item.id === id));
    console.log(index);
    console.log(this.getItem(id));
    if (type === "add") {
      tempStore[index].count += 1;
      tempStore[index].total = tempStore[index].count * tempStore[index].price;
    } else if (type === "dec") {
      if (tempStore[index].count === 1) {
        this.deleteItem(id);
        return;
      } else {
        tempStore[index].count -= 1;
        tempStore[index].total =
          tempStore[index].count * tempStore[index].price;
      }
    }
    this.setState({ cart: tempStore }, () => {
      this.addTototal();
    });
  };
  // delete item from cart
  deleteItem = (id) => {
    console.log("item removed");
    let tempStore = [...this.state.cart];
    tempStore = tempStore.filter((item) => {
      if (item.id !== id) {
        return true;
      } else {
        item.inCart = false;
        item.count = 0;
        item.total = 0;
        return false;
      }
    });
    this.setState({ cart: tempStore }, () => {
      this.addTototal();
    });
  };
  // clear cart items
  clearCart = () => {
    console.log("clear cart");
    this.setState({ cart: [] }, () => {
      this.setStore();
      this.addTototal();
    });
  };
  // calculate the total
  addTototal = () => {
    let subTotal = 0;
    this.state.cart.map((item) => (subTotal += item.total));
    const tempTax = subTotal * 0.1;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = subTotal + tax;
    this.setState(() => {
      return {
        cartsubtotal: subTotal,
        cartTax: tax,
        carttotal: total,
      };
    });
  };

  render() {
    return (
      <Context.Provider
        value={{
          ...this.state,
          hadelDetails: this.hadelDetails,
          addToCart: this.addToCart,
          openModel: this.openModel,
          closeModel: this.closeModel,
          changCount: this.changCount,
          deleteItem: this.deleteItem,
          clearCart: this.clearCart,
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}
// Consumer
const { Consumer } = Context;
export { Provider, Consumer };
