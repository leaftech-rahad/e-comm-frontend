import React from "react";
import Link from "next/link";
import { Button } from "./Button";

const Header = () => {
  return (
    <header className=" h-[60px]  flex flex-row  items-center px-2 drop-shadow-lg border-b border-[#d3d7e0]">
      <Link
        href={"/"}
        noopener
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
    </header>
  );
};

export default Header;