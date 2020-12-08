import React from "react";
import Products from "./Pages/Products";
import IndividualProducts from "./Pages/IndividualProducts";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (


    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/products" exact component={Products} />
          <Route path="/products/:id" component={IndividualProducts} />
        </Switch>
      </div>
    </Router>


  );
}

export default App;
