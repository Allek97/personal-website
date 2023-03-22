import { Maybe } from "@contentful/types/gatsby-contentful-types";
import styled from "styled-components";
import stacks from "../../constants/stacks";

export const WorkSpecifics = styled.div`
    display: grid;
    /* flex-direction: column; */
    grid-template-columns: 1fr;
    /* gap: 5rem; */

    width: 100%;
    max-width: 80rem;

    margin-top: 2rem;

    @media only screen and (max-width: 58em) {
        justify-items: center;
        grid-template-columns: 1fr 1fr;
        margin-top: 8rem;
    }
    @media only screen and (max-width: 28em) {
        grid-template-columns: 1fr;
    }

    & > div {
        display: flex;
        flex-direction: column;
        align-items: center;
        &:not(:last-of-type) {
            margin-bottom: 1rem;
        }
    }

    h2 {
        font-size: 3rem;
        color: #12307c;
    }

    p {
        font-size: 1.8rem;
        &:not(:last-of-type) {
            margin-bottom: 1rem;
        }
    }
`;

export const Stack = styled.p`
    display: flex;
    align-items: center;

    svg {
        margin-left: 1.5rem;
        width: 2.4rem;
        height: 2.4rem;

        fill: #8d8d8d;
    }
`;

interface Props {
    role?: Maybe<Maybe<string>[]>;
    team?: Maybe<Maybe<string>[]>;
    teamStack?: Maybe<Maybe<string>[]>;
    timeline?: Maybe<string>;
}

const TeamStack = ({ role, team, teamStack, timeline }: Props) => {
    return (
        <WorkSpecifics>
            {role && (
                <div>
                    <h2>Role</h2>
                    {role.map((r) => (
                        <p key={r}>{r}</p>
                    ))}
                </div>
            )}
            {team && (
                <div>
                    <h2>Team</h2>
                    {team.map((member) => (
                        <p key={member}>{member}</p>
                    ))}
                </div>
            )}
            {teamStack && (
                <div>
                    <h2>Team Stack</h2>
                    {teamStack.map((stack) => (
                        <Stack key={stack}>
                            {stack}
                            {stacks.find((el) => el.title === stack)?.icon}
                        </Stack>
                    ))}
                </div>
            )}

            {timeline && (
                <div>
                    <h2>Timeline</h2>
                    <p>{timeline}</p>
                </div>
            )}
        </WorkSpecifics>
    );
};

export default TeamStack;
