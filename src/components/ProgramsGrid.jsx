import { Microscope, Users, Award, BookOpen } from "lucide-react";

const items = [
  {
    icon: Microscope,
    title: "Penelitian",
    desc: "Skema pendanaan, laboratorium, etika penelitian, dan manajemen publikasi.",
    href: "#riset",
    color: "bg-blue-50 text-blue-700 ring-blue-200",
  },
  {
    icon: Users,
    title: "Pengabdian Masyarakat",
    desc: "Program, kemitraan, dampak sosial, dan pelaporan kegiatan PkM.",
    href: "#pengabdian",
    color: "bg-emerald-50 text-emerald-700 ring-emerald-200",
  },
  {
    icon: Award,
    title: "Pendanaan & Hibah",
    desc: "Informasi skema hibah internal/eksternal, jadwal, dan persyaratan.",
    href: "#pendanaan",
    color: "bg-yellow-50 text-yellow-800 ring-yellow-200",
  },
  {
    icon: BookOpen,
    title: "Publikasi & HKI",
    desc: "Repositori publikasi, jurnal UI, dan pengelolaan kekayaan intelektual.",
    href: "#publikasi",
    color: "bg-purple-50 text-purple-700 ring-purple-200",
  },
];

export default function ProgramsGrid() {
  return (
    <section className="py-16" aria-labelledby="programs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4 mb-8">
          <div>
            <h2 id="programs" className="text-2xl sm:text-3xl font-bold text-gray-900">Layanan Utama</h2>
            <p className="mt-2 text-gray-600">Semua kebutuhan riset dan pengabdian dalam satu tempat.</p>
          </div>
          <a href="#ajukan" className="hidden sm:inline-flex px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50">Ajukan Sekarang</a>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((it) => (
            <a key={it.title} href={it.href} className="group block p-5 rounded-xl bg-white shadow-sm ring-1 ring-gray-200 hover:shadow-md transition">
              <div className={`inline-flex items-center justify-center w-11 h-11 rounded-lg ring-1 ${it.color}`}>
                <it.icon size={22} />
              </div>
              <h3 className="mt-4 font-semibold text-gray-900 group-hover:text-gray-800">{it.title}</h3>
              <p className="mt-1 text-sm text-gray-600">{it.desc}</p>
              <span className="mt-3 inline-block text-sm font-medium text-blue-700 group-hover:text-blue-800">Pelajari selengkapnya →</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
