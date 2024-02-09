import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";

import { auth, getServerAuthSession } from "../../../../helpers/auth";

export const GET = async (request: any) => {
  const session = await getServerAuthSession();
  if (!session) {
    return NextResponse.json(
      { error: "not logged in" },
      {
        status: 403,
      }
    );
  }
  const output = {
    response: "Details",
  };
  return NextResponse.json(output);
};
