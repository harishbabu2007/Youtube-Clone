import React from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Videos from "./Videos";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SearchVideo from "./SearchVideo";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <div className="app__container">
          <Sidebar />
          <Switch>
            <Route exact path="/" component={Videos} />
            <Route path="/search/:query" component={SearchVideo} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
