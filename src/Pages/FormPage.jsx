import React from "react";
import FormPageHeader from "../Components/FormPageHeader";
import FormPageOrder from "../Components/FormPageOrder";


const FormPage = (props) => {
  

  return (
    <div>
      <FormPageHeader />
      <FormPageOrder setFisState = {props.setFisState}/>
    </div>
  );
};

export default FormPage;
