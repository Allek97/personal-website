import styled from "styled-components";
import { motion } from "framer-motion";

export const FixedBox = styled(motion.aside)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 30;

  display: grid;
  place-items: center;

  width: 100%;
  height: 100%;

  background: #f1f5f8;
`;

export const List = styled(motion.ul)`
  list-style: none;
`;

export const SocialList = styled(motion.ul)`
  display: flex;

  justify-content: space-between;

  width: 30rem;
  margin-top: 4rem;

  list-style: none;

  li {
    height: 3.8rem;
    width: 3.8rem;
  }
`;

export const SideLinkSvg = styled.a`
  text-decoration: none;

  color: #102a42;

  svg {
    transition: all 0.2s linear;
    height: 100%;
    width: 100%;
  }
`;

export const CloseSvgStyle = {
  position: "absolute",
  right: "4.75%",
  top: "2.75%",

  height: "5rem",
  width: "5rem",

  fill: "rgba(var(--color-blue-special))",
  background: "transparent",
  borderColor: "transparent",

  cursor: "pointer",
};
