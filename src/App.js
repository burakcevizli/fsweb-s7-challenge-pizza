import React, { useState } from "react";
import FormPage from "./Pages/FormPage";
import MainPage from "./Pages/MainPage";
import { Switch, Route } from "react-router-dom";
import SuccessPage from "./Pages/SuccessPage";


const App = () => {

  const [fisState , setFisState] = useState(null)



  return (
    <Switch>
      <Route id="order-pizza" path="/" exact>
        <MainPage />
      </Route>
      <Route path="/pizza">
        <FormPage setFisState = {setFisState}/>
      </Route>
      <Route path="/successpage">
        <SuccessPage fisState={fisState}/>
      </Route>
    </Switch>
  )
};
export default App;
