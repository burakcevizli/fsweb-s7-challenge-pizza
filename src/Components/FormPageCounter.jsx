import React, { useState } from "react";
import FormPageAdisyon from "./FormPageAdisyon";

const FormPageCounter = (props) => {
  const [counter, setCounter] = useState(1);
  const {ekMalzemelerPrice , formObjesi , size , biber , isim , sogan ,sucuk ,peynir} = props

  const arttir = () => {
    setCounter(counter + 1);
  };

  const azalt = () => {
    setCounter(counter - 1);
  };

  return (
    <div className="ButonCounter">
      <button className="Eksilt" onClick={azalt}>
        -
      </button>

      <p>{counter}</p>
      <button className="Arttır" onClick={arttir}>
        +
      </button>
      <FormPageAdisyon counter={counter} ekMalzemelerPrice = {ekMalzemelerPrice} formObjesi = {formObjesi} size = {size} biber = {biber} isim = {isim} sogan = {sogan} sucuk = {sucuk} peynir = {peynir}/>
    </div>
  );
};

export default FormPageCounter;
