"use client";
import React from "react";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Login() {
  const { data: session, status, update } = useSession();
  if (status === "authenticated") {
    return (
      <>
        <main className="flex min-h-screen flex-col items-center space-y-10 p-24">
          <h1>Profile</h1>
          <div>
            <h3>id</h3>
            <p>{session?.user.id}</p>
          </div>
          <div>
            <h3>name</h3>
            <p>{session?.user.name}</p>
          </div>
          <div>
            <h3>id_token</h3>
            <p>{session?.user.id_token}</p>
          </div>
        </main>
      </>
    );
  }
  return <Link href="/login">로그인</Link>;
}
