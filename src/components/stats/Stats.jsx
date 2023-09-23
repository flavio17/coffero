import React from "react";
import coffeeShop from "../../assets/coffee-shop.svg";
import experience from "../../assets/experience.svg";
import coffeeCup from "../../assets/coffee-cup.svg";
import chef from "../../assets/chef.svg";
import "./Stats.css";

const Stats = () => {
  return (
    <section className="stats section">
      <div className="stats__grid container grid">
        <div className="stats__item">
          <div className="stats__img-wrapper">
            <img src={coffeeShop} alt="" className="stats__img" />
          </div>
          <div>
            <p className="stats__no">+ 1500</p>
            <h3 className="stats__title">Copos servidos</h3>
          </div>
        </div>

        <div className="stats__item">
          <div className="stats__img-wrapper">
            <img src={coffeeCup} alt="" className="stats__img" />
          </div>
          <div>
            <p className="stats__no">+ 300</p>
            <h3 className="stats__title">Clientes satisfeitos</h3>
          </div>
        </div>

        <div className="stats__item">
          <div className="stats__img-wrapper">
            <img src={experience} alt="" className="stats__img" />
          </div>
          <div>
            <p className="stats__no">+ 12</p>
            <h3 className="stats__title">Anos de experiência</h3>
          </div>
        </div>

        <div className="stats__item">
          <div className="stats__img-wrapper">
            <img src={chef} alt="" className="stats__img" />
          </div>
          <div>
            <p className="stats__no">+ 18</p>
            <h3 className="stats__title">Chefes Profissionais</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
