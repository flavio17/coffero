import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper/modules";
import { offer } from "../../Data";
import "./Offer.css";

const Offer = () => {
  return (
    <section className="offer section" id="section">
      <h2 className="section__title" data-title="Ofertas">
        Confira as nossa ofertas especiais para você!
      </h2>
      <Swiper
        spaceBetween={30}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="container"
      >
        {offer.map(({ img, title, discount, description }, index) => {
          return (
            <SwiperSlide className="offer__item" key={index}>
              <div className="offer__img-wrapper">
                <img src={img} className="offer__img" alt="" />
              </div>
              <div className="offer__content">
                <h3 className="offer__title">{title}</h3>
                <span className="offer__discount">{discount}</span>
                <p className="offer__description">{description}</p>
                <a href="" className="btn">
                  Comprar agora!
                </a>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Offer;
