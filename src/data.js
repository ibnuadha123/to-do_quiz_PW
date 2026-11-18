export const initialTodos = [
  {
    id: 1,
    title: "Menyusun Laporan Praktikum Basis Data",
    description:
      "Menulis laporan praktikum modul 5 tentang normalisasi tabel beserta diagram ERD.",
    priority: "high",
    deadline: "2026-12-05",
    status: "in progress",
  },
  {
    id: 2,
    title: "Belajar Dasar TypeScript",
    description:
      "Mempelajari tipe data, interface, dan generic untuk persiapan proyek React.",
    priority: "medium",
    deadline: "2026-12-20",
    status: "to-do",
  },
  {
    id: 3,
    title: "Merapikan Repository GitHub",
    description:
      "Menambahkan README, screenshot, dan menghapus file yang tidak terpakai.",
    priority: "low",
    deadline: "2026-11-28",
    status: "done",
  },
  {
    id: 4,
    title: "Membuat Desain Landing Page",
    description:
      "Membuat wireframe dan palet warna untuk landing page komunitas kampus.",
    priority: "medium",
    deadline: "2026-12-12",
    status: "in progress",
  },
  {
    id: 5,
    title: "Latihan Soal Algoritma",
    description: "Mengerjakan 10 soal sorting dan searching dari modul latihan.",
    priority: "low",
    deadline: "2026-12-01",
    status: "to-do",
  },
];

export const STATUS_OPTIONS = ["to-do", "in progress", "done"];
export const PRIORITY_OPTIONS = ["low", "medium", "high"];

export const toClass = (value) => value.replace(/\s+/g, "-");