/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
    siteMetadata: {
        title: "WebDev Personal Website",
        description:
            "Awesome Webdev Portfolio built with Gatsby and Contentful",
        titleTemplate: "%s | WebDev Portfolio - Ilias Allek",
        url: "https://iliasallek.com",
        twitterUsername: "@IAllekAmazigh",
        image: "/personal-website-thumbnail.png",
    },
    plugins: [
        `gatsby-plugin-styled-components`,
        `gatsby-plugin-sass`,
        `gatsby-plugin-image`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-extract-schema`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/assets/imgs/`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `data`,
                path: `${__dirname}/src/data/`,
            },
        },
        {
            resolve: `gatsby-source-contentful`,
            options: {
                spaceId: `zk1zaxgr0lvi`,
                // Learn about environment variables: https://gatsby.dev/env-vars
                accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
            },
        },
        {
            resolve: "gatsby-plugin-react-svg",
            options: {
                rule: {
                    include: /assets/,
                },
            },
        },
        {
            resolve: `gatsby-plugin-alias-imports`,
            options: {
                alias: {
                    "@components": ["src/components"],
                    "@contentful": ["src/contentful"],
                },
            },
            extensions: ["ts", "tsx"],
        },
        `gatsby-plugin-react-helmet`,
        "gatsby-plugin-webpack-bundle-analyser-v2",
    ],
};
