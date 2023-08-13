import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      id_token: string;
      address: string;
    } & DefaultSession["user"];
  }
}
