import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { getServerAuthSession } from "../../../helpers/auth";

export async function GET(request: NextRequest, response: NextResponse) {
  //   console.debug("Req", JSON.stringify(request));.
  const session = await getServerAuthSession();
  console.debug("Session", session);
  const { searchParams } = new URL(request.url);
  const key = searchParams.get("key");
  console.debug("Key", key);
  return NextResponse.json("Healthy");
}
