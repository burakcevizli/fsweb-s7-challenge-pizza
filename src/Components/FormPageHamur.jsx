import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

const FormPageHamur = () => {

  return (
    <Form>
      <FormGroup>
        <Label for="exampleSelect"><h4>Hamur Seçiniz <span className="yıldız">*</span></h4> </Label>
        <Input type="select" name="select" id="exampleSelect" >
        <option value="" disabled>Hamur Seçiniz</option>
          <option>İnce</option>
          <option>Orta</option>
          <option>Kalın</option>
        </Input>
      </FormGroup>
    </Form>
  );
};
export default FormPageHamur;
