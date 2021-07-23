import "./App.css";
import Homepage from "./Containers/Homepage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Products from "./Containers/Products";
import ProductDetail from "./Containers/ProductDetail";
import ScrollToTop from "./ScrollToTop";
import ShoppingCart from "./Containers/ShoppingCart";
import Login from "./Containers/Login/Login";
import Register from "./Containers/Register/Register";
import ShippingAddress from "./Containers/ShippingAddress/ShippingAddress";
import Payment from "./Containers/Payment/Payment";
import Order from "./Containers/Order/Order";
import FollowOrder from "./Containers/FollowOrder/FollowOrder";

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
          <Route path="/shipping" component={ShippingAddress} />
          <Route path="/payment" component={Payment} />
          <Route exact path="/order" component={Order} />
          <Route path="/order/abc" component={FollowOrder} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
