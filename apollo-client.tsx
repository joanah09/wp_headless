import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://dev-kageokuri.pantheonsite.io/graphql", // Adjust the URL to your WPGraphQL endpoint
  cache: new InMemoryCache(),
});

export default client;
