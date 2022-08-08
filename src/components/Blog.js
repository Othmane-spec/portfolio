import React from "react";
import "../css/Blog.css";
import Blog1 from "../img/blo04-unsplash.jpg";
import Blog2 from "../img/blog02-unsplash.jpg";
import Blog3 from "../img/blog03-unsplash.jpg";
import Bounce from "react-reveal/Bounce";
import Zoom from "react-reveal/Zoom";
import Slide from "react-reveal/Slide";

function Blog() {
  return (
    <div className="blog component__space mt-5" id="Blog">
      <div className="heading">
        <Bounce top>
          <h1 className="heading">Actualités</h1>
        </Bounce>
        <Zoom top>
          <p className="heading p__color">Dernières nouvelles en technologie</p>
          {/* <p className="heading p__color">
            but the majority have suffered alteration.
          </p> */}
        </Zoom>
      </div>
      <div className="container">
        <div className="row">
          <div className="col__3">
            <div className="project__box pointer relative">
              <Slide right>
                <div className="project__box__img pointer relative">
                  <div className="project__img__box">
                    <img src={Blog1} alt="" className="project__img" />
                  </div>
                  <div className="mask__effect"></div>
                </div>
                <div className="Blog__meta absolute">
                  <h5 className="project__text">Development</h5>
                  <h4 className="project__text">
                    Obtenir des billets pour le grand spectacle
                  </h4>
                  <a
                    href="https://wccftech.com/2022-web-development-for-beginners-bundle-discount/"
                    target="_blank"
                    className="blog project__btn btn"
                  >
                    Savoir Plus
                  </a>
                </div>
              </Slide>
            </div>
          </div>

          <div className="col__3">
            <div className="project__box pointer relative">
              <Slide bottom>
                <div className="project__box__img pointer relative">
                  <div className="project__img__box">
                    <img src={Blog2} alt="" className="project__img " />
                  </div>
                  <div className="mask__effect"></div>
                </div>
                <div className="Blog__meta absolute">
                  <h5 className="project__text">Development</h5>
                  <h4 className="project__text">
                    Obtenir des billets pour le grand spectacle
                  </h4>
                  <a
                    href="https://www.zdnet.com/education/computers-tech/best-online-masters-web-development/"
                    target="_blank"
                    className="blog project__btn btn"
                  >
                    Savoir Plus
                  </a>
                </div>
              </Slide>
            </div>
          </div>

          <div className="col__3">
            <div className="project__box pointer relative">
              <Slide left>
                <div className="project__box__img pointer relative">
                  <div className="project__img__box">
                    <img src={Blog3} alt="" className="project__img" />
                  </div>
                  <div className="mask__effect"></div>
                </div>
                <div className="Blog__meta absolute">
                  <h5 className="project__text">Development</h5>
                  <h4 className="project__text">
                    Obtenir des billets pour le grand spectacle
                  </h4>
                  <a
                    href="https://www.iflscience.com/editors-blog/score-beginnerfriendly-web-development-training-for-only-30/"
                    target="_blank"
                    className="blog project__btn btn"
                  >
                    Savoir Plus
                  </a>
                </div>
              </Slide>
            </div>
          </div>
          <div className="button_voir_plus mb-5">
            <a
              href="http://localhost:3001/"
              target="_blank"
              className="view__more pointer btn mt-5"
            >
              Voir Plus
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
