//libs.
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router-dom";
//Components
import Nav from "./Component/E-NavBar/NavBar";
import Body from "./Component/E-bodyItems/Body";
import Details from "./Component/Details";
import Cart from "./Component/Cart";
import Default from "./Component/Default";
import Model from "./Component/Model";

function App() {
  return (
    <React.Fragment>
      <Nav />
      <Switch>
        <Route exact path="/" component={Body} />
        <Route exact path="/Details" component={Details} />
        <Route exact path="/Store" component={Cart} />
        <Route component={Default} />
      </Switch>
      <Model />
    </React.Fragment>
  );
}

export default App;
