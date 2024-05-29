import React from "react";
import '../styles/styles.css'
import Link from "next/link";

const HeroSection = () => {
    return (
      <section className="backgroundBanner">
      <div className="containerx">
          <div className="content">
              <div className="text">
                  <p className="title mobiTitle">TECNOLOGIA E INOVAÇÃO</p>
                  <p className="title mobiTitle">DIGITAL PARA O SEU NEGÓCIO</p>
                  <br/>
                  <p>Somos especialistas em desenvolver produtos digitais
                  para os nossos clientes obterem melhores resultados de negócio.</p>
                  <br/>
                  <Link href="https://wa.link/tvvb3c" passHref>
                    <button className="custom-button">Saiba mais</button>
                 </Link>  
              </div>
          </div>
          <div className="spacer"></div>
      </div>
  </section>
  
    )}

   export default HeroSection