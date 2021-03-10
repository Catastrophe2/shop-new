import "./App.css";
import Products from "./components/Products/Products.js";
import Header from "./components/Header/Header.js";
import { useEffect, useState } from "react";
import Range from "./components/Range/Range";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Homep from "./pages/Homep";
import About1 from "./pages/About1";
import Details from "./pages/Details";


const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>


        <Switch>
          <Route path="/about">
            <About1 />
          </Route>
          <Route path = "/product/:num" ><Details/> </Route>
          <Route path="/">
            <Home />
          </Route>

        </Switch>
      </div>
    </Router>
  );
  function Home() {
    return <Homep></Homep>;
  }

  function About() {
    return <About1></About1>;
  }

  function Details() {
    return <div>sasson</div>;
  }

};

export default App;
