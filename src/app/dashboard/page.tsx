"use client";

import React from "react";
import { Button } from "primereact/button";
import GuestGuard from "../../guards/GuestGuard";
export default function Dashboard() {
  return (
    <GuestGuard>
      <h1>This page is under guest guard</h1>
      <Button label="Check" icon="pi pi-check" />;
    </GuestGuard>
  );
}
