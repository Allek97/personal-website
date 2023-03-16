import { AssetCollection } from "./types";

export const searchQuery = `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/`;

type Context = {
    query: string;
    variables?: { [key: string]: any };
};

type ReturnType = {
    data: AssetCollection;
};

async function fetchContentful({
    query,
    variables = {},
}: Context): Promise<ReturnType> {
    const results = await fetch(`${searchQuery}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            // Authenticate the request
            Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
        },
        // send the GraphQL query
        body: JSON.stringify({ query: query, variables }),
    });

    const { data, errors } = await results.json();

    if (errors) {
        console.log(errors);
    }

    return { data };
}

export default fetchContentful;
