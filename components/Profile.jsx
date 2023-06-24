"use client";
import React from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { customer } from "../api/index.js";

const Profile = () => {
  const queryClient = useQueryClient();
  queryClient.invalidateQueries({ queryKey: ["customer"] });
  const { data } = useQuery(["customer"], () => customer(), { retry: 2 });
  if (data?.customer.customer_Id)
    return <p>Hi! {data?.customer.customer_name}</p>;
  else return <p>Loading...</p>;
};

export default Profile;
