import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProgramsGrid from "./components/ProgramsGrid";
import NewsList from "./components/NewsList";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/2/2e/Logo_Universitas_Indonesia.svg"
                alt="Universitas Indonesia"
                className="h-10 w-10"
              />
              <div>
                <p className="text-sm font-semibold text-white leading-tight">LPPM Universitas Indonesia</p>
                <p className="text-xs text-gray-400 -mt-0.5">Riset & Pengabdian</p>
              </div>
            </div>
            <p className="mt-4 text-sm text-gray-400 max-w-sm">
              Memfasilitasi ekosistem riset dan pengabdian yang unggul untuk menghasilkan dampak nyata bagi bangsa.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white">Tautan</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a className="hover:text-white" href="#riset">Penelitian</a></li>
              <li><a className="hover:text-white" href="#pengabdian">Pengabdian</a></li>
              <li><a className="hover:text-white" href="#pendanaan">Hibah & Pendanaan</a></li>
              <li><a className="hover:text-white" href="#publikasi">Publikasi & HKI</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white">Bantuan</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a className="hover:text-white" href="#panduan">Panduan & Kebijakan</a></li>
              <li><a className="hover:text-white" href="#faq">FAQ</a></li>
              <li><a className="hover:text-white" href="#kontak">Kontak</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white">Kontak</h4>
            <p className="mt-3 text-sm text-gray-400">Kampus UI Depok 16424, Indonesia</p>
            <p className="text-sm text-gray-400">Email: lppm@ui.ac.id</p>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-white/10 text-xs text-gray-400 flex items-center justify-between">
          <p>© {new Date().getFullYear()} Universitas Indonesia. Semua hak dilindungi.</p>
          <p>Versi pratinjau</p>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ProgramsGrid />
        <NewsList />

        {/* Ajukan */}
        <section id="ajukan" className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-yellow-100 via-yellow-50 to-white rounded-2xl p-8 ring-1 ring-yellow-200">
              <div className="grid md:grid-cols-2 gap-6 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Ajukan Proposal Riset atau Pengabdian</h3>
                  <p className="mt-2 text-gray-600">Gunakan akun SSO UI untuk mengajukan proposal, unggah dokumen, dan pantau progres penilaian.</p>
                </div>
                <div className="flex md:justify-end">
                  <a href="#" className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-yellow-400 text-gray-900 font-semibold hover:bg-yellow-300 w-full md:w-auto">Masuk SSO UI</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
