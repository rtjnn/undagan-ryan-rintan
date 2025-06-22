"use client";

import { useState, Suspense } from "react";

import HalamanAwal from "@/components/HalamanAwal";
import HalamanKedua from "../pages/halaman-kedua/page";

export default function Home() {
  const [isSplit, setIsSplit] = useState(false);

  const handleNext = () => {
    setIsSplit(true);
  };

  return (
    <div className="relative">
      {/* Render Halaman Kedua langsung saat isSplit true */}
      {isSplit && <HalamanKedua />}

      {/* Halaman Awal di atas HalamanKedua */}
      {!isSplit && (
        <div className="w-screen h-screen">
          {/* ⛑ Bungkus HalamanAwal dalam Suspense */}
          <Suspense fallback={null}>
            <HalamanAwal onNext={handleNext} />
          </Suspense>
        </div>
      )}

      {/* Split animation */}
      {isSplit && (
        <>
          <div
            className="fixed top-0 left-0 w-1/2 h-full z-50 animate-split-left max-w-[50vw] overflow-hidden"
            style={{
              backgroundColor: "#f9f4e9",
              backgroundImage: "url('/gambar/3.png')",
              backgroundSize: "cover",
            }}
          />
          <div
            className="fixed top-0 right-0 w-1/2 h-full z-50 animate-split-right max-w-[50vw] overflow-hidden"
            style={{
              backgroundColor: "#f9f4e9",
              backgroundImage: "url('/gambar/3.png')",
              backgroundSize: "cover",
            }}
          />
        </>
      )}
    </div>
  );
}
