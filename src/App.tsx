import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "./pages/Home/home";
import Member from "./pages/Member/member";
import About from "./pages/About/about";
function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/member" component={Member} />
      <Route path="/about" component={About} />
    </BrowserRouter>
  );
}

export default App;
