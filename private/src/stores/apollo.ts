import ApolloClient from "apollo-boost";
import { API_URL } from "../env";

export const client = new ApolloClient({
  uri: API_URL
});
