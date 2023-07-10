import React from "react";
import Card from "../../components/Card.jsx";
import SignUpForm from "./SignUpForm.jsx";

const Page = () => {
  return (
    <Card className={" p-5 mt-3 max-md:mx-4 md:w-1/3 md:mx-auto"}>
      <SignUpForm />
    </Card>
  );
};

export default Page;
