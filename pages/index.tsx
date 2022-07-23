import React from "react";
import { Top } from "../src/components/pages/Top";
import {
  ApolloClient,
  NormalizedCacheObject,
  ApolloProvider,
  InMemoryCache,
} from "@apollo/client";

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "https://api.github.com/graphql",
  headers: {
    authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`,
  },
  resolvers: {},
});

export default function Home() {
  return (
    <ApolloProvider client={client}>
      <Top />
    </ApolloProvider>
  );
}
