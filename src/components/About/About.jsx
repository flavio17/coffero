import React from "react";
import { FiCheck } from "react-icons/fi";
import aboutImg from "../../assets/about-img.jpg";
import "./About.css";

const About = () => {
  return (
    <section className="about section" id="about">
      <div className="about__grid container grid">
        <div className="about__img-wrapper">
          <img src={aboutImg} className="about__img" alt="" />
        </div>
        <div className="about__content">
          <h2 className="section__title title-left" data-title="Sobre nós">
            A melhor qualidade e o sabor original do café para você
          </h2>
          <p className="about__description">
            Dentre as muitas variedades de café, nós temos as melhores
            disponíveis no mercado brasileiro, para oferecer à você, nosso amigo
            e cliente, então venha conhecer o verdadeiro sabor do melhor café da
            região!
          </p>
          <div className="about__details grid">
            <p className="about__details-description">
              <FiCheck />
              Beber café todo dia te deixa mais feliz
            </p>
            <p className="about__details-description">
              <FiCheck />
              Café faz bem para o corpo humano
            </p>
            <p className="about__details-description">
              <FiCheck />
              Beber café te deixa mais acordado
            </p>
          </div>
          <a href="#team" className="btn">
            Nossos experts
          </a>
        </div>
      </div>
    </section>
  );
};
/** 1h minutos */
export default About;
