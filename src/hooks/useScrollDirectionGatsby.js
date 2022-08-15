// NOTE: Returns the direction of the scroll (scrolling UP or scrolling DOWN)
import { useEffect, useState } from "react";
import { useScrollDirection } from "react-use-scroll-direction";

const useScrollDirectionGatsby = () => {
  const [direction, setDirection] = useState("neutral");
  const { isScrollingUp, isScrollingDown } = useScrollDirection();

  useEffect(() => {
    if (isScrollingDown) setDirection("down");
    if (isScrollingUp) setDirection("up");
  }, [isScrollingDown, isScrollingUp]);

  return { direction };
};

export default useScrollDirectionGatsby;
