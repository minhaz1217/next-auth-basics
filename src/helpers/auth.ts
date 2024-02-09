import { AuthOptions, getServerSession } from "next-auth";
import NextAuth from "next-auth/next";
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

export const getServerAuthSession = () => getServerSession(authOptions);
export const auth = NextAuth(authOptions);
