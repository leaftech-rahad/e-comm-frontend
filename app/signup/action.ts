"use server";

import { setCookie } from "cookies-next";
import { NextRequest, NextResponse } from "next/server";

export async function Action() {
  const res = NextResponse.next();
  //console.log(res);
}
