export { default } from "next-auth/middleware";
import { NextFetchEvent, NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

const secret = process.env.SECRET;

export async function middleware(req: NextRequest, event: NextFetchEvent) {
  const session = await getToken({ req, secret, raw: true });
  console.log(session);
}

export const config = { matcher: ["/extra"] };
