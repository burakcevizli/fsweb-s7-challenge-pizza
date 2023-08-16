import React from "react";
import icon1 from "../Assets/adv-aseets/icons/icon-1.png";
import icon2 from "../Assets/adv-aseets/icons/icon-2.png";
import icon3 from "../Assets/adv-aseets/icons/icon-3.png";
import insta0 from "../Assets/adv-aseets/insta/li-0.png";
import insta1 from "../Assets/adv-aseets/insta/li-1.png";
import insta2 from "../Assets/adv-aseets/insta/li-2.png";
import insta3 from "../Assets/adv-aseets/insta/li-3.png";
import insta4 from "../Assets/adv-aseets/insta/li-4.png";
import insta5 from "../Assets/adv-aseets/insta/li-5.png";
import "./FormPageFooter.css";

const FormPageFooter = () => {
  return (
    <div className="GENELDİV">
      <div className="footerDiv">
        <div className="solDiv">
          <h1 className="h1Class">Teknolojik Yemekler</h1>
          <ul>
            <li className="solUst">
              <img src={icon1} alt="Icon 1" />
              <p>1830.SOKAK EMRE SİTESİ 5/12 YENİMAHALLE ANKARA</p>
            </li>
            <li className="solUst">
              <img src={icon2} alt="Icon 2" />
              <p>1830.SOKAK EMRE SİTESİ 5/12 YENİMAHALLE ANKARA</p>
            </li>
            <li className="solUst">
              <img src={icon3} alt="Icon 3" />
              <p>1830.SOKAK EMRE SİTESİ 5/12 YENİMAHALLE ANKARA</p>
            </li>
          </ul>
        </div>

        <div className="ortaDiv">
          <h1 className="h1Class">Hot Menü</h1>
          <ul>
            <li>TERMİNAL PİZZA</li>
            <li>TERMİNAL PİZZA</li>
            <li>TERMİNAL PİZZA</li>
            <li>TERMİNAL PİZZA</li>
            <li>TERMİNAL PİZZA</li>
            <li>TERMİNAL PİZZA</li>
          </ul>
        </div>

        <div className="sagDiv">
          <h1 className="h1Class">Instagram</h1>
          <div className="instaResimler">
            <img src={insta0} alt="insta1"/>
            <img src={insta1} alt="insta1"/>
            <img src={insta2} alt="insta1"/>
            <img src={insta3} alt="insta1"/>
            <img src={insta4} alt="insta1"/>
            <img src={insta5} alt="insta1"/>
          </div>
        </div>
      </div>

      <div className="copyRight">
        <h6>@2023 Teknolojik Yemekler</h6>
        <img src={icon3} alt="Icon 3" />
      </div>
    </div>
  );
};

export default FormPageFooter;
