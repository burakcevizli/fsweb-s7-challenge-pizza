import React, { useEffect } from "react";
import FormPageCounter from "./FormPageCounter";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { useState } from "react";

const FormPageOrder = () => {

  const formObjesi = {
    isim: "Position Absolute Acı Pizza",
    pizzaAcıklama: " Bu pizzamızı yemeyen bin pişman. Gelin bu tadın enfesliğinin sizde farkına varın. Dalından taze koparılmış ürünlerimizle kendinizi butazelikle yenilenmiş hissedeceksiniz. Sonrasında yazdığınız kodlarSeniurlarınız tarafından takdir görecek. Sizde çok çalışıp hakkınızı alamıyorsanız bu pizzadan tadarak daha başarılı bir yazılımcı olabilirsiniz. Birde pizza yemek için İtalyaya gitmenize gerek yok , o pizza size bir tık uzakta! ",
    boyut: size,
    biber: biber
  };

  const [ekMalzemelerPrice, setEkMalzemelerPrice] = useState(0);
  const [size , setSize] = useState("")
  const [biber,setBiber] = useState(false)
  
  const hamurClickHandler = (event) => {
    if(event.target.value == "kucuk") {
      setSize("Küçük")
      setEkMalzemelerPrice(ekMalzemelerPrice + 20)
    }else if (event.target.value == "buyuk"){
      setSize("Büyük")
      setEkMalzemelerPrice(ekMalzemelerPrice + 40)
    }
  }

  const biberClickHandler = (event) => {
    const isChecked = event.target.checked;
    isChecked == true
      ? setEkMalzemelerPrice(ekMalzemelerPrice + 5)
      : setEkMalzemelerPrice(ekMalzemelerPrice - 5)
      isChecked == true ? setBiber(event.target.name) : setBiber(false)
  };

  return (
    <div className="FPOMD">
      <h2>{formObjesi.isim}</h2>
      <div className="FYP">
        <div className="FYPP">
          <p>85.50</p>
          <p>4.9</p>
          <p>(200)</p>
        </div>
        <div className="Paragraf">
          <p>
            {formObjesi.pizzaAcıklama}
          </p>
        </div>
      </div>
      <div className="OrdersDiv">
        <Form>
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
                  onChange={hamurClickHandler}
                />
                Küçük
              </Label>
            </FormGroup>

            <FormGroup check>
              <Label check>
                <Input
                  type="radio"
                  name="radio1"
                  value="buyuk"
                  onChange={hamurClickHandler}
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
              <option value="" disabled>
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
        <div className="EkMalzemeler">
          <h3>Ek Malzemeler</h3>
          <p>En Fazla 10 Malzeme Seçebilirsiniz. 5₺. </p>
          <div className="CheckBoxDiv">
            <FormGroup check>
              <Label check>
                <Input
                  type="checkbox"
                  name="Biber"
                  onClick={biberClickHandler}
                />
                Biber
              </Label>
            </FormGroup>

            <FormGroup check>
              <Label check>
                <Input
                  type="checkbox"
                  name="Sogan"
                  onClick={biberClickHandler}
                />
                Soğan
              </Label>
            </FormGroup>

            <FormGroup check>
              <Label check>
                <Input
                  type="checkbox"
                  name="Sucuk"
                  onClick={biberClickHandler}
                />
                Sucuk
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input
                  type="checkbox"
                  name="Peynir"
                  onClick={biberClickHandler}
                />
                Mozarella Peyniri
              </Label>
            </FormGroup>
          </div>
        </div>
      </div>
      <div className="NoteClass">
        <h4>Sipariş Notu</h4>
        <FormGroup>
          <Label htmlFor="exampleEmail"></Label>
          <Input
            className="NotInput"
            type="text"
            name="email"
            id="exampleEmail"
            placeholder="Siparişine eklemek istediğin bir not var mı ?"
          />
        </FormGroup>
      </div>
      <hr className="Hr" />

      {/* // COUNTER PAGE OLDUGU KISIM */}
      <div className="CounterAdisyon">
        <FormPageCounter ekMalzemelerPrice={ekMalzemelerPrice} formObjesi = {formObjesi} size = {size} biber = {biber}/>
      </div>
    </div>
  );
};

export default FormPageOrder;
