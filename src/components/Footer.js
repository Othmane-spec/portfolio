import React from "react";
import "../css/Footer.css";
import { BsChevronRight, BsInstagram, BsLinkedin } from "react-icons/bs";
// import { BsChevronUp } from "react-icons/bs";
// import { BsTwitter } from "react-icons/bs";

// import { BsFacebook } from "react-icons/bs";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="grid-4">
          <div className="grid-4-col footer-about">
            <h3 className="title-sm">Apropos</h3>
            <p className="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
              officiis quo officia quia?
            </p>
          </div>

          <div className="grid-4-col footer-links">
            <h3 className="title-sm">Links</h3>
            <ul>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#portfolio">Portfolio</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#Blog">Blog</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>

          <div className="grid-4-col footer-links">
            <h3 className="title-sm">Services</h3>
            <ul>
              <li>
                <a href="#">Web Design</a>
              </li>
              <li>
                <a href="#">Web Dev</a>
              </li>
              <li>
                <a href="#">App Design</a>
              </li>
              <li>
                <a href="#">Marketing</a>
              </li>
              <li>
                <a href="#">UI Design</a>
              </li>
            </ul>
          </div>

          <div className="grid-4-col footer-newstletter">
            <h3 className="title-sm">S'abonner</h3>
            <p className="text">
              Lorem ipsum dolor, sit amet ipsum dolor sit amet.
            </p>
            <div className="footer-input-wrap">
              <input
                type="email"
                className="footer-input"
                placeholder="Email"
              />
              <a href="#" className="input-arrow">
                <i className="bi bi-chevron-right"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="bottom-footer">
          <div className="copyright">
            <p className="text">
              Copyright&copy;2022 All rights reserved | Made by
              <span> Othman Essaymak</span>
            </p>
          </div>

          <div className="followme-wrap">
            <div className="followme">
              <h3>Suivez-moi</h3>
              <span className="footer-line"></span>
              <div className="social-media">
                <a href="https://twitter.com/essaimek" target="_blank">
                  <i className="bi bi-twitter"></i>
                </a>
                <a
                  href="https://www.instagram.com/othm_a__ne/?hl=fr"
                  target="_blank"
                >
                  <i className="bi bi-instagram"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/othmane-es-saimek-1969aa195/"
                  target="_blank"
                >
                  <i className="bi bi-linkedin"></i>
                </a>
                <a href="https://github.com/Othmane-spec" target="_blank">
                  <i className="bi bi-github"></i>
                </a>
              </div>
            </div>

            <div className="back-btn-wrap">
              <a href="#" className="back-btn">
                <i className="bi bi-chevron-up"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
