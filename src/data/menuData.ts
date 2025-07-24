import { 
  Settings, 
  Database, 
  DollarSign, 
  ShoppingCart, 
  TreePine, 
  Factory, 
  Wrench, 
  TrendingUp, 
  Users, 
  Calculator, 
  Building, 
  FileText, 
  Scale, 
  Map, 
  BarChart3,
  Home,
  ChevronRight
} from 'lucide-react';

export interface MenuItem {
  id: string;
  label: string;
  path?: string;
  icon: any;
  children?: MenuItem[];
  badge?: string;
}

export const menuItems: MenuItem[] = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    path: '/dashboard',
    icon: Home,
  },
  {
    id: 'administrator',
    label: 'Administrator',
    icon: Settings,
    children: [
      {
        id: 'manajer-menu',
        label: 'Manajer Menu',
        path: '/administrator/manajer-menu',
        icon: ChevronRight,
      },
      {
        id: 'erp',
        label: 'ERP',
        icon: ChevronRight,
        children: [
          {
            id: 'pengaturan-menu',
            label: 'Pengaturan Menu',
            path: '/administrator/erp/pengaturan-menu',
            icon: ChevronRight,
          },
          {
            id: 'hak-akses-menu',
            label: 'Hak Akses Menu',
            path: '/administrator/erp/hak-akses-menu',
            icon: ChevronRight,
          },
          {
            id: 'detail-akses',
            label: 'Detail Akses',
            path: '/administrator/erp/detail-akses',
            icon: ChevronRight,
          },
          {
            id: 'daftar-admin',
            label: 'Daftar Admin',
            path: '/administrator/erp/daftar-admin',
            icon: ChevronRight,
          },
        ],
      },
      {
        id: 'mobile',
        label: 'Mobile',
        icon: ChevronRight,
        children: [
          {
            id: 'pengaturan-menu-mobile',
            label: 'Pengaturan Menu Mobile',
            path: '/administrator/mobile/pengaturan-menu-mobile',
            icon: ChevronRight,
          },
          {
            id: 'hak-akses-mobile',
            label: 'Hak Akses Mobile',
            path: '/administrator/mobile/hak-akses-mobile',
            icon: ChevronRight,
          },
          {
            id: 'salin-hak-akses-mobile',
            label: 'Salin Hak Akses Mobile',
            path: '/administrator/mobile/salin-hak-akses-mobile',
            icon: ChevronRight,
          },
        ],
      },
      {
        id: 'bi',
        label: 'BI',
        icon: ChevronRight,
        children: [
          {
            id: 'pengaturan-menu-bi',
            label: 'Pengaturan Menu BI',
            path: '/administrator/bi/pengaturan-menu-bi',
            icon: ChevronRight,
          },
          {
            id: 'hak-akses-bi',
            label: 'Hak Akses BI',
            path: '/administrator/bi/hak-akses-bi',
            icon: ChevronRight,
          },
          {
            id: 'pengaturan-pengguna',
            label: 'Pengaturan Pengguna',
            path: '/administrator/bi/pengaturan-pengguna',
            icon: ChevronRight,
          },
          {
            id: 'tambah-edit-hapus-pengguna',
            label: 'Tambah/Edit/Hapus Pengguna',
            path: '/administrator/bi/tambah-edit-hapus-pengguna',
            icon: ChevronRight,
          },
          {
            id: 'ganti-karyawan',
            label: 'Ganti Karyawan',
            path: '/administrator/bi/ganti-karyawan',
            icon: ChevronRight,
          },
          {
            id: 'struktur-organisasi',
            label: 'Struktur Organisasi',
            path: '/administrator/bi/struktur-organisasi',
            icon: ChevronRight,
          },
          {
            id: 'pengaturan-bahasa',
            label: 'Pengaturan Bahasa',
            path: '/administrator/bi/pengaturan-bahasa',
            icon: ChevronRight,
          },
          {
            id: 'npwp-perusahaan',
            label: 'NPWP Perusahaan',
            path: '/administrator/bi/npwp-perusahaan',
            icon: ChevronRight,
          },
          {
            id: 'alat-admin',
            label: 'Alat Admin',
            icon: ChevronRight,
            children: [
              {
                id: 'reset-hm-km',
                label: 'Reset HM/KM',
                path: '/administrator/bi/alat-admin/reset-hm-km',
                icon: ChevronRight,
              },
              {
                id: 'monitoring-traksi',
                label: 'Monitoring Traksi',
                path: '/administrator/bi/alat-admin/monitoring-traksi',
                icon: ChevronRight,
              },
              {
                id: 'monitoring-tutup-buku',
                label: 'Monitoring Tutup Buku',
                path: '/administrator/bi/alat-admin/monitoring-tutup-buku',
                icon: ChevronRight,
              },
              {
                id: 'histori-akses-mobile',
                label: 'Histori Akses Mobile',
                path: '/administrator/bi/alat-admin/histori-akses-mobile',
                icon: ChevronRight,
              },
              {
                id: 'log-aktivitas-pengguna',
                label: 'Log Aktivitas Pengguna',
                path: '/administrator/bi/alat-admin/log-aktivitas-pengguna',
                icon: ChevronRight,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'setup',
    label: 'Setup',
    icon: Database,
    children: [
      {
        id: 'keuangan',
        label: 'Keuangan',
        icon: ChevronRight,
        children: [
          {
            id: 'mata-uang-kurs',
            label: 'Mata Uang & Kurs',
            path: '/setup/keuangan/mata-uang-kurs',
            icon: ChevronRight,
          },
        ],
      },
      {
        id: 'kebun',
        label: 'Kebun',
        icon: ChevronRight,
        children: [
          {
            id: 'master-blok',
            label: 'Master Blok',
            path: '/setup/kebun/master-blok',
            icon: ChevronRight,
          },
          {
            id: 'kelompok-kegiatan',
            label: 'Kelompok Kegiatan',
            path: '/setup/kebun/kelompok-kegiatan',
            icon: ChevronRight,
          },
          {
            id: 'kegiatan',
            label: 'Kegiatan',
            path: '/setup/kebun/kegiatan',
            icon: ChevronRight,
          },
          {
            id: 'jenis-bibit',
            label: 'Jenis Bibit',
            path: '/setup/kebun/jenis-bibit',
            icon: ChevronRight,
          },
          {
            id: 'master-kemandoran',
            label: 'Master Kemandoran',
            path: '/setup/kebun/master-kemandoran',
            icon: ChevronRight,
          },
          {
            id: 'master-pejabat-bkm',
            label: 'Master Pejabat BKM',
            path: '/setup/kebun/master-pejabat-bkm',
            icon: ChevronRight,
          },
        ],
      },
    ],
  },
  {
    id: 'keuangan',
    label: 'Keuangan',
    icon: DollarSign,
    children: [
      {
        id: 'transaksi',
        label: 'Transaksi',
        icon: ChevronRight,
        children: [
          {
            id: 'kas-bank',
            label: 'Kas & Bank',
            icon: ChevronRight,
            children: [
              {
                id: 'pengajuan-dana',
                label: 'Pengajuan Dana',
                path: '/keuangan/transaksi/kas-bank/pengajuan-dana',
                icon: ChevronRight,
              },
              {
                id: 'pertanggungjawaban',
                label: 'Pertanggungjawaban',
                path: '/keuangan/transaksi/kas-bank/pertanggungjawaban',
                icon: ChevronRight,
              },
            ],
          },
        ],
      },
      {
        id: 'laporan',
        label: 'Laporan',
        icon: ChevronRight,
        children: [
          {
            id: 'jurnal',
            label: 'Jurnal',
            path: '/keuangan/laporan/jurnal',
            icon: ChevronRight,
          },
          {
            id: 'buku-besar',
            label: 'Buku Besar',
            path: '/keuangan/laporan/buku-besar',
            icon: ChevronRight,
          },
        ],
      },
    ],
  },
  {
    id: 'pengadaan',
    label: 'Pengadaan',
    icon: ShoppingCart,
    children: [
      {
        id: 'transaksi',
        label: 'Transaksi',
        icon: ChevronRight,
        children: [
          {
            id: 'pr-sr',
            label: 'PR/SR',
            path: '/pengadaan/transaksi/pr-sr',
            icon: ChevronRight,
          },
          {
            id: 'po-so',
            label: 'PO/SO',
            path: '/pengadaan/transaksi/po-so',
            icon: ChevronRight,
          },
        ],
      },
    ],
  },
  {
    id: 'kebun',
    label: 'Kebun',
    icon: TreePine,
    children: [
      {
        id: 'rawat-sensus',
        label: 'Rawat & Sensus',
        icon: ChevronRight,
        children: [
          {
            id: 'rencana-kerja',
            label: 'Rencana Kerja',
            path: '/kebun/rawat-sensus/rencana-kerja',
            icon: ChevronRight,
          },
        ],
      },
      {
        id: 'panen-produksi',
        label: 'Panen & Produksi',
        icon: ChevronRight,
        children: [
          {
            id: 'transaksi-panen',
            label: 'Transaksi Panen',
            path: '/kebun/panen-produksi/transaksi-panen',
            icon: ChevronRight,
          },
        ],
      },
    ],
  },
  {
    id: 'pabrik',
    label: 'Pabrik',
    icon: Factory,
    children: [
      {
        id: 'logsheet-laboratorium',
        label: 'Logsheet & Laboratorium',
        icon: ChevronRight,
        children: [
          {
            id: 'logsheet-proses',
            label: 'Logsheet Proses',
            path: '/pabrik/logsheet-laboratorium/logsheet-proses',
            icon: ChevronRight,
          },
        ],
      },
    ],
  },
  {
    id: 'infrastruktur',
    label: 'Infrastruktur',
    icon: Wrench,
    children: [
      {
        id: 'traksi',
        label: 'Traksi',
        icon: ChevronRight,
        children: [
          {
            id: 'permintaan-pekerjaan',
            label: 'Permintaan Pekerjaan',
            path: '/infrastruktur/traksi/permintaan-pekerjaan',
            icon: ChevronRight,
          },
        ],
      },
    ],
  },
  {
    id: 'pemasaran',
    label: 'Pemasaran',
    icon: TrendingUp,
    children: [
      {
        id: 'transaksi',
        label: 'Transaksi',
        icon: ChevronRight,
        children: [
          {
            id: 'tender-kontrak-penjualan',
            label: 'Tender Kontrak Penjualan',
            path: '/pemasaran/transaksi/tender-kontrak-penjualan',
            icon: ChevronRight,
          },
        ],
      },
    ],
  },
  {
    id: 'sdm',
    label: 'SDM',
    icon: Users,
    children: [
      {
        id: 'data-administrasi',
        label: 'Data & Administrasi',
        icon: ChevronRight,
        children: [
          {
            id: 'karyawan',
            label: 'Karyawan',
            path: '/sdm/data-administrasi/karyawan',
            icon: ChevronRight,
          },
        ],
      },
    ],
  },
  {
    id: 'anggaran',
    label: 'Anggaran',
    icon: Calculator,
    children: [
      {
        id: 'master-anggaran',
        label: 'Master Anggaran',
        icon: ChevronRight,
        children: [
          {
            id: 'blok',
            label: 'Blok',
            path: '/anggaran/master-anggaran/blok',
            icon: ChevronRight,
          },
        ],
      },
    ],
  },
  {
    id: 'umum',
    label: 'Umum',
    icon: Building,
    children: [
      {
        id: 'infrastruktur-umum',
        label: 'Infrastruktur Umum',
        icon: ChevronRight,
        children: [
          {
            id: 'perumahan',
            label: 'Perumahan',
            path: '/umum/infrastruktur-umum/perumahan',
            icon: ChevronRight,
          },
        ],
      },
    ],
  },
  {
    id: 'kontrak',
    label: 'Kontrak',
    icon: FileText,
    children: [
      {
        id: 'surat-perjanjian',
        label: 'Surat Perjanjian',
        path: '/kontrak/surat-perjanjian',
        icon: ChevronRight,
      },
    ],
  },
  {
    id: 'legal',
    label: 'Legal',
    icon: Scale,
    children: [
      {
        id: 'dokumen-legal',
        label: 'Dokumen Legal',
        path: '/legal/dokumen-legal',
        icon: ChevronRight,
      },
    ],
  },
  {
    id: 'gis',
    label: 'GIS',
    icon: Map,
    children: [
      {
        id: 'manajemen-peta',
        label: 'Manajemen Peta',
        icon: ChevronRight,
        children: [
          {
            id: 'upload-data',
            label: 'Upload Data',
            path: '/gis/manajemen-peta/upload-data',
            icon: ChevronRight,
          },
        ],
      },
    ],
  },
  {
    id: 'laporan-manajemen',
    label: 'Laporan Manajemen',
    icon: BarChart3,
    children: [
      {
        id: 'keuangan',
        label: 'Keuangan',
        icon: ChevronRight,
        children: [
          {
            id: 'kinerja',
            label: 'Kinerja',
            path: '/laporan-manajemen/keuangan/kinerja',
            icon: ChevronRight,
          },
        ],
      },
    ],
  },
];