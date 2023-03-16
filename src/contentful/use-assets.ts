import { useEffect, useState } from "react";
import fetchContentful from "./fetchContentful";
import { Asset, Maybe } from "./types";

const getAllAssets = `
query {
    assetCollection {
        items {
          sys {
            id
          }
          url
        }
      }
  }
`;

const useAssets = () => {
    const [assets, setAssets] = useState<Maybe<Asset>[]>([]);

    useEffect(() => {
        const fetchAssets = async () => {
            const { data } = await fetchContentful({
                query: getAllAssets,
            });

            setAssets(data.items);
        };
        fetchAssets();
    }, []);

    return {
        assets: assets,
    };
};

export default useAssets;
