import React from "react";
import "./SuccessPage.css";


const SuccessPage = (props) => {
  const {fisState} = props
  const ekMalzemeler = Object.keys(fisState).filter((key) => fisState[key] === true)
  
  return (
    <div className="successPageDiv">
      <div className="successTeknolojik">
        <h1>Teknolojik Yemekler</h1>
      </div>
      <div className="orderSuccesText">
        <p>TEBRIKLER!</p>
        <p>SIPARISINIZ ALINDI!</p>
      </div>
      <hr style={{color:"white",height:"3rem"}}/>
      <div>
      <h1 className="adisyonPizza">{fisState.Pizza}</h1>
      </div>
      <div className="genelFisDiv">
      <div className="successBilgi">
        <h3>Boyut : {fisState.Boyut}</h3>
        <h3>Adet : {fisState.AdetSayisi}</h3>
        <h3>Ek Malzemeler : {ekMalzemeler.join(" , ")} </h3>
        <h3>Hamur : {fisState.Hamur}</h3>
      </div>
      <div className="successFis">
        <h1>Siparis Toplamı</h1>
        <h2>Secimler : {fisState.SecimlerPrice}</h2>
        <h2>Toplam : {fisState.Fiyat}</h2>
      </div>
      </div>
      
    </div>
  );
};

export default SuccessPage;
