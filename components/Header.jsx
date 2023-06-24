import React from "react";
import Link from "next/link";
import { Button } from "./Button";
import Profile from "./Profile";

const Header = () => {
  return (
    <header className=" h-[60px]  flex flex-row  items-center px-2 drop-shadow-sm hover:drop-shadow-md border-b border-[#d3d7e0]">
      <Link
        href={"/"}
        className=" mr-auto text-4xl"
        style={{ fontFamily: "ExpletusSans-BoldItalic" }}
      >
        <Button button_text={"E-Shop"} className={" "} />
      </Link>
      <Link href={"/"} className=" ml-1">
        <Button button_text={"logo"} className={" "} />
      </Link>
      <Link href={"/"} className=" ml-1">
        <Button button_text={"logo"} className={" "} />
      </Link>
      <Link href={"/"} className=" ml-1">
        <Button button_text={"logo"} className={" "} />
      </Link>
      <Button
        button_text={"logo"}
        className={"  ml-1 bg-[#4d7ef9] text-white"}
      />
      <Profile />
    </header>
  );
};

export default Header;
