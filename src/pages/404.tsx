import { StaticImage } from "gatsby-plugin-image";

import Seo from "../components/Seo";
import NavBar from "../components/navBar/NavBar";

import { Container, Space404, HomeBtn } from "../styles/404Styles/404Style";
import AnimateText from "../components/utils/animations/AnimateText";

const errorPage = () => {
    return (
        <>
            <Seo title="Not Found" />
            <NavBar navColor="white" />
            <main>
                <Container>
                    <article>
                        <Space404>
                            <StaticImage
                                src="../assets/imgs/space.png"
                                alt="astronaut"
                                placeholder="blurred"
                            />
                        </Space404>
                        <AnimateText
                            text="404"
                            type="heading1"
                            version="slideUp"
                            staggerValue={0.1}
                            letterDuration={1}
                        />
                        <AnimateText
                            text="Page Not Found"
                            type="heading3"
                            version="slideUp"
                            staggerValue={0.02}
                            letterDuration={0.6}
                        />
                        <HomeBtn
                            to="/"
                            initial={{ opacity: 0, y: "200%" }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            Back Home
                        </HomeBtn>
                    </article>
                </Container>
            </main>
        </>
    );
};

export default errorPage;
