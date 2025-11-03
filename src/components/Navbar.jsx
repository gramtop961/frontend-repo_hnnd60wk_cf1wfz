import { Home, BookOpen, Users, Award } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/2/2e/Logo_Universitas_Indonesia.svg"
              alt="Universitas Indonesia"
              className="h-10 w-10"
            />
            <div>
              <p className="text-sm font-semibold text-gray-700 leading-tight">Lembaga Penelitian & Pengabdian kepada Masyarakat</p>
              <p className="text-xs text-gray-500 -mt-0.5">Universitas Indonesia</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
            <a href="#beranda" className="hover:text-gray-900 flex items-center gap-2"><Home size={18}/> Beranda</a>
            <a href="#riset" className="hover:text-gray-900 flex items-center gap-2"><MicroscopeIcon/> Riset</a>
            <a href="#pengabdian" className="hover:text-gray-900 flex items-center gap-2"><Users size={18}/> Pengabdian</a>
            <a href="#pendanaan" className="hover:text-gray-900 flex items-center gap-2"><Award size={18}/> Pendanaan</a>
            <a href="#publikasi" className="hover:text-gray-900 flex items-center gap-2"><BookOpen size={18}/> Publikasi</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="#ajukan" className="hidden sm:inline-flex items-center px-4 py-2 rounded-md bg-yellow-400 text-gray-900 font-medium hover:bg-yellow-300 transition">Ajukan Proposal</a>
          </div>
        </div>
      </div>
    </header>
  );
}

function MicroscopeIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-microscope"><path d="M6 18h8"/><path d="M3 22h18"/><path d="M14 22a7 7 0 1 0 0-14h-1"/><path d="M9 14h2"/><path d="M8 6h6l-1 4H9z"/><path d="M12 3v3"/></svg>
  );
}
