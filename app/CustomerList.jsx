"use client";

import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getCustomers } from "../api/index.js";

export default function CustomerList() {
  const { data, isLoading, isError } = useQuery(["getCustomers"], () =>
    getCustomers()
  );

  return (
    <>
      <h1 className=" text-center">Customers</h1>
      <ul className=" text-center">
        {data?.allCustomer.map((customer) => (
          <li key={customer.customer_Id}>
            {customer.customer_Id} {customer.customer_name}
          </li>
        ))}
      </ul>
    </>
  );
}
