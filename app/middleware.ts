// import { withAuth, withoutAuth } from 'middleware/auth.middleware';
export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/profile/:ath*", "/login/:path*"],
};
