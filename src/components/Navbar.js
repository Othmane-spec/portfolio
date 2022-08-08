import React from "react";
import "../css/Navbar.css";
import OthmaneImg from "../img/Othmane.png";
// fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container mt-1">
          <img src={OthmaneImg} alt="logo othmane" className="logoImg me-5" />
          {/* <a className="logo " href="#">
            OTHMANE
          </a> */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }} />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="navbar-nav ms-auto">
              <a
                className="nav-link text-light active"
                aria-current="page"
                href="#Home"
              >
                Acceuill
              </a>
              <a className="nav-link text-light" href="#About">
                A Propos
              </a>
              <a className="nav-link text-light" href="#Portfolio">
                Portfolio
              </a>
              <a className="nav-link text-light" href="#Sevices">
                Services
              </a>

              <a className="nav-link text-light" href="#Blog">
                Blog
              </a>
              <a className="nav-link text-light" href="#Contact">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
