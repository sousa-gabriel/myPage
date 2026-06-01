import React from "react";
import { Routes } from "./routes";
import { Analytics } from "@vercel/analytics/react";

export function App() {
  return (
    <>
      <Routes />
      <Analytics />
    </>
  );
}
