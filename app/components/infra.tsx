import Link from "next/link";
import React from "react";

const Infra = () => {
  return (
    <section id="infra" className="backgroundBannerInfra">
      <div className="box1Infra">
        <p className="title2x">ALTA INFRAESTRUTURA E DESEMPENHO</p>
        <p>PARA SUA APLICAÇÃO</p>
      </div>
      <div className="box2Infra">
        <div className="containerx3Infra">
          <div className="casesx">
            <img
              src="/images/icon-infra1.png"
              alt="logo-agency-tecnology"
              className="imgLogoInfraIcon"
            />
            <br />

            <div className="textSerices">
              <strong>BACKUPS</strong>
              <br />
            </div>
          </div>

          <div className="casesx">
            <img
              src="/images/icon-cloud.png"
              alt="logo-agency-tecnology"
              className="imgLogoInfraIcon"
            />
            <br />

            <div className="textSerices">
              <strong>CLOUD</strong>
              <br />
            </div>
          </div>

          <div className="casesx">
            <img
              src="/images/icon-cloud.png"
              alt="logo-agency-tecnology"
              className="imgLogoInfraIcon"
            />
            <br />

            <div className="textSerices">
              <strong>HOSPEDAGEM</strong>
              <br />
            </div>
          </div>
        </div>

        <div className="containerx3Infra">
          <div className="casesx">
            <img
              src="/images/icon-infra1.png"
              alt="logo-agency-tecnology"
              className="imgLogoInfraIcon"
            />
            <br />

            <div className="textSerices">
              <strong>DOMÍNIO</strong>
              <br />
            </div>
          </div>

          <div className="casesx">
            <img
              src="/images/icon-cloud.png"
              alt="logo-agency-tecnology"
              className="imgLogoInfraIcon"
            />
            <br />

            <div className="textSerices">
              <strong>SECURITY</strong>
              <br />
            </div>
          </div>

          <div className="casesx">
            <img
              src="/images/icon-cloud.png"
              alt="logo-agency-tecnology"
              className="imgLogoInfraIcon"
            />
            <br />

            <div className="textSerices">
              <strong>DATABASE</strong>
              <br />
            </div>
          </div>
        </div>

        <div className="containerx3InfraImg">
          
            <img
              src="/images/server.png"
              alt="logo-agency-tecnology"
              className="imgLogoInfraIconInfra"
            />

        </div>
      </div>
      <div className="box3Infra">
      <Link href="https://wa.link/tvvb3c" passHref>
      <button className="custom-button2Infra">Orçar uma aplicação</button>
      </Link>
      </div>
    </section>
  );
};

export default Infra;
