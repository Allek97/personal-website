import { useState, useEffect } from "react";

const useScroll = (scrollY) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const listenScrollEvent = () => {
      if (window.scrollY > scrollY) {
        setIsScrolled(true);
      } else setIsScrolled(false);
    };

    listenScrollEvent();

    window.addEventListener("scroll", listenScrollEvent);

    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, [scrollY]);

  return isScrolled;
};

export default useScroll;
