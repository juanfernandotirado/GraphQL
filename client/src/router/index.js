import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ApolloClient } from "apollo-boost";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createHttpLink } from "apollo-link-http";
import { ApolloProvider } from "@apollo/react-hooks";

import App from "../App";
import ArtistDetails from "../components/Details/ArtistDetails";


const client = new ApolloClient({
  link: createHttpLink({ uri: "http://localhost:5000/graphql" }),
  cache: new InMemoryCache(),
});

const Router = () => (
  <ApolloProvider client={client}>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={App} exact />
        <Route path="/:artistId" component={ArtistDetails} />
      </Switch>
    </BrowserRouter>
  </ApolloProvider>
);

export default Router;