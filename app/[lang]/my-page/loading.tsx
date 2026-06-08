// app/[lang]/my-page/loading.tsx
import React from "react";
import { MyPageSkeleton } from "./components";

export default function Loading() {
  // ⚡ Next.js streams this file out automatically during structural page hydration
  return <MyPageSkeleton />;
}
