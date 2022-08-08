import React from "react";
import Particles from "react-tsparticles";
import Typed from "react-typed";
import "../css/Header.css";

function Header() {
  const particlesInit = (main) => {
    console.log(main);
  };
  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <div className="header-wraper" id="#Home">
      <Particles
        className="particles-canvas"
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#2ecc71",
            },
            links: {
              color: "#2ecc71",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 900,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
          },
          detectRetina: true,
        }}
      />
      <div className="main-info">
        <h1>Je réalise de superbes sites</h1>
        <Typed
          className="typed-text"
          strings={["Développeur web full stack", "Web Design", "freelance"]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
        <a href="#Contact" className="btn-main-offer">
          Contacter Moi
        </a>
      </div>
    </div>
  );
}

export default Header;
