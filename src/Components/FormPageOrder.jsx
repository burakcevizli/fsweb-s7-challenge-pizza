import React from "react";
import FormPageCounter from "./FormPageCounter";
import {Form, FormGroup, Label, Input} from "reactstrap";
import { useState } from "react";
import NameInputYup from "./NameInputYup";

const FormPageOrder = () => {
  const kucukBoyutFiyat = 50;
  const buyukBoyutFiyat = 70;

  const formObjesi = {
    isim: "Position Absolute Acı Pizza",
    pizzaAcıklama:
      " Bu pizzamızı yemeyen bin pişman. Gelin bu tadın enfesliğinin sizde farkına varın. Dalından taze koparılmış ürünlerimizle kendinizi butazelikle yenilenmiş hissedeceksiniz. Sonrasında yazdığınız kodlarSeniurlarınız tarafından takdir görecek. Sizde çok çalışıp hakkınızı alamıyorsanız bu pizzadan tadarak daha başarılı bir yazılımcı olabilirsiniz. Birde pizza yemek için İtalyaya gitmenize gerek yok , o pizza size bir tık uzakta! ",
  };

  const [ekMalzemelerPrice, setEkMalzemelerPrice] = useState(0);
  const [boyutSizePrice, setBoyutSizePrice] = useState(0);
  const [size, setSize] = useState("");
  const [biber, setBiber] = useState(false);
  const [sogan, setSogan] = useState(false);
  const [sucuk, setSucuk] = useState(false);
  const [peynir, setPeynir] = useState(false);
  const [isim, setİsim] = useState("");
  const [note, setNote] = useState("");

  const boyutClickHandler = (event) => {
    if (event.target.value === "kucuk") {
      setSize("Küçük");
      setBoyutSizePrice(kucukBoyutFiyat);
    } else if (event.target.value === "buyuk") {
      setSize("Büyük");
      setBoyutSizePrice(buyukBoyutFiyat);
    }
  };

  const nameChangeHandler = (event) => {
    setİsim(event.target.value);
  };

  const noteChangeHandler = (event) => {
    setNote(event.target.value);
  };

  const biberClickHandler = (event) => {
    const isChecked = event.target.checked;
    if (isChecked === true && event.target.name === "Biber") {
      setEkMalzemelerPrice(ekMalzemelerPrice + 5);
      setBiber(true);
    } else {
      setEkMalzemelerPrice(ekMalzemelerPrice - 5);
    }
  };
  const soganClickHandler = (event) => {
    const isChecked = event.target.checked;
    if (isChecked === true && event.target.name === "Sogan") {
      setEkMalzemelerPrice(ekMalzemelerPrice + 5);
      setSogan(true);
    } else {
      setEkMalzemelerPrice(ekMalzemelerPrice - 5);
    }
  };
  const sucukClickHandler = (event) => {
    const isChecked = event.target.checked;
    if (isChecked === true && event.target.name === "Sucuk") {
      setEkMalzemelerPrice(ekMalzemelerPrice + 5);
      setSucuk(true);
    } else {
      setEkMalzemelerPrice(ekMalzemelerPrice - 5);
    }
  };
  const peynirClickHandler = (event) => {
    const isChecked = event.target.checked;
    if (isChecked === true && event.target.name === "Peynir") {
      setEkMalzemelerPrice(ekMalzemelerPrice + 5);
      setPeynir(true);
    } else {
      setEkMalzemelerPrice(ekMalzemelerPrice - 5);
    }
  };

  return (
    <div className="FPOMD">
      <h2>{formObjesi.isim}</h2>
      <div className="FYP">
        <div className="FYPP">
          <p>{kucukBoyutFiyat}₺</p>
          <p>5.3</p>
          <p>200</p>
        </div>
        <div className="Paragraf">
          <p>{formObjesi.pizzaAcıklama}</p>
        </div>
      </div>
      <div className="OrdersDiv">
        <Form id="pizza-form">
          <FormGroup>
            <h4>
              Boyut Seç <span className="yıldız">*</span>
            </h4>
            <FormGroup check>
              <Label check>
                <Input
                  type="radio"
                  name="radio1"
                  value="kucuk"
                  onChange={boyutClickHandler}
                />
                Küçük
              </Label>
            </FormGroup>
            <br />
            <FormGroup check>
              <Label check>
                <Input
                  type="radio"
                  name="radio1"
                  value="buyuk"
                  onChange={boyutClickHandler}
                />
                Büyük
              </Label>
            </FormGroup>
          </FormGroup>
        </Form>
        <Form>
          <FormGroup>
            <Label htmlFor="exampleSelect">
              <h4>
                Hamur Seçiniz <span className="yıldız">*</span>
              </h4>
            </Label>
            <Input type="select" name="select" id="exampleSelect">
              <option value="" disabled selected>
                Hamur Seçiniz
              </option>
              <option>İnce</option>
              <option>Orta</option>
              <option>Kalın</option>
            </Input>
          </FormGroup>
        </Form>
      </div>
      <div className="EkMalzemeler">
        <h3>Ek Malzemeler</h3>
        <p>En Fazla 10 Malzeme Seçebilirsiniz. 5₺. </p>
        <div className="CheckBoxDiv">
          <FormGroup check>
            <Label check>
              <Input data-cy="biber" type="checkbox" name="Biber" onClick={biberClickHandler} />
              Biber
            </Label>
          </FormGroup>

          <FormGroup check>
            <Label check>
              <Input data-cy="sogan" type="checkbox" name="Sogan" onClick={soganClickHandler} />
              Soğan
            </Label>
          </FormGroup>

          <FormGroup check>
            <Label check>
              <Input data-cy="sucuk" type="checkbox" name="Sucuk" onClick={sucukClickHandler} />
              Sucuk
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input
                type="checkbox"
                data-cy="peynir"
                name="Peynir"
                onClick={peynirClickHandler}
              />
              Mozarella Peyniri
            </Label>
          </FormGroup>
        </div>
      </div>
      <div className="NoteClass">
        <NameInputYup nameChangeHandler = {nameChangeHandler}/>
        <FormGroup>
          <Label htmlFor="special-text">
            <h4>Sipariş Notu</h4>
          </Label>
          <Input
            className="NotInput"
            type="text"
            name="email"
            id="special-text"
            placeholder="Siparişine eklemek istediğin bir not var mı ?"
            onChange={noteChangeHandler}
          />
        </FormGroup>
      </div>
      <hr className="Hr" />

      {/* // COUNTER PAGE OLDUGU KISIM */}
      <div className="CounterAdisyon">
        <FormPageCounter
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
          
        />
      </div>
    </div>
  );
};

export default FormPageOrder;
