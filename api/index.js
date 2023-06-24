import { getSdk } from "../generated/graphql.ts";
import { GraphQLClient } from "graphql-request";

// const server =
//   process.env.NODE_ENV === "production"
//     ? process.env.SERVER_URL
//     : "http://localhost:4000/graphql";

const gqlClint = new GraphQLClient("http://localhost:4000/", {
  credentials: "include",
  mode: "cors",
  headers: {
    "Content-Type": "application/json",
    /* "Access-Control-Allow-Credentials": "true",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "*",
     */
    /* ,
    crossDomain: true,
    xhrFields: { withCredentials: true }, */
    //authorization: `Bearer MY_TOKEN`,
  },
});

export const { getCustomers, image_upload, signUp, getCustomer, customer } =
  getSdk(gqlClint);
