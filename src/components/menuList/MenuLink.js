import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { motion } from "framer-motion";

import { useScrollUpdate } from "../../context/ScrollContext";
import { menuLinkVariant } from "./animation";

const SideLink = styled(Link)`
  &,
  &:link,
  &:visited {
    display: block;

    transition: all 0.2s linear;

    margin-bottom: 0.8rem;

    border-radius: 0.4rem;

    text-align: center;
    text-transform: capitalize;
    text-decoration: none;

    font-size: 3.8rem;
    font-family: PoppinsRegular;
    font-weight: 400;
    letter-spacing: 0.32rem;

    color: #617d98;
  }
  @media (hover: hover) and (pointer: fine) {
    &:focus,
    &:active,
    &:hover {
      background: #bff8fd;
      color: #2caeba;
    }
  }
`;

// eslint-disable-next-line react/prop-types
const MenuLink = ({ setIsOpen, sectionLink, children }) => {
  const setScollSection = useScrollUpdate();

  return (
    <motion.li variants={menuLinkVariant}>
      <SideLink
        to="/"
        onClick={() => {
          setIsOpen(false);
          setScollSection(sectionLink);
        }}
      >
        {children}
      </SideLink>
    </motion.li>
  );
};

export default MenuLink;
