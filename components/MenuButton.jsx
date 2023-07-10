"use client";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import React from "react";

const MenuButton = () => {
  const { data } = useQuery(["customer"]);
  const [ShowMenu, setShowMenu] = React.useState(false);
  const handelMenu = (e) => {
    e.preventDefault();
    if (ShowMenu == false) setShowMenu(true);
    else setShowMenu(false);
  };
  return (
    <button
      className={"  ml-3 border shadow-md p-[6px] rounded "}
      onClick={handelMenu}
    >
      {ShowMenu == false ? (
        <>
          <li
            className=" w-5 h-[2px]
         bg-black list-none m-[4px]"
          ></li>
          <li
            className=" w-5 h-[2px]
         bg-black list-none m-[4px] "
          ></li>
          <li
            className=" w-5 h-[2px]
         bg-black list-none m-[4px] "
          ></li>
        </>
      ) : (
        <>
          <div className={"py-[3px] "}>
            <li
              className=" w-5 h-[2px]
         bg-black list-none m-[4px]  rotate-45 translate-y-0.5 "
            ></li>

            <li
              className=" w-5 h-[2px]
         bg-black list-none m-[4px] -rotate-45 -translate-y-1"
            ></li>
          </div>
          <ul className=" list-none absolute top-[60px] right-4 p-2 border rounded flex flex-col w-40 h-[185px] gap-1">
            {data?.customer.customer_Id ? null : (
              <Link
                href="/signup"
                className=" rounded hover:border hover:shadow-lg my-auto"
              >
                <button>Create an account</button>
              </Link>
            )}
            {data?.customer.customer_Id ? null : (
              <Link
                href=""
                className=" rounded hover:border hover:shadow-lg my-auto"
              >
                <button>Login</button>
              </Link>
            )}
            {data?.customer.customer_Id ? (
              <Link
                href="/logout"
                className=" rounded hover:border hover:shadow-lg my-auto"
              >
                <button>Logout</button>
              </Link>
            ) : null}
            <Link
              href=""
              className=" rounded hover:border hover:shadow-lg my-auto"
            >
              <button>Contact us</button>
            </Link>
            <Link
              href=""
              className=" rounded hover:border hover:shadow-lg my-auto"
            >
              <button>About us</button>
            </Link>
            <Link
              href=""
              className=" rounded hover:border hover:shadow-lg my-auto"
            >
              <button>Help Line</button>
            </Link>
          </ul>
        </>
      )}
    </button>
  );
};

export default MenuButton;
