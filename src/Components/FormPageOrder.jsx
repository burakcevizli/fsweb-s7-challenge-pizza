import React from "react";
import FormPageSelector from "./FormPageRadio";
import FormPageHamur from "./FormPageHamur";
import FormPageEkMalzemeler from "./FormPageEkMalzemeler";

const FormPageOrder = () => {
  return (
    <div className="FPOMD">
      <h2>Position Absolute Acı Pizza</h2>
      <div className="FYP">
        <div className="FYPP">
          <p>85.50</p>
          <p>4.9</p>
          <p>(200)</p>
        </div>
        <div className="Paragraf">
          <p>
            Bu pizzamızı yemeyen bin pişman. Gelin bu tadın enfesliğinin sizde
            farkına varın. Dalından taze koparılmış ürünlerimizle kendinizi bu
            tazelikle yenilenmiş hissedeceksiniz. Sonrasında yazdığınız kodlar
            Seniurlarınız tarafından takdir görecek. Sizde çok çalışıp hakkınızı
            alamıyorsanız bu pizzadan tadarak daha başarılı bir yazılımcı
            olabilirsiniz. Birde pizza yemek için İtalyaya gitmenize gerek yok,
            o pizza size bir tık uzakta!
          </p>
        </div>
      </div>
      <div className="OrdersDiv">
        <FormPageSelector />
        <FormPageHamur />
      </div>
      <div className="EkMalzemeler">
        <FormPageEkMalzemeler />
      </div>
    </div>
  );
};

export default FormPageOrder;
