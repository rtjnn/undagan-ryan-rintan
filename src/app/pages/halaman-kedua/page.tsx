"use client";

import AnimatedContent from "@/components/AnimatedContent/AnimatedContent";
import UcapanForm from "@/components/UcapanForm/UcapanForm";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { useEffect, useRef } from "react";

// import { useSearchParams } from "next/navigation";

export default function HalamanKedua() {
  // const searchParams = useSearchParams();
  // const nama = searchParams.get("nama") || "";
   const audioRef = useRef<HTMLAudioElement>(null);

useEffect(() => {
  const playAudio = () => {
    const audio = audioRef.current;
    if (audio) {
      audio.play().catch(() => {
        console.warn("Audio tidak dapat diputar secara otomatis karena pembatasan browser.");
      });
    }
  };

  playAudio();
}, []);


  return (
    
    <div
      className=" w-full overflow-x-hidden bg-repeat"
      style={{
        backgroundImage: "url('/gambar/3.png')",
        backgroundColor: "#f9f4e9",
        WebkitOverflowScrolling: "touch",
      }}
    >
      <div className="w-full overflow-x-hidden bg-repeat">
      {/* === Pemutar Lagu === */}
      <audio ref={audioRef} src="/lagu/musik.mp3" loop />

      {/* ...seluruh isi halaman tetap seperti punyamu */}
    </div>

      {/* === SECTION: DEKORASI ATAS === */}
      <section className="relative z-10 w-full h-[120px] md:h-[180px]">
        <div className="absolute top-0 left-0 z-10">
          <AnimatedContent
            direction="horizontal"
            reverse
            delay={1}
            threshold={0.1}
            distance={50}
          >
            <Image
              src="/gambar/1.png"
              alt="Dekorasi Kiri Atas"
              width={300}
              height={300}
              className="w-32 md:w-44 h-32 md:h-44 -rotate-90"
            />
          </AnimatedContent>
        </div>
        <div className="absolute top-0 right-0 z-10">
          <AnimatedContent
            direction="horizontal"
            delay={1}
            distance={50}
            threshold={0.1}
          >
            <Image
              src="/gambar/1.png"
              alt="Dekorasi Kanan Atas"
              width={300}
              height={300}
              className="w-32 md:w-44 h-32 md:h-44"
            />
          </AnimatedContent>
        </div>
        <AnimatedContent
          direction="vertical"
          reverse
          delay={1}
          distance={50}
          threshold={0.1}
        >
          <div className="flex justify-center p-10">
            <Image
              src="/gambar/arab.png"
              alt="Mempelai"
              width={220}
              height={300}
              className="my-4 md:my-0"
            />
          </div>
        </AnimatedContent>
      </section>

      {/* === KONTEN UTAMA === */}
      <main className="relative z-0 w-full max-w-3xl mx-auto px-4 pt-10 pb-32 text-center items-center">
        <AnimatedContent
          direction="vertical"
          reverse
          delay={1}
          distance={50}
          threshold={0.1}
        >
          <p className="max-w-md mx-auto text-sm md:text-lg text-gray-700 mb-8 font-tanpearl">
            Dengan memohon rahmat dan ridho Allah SWT, kami bermaksud mengundang
            Bapak/Ibu/Saudara/i untuk menghadiri acara pernikahan putra-putri
            kami:
          </p>
        </AnimatedContent>

        {/* Nama Mempelai */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-10">
          <AnimatedContent
            direction="horizontal"
            reverse
            delay={1}
            distance={50}
            threshold={0.1}
          >
            <div className="max-w-xs text-center">
              <h2 className="text-2xl md:text-4xl font-semibold text-green-800 font-tangerine">
                John Ryan Cherry
              </h2>
              <p className="text-md md:text-xl text-gray-700 font-tanpearl">
                Putra dari Bapak Michael Cherry dan Ibu Joanna Cherry
              </p>
            </div>
          </AnimatedContent>

          <AnimatedContent
            direction="vertical"
            delay={1}
            distance={50}
            threshold={0.1}
          >
            <Image
              src="/gambar/pengantin.png"
              alt="Mempelai"
              width={120}
              height={200}
              className="my-4 md:my-0"
            />
          </AnimatedContent>
          <AnimatedContent
            direction="horizontal"
            delay={1}
            distance={50}
            threshold={0.1}
          >
            <div className="max-w-xs text-center">
              <h2 className="text-2xl md:text-4xl font-semibold text-green-800 font-tangerine">
                Rintan Aprillia Jayusman
              </h2>
              <p className="text-md md:text-xl text-gray-700 font-tanpearl">
                Putri dari Bapak Dedi Jayusman dan Ibu Ratna Herlyati
              </p>
            </div>
          </AnimatedContent>
        </div>
        <AnimatedContent
          direction="vertical"
          reverse
          delay={1}
          distance={50}
          threshold={0.1}
        >
          <div className="flex justify-center ">
            <p className="text-sm md:text-lg text-gray-700 font-tanpearl">
              yang insya Allah dilaksanakan pada :
            </p>
          </div>
        </AnimatedContent>

        {/* Tanggal & Tempat */}
        <AnimatedContent
          direction="vertical"
          delay={1}
          distance={50}
          duration={1.5}
          threshold={0.1}
        >
          <div className="py-12 relative font-serif text-[#5c3613]">
            <div className="absolute left-17 md:left-44 top-16 md:top-11 text-sm md:text-xl font-tanpearl leading-none">
              <div>Akad</div>
              <div>Pernikahan</div>
            </div>

            <div className="absolute right-17 md:right-48 top-18 md:top-15 text-sm md:text-xl font-tanpearl">
              Tempat
            </div>
            <div className="absolute top-15 md:top-8 left-1/2 -translate-x-1/2 text-sm md:text-xl font-tanpearl ">
              Sabtu
            </div>

            <div className="relative w-full max-w-[90vw] sm:max-w-[600px] h-[130px] flex items-center justify-center mx-auto mt-6 text-[#fff6d2]">
              <div className="clip-pita-left bg-[#456b4d] w-1/2 h-[80px] flex items-center justify-center ">
                <div className="text-center pl-2">
                 
                  <p className="text-lg md:text-xl font-tanpearl leading-none ">
                    08.00
                  </p>
                  <p className="text-sm md:text-base">WIB</p>
                </div>
              </div>
              <div className="clip-pita-right bg-[#456b4d] w-1/2 h-[80px] flex items-center justify-center">
                <div className="text-center pr-2">
                  <p className="text-sm md:text-base font-tanpearl leading-none">
                    Villa
                  </p>
                  <p className="text-sm md:text-base font-tanpearl leading-none">
                    Kembar
                  </p>
                </div>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#6e8b73] w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full z-10 shadow-md text-[#fff6d2] flex flex-col items-center justify-center text-center p-2">
                <p className="text-2xl sm:text-3xl md:text-4xl font-tanpearl leading-tight">
                  12
                </p>
                <p className="text-sm sm:text-lg md:text-xl font-tanpearl leading-tight">
                  Juli
                </p>
                <p className="text-sm sm:text-xl md:text-2xl font-tanpearl leading-tight">
                  2025
                </p>
              </div>
            </div>
          </div>
        </AnimatedContent>

        <AnimatedContent
          direction="vertical"
          delay={1}
          distance={50}
          threshold={0.1}
        >
          <div className="flex justify-center ">
            <p className="text-sm md:text-lg text-gray-700 font-tanpearl">
              Merupakan suatu kehormatan Bapak/Ibu/Saudara/i berkenan hadir
              untuk memberikan do’a restu kepada kedua mempelai.
            </p>
          </div>
        </AnimatedContent>

        {/* Perhatian */}
        <div className="flex items-center justify-center px-4 py-12">
          <div className="max-w-md text-center text-[#456b4d]">
            <AnimatedContent
              direction="vertical"
              reverse
              delay={1}
              distance={50}
              threshold={0.1}
            >
              <h2 className="text-2xl md:text-3xl mb-2 font-tanpearl underline">
                Mohon Diperhatikan
              </h2>
            </AnimatedContent>

            <ol className="text-[#916F4C] font-tanpearl space-y-6 text-left pl-6 mb-8 text-xl md:text-2xl">
              <AnimatedContent
                direction="horizontal"
                reverse
                delay={1}
                distance={50}
                threshold={0.1}
              >
                <li>Diharapkan tidak membawa anak di bawah 12 tahun.</li>
              </AnimatedContent>
              <AnimatedContent
                direction="horizontal"
                delay={1}
                distance={50}
                threshold={0.1}
              >
                <li>Diharapkan untuk tidak membawa hadiah berupa barang.</li>
              </AnimatedContent>
            </ol>

            <AnimatedContent
              direction="vertical"
              delay={1}
              distance={50}
              threshold={0.1}
              reverse
            >
              <h2 className="text-2xl md:text-3xl  mb-2 font-tanpearl">
                Turut Mengundang
              </h2>
            </AnimatedContent>

            <ol className="text-[#916F4C] font-tanpearl space-y-4 text-left list-decimal pl-6 mb-8 text-sm md:text-lg">
              {[
                "Komisaris Besar Polisi Donyar Kusumadji, S.I.K (Dansat Brimob Jabar)",
                "Komisaris Polisi Maman Ismail, A.Md (Danyon B Pelopor)",
                "Komisaris Polisi Dedi Gunadi, S.Pd (Wakil Komandan Batalyon B Pelopor)",
                "Komisaris Polisi Saeful Bahri (Kabagops Res Cimahi)",
                "Komisaris Polisi Asep Rahman S.AP.M.M (Kabagops Subang)",
                "Ajun Komisaris Polisi Heru Mustoko, S.Kom, M.M (Pasiops Batalyon B Pelopor)",
                "Komisaris Polisi Hadi Mulyana, SH, MH (Kapolsek Lembang)",
                "Ajun Komisaris Polisi Ikin Sodikin, S.H (Kapolsek Pagaden)",
                "Ajun Komisaris Polisi Endang Suganda (Kapolsek Kota Subang)",
                "Mr. ROGER OWEN WETHERHOLT",
                "Bpk. Drs. H. Tajudin, M.Ag (Kades Cikole)",
                "Bpk. H. Asep Stroberi",
                "Bpk. OLAV",
                "Bpk. Adang Suganda (Wanayasa)",
                "Bpk. Zeend (Buruan uyut)",
              ].map((nama, i) => (
                <AnimatedContent
                  key={i}
                  direction="horizontal"
                  reverse={i % 2 === 0}
                  delay={1}
                  distance={50}
                  threshold={0.1}
                >
                  <li>{nama}</li>
                </AnimatedContent>
              ))}
            </ol>

            <AnimatedContent
              direction="vertical"
              delay={1}
              distance={50}
              threshold={0.1}
            >
              <p className="text-3xl md:text-5xl text-[#456b4d] mb-1 font-tangerine ">
                Untuk perhatiannya kami ucapkan banyak
              </p>
              <p className="text-3xl md:text-5xl text-[#456b4d] font-tangerine">
                Terimakasih kepada Bapak, Ibu, Saudara/i.
              </p>
            </AnimatedContent>
          </div>
        </div>

        {/* Lokasi QR & Maps */}
        <div className="relative min-h-screen flex flex-col items-center justify-center px-4 py-12 overflow-hidden">
          <div
            className="absolute inset-0 bg-no-repeat bg-center bg-contain"
            style={{
              backgroundImage: "url('/gambar/wayang2.png')",
              opacity: 0.2,
            }}
          ></div>
          <div className="relative z-10 text-center text-[#456b4d]">
            <AnimatedContent
              direction="vertical"
              reverse
              delay={1}
              distance={50}
              threshold={0.1}
            >
              <h2 className="text-2xl md:text-3xl font-tanpearl mb-4 tracking-wide">
                Lokasi Acara
              </h2>
            </AnimatedContent>
            <AnimatedContent
              direction="horizontal"
              reverse
              delay={1}
              distance={50}
              threshold={0.1}
            >
              <div className="rounded-[40px] border-[3px] border-[#6e4c2f] px-6 py-8 w-[260px] sm:w-[300px] mx-auto shadow-md backdrop-blur-sm">
                <p className="text-[#6e4c2f] text-[22px] font-[Pacifico] mb-4">
                  Scan me
                </p>
                <div className="bg-white p-2 rounded-xl shadow-lg inline-block">
                  <Image
                    width={200}
                    height={200}
                    src="/gambar/qr.png"
                    alt="QR Lokasi"
                    className="w-40 h-40 object-contain"
                  />
                </div>
              </div>
            </AnimatedContent>
            <AnimatedContent
              direction="horizontal"
              delay={1}
              distance={50}
              threshold={0.1}
            >
              <div className="mt-8 w-full max-w-md mx-auto rounded-xl overflow-hidden shadow-lg border border-[#6e4c2f]">
                <div className="w-full max-w-2xl mx-auto rounded-xl overflow-hidden shadow-lg border border-[#6e4c2f]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.799981664973!2d107.59457217477761!3d-6.79417516644701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e1981d5bcba9%3A0xec532461cfe0dfa2!2sTaman%20Bunga%20Asri%20%2F%20Villa%20Kembar!5e0!3m2!1sid!2sid!4v1750583629361!5m2!1sid!2sid"
                    width="100%"
                    height="350"
                    style={{ border: 0 }} // ✅ object, bukan string
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>

                {/* Tombol lihat di Google Maps */}
                <div className="text-center py-4 bg-[#f9f4e9]">
                  <Link
                    href="https://goo.gl/maps/b9ZfuRWZxStLpPbe8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-[#456b4d] text-white font-medium px-4 py-2 rounded-lg shadow hover:bg-[#365f3d] transition"
                  >
                    Lihat di Google Maps
                  </Link>
                </div>
              </div>
            </AnimatedContent>
          </div>
        </div>

        <Suspense fallback={<div>Memuat halaman ucapan...</div>}>
          <UcapanForm />
        </Suspense>
      </main>

      {/* === SECTION: DEKORASI BAWAH === */}
      <section className="relative z-10 w-full h-[120px] md:h-[180px]">
        <div className="absolute bottom-0 left-0 z-10">
          <Image
            src="/gambar/1.png"
            alt="Dekorasi Kiri Bawah"
            width={300}
            height={300}
            className="w-32 md:w-44 h-32 md:h-44 rotate-180"
          />
        </div>
        <div className="absolute bottom-0 right-0 z-10">
          <Image
            src="/gambar/1.png"
            alt="Dekorasi Kanan Bawah"
            width={300}
            height={300}
            className="w-32 md:w-44 h-32 md:h-44 rotate-90"
          />
        </div>
      </section>
    </div>
  );
}
