import React, { useState } from "react";
import FormPageAdisyon from "./FormPageAdisyon";

const FormPageCounter = (props) => {
  const [counter, setCounter] = useState(1);
  const {
    ekMalzemelerPrice,
    formObjesi,
    size,
    biber,
    isim,
    sogan,
    sucuk,
    peynir,
    note,
    boyutSizePrice,
    setFisState,
    hamur,
    isValid
  } = props;

  const arttir = () => {
    setCounter(counter + 1);
  };

  const azalt = () => {
    setCounter(Math.max(counter - 1, 1));
  };

  return (
    <div className="ButonCounter">
      <div className="CounterSide">
        <button className="Eksilt" onClick={azalt}>
          -
        </button>

        <p className="counterSayaci">{counter}</p>

        <button className="Arttır" onClick={arttir}>
          +
        </button>
      </div>

      <FormPageAdisyon
        counter={counter}
        ekMalzemelerPrice={ekMalzemelerPrice}
        formObjesi={formObjesi}
        size={size}
        biber={biber}
        isim={isim}
        sogan={sogan}
        sucuk={sucuk}
        peynir={peynir}
        note={note}
        boyutSizePrice={boyutSizePrice}
        setFisState={setFisState}
        hamur={hamur}
        isValid = {isValid}
      />
    </div>
  );
};

export default FormPageCounter;
