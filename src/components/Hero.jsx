export default function Hero() {
  return (
    <section id="beranda" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-100 via-white to-blue-50" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full bg-yellow-100 text-yellow-800 ring-1 ring-yellow-200">LPPM Universitas Indonesia</span>
            <h1 className="mt-4 text-3xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
              Kolaborasi Riset dan Pengabdian untuk Dampak Nyata
            </h1>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Fasilitas terintegrasi untuk mendukung penelitian berkualitas dan program pengabdian kepada masyarakat.
              Jelajahi pendanaan, publikasi, mitra, serta ekosistem inovasi di Universitas Indonesia.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#ajukan" className="inline-flex items-center px-5 py-3 rounded-md bg-yellow-400 text-gray-900 font-semibold hover:bg-yellow-300 transition">Ajukan Proposal</a>
              <a href="#panduan" className="inline-flex items-center px-5 py-3 rounded-md border border-gray-300 text-gray-700 font-semibold hover:bg-gray-50 transition">Panduan & Kebijakan</a>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1581091226825-c6a89e7a5425?q=80&w=1400&auto=format&fit=crop"
              alt="UI Research Illustration"
              className="rounded-xl shadow-lg ring-1 ring-black/5"
            />
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-md p-4 ring-1 ring-black/5 w-56">
              <p className="text-sm font-semibold text-gray-800">1099+ Publikasi 2024</p>
              <p className="text-xs text-gray-500">Scopus & Sinta indexed</p>
            </div>
            <div className="absolute -top-6 -right-6 bg-yellow-400 text-gray-900 rounded-xl shadow-md p-4 w-56">
              <p className="text-sm font-semibold">Program Hibah Terbuka</p>
              <p className="text-xs opacity-90">Batch Q4 · Hingga 30 Nov</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
