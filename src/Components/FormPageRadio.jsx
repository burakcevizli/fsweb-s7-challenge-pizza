import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const FormPageSelector = () =>{


    return (
        <Form>
            <FormGroup >
          <h4>Boyut Seç <span className="yıldız">*</span></h4>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" />
              Küçük
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" />
              Orta
            </Label>
          </FormGroup>
          <FormGroup check disabled>
            <Label check>
              <Input type="radio" name="radio1" />
              Büyük
            </Label>
          </FormGroup>
        </FormGroup>
        </Form> 
        )
}
export default FormPageSelector


