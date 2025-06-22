"use client";

import AnimatedContent from "@/components/AnimatedContent/AnimatedContent";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

interface HalamanAwalProps {
  onNext: () => void;
}

export default function HalamanAwal({ onNext }: HalamanAwalProps) {
  const searchParams = useSearchParams();
  const nama = searchParams.get("nama") || "";
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setShowContent(true), 300);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className="relative min-h-screen w-full font-serif bg-repeat overflow-hidden"
      style={{
        backgroundColor: "#f9f4e9",
        backgroundImage: "url('/gambar/3.png')",
      }}
    >
      {/* Dekorasi Pojok */}
      {[
        { pos: "top-0 left-0", rotate: "-rotate-90" },
        { pos: "top-0 right-0", rotate: "" },
        { pos: "bottom-0 left-0", rotate: "rotate-180" },
        { pos: "bottom-0 right-0", rotate: "rotate-90" },
      ].map((item, idx) => (
        <div className={`absolute ${item.pos} z-30`} key={idx}>
          <AnimatedContent
            distance={150}
            direction="horizontal"
            reverse={item.pos.includes("left")}
            duration={2}
            ease="power3.out"
            initialOpacity={0}
            animateOpacity
            scale={1.05}
            delay={0.1 + (idx >= 2 ? 0.05 : 0)}
          >
            <Image
              src="/gambar/1.png"
              alt={`corner ${item.pos}`}
              width={300}
              height={300}
              className={`w-32 md:w-44 h-32 md:h-44 ${item.rotate}`}
            />
          </AnimatedContent>
        </div>
      ))}

      {/* Konten Utama */}
      <div
        className={`relative z-40 flex flex-col items-center justify-center min-h-screen px-4 py-4 max-w-[420px] md:max-w-[500px] mx-auto transition-opacity duration-700 ease-in ${
          showContent ? "opacity-100" : "opacity-0"
        }`}
      >
        <AnimatedContent {...fadeInOptions(0.2)}>
          <div className="flex flex-col items-center mb-6">
            <Image
              src="/gambar/4.png"
              alt="logo"
              width={240}
              height={240}
              className="w-48 md:w-60"
            />
          </div>
        </AnimatedContent>

        <AnimatedContent {...fadeInOptions(0.2)}>
          <div className="flex justify-center mb-6">
            <Image
              src="/gambar/2.png"
              alt="ornamen emas tengah"
              width={600}
              height={80}
              className="w-[300px] md:w-[500px]"
            />
          </div>
        </AnimatedContent>

        <AnimatedContent {...fadeInOptions(0.2, "horizontal", true)}>
          <div className="text-center text-green-900 text-md md:text-lg leading-relaxed mb-1 font-tanpearl">
            Kepada Yth.
            <br />
            Bapak/Ibu/Saudara/i
          </div>
        </AnimatedContent>

        {nama && (
          <AnimatedContent {...fadeInOptions(0.2, "horizontal")}>
            <div className="text-center text-green-900 text-2xl md:text-3xlfont-tanpearl uppercase tracking-wide mb-8">
              {nama}
            </div>
          </AnimatedContent>
        )}

        <AnimatedContent {...fadeInOptions(0.2)}>
          <div className="mb-10">
            <button
              onClick={onNext}
              className="bg-green-900 text-white px-10 py-2 rounded-md text-sm md:text-base hover:bg-green-800 transition"
            >
              Lihat Undangan
            </button>
          </div>
        </AnimatedContent>

        <AnimatedContent {...fadeInOptions(0.2)}>
          <div className="flex items-center justify-center w-full text-[#916F4C] font-tanpearl text-md md:text-lg tracking-wide mb-4 min-w-0">
            <div className="border-t border-[#916F4C] flex-grow mx-2 min-w-0"></div>
            <span>#MeetTheCherry&apos;s</span>
            <div className="border-t border-[#916F4C] flex-grow mx-2 min-w-0"></div>
          </div>
        </AnimatedContent>
      </div>
    </div>
  );
}

function fadeInOptions(
  delay: number,
  direction: "vertical" | "horizontal" = "vertical",
  reverse = false
) {
  return {
    distance: 20,
    direction,
    reverse,
    duration: 2,
    ease: "ease-out",
    initialOpacity: 0,
    animateOpacity: true,
    scale: 1,
    threshold: 0,
    delay,
  };
}
