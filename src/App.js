import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import CreditCard from "./pages/CreditCard";
import Pay from "./pages/Pay";


export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <CreditCard />
          </Route>
          <Route path="/pay">
            <Pay />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}



