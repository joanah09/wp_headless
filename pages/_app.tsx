import { ApolloProvider } from "@apollo/client";
import client from "../apollo-client";
import { AppProps } from "next/app";
import "../styles/index.css";
import "../styles/test.module.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
