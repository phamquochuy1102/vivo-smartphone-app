import "./App.css";
import Homepage from "./Containers/Homepage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Homepage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
