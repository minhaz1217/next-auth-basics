"use client";

import { useSession } from "next-auth/react";
import { ProgressSpinner } from "primereact/progressspinner";

export default function GuestGuard({
  children,
}: Readonly<{ children: React.ReactNode }>): JSX.Element {
  const { data: session } = useSession();
  console.debug("Session", session);
  if (session) {
    return <>{children}</>;
  } else if (session === null) {
    return (
      <p>
        Please login <a href="/login"> Login</a>
      </p>
    );
  }
  return <ProgressSpinner />;
}
