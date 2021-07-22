import "./App.css";
import Homepage from "./Containers/Homepage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Products from "./Containers/Products";
import ProductDetail from "./Containers/ProductDetail";
import ScrollToTop from "./ScrollToTop";
import ShoppingCart from "./Containers/ShoppingCart";
import Login from "./Containers/Login/Login";
import Register from "./Containers/Register/Register";

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
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
