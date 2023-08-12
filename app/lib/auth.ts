import { data } from "autoprefixer";
import type { NextAuthOptions } from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialProvider({
      name: "Credentials",
      credentials: {
        username: { label: "username", type: "text" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentails) {
        console.log("authorize 실행");
        let formData = new FormData();

        formData.append("user_id", "feyndolph");
        formData.append("pw", "1IYIvZCkcnZf5J2jvLbDwKc5KSpdRnWJy7VsFYiOeK8=");
        formData.append("client_id", process.env.CLIENT_ID);
        formData.append("client_secret", process.env.CLIENT_SECRET);
        formData.append("response_type", process.env.RESPONSE_TYPE);
        formData.append("iscltapi", process.env.ISCLTAPI);
        formData.append("w_user_inf", process.env.W_USER_INF);

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
          console.log(user);
          return user;
        }
        // const user = { id: "1", name: "admin", email: "admin@gmail.com" };
      },
    }),
  ],
  // callbacks: {

  // },
  pages: {
    signIn: "/login",
  },
};
