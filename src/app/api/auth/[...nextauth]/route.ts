import NextAuth, { AuthOptions } from "next-auth";
import { NextApiRequest, NextApiResponse } from "next";

import GithubProvider from "next-auth/providers/github";
export const authOptions: AuthOptions = {
  callbacks: {},
  providers: [
    GithubProvider({
      clientId: process?.env?.GITHUB_ID ?? "",
      clientSecret: process?.env?.GITHUB_SECRET ?? "",
    }),
  ],
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
