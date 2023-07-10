"use client";
import React from "react";
import { useFormik, useField, useFormikContext } from "formik";
import { Button } from "../../components/Button.jsx";
import { signUp, customer, signOut } from "../../api/index.js";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { redirect } from "next/navigation";
import { setCookie, getCookies } from "cookies-next";

const SignUpForm = () => {
  const queryClient = useQueryClient();
  const formik = useFormik({
    initialValues: {
      customerName: "",
      customerPhone: "",
      customerEmail: "",
      customerPassword: "",
      // customerDob: "",
      // customerArea: "",
    },
  });

  const mutation = useMutation({
    mutationFn: signUp,
    onSuccess: () => {},
  });
  async function OnSubmit(e) {
    e.preventDefault();

    const val = formik.values;
    mutation.mutate(val);
    queryClient.invalidateQueries({ queryKey: ["customer"] });
  }

  mutation?.data ? redirect("/") : null;
  return (
    <>
      <form onSubmit={OnSubmit} className=" flex flex-col ">
        <label htmlFor="customerName"> Name</label>
        <input
          type="text"
          name="customerName"
          id="customerName"
          className=" border border-[#d3d7e0] rounded mb-2"
          onChange={formik.handleChange}
          value={formik.values.customerName}
        />
        <label htmlFor="customerPhone">Phone</label>
        <input
          type="text"
          name="customerPhone"
          id="customerPhone"
          className=" border border-[#d3d7e0] rounded mb-2"
          onChange={formik.handleChange}
          value={formik.values.customerPhone}
        />
        <label htmlFor="customerEmail">Email</label>
        <input
          type="text"
          name="customerEmail"
          id="customerEmail"
          className=" border border-[#d3d7e0] rounded mb-2"
          onChange={formik.handleChange}
          value={formik.values.customerEmail}
        />
        <label htmlFor="customerPassword">Password</label>
        <input
          type="password"
          name="customerPassword"
          id="customerPassword"
          className=" border border-[#d3d7e0] rounded mb-2"
          onChange={formik.handleChange}
          value={formik.values.customerPassword}
        />
        <label htmlFor="reType_password">Confirm Password</label>
        <input
          type="password"
          name="reType_password"
          id="reType_password"
          className=" border border-[#d3d7e0] rounded mb-2"
          onChange={formik.handleChange}
          value={formik.values.reType_password}
        />

        <Button
          type={"submit"}
          button_text={"Sign Up"}
          className=" border border-[#d3d7e0] mt-5"
        />
      </form>
      {mutation.isError ? (
        <div className=" text-center pt-4">
          {JSON.stringify(mutation.error.response.errors[0].message)}
        </div>
      ) : null}
    </>
  );
};

export default SignUpForm;
