"use client";

import React from "react";
import Card from "../../components/Card";
import { Button } from "../../components/Button";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signOut } from "../../api/index";
import { redirect } from "next/navigation";
const Page = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation(signOut);
  const handelClick = (e) => {
    e.preventDefault();
    mutation.mutate();
    queryClient.clear();
  };
  mutation?.data
    ? queryClient.invalidateQueries({ queryKey: ["customer"] })
    : null;
  return (
    <>
      <Card className={" w-1/2 m-auto mt-5"}>
        <section className=" flex flex-col ">
          <h1 className=" text-center text-3xl">Are you sure to Logout?</h1>
          <Button
            button_text={"Logout"}
            className={" border border-[#d3d7e0] "}
            onClick={handelClick}
          />
        </section>
      </Card>
    </>
  );
};

export default Page;
