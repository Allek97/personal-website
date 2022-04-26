import React, { useState } from "react";
import PropTypes from "prop-types";
import { animateScroll as scroll } from "react-scroll";

import MenuList from "../menuList/MenuList";
import { MenuBox, NavContainer, Nav, CloseMenu } from "./NavBarStyle";
import useScroll from "../../hooks/useScroll";

const NavBar = ({ navColor }) => {
  const [isOpen, setIsOpen] = useState(false);
  const isScrolled = useScroll(70);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <MenuList isOpen={isOpen} setIsOpen={setIsOpen} />
      <NavContainer
        initial={{ y: "-100%", opacity: 0 }}
        animate={{ y: "0%", opacity: 1 }}
        transition={{
          ease: [0.19, 1, 0.22, 1],
          duration: 0.6,
          delay: 0.2,
        }}
        $isScrolled={isScrolled}
        $isOpen={isOpen}
      >
        <Nav $isOpen={isOpen} navColor={navColor} $isScrolled={isScrolled}>
          <div
            onClick={toggleHome}
            role="button"
            onKeyPress={toggleHome}
            tabIndex={0}
          >
            <h3>
              AEK
              <br />
              ILIAS.
            </h3>
          </div>
          <div>
            <h3>MENU</h3>
            <MenuBox
              $isOpen={isOpen}
              navColor={navColor}
              $isScrolled={isScrolled}
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              {!isOpen ? (
                <>
                  <span />
                  <span />
                  <span />
                </>
              ) : (
                <CloseMenu />
              )}
            </MenuBox>
          </div>
        </Nav>
      </NavContainer>
    </>
  );
};

NavBar.propTypes = {
  navColor: PropTypes.string,
};

NavBar.defaultProps = {
  navColor: "var(--color-blue-dark)",
};

export default NavBar;
