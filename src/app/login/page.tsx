"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import { useEffect } from "react";
import { Button } from "primereact/button";

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

  const protectedCallButton = () => {
    return (
      <Button onClick={makeGetCall} label="Protected Call" icon="pi pi-check" className="ml-2" />
    );
  };
  if (session) {
    console.debug(session);
    return (
      <>
        Signed in as {session?.user?.email} <br />
        <Button onClick={() => signOut()} label="Sign Out" icon="pi pi-check" />
        {protectedCallButton()}
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <Button
        onClick={() => signIn("github")}
        label="Sign in with Github"
        icon="pi pi-check"
      />
      {protectedCallButton()};
    </>
  );
}
