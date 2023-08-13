import { data } from "autoprefixer";
import type { NextAuthOptions } from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
    maxAge: 60 * 60,
  },
  jwt: {
    maxAge: 60 * 60,
  },
  providers: [
    CredentialProvider({
      name: "CredentialsBandi",
      credentials: {
        username: { label: "username", type: "text" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentails) {
        console.log("authorize 실행");
        let formData = new FormData();

        formData.append("user_id", "feyndolph");
        formData.append("pw", "1IYIvZCkcnZf5J2jvLbDwKc5KSpdRnWJy7VsFYiOeK8=");
        formData.append("client_id", process.env.CLIENT_ID as string);
        formData.append("client_secret", process.env.CLIENT_SECRET as string);
        formData.append("response_type", process.env.RESPONSE_TYPE as string);
        formData.append("iscltapi", process.env.ISCLTAPI as string);
        formData.append("w_user_inf", process.env.W_USER_INF as string);

        const res = await fetch("http://bandi1.ks.ac.kr/api/sso/auth", {
          method: "POST",
          body: formData,
        });

        if (!res.ok) {
          throw new Error("Failed to fetch credentials");
          return null;
        } else {
          const data = await res.json();
          const user = {
            id: data.dataMap.userInfo.oid,
            name: data.dataMap.userInfo.name,
            id_token: data.dataMap.id_token,
          };
          return user;
        }
        // const user = { id: "1", name: "admin", email: "admin@gmail.com" };
      },
    }),
  ],
  callbacks: {
    // async signIn({ user, account, profile, email, credentials }) {
    //   console.log("--------------------callback signIn-------------------");
    //   console.log(user);
    //   console.log(account);
    //   console.log(profile);
    //   console.log(credentials);
    //   return true;
    // },
    async redirect({ url, baseUrl }) {
      return baseUrl;
    },
    async jwt({ token, user, account, profile }) {
      // console.log("--------------------callback jwt-------------------");
      // console.log(token);
      // console.log(user);
      // console.log(account); // undefined
      // console.log(profile); // undefined
      return { ...token, ...user };
    },
    async session({ session, token, user }) {
      // console.log("--------------------session");
      // console.log(session);
      // console.log("--------------------token");
      // console.log(token);
      // console.log("--------------------user");
      // console.log(user);
      // session.accessToken = "accesstoken";
      // session.user.id_token = "id_token";
      session.user = token as any;
      return session;
    },
  },
};
