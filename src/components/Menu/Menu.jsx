import React from "react";
import { menu } from "../../Data";
import "./Menu.css";
const Menu = () => {
  return (
    <section className="menu section" id="menu">
      <h2 className="section__title" data-title="Cardápio ">
        Confira o melhor do nosso menu
      </h2>
      <div className="menu__grid container grid">
        {menu.map(({ img, title, description, price }, index) => {
          return (
            <div className="menu__item grid" key={index}>
              <div className="menu__img-wrapper">
                <img src={img} className="menu__img" alt="" />
              </div>
              <div className="menu__data">
                <h3 className="menu__title">{title}</h3>
                <p className="menu__description">{description}</p>
                <span className="menu__price">R$ {price}</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Menu;
