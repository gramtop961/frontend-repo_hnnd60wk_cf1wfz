export default function NewsList() {
  const news = [
    {
      title: "Penerimaan Proposal Hibah Penelitian UI 2025",
      date: "15 Oktober 2025",
      tag: "Pengumuman",
      link: "#",
    },
    {
      title: "Workshop: Etika Penelitian dan Pengelolaan Data",
      date: "02 November 2025",
      tag: "Kegiatan",
      link: "#",
    },
    {
      title: "Pengabdian: Kolaborasi UI x Pemda untuk Smart City",
      date: "28 September 2025",
      tag: "Berita",
      link: "#",
    },
  ];

  return (
    <section className="py-16 bg-gray-50" aria-labelledby="berita">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4 mb-8">
          <div>
            <h2 id="berita" className="text-2xl sm:text-3xl font-bold text-gray-900">Berita & Pengumuman</h2>
            <p className="mt-2 text-gray-600">Info terbaru seputar penelitian dan pengabdian di UI.</p>
          </div>
          <a href="#" className="hidden sm:inline-flex px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-100">Lihat semua</a>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {news.map((n) => (
            <a key={n.title} href={n.link} className="block bg-white p-5 rounded-xl shadow-sm ring-1 ring-gray-200 hover:shadow-md transition">
              <span className="inline-flex items-center px-2 py-0.5 text-xs font-medium rounded-full bg-blue-50 text-blue-700 ring-1 ring-blue-200">{n.tag}</span>
              <h3 className="mt-3 font-semibold text-gray-900">{n.title}</h3>
              <p className="mt-1 text-sm text-gray-500">{n.date}</p>
              <span className="mt-3 inline-block text-sm font-medium text-blue-700">Baca selengkapnya →</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
