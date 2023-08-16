import React from "react";
import "./SuccessPage.css";

const SuccessPage = (props) => {
  return (
    <div className="successPageDiv">
      <div className="successTeknolojik">
        <h1>Teknolojik Yemekler</h1>
      </div>
      <div className="orderSuccesText">
        <p>TEBRIKLER!</p>
        <p>SIPARISINIZ ALINDI!</p>
      </div>
      <div>FİS : {props.fisState.Boyut}</div>
    </div>
  );
};

export default SuccessPage;
