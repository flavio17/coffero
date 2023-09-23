import React from "react";
import chef1 from "../../assets/team-1.jpg";
import chef2 from "../../assets/team-2.jpg";
import chef3 from "../../assets/team-3.jpg";
import chef4 from "../../assets/team-4.jpg";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaTiktok,
  FaInstagram,
} from "react-icons/fa";
import "./Team.css";

const Team = () => {
  return (
    <section className="team section" id="team">
      <h2 className="section__title" data-title="Equipe">
        Conheça nosso time de especialistas
      </h2>
      <div className="team__grid grid container">
        <div className="team__item">
          <img src={chef1} alt="" className="team__img" />
          <div className="team__data">
            <h3 className="team__title">Helena Rizzo</h3>
            <p className="team__job">Master chef</p>
          </div>
          <div className="team__social">
            <a href="" className="team__social-link">
              <FaFacebookF />
            </a>
            <a href="" className="team__social-link">
              <FaLinkedinIn />
            </a>
            <a href="" className="team__social-link">
              <FaTwitter />
            </a>
            <a href="" className="team__social-link">
              <FaYoutube />
            </a>
            <a href="" className="team__social-link">
              <FaTiktok />
            </a>
          </div>
        </div>
        <div className="team__item">
          <img src={chef2} alt="" className="team__img" />
          <div className="team__data">
            <h3 className="team__title">Olivier Anquier</h3>
            <p className="team__job">Master chef</p>
          </div>
          <div className="team__social">
            <a href="" className="team__social-link">
              <FaFacebookF />
            </a>
            <a href="" className="team__social-link">
              <FaLinkedinIn />
            </a>
            <a href="" className="team__social-link">
              <FaTwitter />
            </a>
            <a href="" className="team__social-link">
              <FaYoutube />
            </a>
          </div>
        </div>

        <div className="team__item">
          <img src={chef3} alt="" className="team__img" />
          <div className="team__data">
            <h3 className="team__title">Henrique Fogaça </h3>
            <p className="team__job">Master chef</p>
          </div>
          <div className="team__social">
            <a href="" className="team__social-link">
              <FaFacebookF />
            </a>
            <a href="" className="team__social-link">
              <FaLinkedinIn />
            </a>
            <a href="" className="team__social-link">
              <FaTwitter />
            </a>
            <a href="" className="team__social-link">
              <FaYoutube />
            </a>
          </div>
        </div>

        <div className="team__item">
          <img src={chef4} alt="" className="team__img" />
          <div className="team__data">
            <h3 className="team__title">Paola Carosella</h3>
            <p className="team__job">Master chef</p>
          </div>
          <div className="team__social">
            <a href="" className="team__social-link">
              <FaFacebookF />
            </a>
            <a href="" className="team__social-link">
              <FaLinkedinIn />
            </a>
            <a href="" className="team__social-link">
              <FaTwitter />
            </a>
            <a href="" className="team__social-link">
              <FaYoutube />
            </a>
            <a href="" className="team__social-link">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
