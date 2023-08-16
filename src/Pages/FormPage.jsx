import React from "react";
import FormPageHeader from "../Components/FormPageHeader";
import FormPageOrder from "../Components/FormPageOrder";
import FormPageFooter from "../Components/FormPageFooter";


const FormPage = (props) => {
  

  return (
    <div>
      <FormPageHeader />
      <FormPageOrder setFisState = {props.setFisState}/>
      <FormPageFooter />
    </div>
  );
};

export default FormPage;
