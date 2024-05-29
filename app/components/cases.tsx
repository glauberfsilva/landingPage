import Link from "next/link";
import React from "react";

const Cases = () => {
  return (
    <section id="cases" className="backgroundBanner2">
      <div className="box1">
        <p className="title2x">CASES DE NEGÓCIOS</p>
        <p>PROJETOS WEB E MOBILE</p>
      </div>
      <div className="box2">
        <div className="containerx3">
          <div className="casesx">
            <img
              src="/images/port2.png"
              alt="logo-agency-tecnology"
              className="imgLogoPort"
            />
            <br />

            <div className="textSerices">
              <strong>Acervo de Músicas</strong>
              <br />
              <p>
                Aplicativo para músicos e quem está aprendendo a tocar algum
                instrumento
              </p>
            </div>
          </div>

          <div className="casesx">
            <img
              src="/images/port3.png"
              alt="logo-agency-tecnology"
              className="imgLogoPort"
            />
            <br />

            <div className="textSerices">
              <strong>CRM Desktop</strong>
              <br />
              <p>
                Gestão de Relacionamento com o cliente para o acompanhamento de
                todas as fases do prospect da empresa.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="containerx3">
          <div className="casesx">
            <img
              src="/images/port1.png"
              alt="logo-agency-tecnology"
              className="imgLogoPort"
            />
            <br />

            <div className="textSerices">
              <strong>Mobilidade Urbanda</strong>
              <br />
              <p>
                Aplicativo com objetivo de atender chamades de passageiros e
                motoristas, integrado com maps e apis de localização
              </p>
            </div>
          </div>

          <div className="casesx">
            <img
              src="/images/port4.png"
              alt="logo-agency-tecnology"
              className="imgLogoPort"
            />
            <br />

            <div className="textSerices">
              <strong>Marketplace</strong>
              <br />
              <p>
                App que oferece uma vasta lista de lojas e estabelecimentos
                locais com sistema de pontos e voucher de descontos
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="box3">
        <Link href="https://wa.link/tvvb3c" passHref>
          <button className="custom-button2">Orçar uma aplicação</button>
        </Link>
      </div>
    </section>
  );
};

export default Cases;
