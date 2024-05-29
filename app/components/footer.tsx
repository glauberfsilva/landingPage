import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <section id="contato" className="sectionSobre">
      <div className="containerx2">
        <div className="space1Foot">
          <p className="title2">
            QUAL É O SEU BUSINESS?
          </p>
          <br />
          <p>
            Somos uma empresa de desenvolvimento de aplicativos vamos elevar seu
            negócio ao próximo nível? Entre em contato com nossa equipe e
            descubra como podemos ajudar a transformar suas ideias em realidade.
            Solicite uma consulta gratuita hoje mesmo!
          </p>
          <br/>
          <p>
            
          </p>
        </div>

          <div className="vl"></div>


        <div className="space2Foot">

        <div className="contatoIcons">
            <a href="#sobrenos" className="spaceMargin custom-font-weight hover-color-change">SOBRE</a>
          </div>

          <div className="contatoIcons">
            <a href="#servicos" className="spaceMargin custom-font-weight hover-color-change">SERVIÇOS</a>
          </div>

          <div className="contatoIcons">
            <a href="#cases" className="spaceMargin custom-font-weight hover-color-change">CASES</a>
          </div>

          <div className="contatoIcons">
            <a href="#infra" className="spaceMargin custom-font-weight hover-color-change">INFRA</a>
          </div>

          <div className="contatoIcons ">
            <a href="#inicio" className="spaceMargin custom-font-weight hover-color-change">
              INICIO
            </a>
          </div>
        </div>

        <div className="vl"></div>

        <div className="space3Foot">
          <img
            src="/images/logo-agency-tecnology.png"
            alt="logo-agency-tecnology"
            className="imgLogoIconFoot"
          />
          <br />
          <div className="contatoIcons">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
              />
            </svg>
            <Link href="https://wa.link/tvvb3c" passHref>
            <p className="spaceMargin">whatsapp: (27)99948-7999</p>
           </Link>  
           
          </div>

          <div className="contatoIcons">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>
            <p className="spaceMargin">appemidias@gmail.com</p>
          </div>

          <div className="contatoIcons">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
              />
            </svg>

            <p className="spaceMargin">
              Vitória - Espirito Santo | Home Office
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
