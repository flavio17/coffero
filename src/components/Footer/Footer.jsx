import React from "react";
import logo from "../../assets/logo.png";
import {
  FaRegEnvelope,
  FaCaretRight,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaCar,
  FaInstagram,
} from "react-icons/fa";
import { AiOutlinePhone } from "react-icons/ai";
import { MdOutlineLocationOn } from "react-icons/md";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__grid container grid">
        <div className="footer__content">
          <a href="#home" className="footer__logo">
            <img src={logo} alt="" className="footer__logo-img" />
          </a>
          <p className="footer__description">
            Estamos aqui para servir a sua familia da melhor forma possível, com
            os melhores produtos e as melhores receitas para satisfazer o
            paladar dos nossos clientes e amigos.
          </p>
          <ul className="footer__contact">
            <li className="footer__contact-item">
              <AiOutlinePhone className="icon" />
              (74) 9.9980-9916
            </li>
            <li className="footer__contact-item">
              <MdOutlineLocationOn className="icon" />
              3º Travessa, 21 de Abril
            </li>
            <li className="footer__contact-item">
              <FaRegEnvelope className="icon" /> flavio17_canarana@hotmail.com
            </li>
          </ul>
        </div>
        <div className="footer__content">
          <h3 className="footer__title">Links rápidos</h3>
          <ul className="footer__links">
            <li>
              <a href="#about" className="footer__link">
                <FaCaretRight className="icon" />
                Sobre nós
              </a>
            </li>
            <li>
              <a href="#menu" className="footer__link">
                <FaCaretRight className="icon" />
                Menu
              </a>
            </li>
            <li>
              <a href="#features" className="footer__link">
                <FaCaretRight className="icon" />
                Recursos
              </a>
            </li>
            <li>
              <a href="#gallery" className="footer__link">
                <FaCaretRight className="icon" />
                Galeria de fotos
              </a>
            </li>
            <li>
              <a href="#team" className="footer__link">
                <FaCaretRight className="icon" />
                Nossa Equipe
              </a>
            </li>
            <li>
              <a href="#reservation" className="footer__link">
                <FaCaretRight className="icon" />
                Reservas
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__content">
          <h3 className="footer__title">Horário de funcionamento</h3>
          <div className="footer__opening-hour">
            <ul className="opening__hour-list">
              <li className="opening__hour-item">
                <span>Segunda</span>
                <span>8:00 - 19:30</span>
              </li>
              <li className="opening__hour-item">
                <span>Terça</span>
                <span>8:00 - 19:30</span>
              </li>
              <li className="opening__hour-item">
                <span>Quarta</span>
                <span>8:00 - 19:30</span>
              </li>
              <li className="opening__hour-item">
                <span>Quinta</span>
                <span>8:00 - 19:30</span>
              </li>
              <li className="opening__hour-item">
                <span>Sexta</span>
                <span>8:00 - 19:30</span>
              </li>
              <li className="opening__hour-item">
                <span>Sábado</span>
                <span>8:00 - 19:30</span>
              </li>
              <li className="opening__hour-item">
                <span>Domingo</span>
                <span>Fechado</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__content">
          <h3 className="footer__title">Últimas noticias</h3>
          <p className="footer__description">
            Inscreva-se na nossa lista de amigos e fique por dentro das últimas
            atualizações e novidades.
          </p>
          <form action="" className="subscribe__form">
            <input
              type="email"
              placeholder="Seu melhor e-mail"
              className="form__input subscribe__input"
            />
            <button className="btn btn__flex subscribe__btn">
              <FaRegEnvelope />
              Inscreva-se agora
            </button>
          </form>
          <div className="footer__socials">
            <h3 className="footer__social-follow">
              Siga as nossas redes sociais
            </h3>
            <div className="footer__social-links">
              <a href="" className="footer__social-link">
                <FaFacebookF />
              </a>
              <a href="" className="footer__social-link">
                <FaTwitter />
              </a>
              <a href="" className="footer__social-link">
                <FaLinkedinIn />
              </a>
              <a href="" className="footer__social-link">
                <FaYoutube />
              </a>
              <a href="" className="footer__social-link">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>
      <p className="copyright__text">
        &copy; Copyright 2023 <span>Coffero</span> - Todos os direitos
        reservados!
        <br />
        Desenvolvido com &#10084; por Flávio
      </p>
    </footer>
  );
};

export default Footer;
