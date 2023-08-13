import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

const FormPageAdisyon = () => {
    
  return (
    <div className="AdisyonClass">
      <h3>Sipariş Toplamı</h3>
      <div className="Secimler">
        <h4>Secimler</h4>
        <h4>25</h4>
      </div>
      <div className="Toplam">
        <h4>Toplam</h4>
        <h4>100</h4>
      </div>
      <Button className="SiparisVer">Sipariş Ver</Button>
    </div>
  );
};

export default FormPageAdisyon;
