import React from "react";
import "./MainPage.css";
import { Link } from "react-router-dom";


const MainPage = () => {
  return (
    <div className="MainPageGenelDiv">
      <div className="Resim">
        <div className="Yazılar">
          <h1>Teknolojik Yemekler</h1>
          <p className="KodYazı">KOD ACIKTIRIR</p>
          <p className="PızzaYazı">PIZZA DOYURUR</p>
          <Link to="/orderpage">
            <button className="AcıktımButon">ACIKTIM</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
