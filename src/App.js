import "./App.css";
import Homepage from "./Containers/Homepage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Products from "./Containers/Products";
import ProductDetail from "./Containers/ProductDetail";
import ScrollToTop from "./ScrollToTop";
import ShoppingCart from "./Containers/ShoppingCart";

function App() {
  return (
    <Router>
      <div className="App">
        <ScrollToTop />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/products" component={Products} />
          <Route path="/product-detail" component={ProductDetail} />
          <Route path="/cart" component={ShoppingCart} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
