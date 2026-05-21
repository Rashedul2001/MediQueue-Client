'use client'
import { useAuthActions } from "@/hooks/authActions";
import { useSession } from "@/lib/auth-client";
import { Button } from "@heroui/react";

export default function Home() {
  const { logoutAndRedirect } = useAuthActions();
  const { data: session } = useSession();
  return (
    <>
      <p>Welcome, {session?.user?.email || "User"}!</p>
      <Button onClick={() => { logoutAndRedirect("/") }}>logout</Button>
      {/* SUCCESS */}
      <p>Hello, Next.js!
        It is working fine.
      </p>
      <p>Hello, Next.js!
        It is working fine.
      </p>
      <p>Hello, Next.js!
        It is working fine.
      </p>
      <p>Hello, Next.js!
        It is working fine.
      </p>
      <p>Hello, Next.js!
        It is working fine.
      </p>
      <p>Hello, Next.js!
        It is working fine.
      </p>
      <p>Hello, Next.js!
        It is working fine.
      </p>
      <p>Hello, Next.js!
        It is working fine.
      </p>
      <p>Hello, Next.js!
        It is working fine.
      </p>
      <p>Hello, Next.js!

      </p>
      <p>Hello, Next.js!
        It is working fine.
      </p>
      <p>Hello, Next.js!
        It is working fine.
      </p>
      <p>Hello, Next.js!
        It is working fine.
      </p>
      <p>Hello, Next.js!
        It is working fine.
      </p>
      <p>Hello, Next.js!
        It is working fine.
      </p>
      <p>Hello, Next.js!
        It is working fine.
      </p>
      <p>Hello, Next.js!
        It is working fine.
      </p>
      <p>Hello, Next.js!
        It is working fine.
      </p>
      <p>Hello, Next.js!
        It is working fine.
      </p>
      <p>Hello, Next.js!
        It is working fine.
      </p>
      <p>Hello, Next.js!
        It is working fine.
      </p>
      <p>Hello, Next.js!
        It is working fine.
      </p>
      <p>Hello, Next.js!
        It is working fine.
      </p>
      <p>Hello, Next.js!
        It is working fine.
      </p>
      <p>Hello, Next.js!
        It is working fine.
      </p>
      <p>Hello, Next.js!
        It is working fine.
      </p>
      <p>Hello, Next.js!
        It is working fine.
      </p>
      <p>Hello, Next.js!
        It is working fine.
      </p>
      <p>Hello, Next.js!
        It is working fine.
      </p>
      <p>Hello, Next.js!
        It is working fine.
      </p>
      <p>Hello, Next.js!
        It is working fine.
      </p>
      <p>Hello, Next.js!
        It is working fine.
      </p>
      <p>Hello, Next.js!
        It is working fine.
      </p>
      <p>Hello, Next.js!
        It is working fine.
      </p>
      <p>Hello, Next.js!
        It is working fine.
      </p>
      <p>Hello, Next.js!
        It is working fine.
      </p>
      <p>Hello, Next.js!
        It is working fine.
      </p>
      <p>Hello, Next.js!
        It is working fine.
      </p>
      <p>Hello, Next.js!
        It is working fine.
      </p>
      <p>Hello, Next.js!
        It is working fine.
      </p>
      <p>Hello, Next.js!
        It is working fine.
      </p>
      <p>Hello, Next.js!
        It is working fine.
      </p>
      <p>Hello, Next.js!
        It is working fine.
      </p>
      <p>Hello, Next.js!
        It is working fine.
      </p>
      <p>Hello, Next.js!
        It is working fine.
      </p>
      <p>Hello, Next.js!
        It is working fine.
      </p>
      <p>Hello, Next.js!
        It is working fine.
      </p>
      <p>Hello, Next.js!
        It is working fine.
      </p>
      <p>Hello, Next.js!
        It is working fine.
      </p>
      <p>Hello, Next.js!
        It is working fine.
      </p>
      <p>Hello, Next.js!
        It is working fine.
      </p>
    </>
  );
}
