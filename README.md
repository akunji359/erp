# ERP Kebun Sawit - React Application

Sistem manajemen ERP untuk industri perkebunan kelapa sawit yang comprehensive dan modern.

## 🚀 Tahap Pengembangan

### ✅ Tahap 1 - Struktur & Routing (SELESAI)
- [x] Struktur folder lengkap untuk semua modul
- [x] Setup React Router dengan nested routes
- [x] Stub komponen untuk 15 modul utama
- [x] 200+ halaman dengan routing lengkap
- [x] TypeScript interfaces dan types
- [x] Custom hooks dan context providers

### 🔄 Tahap 2 - Navigasi & Layout (NEXT)
- [ ] SideNav dengan menu collapsible
- [ ] TopBar dengan search dan notifications
- [ ] MainLayout responsive
- [ ] Context API untuk state management
- [ ] Framer Motion animations

### 📋 Modul Sistem

#### 1. ADMINISTRATOR
- Manajer Menu
- ERP (Pengaturan Menu, Hak Akses, Detail Akses, Daftar Admin)
- Mobile (Pengaturan Menu Mobile, Hak Akses Mobile, Salin Hak Akses)
- BI (15+ sub-menu termasuk Alat Admin)

#### 2. SETUP
- Keuangan (Mata Uang & Kurs)
- Kebun (6 sub-menu)
- Pengadaan (3 sub-menu)
- Persetujuan (2 sub-menu)
- Lainnya (12 sub-menu)

#### 3. KEUANGAN
- Transaksi (10 sub-menu)
- Laporan (9 sub-menu)
- Setup & Proses (10 sub-menu)

#### 4. PENGADAAN
- Transaksi (9 sub-menu)
- Laporan (8 sub-menu)
- Setup (6 sub-menu)

#### 5. KEBUN
- Rawat & Sensus (5 sub-menu)
- Panen & Produksi (9 sub-menu)
- Laporan (5 sub-menu)
- Setup & Proses (5 sub-menu)

#### 6. PABRIK
- Logsheet & Laboratorium (2 sub-menu)
- Pemeliharaan & Produksi (7 sub-menu)
- Laporan & Analisis (6 sub-menu)

#### 7. INFRASTRUKTUR
- Traksi (3 sub-menu)
- Bengkel & Sipil (4 sub-menu)
- Data Master (3 sub-menu)

#### 8. PEMASARAN
- Transaksi (5 sub-menu)
- Laporan (5 sub-menu)

#### 9. SDM
- Data & Administrasi (7 sub-menu)
- Payroll (6 sub-menu)
- KPI & Penilaian (3 sub-menu)

#### 10. ANGGARAN
- Master Anggaran (8 sub-menu)
- Transaksi & Pelaporan (4 sub-menu)

#### 11. UMUM
- Infrastruktur Umum (3 sub-menu)
- Laporan (3 sub-menu)

#### 12. KONTRAK
- 4 menu utama

#### 13. LEGAL
- 6 menu utama

#### 14. GIS
- Manajemen Peta (6 sub-menu)

#### 15. LAPORAN MANAJEMEN
- Keuangan (3 sub-menu)
- SDM (4 sub-menu)
- Kebun/Pabrik (LM-1 s.d. LM-8)
- Operasional (4 sub-menu)
- Anggaran (2 sub-menu)
- Umum & Kontrak

## 🛠 Tech Stack

- **Frontend**: React 18 + TypeScript
- **Routing**: React Router v6
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Build Tool**: Vite
- **State Management**: Context API + Custom Hooks
- **Animations**: Framer Motion (Tahap 2)

## 📁 Struktur Folder

```
src/
├── components/
│   └── Layout/
│       ├── MainLayout.tsx
│       └── PageStub.tsx
├── pages/
│   ├── Dashboard/
│   ├── Administrator/
│   ├── Setup/
│   ├── Keuangan/
│   ├── Pengadaan/
│   ├── Kebun/
│   ├── Pabrik/
│   ├── Infrastruktur/
│   ├── Pemasaran/
│   ├── SDM/
│   ├── Anggaran/
│   ├── Umum/
│   ├── Kontrak/
│   ├── Legal/
│   ├── GIS/
│   └── LaporanManajemen/
├── hooks/
├── context/
├── types/
├── utils/
└── App.tsx
```

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 📝 Next Steps

1. **Tahap 2**: Implementasi SideNav dan TopBar dengan animasi
2. **Tahap 3**: Template halaman dan form wizard
3. **Tahap 4**: Animasi dan polesan akhir

## 🔗 Routing Structure

Semua routing telah dikonfigurasi dengan nested routes untuk:
- 15 modul utama
- 200+ sub-halaman
- Dynamic breadcrumbs ready
- Protected routes ready (untuk implementasi auth)

Akses dashboard di `/dashboard` setelah menjalankan aplikasi.