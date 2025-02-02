import React, { useState} from "react";
import { FormGroup, Label, Input } from 'reactstrap';
import * as Yup from "yup";

const NameInputYup = (props) => {
  const [loginData, setLoginData] = useState({ name: "" });
  const [formErrors, setFormErrors] = useState({
    name: ""
  });
  
  

  const formSchema = Yup.object().shape({
    name: Yup.string()
      .required("İsim olmadan işlem devam edilemez. ")
      .min(3, "İsim en az 3 karakter olmalıdır")
  });

  const handleNameChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
    validateFormField(name, value);
    props.nameChangeHandler(e)
  };

  const validateFormField = (fieldName, value) => {
    Yup.reach(formSchema, fieldName)
      .validate(value)
      .then(() => {
        setFormErrors({ ...formErrors, [fieldName]: "" });
        props.setValid(false)
      })
      .catch((err) => {
        setFormErrors({ ...formErrors, [fieldName]: err.errors[0] });
        props.setValid(true)
      });
  };

  

  return (
    <FormGroup className="nameInput">
      <Label htmlFor="name-input">
        <h4>İsim</h4>
      </Label>
      <Input
        data-cy = "nameInput"
        className="NotInput"
        type="text"
        name="name"
        id="name-input"
        placeholder="İsminizi Yazar mısınız ?"
        onChange={handleNameChange}
        onBlur={() => validateFormField("name", loginData.name)}
      />
      {formErrors.name && <div className="error">{formErrors.name}</div>}
    </FormGroup>
  );
};

export default NameInputYup;
