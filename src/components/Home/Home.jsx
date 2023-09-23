import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home__container container">
        <div className="home__content">
          <span className="home__subtitle">
            Bem-vindo(a) a nossa Cafeteria!
          </span>
          <h1 className="home__title">
            Descubra o verdadeiro sabor do café brasileiro
          </h1>
          <p className="home__description">
            Aqui você vai provar o melhor café da região e ganhar muita energia
            e disposição para vencer as lutas do dia a dia!
          </p>
          <div className="home__btns">
            <a href="#menu" className="btn">
              Veja o menu
            </a>
            <a href="#reservation" className="btn home__btn">
              Reservar uma mesa
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
