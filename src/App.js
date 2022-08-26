// Pages
import Home from "./Pages/Home/Home.js";
import Billing from "./Pages/Billing/Billing.js";
import Users from "./Pages/Users/Users.js";

// Components
import Sidebar from "./Components/Sidebar";


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
// Styles
import "./App.css";
import Navbar from "./Components/List/Navbar.js";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Sidebar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Users" component={Users} />
          <Route path="/Billing" component={Billing} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
