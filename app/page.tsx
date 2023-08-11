import Image from "next/image";
import SignInButton from "./components/SignInButton";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-semibold">NextAuth Tutorial</h1>
      <SignInButton />
    </main>
  );
}
