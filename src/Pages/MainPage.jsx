import React from "react";
import "./MainPage.css";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const MainPage = () => {
  return (
    <div className="MainPageGenelDiv">
      <div className="Resim">
        <div className="Yazılar">
          <h1>Teknolojik Yemekler</h1>
          <p className="KodYazı">KOD ACIKTIRIR</p>
          <p className="PızzaYazı">PIZZA DOYURUR</p>
          <Link to="/pizza">
            <Button color="warning" className="AcıktımButon">
              ACIKTIM
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
