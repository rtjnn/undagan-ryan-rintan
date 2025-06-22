"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import AnimatedContent from "../AnimatedContent/AnimatedContent";

interface Ucapan {
  id: number;
  nama: string;
  status: string;
  pesan: string;
}

export default function UcapanForm() {
  const searchParams = useSearchParams();
  const [form, setForm] = useState({ nama: "", status: "", pesan: "" });
  const [ucapanList, setUcapanList] = useState<Ucapan[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState("");

  const perPage = 5;
  const filtered = filter
    ? ucapanList.filter((u) => u.status.toLowerCase() === filter.toLowerCase())
    : ucapanList;
  const paginated = filtered.slice((currentPage - 1) * perPage, currentPage * perPage);

  useEffect(() => {
    const namaURL = searchParams.get("nama");
    if (namaURL) setForm((prev) => ({ ...prev, nama: decodeURIComponent(namaURL) }));
    fetchUcapan();
  }, [searchParams]);

  const fetchUcapan = async () => {
    const res = await fetch("/api/kirim-ucapan");
    const data = await res.json();
    setUcapanList(data);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/kirim-ucapan", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    if (data.success) {
      fetchUcapan();
      setForm({ ...form, status: "", pesan: "" });
    }
  };

  return (
    <AnimatedContent
              direction="vertical"
              delay={0.5}
              distance={50}
              threshold={0.1}
            >
    <div className="max-w-2xl mx-auto my-10 p-6 backdrop-blur-sm rounded-2xl shadow-xl border">
      <h3 className="text-2xl font-bold mb-6 text-center text-green-900">
        💌 Beri Ucapan
      </h3>

      {/* FORM */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Nama Anda"
          value={form.nama}
          onChange={(e) => setForm({ ...form, nama: e.target.value })}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-700 outline-none"
          required
        />
        <select
          value={form.status}
          onChange={(e) => setForm({ ...form, status: e.target.value })}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-700 outline-none"
          required
        >
          <option value="">Pilih Status Kehadiran</option>
          <option value="Hadir">✅ Hadir</option>
          <option value="Tidak Hadir">❌ Tidak Hadir</option>
          <option value="Masih Ragu">❓ Masih Ragu</option>
        </select>
        <textarea
          placeholder="Tulis ucapan terbaikmu..."
          value={form.pesan}
          onChange={(e) => setForm({ ...form, pesan: e.target.value })}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 h-24 resize-none focus:ring-2 focus:ring-green-700 outline-none"
          required
        />
        <button
          type="submit"
          className="w-full bg-green-800 hover:bg-green-700 text-white font-semibold py-2 rounded-lg transition-all"
        >
          Kirim Ucapan
        </button>
      </form>

      {/* FILTER */}
      <div className="mt-6 flex flex-wrap gap-2 justify-center">
        {["", "Hadir", "Tidak Hadir", "Masih Ragu"].map((s) => (
          <button
            key={s}
            onClick={() => {
              setFilter(s);
              setCurrentPage(1);
            }}
            className={`px-4 py-1.5 rounded-full transition text-sm font-medium ${
              filter === s
                ? "bg-green-800 text-white shadow"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {s || "Semua"}
          </button>
        ))}
      </div>

      {/* UCAPAN LIST */}
      <div className="mt-8 space-y-4">
        <h4 className="font-semibold text-xl text-center text-green-900">Ucapan Terbaru</h4>

        {paginated.length === 0 ? (
          <p className="text-gray-500 text-center">Belum ada ucapan.</p>
        ) : (
          paginated.map((u) => (
            <div
              key={u.id}
              className="bg-gray-50 border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition"
            >
              <p className="font-bold text-green-900">
                {u.nama}{" "}
                <span className="text-sm text-gray-500 italic">({u.status})</span>
              </p>
              <p className="text-gray-700 mt-1 text-sm whitespace-pre-line">{u.pesan}</p>
            </div>
          ))
        )}
      </div>

      {/* PAGINATION */}
      <div className="flex justify-center mt-6 gap-2 flex-wrap">
        {Array.from({ length: Math.ceil(filtered.length / perPage) }).map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-3 py-1.5 text-sm rounded-lg transition ${
              currentPage === i + 1
                ? "bg-green-700 text-white shadow"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
    </AnimatedContent>
  );
}
