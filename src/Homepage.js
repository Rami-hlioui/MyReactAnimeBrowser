import React from "react";
import { Route } from "react-router-dom";
import App from "./App";
import { AnimePage } from "./anime.component.page/anime.component";

function Homepage() {
  return (
    <div>
      <Route exact path="/anime/:id" component={AnimePage} />
      <Route exact path="/" component={App} />
    </div>
  );
}
export default Homepage;
