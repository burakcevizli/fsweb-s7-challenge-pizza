import React, { useState } from "react";

const FormPageCounter = () => {
  const [counter, setCounter] = useState(1);

  const arttir = () => {
    setCounter(counter + 1);
  }

  const azalt = () => {
    setCounter(counter - 1);
  }

  return (
    <div className="ButonCounter">
      <button className="Arttır" onClick={azalt}>-</button>
      <p>{counter}</p>
      <button className="Eksilt" onClick={arttir}>+</button>
    </div>
  );
}

export default FormPageCounter;
