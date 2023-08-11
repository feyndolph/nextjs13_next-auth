"use client";
import { signIn, signOut, useSession } from "next-auth/react";
export default function SignInButton() {
  const { data: session } = useSession();

  if (session && session.user) {
    return (
      <button
        className="px-12 py-4 border rounded-xl bg-red-300"
        onClick={() => signOut()}
      >
        {session.user.name}님 Log Out
      </button>
    );
  }

  return (
    <div className="space-x-10">
      <button
        className="rounded-xl border bg-yellow-300 px-12 py-4"
        onClick={() => signIn()}
      >
        Login
      </button>
    </div>
  );
}
