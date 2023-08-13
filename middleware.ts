export { default } from "next-auth/middleware";
import { NextFetchEvent, NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

const secret = process.env.SECRET;

export async function middleware(req: NextRequest) {
  const session = await getToken({ req, secret, raw: true });
  //   const token = await getToken({ req, secret });
  //   console.log(session);
  const { pathname } = req.nextUrl;
  //   //   console.log("pathname 이다");
  //   //   console.log(pathname);
  //   console.log(token);
  //   if (pathname.startsWith("/login")) {
  //     if (session) {
  //       return NextResponse.redirect(new URL("/", req.url));
  //     }
  //   }

  if (session) {
    if (pathname.startsWith("/login")) {
      return NextResponse.redirect(new URL("/", req.url));
    }
  } else {
    return NextResponse.redirect(new URL("/login", req.url));
  }
}

export const config = { matcher: ["/extra/:path*", "/login/:path*"] };
