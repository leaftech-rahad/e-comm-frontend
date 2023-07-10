"use client";

import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getCustomers } from "../api/index.js";
import { setCookie, getCookie } from "cookies-next";
import { GraphQLClient } from "graphql-request";
import Page from "./page.jsx";

export default function CustomerList() {
  const { data } = useQuery(["getCustomers"], () => getCustomers());

  return (
    <>
      <h1 className=" text-center">Customers</h1>
      <ul className=" text-center">
        {data?.allCustomer.map((customer) => (
          <li key={customer.customer_Id}>
            customer ID: {customer.customer_Id} <br />
            customer Name:{customer.customer_name}
          </li>
        ))}
      </ul>
    </>
  );
}
