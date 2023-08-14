import React, { useState } from "react";
import FormPageAdisyon from "./FormPageAdisyon";

const FormPageCounter = (props) => {
  const [counter, setCounter] = useState(1);
  const {ekMalzemelerPrice , formObjesi} = props

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
      <FormPageAdisyon counter={counter} ekMalzemelerPrice = {ekMalzemelerPrice} formObjesi = {formObjesi}/>
    </div>
  );
};

export default FormPageCounter;
