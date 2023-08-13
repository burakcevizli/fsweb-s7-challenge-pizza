import React, { useState } from "react";
import FormPageAdisyon from "./FormPageAdisyon";

const FormPageCounter = () => {
  const [counter, setCounter] = useState(1);

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
      <FormPageAdisyon counter={counter} />
    </div>
  );
};

export default FormPageCounter;
