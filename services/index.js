import { request, gql } from "graphql-request";
const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPosts = async () => {
  const query = gql`
    query Assets {
      postsConnection(orderBy: createdAt_DESC) {
        edges {
          node {
            author {
              id
              authorBio
              name
              photo {
                url
              }
            }
            createdAt
            title
            slug
            excerpt
            featuredImage {
              url
            }
            categories {
              slug
              name
            }
          }
        }
      }
    }
  `;

  if (!graphqlAPI) return null;
  let result;
  try {
    result = await request(graphqlAPI, query);
  } catch (err) {
    console.warn("Hygraph fetch failed:", err.message);
    return null;
  }

  return result.postsConnection.edges;
};
export const getRecentPosts = async () => {
  const query = gql`
    query GetPostDetails {
      posts(orderBy: createdAt_ASC, last: 3) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
    }
  `;

  if (!graphqlAPI) return null;
  let result;
  try {
    result = await request(graphqlAPI, query);
  } catch (err) {
    console.warn("Hygraph fetch failed:", err.message);
    return null;
  }
  return result.posts;
};

export const getSimilarPosts = async (categories, slug) => {
  const query = gql`
    query GetPostDetails($slug: String!, $categories: [String!]) {
      posts(
        where: {
          slug_not: $slug
          AND: { categories_some: { slug_in: $categories } }
        }
        last: 3
      ) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
    }
  `;

  if (!graphqlAPI) return null;
  let result;
  try {
    result = await request(graphqlAPI, query, { categories, slug });
  } catch (err) {
    console.warn("Hygraph fetch failed:", err.message);
    return null;
  }

  return result.posts;
};

export const getCategories = async () => {
  const query = gql`
    query GetCategories {
      categories {
        name
        slug
      }
    }
  `;

  if (!graphqlAPI) return null;
  let result;
  try {
    result = await request(graphqlAPI, query);
  } catch (err) {
    console.warn("Hygraph fetch failed:", err.message);
    return null;
  }

  return result.categories;
};

export const getPostDetails = async (slug) => {
  const query = gql`
    query GetPostDetails($slug: String!) {
      post(where: { slug: $slug }) {
        author {
          id
          authorBio
          name
          photo {
            url
          }
        }
        createdAt
        title
        slug
        excerpt
        featuredImage {
          url
        }
        categories {
          slug
          name
        }
        blogContent {
          raw
        }
      }
    }
  `;

  if (!graphqlAPI) return null;
  let result;
  try {
    result = await request(graphqlAPI, query, { slug });
  } catch (err) {
    console.warn("Hygraph fetch failed:", err.message);
    return null;
  }

  return result.post;
};
export const getAboutPageDetails = async (slug) => {
  const query = gql`
    query AboutPageQuery {
      allAboutPages {
        aboutPageContent {
          raw
        }
        aboutPageHeroImage {
          url
          id
          fileName
        }
      }
    }
  `;

  if (!graphqlAPI) return null;
  let result;
  try {
    result = await request(graphqlAPI, query);
  } catch (err) {
    console.warn("Hygraph fetch failed:", err.message);
    return null;
  }

  return result.allAboutPages;
};
export const getMusicPageDetails = async (slug) => {
  const query = gql`
    query AboutPageQuery {
      allMusicPages {
        musicPageContent {
          raw
        }
        musicPageHeroImage {
          url
          id
          fileName
        }
      }
    }
  `;

  if (!graphqlAPI) return null;
  let result;
  try {
    result = await request(graphqlAPI, query);
  } catch (err) {
    console.warn("Hygraph fetch failed:", err.message);
    return null;
  }

  return result.allMusicPages;
};
export const getDevPortfolioDetails = async (slug) => {
  const query = gql`
    query devPortfolioQuery {
      allDevPortfolios {
        devPortfolioContent {
          raw
        }
        devPortfolioHeroImage {
          url
        }
      }
    }
  `;

  if (!graphqlAPI) return null;
  let result;
  try {
    result = await request(graphqlAPI, query);
  } catch (err) {
    console.warn("Hygraph fetch failed:", err.message);
    return null;
  }

  return result.allDevPortfolios;
};

// export const submitComment = async (obj) => {
//   const result = await fetch("/api/comments", {
//     method: "POST",
//     body: JSON.stringify(obj),
//   });

//   return result.json();
// };
