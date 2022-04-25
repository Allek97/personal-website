import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

import { FixedBox, List, SocialList, SideLinkSvg } from "./MenuListStyle";
import socials from "../../constants/socials";

import MenuLink from "./MenuLink";
import { container, menuVariant, socialVariant } from "./animation";

const MenuList = ({ isOpen, setIsOpen }) => {
  return (
    <div>
      <FixedBox
        initial="hidden"
        animate={isOpen ? "visible" : "hidden"}
        variants={menuVariant}
      >
        <div>
          <List
            initial="menuHidden"
            animate={isOpen ? "menuVisible" : "menuHidden"}
            variants={container}
          >
            <MenuLink setIsOpen={setIsOpen} sectionLink="sectionLink">
              Home
            </MenuLink>
            <MenuLink setIsOpen={setIsOpen} sectionLink="aboutSection">
              About
            </MenuLink>
            <MenuLink setIsOpen={setIsOpen} sectionLink="projectSection">
              Projects
            </MenuLink>
            <MenuLink setIsOpen={setIsOpen} sectionLink="contactSection">
              Contact
            </MenuLink>
          </List>

          <SocialList
            initial="menuHidden"
            animate={isOpen ? "menuVisible" : "menuHidden"}
            variants={container}
          >
            {socials.map((social) => {
              return (
                <motion.li
                  key={social.id}
                  variants={socialVariant}
                  whileHover={{ scale: 1.3 }}
                >
                  <SideLinkSvg
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {social.icon}
                  </SideLinkSvg>
                </motion.li>
              );
            })}
          </SocialList>
        </div>
      </FixedBox>
    </div>
  );
};

MenuList.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
};

export default MenuList;
