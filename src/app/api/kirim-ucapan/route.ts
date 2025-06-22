// app/api/kirim-ucapan/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { nama, status, pesan } = await req.json();

    // Ambil URL dari environment
    const gsheetUrl = process.env.GSHEET_WEBHOOK_URL;

    if (!gsheetUrl) {
      return NextResponse.json(
        { success: false, error: "Webhook URL not set" },
        { status: 500 }
      );
    }

    // Kirim data ke Google Sheets
    const res = await fetch(gsheetUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ nama, status, pesan }),
    });

    if (!res.ok) {
      return NextResponse.json(
        { success: false, error: "Gagal kirim ke Google Sheets" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      data: { nama, status, pesan }, // opsional: kirim balik data
    });
  } catch (error) {
    console.error("POST error:", error);
    return NextResponse.json(
      { success: false, error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  const gsheetUrl = process.env.GSHEET_WEBHOOK_URL;

  if (!gsheetUrl) {
    return NextResponse.json(
      { success: false, error: "Webhook URL not set" },
      { status: 500 }
    );
  }

  try {
    const res = await fetch(gsheetUrl);

    if (!res.ok) {
      return NextResponse.json(
        { success: false, error: "Gagal mengambil data dari Google Sheets" },
        { status: 500 }
      );
    }

    const data = await res.json();

    return NextResponse.json(data);
  } catch (error) {
    console.error("GET error:", error);
    return NextResponse.json([], { status: 500 });
  }
}
