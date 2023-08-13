import { getServerSession } from "next-auth";
import React from "react";
import { authOptions } from "@/app/lib/auth";
import { redirect } from "next/navigation";

export default async function ProfileServer() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/login?callbackUrl=/profile/server");
  }
  return (
    <section className="py-24">
      <div className="container">
        <h1 className="text-2xl">This is a profile server</h1>
        <p className="mt-4">{session?.user?.id}</p>
        <p className="mt-4">{session?.user?.name}</p>
        <p className="mt-4">{session?.user?.id_token}</p>
        <pre>{JSON.stringify(session, null, 2)}</pre>
      </div>
    </section>
  );
}
