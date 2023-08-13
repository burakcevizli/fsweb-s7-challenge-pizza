import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

const FormPageNote = () => {
  return (
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
  );
};
export default FormPageNote;
