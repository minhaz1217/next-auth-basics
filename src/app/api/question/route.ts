import { NextRequest, NextResponse } from "next/server";
import { getServerAuthSession } from "../../../helpers/auth";

export async function GET(request: NextRequest, response: NextResponse) {
  const session = await getServerAuthSession();
  console.debug("Session", session);
  const { searchParams } = new URL(request.url);
  const key = searchParams.get("key");
  console.debug("Key", key);
  const output = {
    response: "Question",
  };
  return NextResponse.json(output);
}
