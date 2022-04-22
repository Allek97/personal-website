import { useStaticQuery, graphql } from "gatsby";
import { getImage, withArtDirection } from "gatsby-plugin-image";

const query = graphql`
  {
    phoneMockupData: contentfulAsset(
      file: { fileName: { eq: "website-mockup-phone.png" } }
    ) {
      file {
        fileName
      }
      gatsbyImageData(placeholder: TRACED_SVG, layout: FULL_WIDTH)
    }
    rocketData: contentfulAsset(file: { fileName: { eq: "rocket.png" } }) {
      file {
        fileName
      }
      gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
    }
    beyondData: contentfulAsset(file: { fileName: { eq: "beyond.png" } }) {
      file {
        fileName
      }
      gatsbyImageData(placeholder: TRACED_SVG, layout: FULL_WIDTH)
    }
    myGlobeData: contentfulAsset(file: { fileName: { eq: "my-globe.png" } }) {
      file {
        fileName
      }
      gatsbyImageData(placeholder: TRACED_SVG, layout: FULL_WIDTH)
    }
    beyondPlanetData: contentfulAsset(
      file: { fileName: { eq: "beyond-globe.png" } }
    ) {
      file {
        fileName
      }
      gatsbyImageData(placeholder: TRACED_SVG, layout: FULL_WIDTH)
    }
    profilePictureData: contentfulAsset(
      file: { fileName: { eq: "NEW-PP.png" } }
    ) {
      file {
        fileName
      }
      gatsbyImageData(placeholder: TRACED_SVG, layout: FULL_WIDTH)
    }
    dashboardData: contentfulAsset(
      file: { fileName: { eq: "Dashboard.png" } }
    ) {
      file {
        fileName
      }
      gatsbyImageData(placeholder: TRACED_SVG, layout: FULL_WIDTH)
    }
    dashboardMobileData: contentfulAsset(
      file: { fileName: { eq: "Dashboard-Mobile.png" } }
    ) {
      file {
        fileName
      }
      gatsbyImageData(placeholder: TRACED_SVG, layout: FULL_WIDTH)
    }
  }
`;

export const useSiteDataImages = () => {
  const data = useStaticQuery(query);

  const {
    phoneMockupData,
    rocketData,
    beyondData,
    myGlobeData,
    beyondPlanetData,
    dashboardData,
    dashboardMobileData,
  } = data;

  const { gatsbyImageData: phoneMockupImageData } = phoneMockupData;
  const { gatsbyImageData: rocketImageData } = rocketData;
  const { gatsbyImageData: beyondImageData } = beyondData;
  const { gatsbyImageData: myGlobeImageData } = myGlobeData;
  const { gatsbyImageData: beyondGlobeImageData } = beyondPlanetData;
  const { gatsbyImageData: dashboardImageData } = dashboardData;
  const { gatsbyImageData: dashboardMobileImageData } = dashboardMobileData;

  const phoneMockupImage = getImage(phoneMockupImageData);
  const rocketImage = getImage(rocketImageData);
  const beyondImage = getImage(beyondImageData);
  const myGlobeImage = getImage(myGlobeImageData);
  const beyondGlobeImage = getImage(beyondGlobeImageData);

  const dashImages = withArtDirection(getImage(dashboardImageData), [
    {
      media: "(max-width: 900px)",
      image: getImage(dashboardMobileImageData),
    },
  ]);

  return {
    phoneMockupImage,
    rocketImage,
    beyondImage,
    myGlobeImage,
    beyondGlobeImage,
    dashImages,
  };
};
