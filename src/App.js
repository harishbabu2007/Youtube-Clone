import React from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import Videos from "./Videos";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SearchVideo from "./SearchVideo";
import WatchVideo from "./WatchVideo";

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
            <Route path="/watch/:id" component={WatchVideo} />
          </Switch>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
