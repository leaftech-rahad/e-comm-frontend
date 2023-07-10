import React from "react";
import Login from "../../components/admin/Login";
import Card from "@/components/Card";
import Content from "../../components/admin/Content.jsx";

const Page = () => {
  return (
    <article className=" p-4">
      <Card className={" flex flex-row w-full justify-center"}>
        <Content />
      </Card>
    </article>
  );
};

export default Page;
