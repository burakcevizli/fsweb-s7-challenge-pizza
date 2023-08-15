import React from "react";
import FormPage from "./Pages/FormPage";
import MainPage from "./Pages/MainPage";
import { Switch, Route } from "react-router-dom";
import SuccessPage from "./Pages/SuccessPage";


const App = () => {

  return (
    <Switch>
      <Route id="order-pizza" path="/" exact>
        <MainPage />
      </Route>
      <Route path="/pizza">
        <FormPage />
      </Route>
      <Route path="/successpage">
        <SuccessPage />
      </Route>
    </Switch>
  )
};
export default App;
