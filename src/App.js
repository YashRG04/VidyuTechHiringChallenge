import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import "./App.css";
import ProductDetails from "./components/Product/ProductDetails";
import Products from "./components/Product/Products";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Products} />
        <Route exact path="/product/:id" component={ProductDetails} />
      </Switch>
    </Router>
  );
}

export default App;
