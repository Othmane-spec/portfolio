import React from "react";
import "../css/About.css";
import aboutImg from "../img/profile.jpeg";
import reactImg from "../img/react-icon.svg";
import htmlImg from "../img/html-icon.svg";
import cssImg from "../img/css-icon.svg";
import jsImg from "../img/js-icon.svg";
import bootstrapImg from "../img/icons-bootstrap.svg";
import phpImg from "../img/icons8-logo-php.svg";
import laravelImg from "../img/icons8-laravel.png";
import Fade from "react-reveal/Fade";
// import ScrollAnimation from "react-animate-on-scroll";
// import "animate.css";

function About() {
  return (
    <div className="about component__space" id="About">
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-4 mb-4">
            <Fade left>
              <img src={aboutImg} alt="" className="about__img" />
            </Fade>
          </div>
          <div className="col-md-6 mt-4">
            <Fade top>
              <h1 className="about__heading">A propos</h1>
            </Fade>
            <div className="about__meta">
              <Fade right>
                <p className="about__text p__color">
                  Bonjour, je suis Essaymak Othmane et j'adore réaliser des
                  trucs pour l'internet qui durent longtemps spécialement les
                  projets open-sources. Mon amour pour le développement a
                  commencé à l'age de 14 and quand j'ai commencé à jouer les
                  jeux videos. Maintenant, je suis ouvert à de nouvelles
                  opportunités
                </p>

                <p className="about__text p__color">
                  Je développe des sites Web et des applications en utilisant
                  HTML, CSS et JavaScript. Je suis habitué à développer des
                  mises en page qui me fournissent. Je m'améliore toujours avec
                  chaque projet qu'ils me confient.
                </p>
                <p className="about__text p__color">
                  Je suis un personne dévouée qui poursuit ses rêves,
                  travailleuse et axée sur les résultats, je cherche toujours à
                  réaliser ma meilleure version.
                </p>
                <h3 className="competences">
                  Voici mes principales compétences :
                </h3>
              </Fade>

              <div className="hard-skills">
                <Fade bottom>
                  <img src={reactImg} alt="logo react" />

                  <img src={htmlImg} alt="logo html" />

                  <img src={cssImg} alt="logo css" />

                  <img src={jsImg} alt="logo js" />

                  <img src={bootstrapImg} alt="logo boostrap" />

                  <img src={phpImg} alt="logo php" />

                  <img src={laravelImg} alt="logo laravel" />
                </Fade>
              </div>

              <div className="about__button d__flex align__items__center">
                <a href="cv_othmane02.pdf" download={"cv_othmane02.pdf"}>
                  <Fade bottom>
                    <button className="about btn pointer">Download Cv</button>
                  </Fade>
                </a>
                {/* <a href="#">
                  <button className="about btn pointer">Hire Me</button>
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
