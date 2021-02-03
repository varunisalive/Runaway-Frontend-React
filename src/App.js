import React from "react";
import Home from "./Pages/Home";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import AboutUs from "./Pages/AboutUs";
import Products from "./Pages/Products";
import Cart from "./Pages/Cart";
import IndividualProducts from "./Pages/IndividualProducts";
import { BrowserRouter as Router, HashRouter, Switch, Route } from "react-router-dom";


function App() {

  return (
    <HashRouter>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about-us" component={AboutUs} />
          <Route path="/sign-up" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/products" exact component={Products} />
          <Route path="/products/:id" component={IndividualProducts} />
          <Route path="/cart" component={Cart} />
        </Switch>
      </div>
    </HashRouter>


  );
}

export default App;
