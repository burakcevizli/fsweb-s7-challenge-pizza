import React from "react";
import FormPageCounter from "./FormPageCounter";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { useState } from "react";
import { useEffect } from "react";

const FormPageOrder = () => {


  const [ekMalzemelerPrice , setEkMalzemelerPrice] = useState(0)

  const kucukHamurClickHandler = (event)=>{
    const kucuk = event.target.value;
    kucuk === "kucuk" ? setEkMalzemelerPrice(ekMalzemelerPrice + 20) : setEkMalzemelerPrice(ekMalzemelerPrice + 30)
  }

  const biberClickHandler = (event) => {
    const isChecked = event.target.checked;
    isChecked == true ? setEkMalzemelerPrice(ekMalzemelerPrice + 5) : setEkMalzemelerPrice(ekMalzemelerPrice -5)
  }





  return (
    <div className="FPOMD">
      <h2>Position Absolute Acı Pizza</h2>
      <div className="FYP">
        <div className="FYPP">
          <p>85.50</p>
          <p>4.9</p>
          <p>(200)</p>
        </div>
        <div className="Paragraf">
          <p>
            Bu pizzamızı yemeyen bin pişman. Gelin bu tadın enfesliğinin sizde
            farkına varın. Dalından taze koparılmış ürünlerimizle kendinizi bu
            tazelikle yenilenmiş hissedeceksiniz. Sonrasında yazdığınız kodlar
            Seniurlarınız tarafından takdir görecek. Sizde çok çalışıp hakkınızı
            alamıyorsanız bu pizzadan tadarak daha başarılı bir yazılımcı
            olabilirsiniz. Birde pizza yemek için İtalyaya gitmenize gerek yok,
            o pizza size bir tık uzakta!
          </p>
        </div>
      </div>
      <div className="OrdersDiv">
      <Form>
            <FormGroup >
          <h4>Boyut Seç <span className="yıldız">*</span></h4>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" value="kucuk" onClick={kucukHamurClickHandler} />
              Küçük
            </Label>
          </FormGroup>
          
          <FormGroup check >
            <Label check>
              <Input type="radio" name="radio1" onClick={kucukHamurClickHandler}/>
              Büyük
            </Label>
          </FormGroup>
        </FormGroup>
        </Form>
        <Form>
      <FormGroup>
        <Label htmlFor="exampleSelect"><h4>Hamur Seçiniz <span className="yıldız">*</span></h4> </Label>
        <Input type="select" name="select" id="exampleSelect" >
        <option value="" disabled>Hamur Seçiniz</option>
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
          <Input type="checkbox" name="Biber" onClick={biberClickHandler}/>
          Biber
        </Label>
      </FormGroup>

      <FormGroup check>
        <Label check>
          <Input type="checkbox" name="Biber" onClick={biberClickHandler}/>
          Soğan
        </Label>
      </FormGroup>

      <FormGroup check>
        <Label check>
          <Input type="checkbox" name="Biber" onClick={biberClickHandler}/>
          Sucuk
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
      <hr className="Hr"/>

      {/* // COUNTER PAGE OLDUGU KISIM */}
      <div className="CounterAdisyon">
        <FormPageCounter ekMalzemelerPrice = {ekMalzemelerPrice}/>
      </div>
    </div>
  );
};

export default FormPageOrder;
