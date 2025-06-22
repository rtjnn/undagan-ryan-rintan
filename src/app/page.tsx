"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push("/ryan-rintan");
  }, [router]);

  return null; // Tidak render apa-apa karena langsung redirect
}
