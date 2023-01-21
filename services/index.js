import { request, gql } from "graphql-request";
const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPosts = async () => {
  const query = gql`
    query Assets {
      postsConnection {
        edges {
          node {
            author {
              name
            }
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query);

  console.log('result', result)

  return result;
};
