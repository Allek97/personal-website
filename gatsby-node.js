const path = require("path");

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
    if (stage === "build-html" || stage === "develop-html") {
        actions.setWebpackConfig({
            module: {
                rules: [
                    {
                        test: /bad-module/,
                        use: loaders.null(),
                    },
                ],
            },
            // resolve: {
            //     alias: {
            //         "@components/*": path.resolve(
            //             __dirname,
            //             "src/components/*"
            //         ),
            //         "@contentful/*": path.resolve(
            //             __dirname,
            //             "src/contentful/*"
            //         ),
            //     },
            // },
        });
    }
};
