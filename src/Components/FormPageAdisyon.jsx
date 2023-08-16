import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Button } from "reactstrap";
import {Link } from "react-router-dom";

const FormPageAdisyon = (props) => {
  const pizzaPrice = 0;
  const [totalPrice, setTotalPrice] = useState(pizzaPrice);
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
    counter,
    setFisState,
    hamur
  } = props;

  useEffect(() => {
    setTotalPrice(
      pizzaPrice * counter +
        ekMalzemelerPrice * counter +
        boyutSizePrice * counter
    );
  }, [counter, ekMalzemelerPrice, boyutSizePrice]);

  const fis = {
    Pizza: formObjesi.isim,
    PizzaDetay: formObjesi.pizzaAcıklama,
    Fiyat: totalPrice + "₺",
    Boyut: size,
    Biber: biber,
    Sogan: sogan,
    Sucuk: sucuk,
    Peynir: peynir,
    Müşteri: isim,
    MüşteriNotu: note,
    AdetSayisi : counter,
    Hamur : hamur,
    SecimlerPrice : ekMalzemelerPrice + boyutSizePrice + "₺"
  };
  
  const siparisClickHandler = () => {
    console.log(fis);
    setFisState(fis)
  };

  return (
    <div className="AdisyonClass">
      <h3>Sipariş Toplamı</h3>
      <div className="Secimler">
        <h4>Secimler</h4>
        <h4>{ekMalzemelerPrice + boyutSizePrice} ₺</h4>
      </div>
      <div className="Toplam">
        <h4>Toplam</h4>
        <h4>{totalPrice} ₺</h4>
      </div>
      <Link to="/successpage">
      <Button
        color="warning"
        type="submit"
        id="order-button"
        className="SiparisVer"
        onClick={siparisClickHandler}
        data-cy = "siparisVer"
      >
        SIPARIS VER
      </Button>
      </Link>
    </div>
  );
};

export default FormPageAdisyon;
