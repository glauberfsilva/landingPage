import React from "react";

const Feature = () => {
  return (
    <section id="servicos" className="sectionServices">
      <div className="containerx2">
        <div className="servicos1">
          <img
            src="/images/icon-idealizacao.png"
            alt="logo-agency-tecnology"
            className="imgLogoIcon imgLogoIconx"
          />
          <br />

          <div className="textSerices">
            <strong>Idealização</strong>
            <br />
            <p>Criação e conceito do produto viável mínimo</p>
          </div>
        </div>

        <div className="servicos1">
          <img
            src="/images/icon-dev.png"
            alt="logo-agency-tecnology"
            className="imgLogoIcon imgLogoIconx"
          />
          <br />

          <div className="textSerices">
            <strong>Desenvolvimento</strong>
            <br />
            <p>Equipe técnica de desenvolvedores</p>
          </div>
        </div>

        <div className="servicos1">
          <img
            src="/images/icon-design.png"
            alt="logo-agency-tecnology"
            className="imgLogoIcon imgLogoIconx"
          />
          <br />

          <div className="textSerices">
            <strong>Design</strong>
            <br />
            <p>Desenvolvimento de interface do mvp</p>
          </div>
        </div>

        <div className="servicos1">
          <img
            src="/images/icon-delivery.png"
            alt="logo-agency-tecnology"
            className="imgLogoIcon imgLogoIconx"
          />
          <br />

          <div className="textSerices">
            <strong>Delivery</strong>
            <br />
            <p>Validação e publicação do app</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
