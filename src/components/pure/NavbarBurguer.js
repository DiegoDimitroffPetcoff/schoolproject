import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import "../../styles/navbar/navbar.css";

import Buttom2 from "./Buttom2";
import NavBarPure from "./NavbarPure";

const NavbarBurguer = () => {
  const [isOpen, setIsOpen] = useState(true);

  function openBar() {
    setIsOpen(!isOpen);
  }
  return (
    <>
      {isOpen ? (
        <button onClick={openBar} className="NavbarBurguerIcon">
          {" "}
          <FontAwesomeIcon
            icon={faBars}
            style={{ color: "#f2ced8" }}
            className="fa-4x"
          />{" "}
        </button>
      ) : (
        <nav className="NavbarBurguer">
          <ul>
            <Buttom2
              string="X"
              action={() => {
                setIsOpen(!isOpen);
              }}
            ></Buttom2>
            <NavBarPure></NavBarPure>
          </ul>
        </nav>
      )}
    </>
  );
};

export default NavbarBurguer;
