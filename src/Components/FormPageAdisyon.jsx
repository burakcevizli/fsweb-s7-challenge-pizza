import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Button } from "reactstrap";

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
    counter
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
    Fiyat: totalPrice,
    Boyut: size,
    Biber: biber,
    Sogan: sogan,
    Sucuk: sucuk,
    Peynir: peynir,
    Müşteri: isim,
    MüşteriNotu: note,
    AdetSayisi : counter
  };

  const siparisClickHandler = () => {
    console.log(fis);
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
      <Button
        color="warning"
        type="submit"
        id="order-button"
        className="SiparisVer"
        onClick={siparisClickHandler}
      >
        ONAYLA
      </Button>
    </div>
  );
};

export default FormPageAdisyon;
