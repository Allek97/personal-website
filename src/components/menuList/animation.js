const menuVariant = {
  hidden: {
    y: "-100%",
    transition: {
      ease: [0.455, 0.03, 0.515, 0.955],
      duration: 0.3,
    },
  },
  visible: {
    y: 0,
    transition: {
      ease: [0.455, 0.03, 0.515, 0.955],
      duration: 0.4,
    },
  },
};
const menuLinkVariant = {
  menuHidden: {
    opacity: 0,
    x: "-15rem",
    transition: {
      duration: 0,
    },
  },
  menuVisible: {
    opacity: 1,
    x: 0,
    transition: {
      ease: [0.455, 0.03, 0.515, 0.955],
    },
  },
};

const socialVariant = {
  menuHidden: {
    opacity: 0,
    y: "15rem",
    transition: {
      duration: 0,
    },
  },
  menuVisible: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.455, 0.03, 0.515, 0.955],
    },
  },
};

const container = {
  menuHidden: {
    transition: {
      duration: 0,
    },
  },
  menuVisible: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.2,
    },
  },
};

export { container, menuLinkVariant, menuVariant, socialVariant };
