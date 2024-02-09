"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import { Button } from "primereact/button";
import { ProgressSpinner } from "primereact/progressspinner";

export default function Component() {
  const { data: session } = useSession();

  const makeGetCallToInternallyProtectedEndPoint = () => {
    fetch("http://localhost:3000/api/question").then((response) => {
      console.debug("Response", response);
    });
  };

  const makeGetCallToExternallyProtectedEndPoint = () => {
    fetch("http://localhost:3000/api/question/details").then((response) => {
      console.debug("Response", response);
    });
  };
  console.debug("Session: ", session);

  const protectedCallButton = () => {
    return (
      <>
        <Button
          onClick={makeGetCallToInternallyProtectedEndPoint}
          label="Protected Call Internal"
          icon="pi pi-check"
          className="ml-2"
        />
        <Button
          onClick={makeGetCallToExternallyProtectedEndPoint}
          label="Protected Call External"
          icon="pi pi-check"
          className="ml-2"
        />
      </>
    );
  };
  if (session) {
    return (
      <>
        Signed in as {session?.user?.email} <br />
        <Button onClick={() => signOut()} label="Sign Out" icon="pi pi-check" />
        {protectedCallButton()}
      </>
    );
  }else if(session === undefined){
    return <ProgressSpinner />;
  }
  return (
    <>
      Not signed in <br />
      <Button
        onClick={() => signIn("github")}
        label="Sign in with Github"
        icon="pi pi-check"
      />
      {/* {protectedCallButton()}; */}
    </>
  );
}
