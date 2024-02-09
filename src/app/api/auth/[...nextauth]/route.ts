import NextAuth from "next-auth";
import { authOptions } from "../../../../helpers/auth";

const handler = NextAuth({
  ...authOptions,
  ...{
    callbacks: {
      async jwt({ token, account, user }) {
        console.debug("Setting token", user);
        if (account) {
          token.accessToken = account.access_token;
        }
        return token;
      },
      async session({ session, token, user }) {
        console.debug("Setting ses", session, token, user);
        // Send properties to the client, like an access_token from a provider.
        // session.accessToken = token.accessToken;
        return session;
      },
    },
  },
});
export { handler as GET, handler as POST };
