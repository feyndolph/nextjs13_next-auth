import Image from "next/image";
import Link from "next/link";
import SignInButton from "./components/SignInButton";
import { getServerSession } from "next-auth";
import { authOptions } from "./lib/auth";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-semibold">NextAuth Tutorial</h1>
      {session ? <p>{session?.user?.name}</p> : <p>로그인 안됨</p>}
      <SignInButton />
      <Link href="/profile/client">Protected(client)</Link>
      <Link href="/profile/server">Protected(server)</Link>
      <Link href="/extra">Extra(middleware)</Link>
    </main>
  );
}
