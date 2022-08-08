import React from "react";
import Project1 from "../img/projet01-unsplash.jpg";
import Project2 from "../img/projet02-unsplash.jpg";
// import Project3 from "../img/about.jpg";
import Bounce from "react-reveal/Bounce";
import Zoom from "react-reveal/Zoom";
import Slide from "react-reveal/Slide";

function portfolio() {
  return (
    <div className="project component__space mt-4" id="Portfolio">
      <div className="heading">
        <Bounce top>
          <h1 className="heading">Mes Projects</h1>
        </Bounce>
        {/* <Zoom top>
          <p className="heading p__color">
            There are many variations of passages of Lorem Ipsum available,
          </p>
          <p className="heading p__color">
            but the majority have suffered alteration.
          </p>
        </Zoom> */}
      </div>
      <div className="container">
        <div className="row">
          <div className="col__3">
            <div className="project__box pointer relative">
              <Slide bottom>
                <div className="project__box__img pointer relative">
                  <div className="project__img__box">
                    <img src={Project1} alt="" className="project__img  h-25" />
                  </div>
                  <div className="mask__effect"></div>
                </div>
                <div className="project__meta absolute">
                  <h5 className="project__text">Project:</h5>
                  <h4 className="project__text">Portfolio en Html&css</h4>
                  <a
                    href="https://github.com/Othmane-spec/Portfolio_othmane"
                    target="_blank"
                    className="project__btn"
                  >
                    Voir Details
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
                    <img src={Project2} alt="" className="project__img" />
                  </div>
                  <div className="mask__effect"></div>
                </div>
                <div className="project__meta absolute">
                  <h5 className="project__text">Project:</h5>
                  <h4 className="project__text">ToDo List en Javascript</h4>
                  <a
                    href="https://github.com/Othmane-spec/Todo-List"
                    target="_blank"
                    className="project__btn"
                  >
                    Voir Details
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
                    <img src={Project1} alt="" className="project__img" />
                  </div>
                  <div className="mask__effect"></div>
                </div>
                <div className="project__meta absolute">
                  <h5 className="project__text">Project:</h5>
                  <h4 className="project__text">Todo List en react js</h4>
                  <a
                    href="https://github.com/Othmane-spec/TodoList01"
                    target="_blank"
                    className="project__btn"
                  >
                    Voir Details
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
                    <img src={Project2} alt="" className="project__img" />
                  </div>
                  <div className="mask__effect"></div>
                </div>
                <div className="project__meta absolute">
                  <h5 className="project__text">Project:</h5>
                  <h4 className="project__text">clone de l'ecole 3WA</h4>
                  <a
                    href="https://github.com/Othmane-spec/3wa_projet"
                    target="_blank"
                    className="project__btn"
                  >
                    Voir Details
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
                    <img src={Project1} alt="" className="project__img" />
                  </div>
                  <div className="mask__effect"></div>
                </div>
                <div className="project__meta absolute">
                  <h5 className="project__text">Project:</h5>
                  <h4 className="project__text">
                    Site web vitrine restaurants
                  </h4>
                  <a
                    href="https://github.com/Othmane-spec/Restaurant_vitrine"
                    target="_blank"
                    className="project__btn"
                  >
                    Voir Details
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
                    <img src={Project2} alt="" className="project__img" />
                  </div>
                  <div className="mask__effect"></div>
                </div>
                <div className="project__meta absolute">
                  <h5 className="project__text">Project:</h5>
                  <h4 className="project__text">ChatBot en javascript</h4>
                  <a
                    href="https://github.com/Othmane-spec/ChatBot"
                    target="_blank"
                    className="project__btn"
                  >
                    Voir Details
                  </a>
                </div>
              </Slide>
            </div>
          </div>

          {/* <div className="view__more__btn d__flex align__items__center justify__content__center pxy__30">
            <button className="view__more pointer btn">View more</button>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default portfolio;
