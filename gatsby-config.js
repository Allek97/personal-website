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
        `gatsby-transformer-sharp`,
        {
            resolve: "gatsby-plugin-extract-schema",
            options: {
                dest: `${__dirname}/src/contentful/types/gatsby-contentful-schema.graphql`,
            },
        },
        {
            resolve: `gatsby-plugin-sharp`,
            options: {
                defaults: {
                    quality: 95,
                    formats: ["auto", "webp", "avif"],
                    placeholder: "blurred",
                },
            },
        },
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
            resolve: "gatsby-plugin-root-import",
            options: {
                "@components/*": ["src/components"],
                "@contentful/*": ["src/contentful"],
                "@styles/*": ["src/styles/*"],
                "@assets/*": ["src/assets/*"],
            },
        },
        `gatsby-plugin-react-helmet`,
        "gatsby-plugin-webpack-bundle-analyser-v2",
    ],
};
