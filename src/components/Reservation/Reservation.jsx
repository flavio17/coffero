import React from "react";
import { FaRegBookmark } from "react-icons/fa";
import shapeTwo from "../../assets/shape-2.png";
import shapeThree from "../../assets/shape-3.png";
import "./Reservation.css";

const Reservation = () => {
  return (
    <section className="reservation container" id="reservation">
      <h2 className="section__title" data-title="Reservas">
        Reserve uma mesa
      </h2>
      <form action="" className="reservation__form grid">
        <div className="form__input-div">
          <input type="text" placeholder="Seu nome" className="form__input" />
        </div>
        <div className="form__input-div">
          <input
            type="email"
            placeholder="Seu melhor email"
            className="form__input"
          />
        </div>
        <div className="form__input-div">
          <input
            type="text"
            placeholder="Seu telefone"
            className="form__input"
          />
        </div>
        <div className="form__input-div">
          <input
            type="text"
            placeholder="Data ex: dd/mm/yy"
            className="form__input"
          />
        </div>
        <div className="form__input-div">
          <input
            type="text"
            placeholder="Hora ex: 19:30"
            className="form__input"
          />
        </div>
        <div className="form__input-div">
          <input
            type="text"
            placeholder="Número de pessoas"
            className="form__input"
          />
        </div>
        <div className="form__input-textarea form__input-textarea">
          <textarea
            className="form__input"
            placeholder="Sua mensagem"
          ></textarea>
        </div>
        <button className="btn btn__flex reservation__btn">
          <FaRegBookmark />
          Reservar
        </button>
      </form>
      <img src={shapeTwo} className="shape__two" alt="" />
      <img src={shapeThree} alt="" className="shape__three" />
    </section>
  );
};

export default Reservation;
