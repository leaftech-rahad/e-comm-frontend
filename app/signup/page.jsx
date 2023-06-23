import React from "react";
import Card from "../../components/Card.jsx";

import SignUpForm from "./SignUpForm.jsx";
import { useMutation } from "@tanstack/react-query";
import { signUp } from "@/api/index.js";
import { redirect } from "next/navigation.js";

const Page = (data) => {
  // console.log("page action", data);
  // if (data?.signUp) redirect("/");

  async function onclick(data) {
    "use server";
    let action;
    action = data.signUp;
    // redirect("/");
  }

  return (
    <Card className={" w-1/3 m-auto p-5 mt-3"}>
      <SignUpForm onclick={onclick} />
    </Card>
  );
};

export default Page;
