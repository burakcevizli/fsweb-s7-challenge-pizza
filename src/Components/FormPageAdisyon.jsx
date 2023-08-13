import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

const FormPageAdisyon = (props) => {

    const pizzaPrice = 85.50
    const [totalPrice,setTotalPrice] = useState(pizzaPrice)
    const {ekMalzemelerPrice} = props
    

    useEffect(() => {
        setTotalPrice((pizzaPrice * props.counter) + ekMalzemelerPrice);
      }, [props.counter , ekMalzemelerPrice]);
      

        
    

    

  return (
    <div className="AdisyonClass">
      <h3>Sipariş Toplamı</h3>
      <div className="Secimler">
        <h4>Secimler</h4>
        <h4>{ekMalzemelerPrice}</h4>
      </div>
      <div className="Toplam">
        <h4>Toplam</h4>
        <h4>{totalPrice}</h4>
      </div>
      <Button className="SiparisVer">Sipariş Ver</Button>
    </div>
  );
};

export default FormPageAdisyon;
