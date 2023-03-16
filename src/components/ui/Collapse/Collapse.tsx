import { HiPlus, HiMinus } from "react-icons/hi";

import { Content, Root } from "./Collapse.styled";

interface Props {
    handleExpand: () => void;
    isExpanded?: boolean;
    theme?: "white" | "darkBlue";
    variant: "project" | "freelance";
}

const Collapse = ({
    handleExpand,
    isExpanded = false,
    theme = "darkBlue",
    variant = "project",
}: Props) => {
    return (
        <Root
            theme={theme}
            type="button"
            className="group"
            onClick={() => handleExpand()}
        >
            <div />
            <Content variant={variant}>
                <span>
                    {!isExpanded ? "Load more projects" : "Collapse projects"}
                </span>
                {!isExpanded ? <HiPlus /> : <HiMinus />}
            </Content>
        </Root>
    );
};

export default Collapse;
