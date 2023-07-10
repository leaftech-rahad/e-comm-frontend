import React from "react";
import Link from "next/link";
import { Button } from "./Button";
import Search from "./Search";
import Profile from "./Profile";
import MenuButton from "./MenuButton";

const Header = () => {
  return (
    <header className=" h-[60px]  flex flex-row  items-center p-4 drop-shadow-sm hover:drop-shadow-md border-b border-[#d3d7e0] sticky top-0 z-10">
      <Link
        href={"/"}
        className=" mr-auto max-h-14 text-3xl"
        style={{ fontFamily: "ExpletusSans-BoldItalic" }}
      >
        <Button
          button_text={"E-Shop"}
          className={"  bg-gray-800 text-slate-50"}
        />
      </Link>
      <Search />
      <Profile />
      <Link href={"/"} className=" ml-3">
        <Button button_text={"Cart"} className={" "} />
      </Link>

      <MenuButton />
    </header>
  );
};

export default Header;
