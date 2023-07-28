"use client";
import Card from "../../components/Card";
import { Button } from "../../components/Button";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signOut } from "../../api/index";

const Page = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: signOut,
    onSuccess: () => {
      window.open("http://localhost:3000");
      window.close();
    },
  });

  const handelClick = (e) => {
    e.preventDefault();
    mutation.mutate();
  };

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
