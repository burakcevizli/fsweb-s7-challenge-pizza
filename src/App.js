import React from "react";
import FormPage from "./Pages/FormPage";
import MainPage from "./Pages/MainPage";
import { Switch, Route } from "react-router-dom";
import FinalPage from "./Pages/FinalPage";

const App = () => {
  return (
    <Switch>
      <Route id="order-pizza" path="/" exact>
        <MainPage />
      </Route>
      <Route path="/pizza">
        <FormPage />
      </Route>
      <Route path="/finalpage">
        <FinalPage />
      </Route>
    </Switch>
  )
};
export default App;
