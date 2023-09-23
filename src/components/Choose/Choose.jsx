import React from "react";
import chooseImg from "../../assets/choose.jpg";
import coffeeMug from "../../assets/coffee-mug.svg";
import coffeeBeans2 from "../../assets/coffee-beans-2.svg";
import coffeeBeans3 from "../../assets/coffee-beans-3.svg";
import "./Choose.css";

const Choose = () => {
  return (
    <section className="choose section">
      <div className="choose__grid container grid">
        <div className="choose__content">
          <h2
            className="section__title title-left"
            data-title="Por que nós escolher ?"
          >
            Nós somos a melhor cafeteria da cidade e temos o melhor café para
            você!
          </h2>
          <p className="choose__description">
            Estamos na sua cidade há mais de 10 anos servindo bem os nossos
            clientes e amigos, sempre buscando novas maneiras de tornar o hábito
            de tomar café uma experiencia incrível em vários sentidos, venha nós
            fazer uma visita e comprove o que estamos falando para você!
          </p>
          <div className="choose__details grid">
            <div className="choose__details-item">
              <div className="choose__details-img-wrapper">
                <img src={coffeeMug} alt="" className="choose_details-img" />
              </div>
              <div>
                <h3 className="choose__details-title">Café é saudável</h3>
                <p className="choose__details-description">
                  Aproveite o melhor café da cidade com as pessoas que você mais
                  gosta e seja mais feliz.
                </p>
              </div>
            </div>

            <div className="choose__details-item">
              <div className="choose__details-img-wrapper">
                <img src={coffeeBeans2} alt="" className="choose_details-img" />
              </div>
              <div>
                <h3 className="choose__details-title">O melhor aroma</h3>
                <p className="choose__details-description">
                  Aproveite o melhor café da cidade com as pessoas que você mais
                  gosta e seja mais feliz.
                </p>
              </div>
            </div>

            <div className="choose__details-item">
              <div className="choose__details-img-wrapper">
                <img src={coffeeBeans3} alt="" className="choose_details-img" />
              </div>
              <div>
                <h3 className="choose__details-title">Grau de pureza</h3>
                <p className="choose__details-description">
                  Aproveite o melhor café da cidade com as pessoas que você mais
                  gosta e seja mais feliz.
                </p>
              </div>
            </div>
          </div>
        </div>
        <img src={chooseImg} alt="" className="choose_img" />
      </div>
    </section>
  );
};

export default Choose;
