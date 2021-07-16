import "./App.css";
import Homepage from "./Containers/Homepage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Products from "./Containers/Products";
import ProductDetail from "./Containers/ProductDetail";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/products" component={Products} />
          <Route path="/product-detail" component={ProductDetail} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
