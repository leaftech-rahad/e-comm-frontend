import { getSdk } from "../generated/graphql.ts";
import { GraphQLClient } from "graphql-request";

// const server =
//   process.env.NODE_ENV === "production"
//     ? process.env.SERVER_URL
//     : "http://localhost:4000/graphql";

const gqlClint = new GraphQLClient("http://localhost:4000/graphql");

export const { getCustomers, image_upload } = getSdk(gqlClint);
