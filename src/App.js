import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage";
import NavBar from "./Components/NavBar/NavBar";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/">
            <NavBar />
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
