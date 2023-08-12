import Image from "next/image";
import Link from "next/link";
import SignInButton from "./components/SignInButton";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-semibold">NextAuth Tutorial</h1>
      <SignInButton />
      <Link href="/profile">사용자 정보</Link>
    </main>
  );
}
