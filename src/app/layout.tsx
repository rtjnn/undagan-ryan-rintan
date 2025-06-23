import type { Metadata } from "next";
// Hapus ini jika tidak dipakai:
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Wedding Of Ryan & Rintan",
  description: "Sabtu, 12 Juli 2025",
  icons: {
    icon: "/favicon.ico", // ← tambahkan ini
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
         
       
        <link
          href="https://example.com/path-to-tanpearl-font.css"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Tangerine&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}

