"use client";
import React from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { customer } from "../api/index.js";

const Profile = () => {
  const queryClient = useQueryClient();
  //queryClient.invalidateQueries({ queryKey: ["customer"] });
  const { data, isLoading } = useQuery(["customer"], () => customer());
  if (data?.customer.customer_Id)
    return <p className=" max-sm:hidden">Hi! {data?.customer.customer_name}</p>;
  else return null;
};

export default Profile;
