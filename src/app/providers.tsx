"use client";

import nextAuth from "next-auth";
// import NextAuth, { getServerSession } from "next-auth/next";
import { SessionProvider, useSession } from "next-auth/react";
// import { authOptions } from "../helpers/shared-configs/auth-options";
// import { auth } from "../helpers/auth";

export default function Providers({
  children,
}: Readonly<{ children: React.ReactNode }>): JSX.Element {
  //   const session = useSession();
  const session: any = undefined;

  //   const session = await getServerSession(authOptions);
  return <SessionProvider session={session}>{children}</SessionProvider>;
}
