"use client";

import React from "react";
import { Button } from "../Button";
import { useFormik } from "formik";
import { useMutation } from "@tanstack/react-query";
import { signIn } from "../../api/index.js";

const Login = () => {
  const formik = useFormik({
    initialValues: {
      customerPhone: "",
      customerPassword: "",
    },
  });
  const mutation = useMutation(() => signIn());
  async function onSubmit(e) {
    e.preventDefault();
    const data = formik.values;
    console.log(data);
    mutation.mutate(data);
  }

  return (
    <section>
      <h2 className=" text-center text-2xl">Sign In</h2>
      <form className=" flex flex-col text-lg" onSubmit={onSubmit}>
        <label htmlFor="customerPhone" className=" mt-3">
          Phone
        </label>
        <input
          type="text"
          name="customerPhone"
          id="customerPhone"
          className="border border-[#d3d7e0] rounded"
          onChange={formik.handleChange}
          value={formik.values.customerPhone}
        />
        <label htmlFor="customerPassword" className=" mt-3">
          Password
        </label>
        <input
          type="password"
          name="customerPassword"
          id="customerPassword"
          className="border border-[#d3d7e0] rounded"
          onChange={formik.handleChange}
          value={formik.values.customerPassword}
        />
        <Button
          button_text={"Signin"}
          type={"submit"}
          className={" border border-[#d3d7e0] rounded mt-5 hover:bg-slate-400"}
        />
      </form>
    </section>
  );
};

export default Login;
