"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import { useEffect } from "react";

export default function Component() {
  const { data: session } = useSession();
  useEffect(() => {
    makeGetCall();
  }, []);


  const makeGetCall = () => {
    fetch("http://localhost:3000/api/question").then((response) => {
      console.debug("Response", response);
    });
  };

  if (session) {
    console.debug(session);
    return (
      <>
        Signed in as {session?.user?.email} <br />
        <button onClick={makeGetCall}>Make the Call</button>
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn("github")}>Sign in with Github</button>
    </>
  );
}
