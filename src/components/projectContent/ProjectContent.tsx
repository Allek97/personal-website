/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import moment from "moment";
import {
    ContentfulProjectsCore,
    Maybe,
} from "@contentful/types/gatsby-contentful-types";
import {
    ContentfulRichTextGatsbyReference,
    RenderRichTextData,
    renderRichText,
} from "gatsby-source-contentful/rich-text";

import { richTextOptions } from "../../contentful/richTextIntegration";
import {
    Content,
    ProjectAd,
    ProjectPageBtn,
    ProjectPageStory,
} from "./ProjectContentStyle";
import socials from "../../constants/socials";
import TeamStack from "./TeamStack";

interface Props {
    projectName?: Maybe<string>;
    projectGithubLink?: Maybe<string>;
    projectAppLink?: Maybe<string>;
    isFreelanceWork?: Maybe<boolean>;
    core?: Maybe<ContentfulProjectsCore>;
    role?: Maybe<Maybe<string>[]>;
    team?: Maybe<Maybe<string>[]>;
    teamStack?: Maybe<Maybe<string>[]>;
    timeline?: Maybe<string>;
}

const ProjectContent = ({
    projectName,
    projectGithubLink,
    projectAppLink,
    isFreelanceWork,
    core,
    role,
    team,
    teamStack,
    timeline,
}: Props) => {
    return (
        <ProjectPageStory>
            <Content>
                {core &&
                    renderRichText(
                        core! as RenderRichTextData<ContentfulRichTextGatsbyReference>,
                        richTextOptions
                    )}
            </Content>

            <ProjectAd>
                <div>
                    <h1>{projectName}</h1>
                    <span>{moment().format("MMM Do, YYYY")}</span>

                    <h2>Share</h2>
                    <h3>If you like this work, please share.</h3>
                    <ul>
                        {socials.map((social) => (
                            <a
                                key={social.id}
                                href={social.link}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {social.icon}
                            </a>
                        ))}
                    </ul>
                </div>

                <ProjectPageBtn
                    href={projectAppLink!}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    View the site
                </ProjectPageBtn>
                {projectGithubLink && (
                    <ProjectPageBtn
                        href={projectGithubLink!}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Github code
                    </ProjectPageBtn>
                )}

                {isFreelanceWork && (
                    <TeamStack
                        role={role}
                        team={team}
                        teamStack={teamStack}
                        timeline={timeline}
                    />
                )}
            </ProjectAd>
        </ProjectPageStory>
    );
};

export default ProjectContent;
