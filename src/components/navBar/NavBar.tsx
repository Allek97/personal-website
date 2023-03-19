import { useState } from "react";
import { animateScroll as scroll } from "react-scroll";
import { Link } from "gatsby";
import { useLocation } from "@reach/router";

import MenuList from "../menuList/MenuList";
import { MenuBox, NavContainer, Nav, CloseMenu } from "./NavBar.styled";
import useScroll from "../../hooks/useScroll";
import useScrollDirectionGatsby from "../../hooks/useScrollDirectionGatsby";
import LogoSVG from "../../assets/svgs/ilias-allek";

interface Props {
    navColor?: string;
}

const NavBar = ({ navColor = "var(--color-blue-dark)" }: Props) => {
    const [isOpen, setIsOpen] = useState(false);
    const isScrolled = useScroll(70);

    const isHidden = useScroll(300);
    const { direction } = useScrollDirectionGatsby();

    const toggleHome = () => {
        scroll.scrollToTop();
    };

    const { pathname } = useLocation();

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
                $isHidden={isHidden && direction === "down"}
            >
                <Nav
                    $isOpen={isOpen}
                    navColor={navColor}
                    $isScrolled={isScrolled}
                >
                    <div
                        onClick={toggleHome}
                        onKeyPress={toggleHome}
                        tabIndex={0}
                        role="button"
                    >
                        <Link
                            to="/"
                            role="button"
                            className={
                                pathname === "/"
                                    ? "pointer-events-none"
                                    : "pointer-events-auto"
                            }
                        >
                            <LogoSVG />
                        </Link>
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

export default NavBar;
