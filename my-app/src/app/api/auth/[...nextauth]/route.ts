import { prisma } from "@/lib/db/prisma";
import { env } from "@/lib/env";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import NextAuth from "next-auth/next";
import { mergeAnonymousCartIntoUserCart } from "@/lib/db/cart";

export const authOptions: NextAuthOptions = {
  // Might Throw An Error Here !!!
  adapter: PrismaAdapter(prisma) as NextAuthOptions["adapter"],
  providers: [
    GoogleProvider({
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    session({ session, user }) {
      session.user.id = user.id;
      return session;
    },
  },
  events: {
    async signIn({user}){
      await mergeAnonymousCartIntoUserCart(user.id);
    }
  }
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
