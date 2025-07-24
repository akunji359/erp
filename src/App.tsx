import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Layout Components
import MainLayout from './components/Layout/MainLayout';

// Administrator Pages
import ManajerMenu from './pages/Administrator/ManajerMenu';
import PengaturanMenu from './pages/Administrator/ERP/PengaturanMenu';
import HakAksesMenu from './pages/Administrator/ERP/HakAksesMenu';
import DetailAkses from './pages/Administrator/ERP/DetailAkses';
import DaftarAdmin from './pages/Administrator/ERP/DaftarAdmin';
import PengaturanMenuMobile from './pages/Administrator/Mobile/PengaturanMenuMobile';
import HakAksesMobile from './pages/Administrator/Mobile/HakAksesMobile';
import SalinHakAksesMobile from './pages/Administrator/Mobile/SalinHakAksesMobile';
import PengaturanMenuBI from './pages/Administrator/BI/PengaturanMenuBI';
import HakAksesBI from './pages/Administrator/BI/HakAksesBI';
import PengaturanPengguna from './pages/Administrator/BI/PengaturanPengguna';
import TambahEditHapusPengguna from './pages/Administrator/BI/TambahEditHapusPengguna';
import GantiKaryawan from './pages/Administrator/BI/GantiKaryawan';
import StrukturOrganisasi from './pages/Administrator/BI/StrukturOrganisasi';
import PengaturanBahasa from './pages/Administrator/BI/PengaturanBahasa';
import NPWPPerusahaan from './pages/Administrator/BI/NPWPPerusahaan';
import ResetHMKM from './pages/Administrator/BI/AlatAdmin/ResetHMKM';
import MonitoringTraksi from './pages/Administrator/BI/AlatAdmin/MonitoringTraksi';
import MonitoringTutupBuku from './pages/Administrator/BI/AlatAdmin/MonitoringTutupBuku';
import HistoriAksesMobile from './pages/Administrator/BI/AlatAdmin/HistoriAksesMobile';
import LogAktivitasPengguna from './pages/Administrator/BI/AlatAdmin/LogAktivitasPengguna';

// Setup Pages
import MataUangKurs from './pages/Setup/Keuangan/MataUangKurs';
import MasterBlok from './pages/Setup/Kebun/MasterBlok';
import KelompokKegiatan from './pages/Setup/Kebun/KelompokKegiatan';
import Kegiatan from './pages/Setup/Kebun/Kegiatan';
import JenisBibit from './pages/Setup/Kebun/JenisBibit';
import MasterKemandoran from './pages/Setup/Kebun/MasterKemandoran';
import MasterPejabatBKM from './pages/Setup/Kebun/MasterPejabatBKM';
import SatuanBarang from './pages/Setup/Pengadaan/SatuanBarang';
import ModulAnggaran from './pages/Setup/Pengadaan/ModulAnggaran';
import ValidasiAnggaran from './pages/Setup/Pengadaan/ValidasiAnggaran';
import JenisPersetujuan from './pages/Setup/Persetujuan/JenisPersetujuan';
import Persetujuan from './pages/Setup/Persetujuan/Persetujuan';
import ParameterAplikasi from './pages/Setup/Lainnya/ParameterAplikasi';
import Posting from './pages/Setup/Lainnya/Posting';
import PindahLokasiTugas from './pages/Setup/Lainnya/PindahLokasiTugas';
import IPTimbangan from './pages/Setup/Lainnya/IPTimbangan';
import Notifikasi from './pages/Setup/Lainnya/Notifikasi';
import EndOfDays from './pages/Setup/Lainnya/EndOfDays';
import TandaTanganLaporan from './pages/Setup/Lainnya/TandaTanganLaporan';
import CetakQRCode from './pages/Setup/Lainnya/CetakQRCode';
import PengaturanNoTransaksi from './pages/Setup/Lainnya/PengaturanNoTransaksi';
import PengaturanNomorDokumen from './pages/Setup/Lainnya/PengaturanNomorDokumen';
import PengaturanOtorisasi from './pages/Setup/Lainnya/PengaturanOtorisasi';
import MappingTipeKaryawan from './pages/Setup/Lainnya/MappingTipeKaryawan';

// Keuangan Pages
import PengajuanDana from './pages/Keuangan/Transaksi/KasBank/PengajuanDana';
import Pertanggungjawaban from './pages/Keuangan/Transaksi/KasBank/Pertanggungjawaban';
import PengajuanPembayaran from './pages/Keuangan/Transaksi/KasBank/PengajuanPembayaran';
import KasBank from './pages/Keuangan/Transaksi/KasBank/KasBank';
import SaldoAkhir from './pages/Keuangan/Transaksi/KasBank/SaldoAkhir';
import InvoiceARAP from './pages/Keuangan/Transaksi/InvoiceARAP';
import JurnalMemorial from './pages/Keuangan/Transaksi/JurnalMemorial';
import ManajemenAset from './pages/Keuangan/Transaksi/ManajemenAset';
import TransaksiRekuren from './pages/Keuangan/Transaksi/TransaksiRekuren';
import PemrosesanDokumen from './pages/Keuangan/Transaksi/PemrosesanDokumen';
import TBMkeTM from './pages/Keuangan/Transaksi/TBMkeTM';
import PenyesuaianLaporan from './pages/Keuangan/Transaksi/PenyesuaianLaporan';
import Disposal from './pages/Keuangan/Transaksi/Disposal';
import Jurnal from './pages/Keuangan/Laporan/Jurnal';
import BukuBesar from './pages/Keuangan/Laporan/BukuBesar';
import KasHarian from './pages/Keuangan/Laporan/KasHarian';
import ArusKas from './pages/Keuangan/Laporan/ArusKas';
import NeracaLabaRugi from './pages/Keuangan/Laporan/NeracaLabaRugi';
import HPP from './pages/Keuangan/Laporan/HPP';
import AgingHutangPiutang from './pages/Keuangan/Laporan/AgingHutangPiutang';
import SubLedger from './pages/Keuangan/Laporan/SubLedger';
import LaporanAging from './pages/Keuangan/Laporan/LaporanAging';
import ParameterJurnal from './pages/Keuangan/SetupProses/ParameterJurnal';
import KelompokJurnal from './pages/Keuangan/SetupProses/KelompokJurnal';
import PeriodeAkuntansi from './pages/Keuangan/SetupProses/PeriodeAkuntansi';
import ManajemenBiaya from './pages/Keuangan/SetupProses/ManajemenBiaya';
import TutupBuku from './pages/Keuangan/SetupProses/TutupBuku';
import ProsesAkhirBulan from './pages/Keuangan/SetupProses/ProsesAkhirBulan';
import MappingPotonganGaji from './pages/Keuangan/SetupProses/MappingPotonganGaji';
import AliranKas from './pages/Keuangan/SetupProses/AliranKas';
import Alokasi from './pages/Keuangan/SetupProses/Alokasi';
import ManajemenPersetujuan from './pages/Keuangan/SetupProses/ManajemenPersetujuan';

// Pengadaan Pages
import PRSR from './pages/Pengadaan/Transaksi/PRSR';
import POSO from './pages/Pengadaan/Transaksi/POSO';
import VerifikasiHarga from './pages/Pengadaan/Transaksi/VerifikasiHarga';
import AdministrasiGudang from './pages/Pengadaan/Transaksi/AdministrasiGudang';
import MRGRNBeritaAcara from './pages/Pengadaan/Transaksi/MRGRNBeritaAcara';
import GoodsIssue from './pages/Pengadaan/Transaksi/GoodsIssue';
import Mutasi from './pages/Pengadaan/Transaksi/Mutasi';
import Retur from './pages/Pengadaan/Transaksi/Retur';
import StockOpname from './pages/Pengadaan/Transaksi/StockOpname';
import PersediaanFisik from './pages/Pengadaan/Laporan/PersediaanFisik';
import MutasiLaporan from './pages/Pengadaan/Laporan/MutasiLaporan';
import Aging from './pages/Pengadaan/Laporan/Aging';
import PerbandinganHarga from './pages/Pengadaan/Laporan/PerbandinganHarga';
import Produktivitas from './pages/Pengadaan/Laporan/Produktivitas';
import StatusPengiriman from './pages/Pengadaan/Laporan/StatusPengiriman';
import MonitoringPOSO from './pages/Pengadaan/Laporan/MonitoringPOSO';
import SupplierLaporan from './pages/Pengadaan/Laporan/SupplierLaporan';
import MasterBarang from './pages/Pengadaan/Setup/MasterBarang';
import Supplier from './pages/Pengadaan/Setup/Supplier';
import Gudang from './pages/Pengadaan/Setup/Gudang';
import SyaratBayar from './pages/Pengadaan/Setup/SyaratBayar';
import WaktuPengiriman from './pages/Pengadaan/Setup/WaktuPengiriman';
import PrioritasPRSR from './pages/Pengadaan/Setup/PrioritasPRSR';

// Kebun Pages
import RencanaKerja from './pages/Kebun/RawatSensus/RencanaKerja';
import BKMRawat from './pages/Kebun/RawatSensus/BKMRawat';
import HPT from './pages/Kebun/RawatSensus/HPT';
import SensusPokokProduksi from './pages/Kebun/RawatSensus/SensusPokokProduksi';
import TimbangKaret from './pages/Kebun/RawatSensus/TimbangKaret';
import TransaksiPanen from './pages/Kebun/PanenProduksi/TransaksiPanen';
import BKMHAPanen from './pages/Kebun/PanenProduksi/BKMHAPanen';
import Inspeksi from './pages/Kebun/PanenProduksi/Inspeksi';
import SuratJalanBuah from './pages/Kebun/PanenProduksi/SuratJalanBuah';
import AnalisisBBC from './pages/Kebun/PanenProduksi/AnalisisBBC';
import RekapMonitoringBJR from './pages/Kebun/PanenProduksi/RekapMonitoringBJR';
import YieldGap from './pages/Kebun/PanenProduksi/YieldGap';
import AKP from './pages/Kebun/PanenProduksi/AKP';
import Peramalan from './pages/Kebun/PanenProduksi/Peramalan';
import PernyataanAreal from './pages/Kebun/Laporan/PernyataanAreal';
import RekapPanen from './pages/Kebun/Laporan/RekapPanen';
import BiayaKebun from './pages/Kebun/Laporan/BiayaKebun';
import StatistikTanaman from './pages/Kebun/Laporan/StatistikTanaman';
import LaporanManajemenKeuanganKebun from './pages/Kebun/Laporan/LaporanManajemenKeuanganKebun';
import PengaturanBKM from './pages/Kebun/SetupProses/PengaturanBKM';
import DendaPanen from './pages/Kebun/SetupProses/DendaPanen';
import StandarProduksi from './pages/Kebun/SetupProses/StandarProduksi';
import QRCodeKebun from './pages/Kebun/SetupProses/QRCodeKebun';
import HariKerjaEfektif from './pages/Kebun/SetupProses/HariKerjaEfektif';

// Pabrik Pages
import LogsheetProses from './pages/Pabrik/LogsheetLaboratorium/LogsheetProses';
import AnalisisAirLimbahKimia from './pages/Pabrik/LogsheetLaboratorium/AnalisisAirLimbahKimia';
import WorkOrder from './pages/Pabrik/PemeliharaanProduksi/WorkOrder';
import HMMesin from './pages/Pabrik/PemeliharaanProduksi/HMMesin';
import ProsesPengolahan from './pages/Pabrik/PemeliharaanProduksi/ProsesPengolahan';
import PengolahanLimbah from './pages/Pabrik/PemeliharaanProduksi/PengolahanLimbah';
import Kehilangan from './pages/Pabrik/PemeliharaanProduksi/Kehilangan';
import StockOpnameCPOPK from './pages/Pabrik/PemeliharaanProduksi/StockOpnameCPOPK';
import PreventiveMaintenance from './pages/Pabrik/PemeliharaanProduksi/PreventiveMaintenance';
import ProduksiHarian from './pages/Pabrik/LaporanAnalisis/ProduksiHarian';
import ProduksiBulanan from './pages/Pabrik/LaporanAnalisis/ProduksiBulanan';
import ProduksiTahunan from './pages/Pabrik/LaporanAnalisis/ProduksiTahunan';
import StokCPOPK from './pages/Pabrik/LaporanAnalisis/StokCPOPK';
import AnalisisBiaya from './pages/Pabrik/LaporanAnalisis/AnalisisBiaya';
import RealisasiVsAnggaran from './pages/Pabrik/LaporanAnalisis/RealisasiVsAnggaran';

// Infrastruktur Pages
import PermintaanPekerjaan from './pages/Infrastruktur/Traksi/PermintaanPekerjaan';
import RencanaRealisasi from './pages/Infrastruktur/Traksi/RencanaRealisasi';
import KetersediaanKendaraanAlat from './pages/Infrastruktur/Traksi/KetersediaanKendaraanAlat';
import PermintaanPerbaikan from './pages/Infrastruktur/BengkelSipil/PermintaanPerbaikan';
import Kalibrasi from './pages/Infrastruktur/BengkelSipil/Kalibrasi';
import BKMSipil from './pages/Infrastruktur/BengkelSipil/BKMSipil';
import LaporanBengkel from './pages/Infrastruktur/BengkelSipil/LaporanBengkel';
import Operator from './pages/Infrastruktur/DataMaster/Operator';
import Kendaraan from './pages/Infrastruktur/DataMaster/Kendaraan';
import PremiTraksi from './pages/Infrastruktur/DataMaster/PremiTraksi';

// Pemasaran Pages
import TenderKontrakPenjualan from './pages/Pemasaran/Transaksi/TenderKontrakPenjualan';
import SuratJalanPemasaran from './pages/Pemasaran/Transaksi/SuratJalanPemasaran';
import BeritaAcaraPemasaran from './pages/Pemasaran/Transaksi/BeritaAcaraPemasaran';
import UploadHargaTimbangan from './pages/Pemasaran/Transaksi/UploadHargaTimbangan';
import SPKNonSales from './pages/Pemasaran/Transaksi/SPKNonSales';
import KontrakPemasaran from './pages/Pemasaran/Laporan/KontrakPemasaran';
import FakturPemasaran from './pages/Pemasaran/Laporan/FakturPemasaran';
import RingkasanKontrak from './pages/Pemasaran/Laporan/RingkasanKontrak';
import HargaHarian from './pages/Pemasaran/Laporan/HargaHarian';
import PenjualanKomoditas from './pages/Pemasaran/Laporan/PenjualanKomoditas';

// SDM Pages
import KaryawanSDM from './pages/SDM/DataAdministrasi/KaryawanSDM';
import AbsensiSDM from './pages/SDM/DataAdministrasi/AbsensiSDM';
import CutiSDM from './pages/SDM/DataAdministrasi/CutiSDM';
import LemburSDM from './pages/SDM/DataAdministrasi/LemburSDM';
import PerjalananDinas from './pages/SDM/DataAdministrasi/PerjalananDinas';
import IzinSDM from './pages/SDM/DataAdministrasi/IzinSDM';
import Reimbursement from './pages/SDM/DataAdministrasi/Reimbursement';
import PeriodeGaji from './pages/SDM/Payroll/PeriodeGaji';
import KomponenGaji from './pages/SDM/Payroll/KomponenGaji';
import PPh21 from './pages/SDM/Payroll/PPh21';
import SlipGaji from './pages/SDM/Payroll/SlipGaji';
import THR from './pages/SDM/Payroll/THR';
import Bonus from './pages/SDM/Payroll/Bonus';
import KPIKaryawanUnit from './pages/SDM/KPIPenilaian/KPIKaryawanUnit';
import VerifikasiSDM from './pages/SDM/KPIPenilaian/VerifikasiSDM';
import ExitInterview from './pages/SDM/KPIPenilaian/ExitInterview';

// Anggaran Pages
import BlokAnggaran from './pages/Anggaran/MasterAnggaran/BlokAnggaran';
import KebunAnggaran from './pages/Anggaran/MasterAnggaran/KebunAnggaran';
import PabrikAnggaran from './pages/Anggaran/MasterAnggaran/PabrikAnggaran';
import UmumAnggaran from './pages/Anggaran/MasterAnggaran/UmumAnggaran';
import LegalAnggaran from './pages/Anggaran/MasterAnggaran/LegalAnggaran';
import SDMAnggaran from './pages/Anggaran/MasterAnggaran/SDMAnggaran';
import CapexAnggaran from './pages/Anggaran/MasterAnggaran/CapexAnggaran';
import MaterialAnggaran from './pages/Anggaran/MasterAnggaran/MaterialAnggaran';
import PerencanaanTenagaKerja from './pages/Anggaran/TransaksiPelaporan/PerencanaanTenagaKerja';
import AnggaranVsRealisasi from './pages/Anggaran/TransaksiPelaporan/AnggaranVsRealisasi';
import PivotAnggaran from './pages/Anggaran/TransaksiPelaporan/PivotAnggaran';
import KalenderAnggaran from './pages/Anggaran/TransaksiPelaporan/KalenderAnggaran';

// Umum Pages
import PerumahanUmum from './pages/Umum/InfrastrukturUmum/PerumahanUmum';
import PreventiveMaintenanceUmum from './pages/Umum/InfrastrukturUmum/PreventiveMaintenanceUmum';
import UploadPeta from './pages/Umum/InfrastrukturUmum/UploadPeta';
import DataPenghuni from './pages/Umum/Laporan/DataPenghuni';
import FasilitasUmum from './pages/Umum/Laporan/FasilitasUmum';
import AlurPersetujuan from './pages/Umum/Laporan/AlurPersetujuan';

// Kontrak Pages
import SuratPerjanjian from './pages/Kontrak/SuratPerjanjian';
import BAPPKontraktor from './pages/Kontrak/BAPPKontraktor';
import BeritaAcaraKontrak from './pages/Kontrak/BeritaAcaraKontrak';
import LaporanRealisasiKontrak from './pages/Kontrak/LaporanRealisasiKontrak';

// Legal Pages
import DokumenLegal from './pages/Legal/DokumenLegal';
import SuratTanah from './pages/Legal/SuratTanah';
import GantiRugiLahan from './pages/Legal/GantiRugiLahan';
import CSRLegal from './pages/Legal/CSRLegal';
import PengingatLegal from './pages/Legal/PengingatLegal';
import KategoriDokumen from './pages/Legal/KategoriDokumen';

// GIS Pages
import UploadDataGIS from './pages/GIS/ManajemenPeta/UploadDataGIS';
import TipePeta from './pages/GIS/ManajemenPeta/TipePeta';
import WarnaGIS from './pages/GIS/ManajemenPeta/WarnaGIS';
import DokumenGIS from './pages/GIS/ManajemenPeta/DokumenGIS';
import SiklusGIS from './pages/GIS/ManajemenPeta/SiklusGIS';
import LaporanGIS from './pages/GIS/ManajemenPeta/LaporanGIS';

// Laporan Manajemen Pages
import KinerjaKeuanganLM from './pages/LaporanManajemen/Keuangan/KinerjaKeuanganLM';
import BankLM from './pages/LaporanManajemen/Keuangan/BankLM';
import AsetLM from './pages/LaporanManajemen/Keuangan/AsetLM';
import KebutuhanTenagaLM from './pages/LaporanManajemen/SDM/KebutuhanTenagaLM';
import AbsensiLM from './pages/LaporanManajemen/SDM/AbsensiLM';
import KecelakaanLM from './pages/LaporanManajemen/SDM/KecelakaanLM';
import PengembanganLM from './pages/LaporanManajemen/SDM/PengembanganLM';
import KebunPabrikLM from './pages/LaporanManajemen/KebunPabrik/KebunPabrikLM';
import ProduksiLM from './pages/LaporanManajemen/Operasional/ProduksiLM';
import PerawatanLM from './pages/LaporanManajemen/Operasional/PerawatanLM';
import PanenLM from './pages/LaporanManajemen/Operasional/PanenLM';
import VRALM from './pages/LaporanManajemen/Operasional/VRALM';
import RekapAnggaranLM from './pages/LaporanManajemen/Anggaran/RekapAnggaranLM';
import SorotanPKSLM from './pages/LaporanManajemen/Anggaran/SorotanPKSLM';
import UmumKontrakLM from './pages/LaporanManajemen/UmumKontrak/UmumKontrakLM';

// Dashboard
import Dashboard from './pages/Dashboard/Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {/* Default redirect to dashboard */}
          <Route index element={<Navigate to="/dashboard" replace />} />
          
          {/* Dashboard */}
          <Route path="dashboard" element={<Dashboard />} />

          {/* Administrator Routes */}
          <Route path="administrator">
            <Route path="manajer-menu" element={<ManajerMenu />} />
            
            {/* ERP Sub-routes */}
            <Route path="erp">
              <Route path="pengaturan-menu" element={<PengaturanMenu />} />
              <Route path="hak-akses-menu" element={<HakAksesMenu />} />
              <Route path="detail-akses" element={<DetailAkses />} />
              <Route path="daftar-admin" element={<DaftarAdmin />} />
            </Route>
            
            {/* Mobile Sub-routes */}
            <Route path="mobile">
              <Route path="pengaturan-menu-mobile" element={<PengaturanMenuMobile />} />
              <Route path="hak-akses-mobile" element={<HakAksesMobile />} />
              <Route path="salin-hak-akses-mobile" element={<SalinHakAksesMobile />} />
            </Route>
            
            {/* BI Sub-routes */}
            <Route path="bi">
              <Route path="pengaturan-menu-bi" element={<PengaturanMenuBI />} />
              <Route path="hak-akses-bi" element={<HakAksesBI />} />
              <Route path="pengaturan-pengguna" element={<PengaturanPengguna />} />
              <Route path="tambah-edit-hapus-pengguna" element={<TambahEditHapusPengguna />} />
              <Route path="ganti-karyawan" element={<GantiKaryawan />} />
              <Route path="struktur-organisasi" element={<StrukturOrganisasi />} />
              <Route path="pengaturan-bahasa" element={<PengaturanBahasa />} />
              <Route path="npwp-perusahaan" element={<NPWPPerusahaan />} />
              
              {/* Alat Admin Sub-routes */}
              <Route path="alat-admin">
                <Route path="reset-hm-km" element={<ResetHMKM />} />
                <Route path="monitoring-traksi" element={<MonitoringTraksi />} />
                <Route path="monitoring-tutup-buku" element={<MonitoringTutupBuku />} />
                <Route path="histori-akses-mobile" element={<HistoriAksesMobile />} />
                <Route path="log-aktivitas-pengguna" element={<LogAktivitasPengguna />} />
              </Route>
            </Route>
          </Route>

          {/* Setup Routes */}
          <Route path="setup">
            {/* Keuangan Sub-routes */}
            <Route path="keuangan">
              <Route path="mata-uang-kurs" element={<MataUangKurs />} />
            </Route>
            
            {/* Kebun Sub-routes */}
            <Route path="kebun">
              <Route path="master-blok" element={<MasterBlok />} />
              <Route path="kelompok-kegiatan" element={<KelompokKegiatan />} />
              <Route path="kegiatan" element={<Kegiatan />} />
              <Route path="jenis-bibit" element={<JenisBibit />} />
              <Route path="master-kemandoran" element={<MasterKemandoran />} />
              <Route path="master-pejabat-bkm" element={<MasterPejabatBKM />} />
            </Route>
            
            {/* Pengadaan Sub-routes */}
            <Route path="pengadaan">
              <Route path="satuan-barang" element={<SatuanBarang />} />
              <Route path="modul-anggaran" element={<ModulAnggaran />} />
              <Route path="validasi-anggaran" element={<ValidasiAnggaran />} />
            </Route>
            
            {/* Persetujuan Sub-routes */}
            <Route path="persetujuan">
              <Route path="jenis-persetujuan" element={<JenisPersetujuan />} />
              <Route path="persetujuan" element={<Persetujuan />} />
            </Route>
            
            {/* Lainnya Sub-routes */}
            <Route path="lainnya">
              <Route path="parameter-aplikasi" element={<ParameterAplikasi />} />
              <Route path="posting" element={<Posting />} />
              <Route path="pindah-lokasi-tugas" element={<PindahLokasiTugas />} />
              <Route path="ip-timbangan" element={<IPTimbangan />} />
              <Route path="notifikasi" element={<Notifikasi />} />
              <Route path="end-of-days" element={<EndOfDays />} />
              <Route path="tanda-tangan-laporan" element={<TandaTanganLaporan />} />
              <Route path="cetak-qr-code" element={<CetakQRCode />} />
              <Route path="pengaturan-no-transaksi" element={<PengaturanNoTransaksi />} />
              <Route path="pengaturan-nomor-dokumen" element={<PengaturanNomorDokumen />} />
              <Route path="pengaturan-otorisasi" element={<PengaturanOtorisasi />} />
              <Route path="mapping-tipe-karyawan" element={<MappingTipeKaryawan />} />
            </Route>
          </Route>

          {/* Keuangan Routes */}
          <Route path="keuangan">
            {/* Transaksi Sub-routes */}
            <Route path="transaksi">
              <Route path="kas-bank">
                <Route path="pengajuan-dana" element={<PengajuanDana />} />
                <Route path="pertanggungjawaban" element={<Pertanggungjawaban />} />
                <Route path="pengajuan-pembayaran" element={<PengajuanPembayaran />} />
                <Route path="kas-bank" element={<KasBank />} />
                <Route path="saldo-akhir" element={<SaldoAkhir />} />
              </Route>
              <Route path="invoice-ar-ap" element={<InvoiceARAP />} />
              <Route path="jurnal-memorial" element={<JurnalMemorial />} />
              <Route path="manajemen-aset" element={<ManajemenAset />} />
              <Route path="transaksi-rekuren" element={<TransaksiRekuren />} />
              <Route path="pemrosesan-dokumen" element={<PemrosesanDokumen />} />
              <Route path="tbm-ke-tm" element={<TBMkeTM />} />
              <Route path="penyesuaian-laporan" element={<PenyesuaianLaporan />} />
              <Route path="disposal" element={<Disposal />} />
            </Route>
            
            {/* Laporan Sub-routes */}
            <Route path="laporan">
              <Route path="jurnal" element={<Jurnal />} />
              <Route path="buku-besar" element={<BukuBesar />} />
              <Route path="kas-harian" element={<KasHarian />} />
              <Route path="arus-kas" element={<ArusKas />} />
              <Route path="neraca-laba-rugi" element={<NeracaLabaRugi />} />
              <Route path="hpp" element={<HPP />} />
              <Route path="aging-hutang-piutang" element={<AgingHutangPiutang />} />
              <Route path="sub-ledger" element={<SubLedger />} />
              <Route path="laporan-aging" element={<LaporanAging />} />
            </Route>
            
            {/* Setup & Proses Sub-routes */}
            <Route path="setup-proses">
              <Route path="parameter-jurnal" element={<ParameterJurnal />} />
              <Route path="kelompok-jurnal" element={<KelompokJurnal />} />
              <Route path="periode-akuntansi" element={<PeriodeAkuntansi />} />
              <Route path="manajemen-biaya" element={<ManajemenBiaya />} />
              <Route path="tutup-buku" element={<TutupBuku />} />
              <Route path="proses-akhir-bulan" element={<ProsesAkhirBulan />} />
              <Route path="mapping-potongan-gaji" element={<MappingPotonganGaji />} />
              <Route path="aliran-kas" element={<AliranKas />} />
              <Route path="alokasi" element={<Alokasi />} />
              <Route path="manajemen-persetujuan" element={<ManajemenPersetujuan />} />
            </Route>
          </Route>

          {/* Pengadaan Routes */}
          <Route path="pengadaan">
            {/* Transaksi Sub-routes */}
            <Route path="transaksi">
              <Route path="pr-sr" element={<PRSR />} />
              <Route path="po-so" element={<POSO />} />
              <Route path="verifikasi-harga" element={<VerifikasiHarga />} />
              <Route path="administrasi-gudang" element={<AdministrasiGudang />} />
              <Route path="mr-grn-berita-acara" element={<MRGRNBeritaAcara />} />
              <Route path="goods-issue" element={<GoodsIssue />} />
              <Route path="mutasi" element={<Mutasi />} />
              <Route path="retur" element={<Retur />} />
              <Route path="stock-opname" element={<StockOpname />} />
            </Route>
            
            {/* Laporan Sub-routes */}
            <Route path="laporan">
              <Route path="persediaan-fisik" element={<PersediaanFisik />} />
              <Route path="mutasi" element={<MutasiLaporan />} />
              <Route path="aging" element={<Aging />} />
              <Route path="perbandingan-harga" element={<PerbandinganHarga />} />
              <Route path="produktivitas" element={<Produktivitas />} />
              <Route path="status-pengiriman" element={<StatusPengiriman />} />
              <Route path="monitoring-po-so" element={<MonitoringPOSO />} />
              <Route path="supplier" element={<SupplierLaporan />} />
            </Route>
            
            {/* Setup Sub-routes */}
            <Route path="setup">
              <Route path="master-barang" element={<MasterBarang />} />
              <Route path="supplier" element={<Supplier />} />
              <Route path="gudang" element={<Gudang />} />
              <Route path="syarat-bayar" element={<SyaratBayar />} />
              <Route path="waktu-pengiriman" element={<WaktuPengiriman />} />
              <Route path="prioritas-pr-sr" element={<PrioritasPRSR />} />
            </Route>
          </Route>

          {/* Kebun Routes */}
          <Route path="kebun">
            {/* Rawat & Sensus Sub-routes */}
            <Route path="rawat-sensus">
              <Route path="rencana-kerja" element={<RencanaKerja />} />
              <Route path="bkm-rawat" element={<BKMRawat />} />
              <Route path="hpt" element={<HPT />} />
              <Route path="sensus-pokok-produksi" element={<SensusPokokProduksi />} />
              <Route path="timbang-karet" element={<TimbangKaret />} />
            </Route>
            
            {/* Panen & Produksi Sub-routes */}
            <Route path="panen-produksi">
              <Route path="transaksi-panen" element={<TransaksiPanen />} />
              <Route path="bkm-ha-panen" element={<BKMHAPanen />} />
              <Route path="inspeksi" element={<Inspeksi />} />
              <Route path="surat-jalan-buah" element={<SuratJalanBuah />} />
              <Route path="analisis-bbc" element={<AnalisisBBC />} />
              <Route path="rekap-monitoring-bjr" element={<RekapMonitoringBJR />} />
              <Route path="yield-gap" element={<YieldGap />} />
              <Route path="akp" element={<AKP />} />
              <Route path="peramalan" element={<Peramalan />} />
            </Route>
            
            {/* Laporan Sub-routes */}
            <Route path="laporan">
              <Route path="pernyataan-areal" element={<PernyataanAreal />} />
              <Route path="rekap-panen" element={<RekapPanen />} />
              <Route path="biaya-kebun" element={<BiayaKebun />} />
              <Route path="statistik-tanaman" element={<StatistikTanaman />} />
              <Route path="laporan-manajemen-keuangan" element={<LaporanManajemenKeuanganKebun />} />
            </Route>
            
            {/* Setup & Proses Sub-routes */}
            <Route path="setup-proses">
              <Route path="pengaturan-bkm" element={<PengaturanBKM />} />
              <Route path="denda-panen" element={<DendaPanen />} />
              <Route path="standar-produksi" element={<StandarProduksi />} />
              <Route path="qr-code" element={<QRCodeKebun />} />
              <Route path="hari-kerja-efektif" element={<HariKerjaEfektif />} />
            </Route>
          </Route>

          {/* Pabrik Routes */}
          <Route path="pabrik">
            {/* Logsheet & Laboratorium Sub-routes */}
            <Route path="logsheet-laboratorium">
              <Route path="logsheet-proses" element={<LogsheetProses />} />
              <Route path="analisis-air-limbah-kimia" element={<AnalisisAirLimbahKimia />} />
            </Route>
            
            {/* Pemeliharaan & Produksi Sub-routes */}
            <Route path="pemeliharaan-produksi">
              <Route path="work-order" element={<WorkOrder />} />
              <Route path="hm-mesin" element={<HMMesin />} />
              <Route path="proses-pengolahan" element={<ProsesPengolahan />} />
              <Route path="pengolahan-limbah" element={<PengolahanLimbah />} />
              <Route path="kehilangan" element={<Kehilangan />} />
              <Route path="stock-opname-cpo-pk" element={<StockOpnameCPOPK />} />
              <Route path="preventive-maintenance" element={<PreventiveMaintenance />} />
            </Route>
            
            {/* Laporan & Analisis Sub-routes */}
            <Route path="laporan-analisis">
              <Route path="produksi-harian" element={<ProduksiHarian />} />
              <Route path="produksi-bulanan" element={<ProduksiBulanan />} />
              <Route path="produksi-tahunan" element={<ProduksiTahunan />} />
              <Route path="stok-cpo-pk" element={<StokCPOPK />} />
              <Route path="analisis-biaya" element={<AnalisisBiaya />} />
              <Route path="realisasi-vs-anggaran" element={<RealisasiVsAnggaran />} />
            </Route>
          </Route>

          {/* Infrastruktur Routes */}
          <Route path="infrastruktur">
            {/* Traksi Sub-routes */}
            <Route path="traksi">
              <Route path="permintaan-pekerjaan" element={<PermintaanPekerjaan />} />
              <Route path="rencana-realisasi" element={<RencanaRealisasi />} />
              <Route path="ketersediaan-kendaraan-alat" element={<KetersediaanKendaraanAlat />} />
            </Route>
            
            {/* Bengkel & Sipil Sub-routes */}
            <Route path="bengkel-sipil">
              <Route path="permintaan-perbaikan" element={<PermintaanPerbaikan />} />
              <Route path="kalibrasi" element={<Kalibrasi />} />
              <Route path="bkm-sipil" element={<BKMSipil />} />
              <Route path="laporan-bengkel" element={<LaporanBengkel />} />
            </Route>
            
            {/* Data Master Sub-routes */}
            <Route path="data-master">
              <Route path="operator" element={<Operator />} />
              <Route path="kendaraan" element={<Kendaraan />} />
              <Route path="premi-traksi" element={<PremiTraksi />} />
            </Route>
          </Route>

          {/* Pemasaran Routes */}
          <Route path="pemasaran">
            {/* Transaksi Sub-routes */}
            <Route path="transaksi">
              <Route path="tender-kontrak-penjualan" element={<TenderKontrakPenjualan />} />
              <Route path="surat-jalan" element={<SuratJalanPemasaran />} />
              <Route path="berita-acara" element={<BeritaAcaraPemasaran />} />
              <Route path="upload-harga-timbangan" element={<UploadHargaTimbangan />} />
              <Route path="spk-non-sales" element={<SPKNonSales />} />
            </Route>
            
            {/* Laporan Sub-routes */}
            <Route path="laporan">
              <Route path="kontrak" element={<KontrakPemasaran />} />
              <Route path="faktur" element={<FakturPemasaran />} />
              <Route path="ringkasan-kontrak" element={<RingkasanKontrak />} />
              <Route path="harga-harian" element={<HargaHarian />} />
              <Route path="penjualan-komoditas" element={<PenjualanKomoditas />} />
            </Route>
          </Route>

          {/* SDM Routes */}
          <Route path="sdm">
            {/* Data & Administrasi Sub-routes */}
            <Route path="data-administrasi">
              <Route path="karyawan" element={<KaryawanSDM />} />
              <Route path="absensi" element={<AbsensiSDM />} />
              <Route path="cuti" element={<CutiSDM />} />
              <Route path="lembur" element={<LemburSDM />} />
              <Route path="perjalanan-dinas" element={<PerjalananDinas />} />
              <Route path="izin" element={<IzinSDM />} />
              <Route path="reimbursement" element={<Reimbursement />} />
            </Route>
            
            {/* Payroll Sub-routes */}
            <Route path="payroll">
              <Route path="periode-gaji" element={<PeriodeGaji />} />
              <Route path="komponen-gaji" element={<KomponenGaji />} />
              <Route path="pph21" element={<PPh21 />} />
              <Route path="slip-gaji" element={<SlipGaji />} />
              <Route path="thr" element={<THR />} />
              <Route path="bonus" element={<Bonus />} />
            </Route>
            
            {/* KPI & Penilaian Sub-routes */}
            <Route path="kpi-penilaian">
              <Route path="kpi-karyawan-unit" element={<KPIKaryawanUnit />} />
              <Route path="verifikasi" element={<VerifikasiSDM />} />
              <Route path="exit-interview" element={<ExitInterview />} />
            </Route>
          </Route>

          {/* Anggaran Routes */}
          <Route path="anggaran">
            {/* Master Anggaran Sub-routes */}
            <Route path="master-anggaran">
              <Route path="blok" element={<BlokAnggaran />} />
              <Route path="kebun" element={<KebunAnggaran />} />
              <Route path="pabrik" element={<PabrikAnggaran />} />
              <Route path="umum" element={<UmumAnggaran />} />
              <Route path="legal" element={<LegalAnggaran />} />
              <Route path="sdm" element={<SDMAnggaran />} />
              <Route path="capex" element={<CapexAnggaran />} />
              <Route path="material" element={<MaterialAnggaran />} />
            </Route>
            
            {/* Transaksi & Pelaporan Sub-routes */}
            <Route path="transaksi-pelaporan">
              <Route path="perencanaan-tenaga-kerja" element={<PerencanaanTenagaKerja />} />
              <Route path="anggaran-vs-realisasi" element={<AnggaranVsRealisasi />} />
              <Route path="pivot" element={<PivotAnggaran />} />
              <Route path="kalender-anggaran" element={<KalenderAnggaran />} />
            </Route>
          </Route>

          {/* Umum Routes */}
          <Route path="umum">
            {/* Infrastruktur Umum Sub-routes */}
            <Route path="infrastruktur-umum">
              <Route path="perumahan" element={<PerumahanUmum />} />
              <Route path="preventive-maintenance" element={<PreventiveMaintenanceUmum />} />
              <Route path="upload-peta" element={<UploadPeta />} />
            </Route>
            
            {/* Laporan Sub-routes */}
            <Route path="laporan">
              <Route path="data-penghuni" element={<DataPenghuni />} />
              <Route path="fasilitas" element={<FasilitasUmum />} />
              <Route path="alur-persetujuan" element={<AlurPersetujuan />} />
            </Route>
          </Route>

          {/* Kontrak Routes */}
          <Route path="kontrak">
            <Route path="surat-perjanjian" element={<SuratPerjanjian />} />
            <Route path="bapp-kontraktor" element={<BAPPKontraktor />} />
            <Route path="berita-acara-kontrak" element={<BeritaAcaraKontrak />} />
            <Route path="laporan-realisasi" element={<LaporanRealisasiKontrak />} />
          </Route>

          {/* Legal Routes */}
          <Route path="legal">
            <Route path="dokumen-legal" element={<DokumenLegal />} />
            <Route path="surat-tanah" element={<SuratTanah />} />
            <Route path="ganti-rugi-lahan" element={<GantiRugiLahan />} />
            <Route path="csr" element={<CSRLegal />} />
            <Route path="pengingat" element={<PengingatLegal />} />
            <Route path="kategori-dokumen" element={<KategoriDokumen />} />
          </Route>

          {/* GIS Routes */}
          <Route path="gis">
            <Route path="manajemen-peta">
              <Route path="upload-data" element={<UploadDataGIS />} />
              <Route path="tipe-peta" element={<TipePeta />} />
              <Route path="warna" element={<WarnaGIS />} />
              <Route path="dokumen" element={<DokumenGIS />} />
              <Route path="siklus" element={<SiklusGIS />} />
              <Route path="laporan" element={<LaporanGIS />} />
            </Route>
          </Route>

          {/* Laporan Manajemen Routes */}
          <Route path="laporan-manajemen">
            {/* Keuangan Sub-routes */}
            <Route path="keuangan">
              <Route path="kinerja" element={<KinerjaKeuanganLM />} />
              <Route path="bank" element={<BankLM />} />
              <Route path="aset" element={<AsetLM />} />
            </Route>
            
            {/* SDM Sub-routes */}
            <Route path="sdm">
              <Route path="kebutuhan-tenaga" element={<KebutuhanTenagaLM />} />
              <Route path="absensi" element={<AbsensiLM />} />
              <Route path="kecelakaan" element={<KecelakaanLM />} />
              <Route path="pengembangan" element={<PengembanganLM />} />
            </Route>
            
            {/* Kebun/Pabrik Sub-routes */}
            <Route path="kebun-pabrik">
              <Route path="lm-1-8" element={<KebunPabrikLM />} />
            </Route>
            
            {/* Operasional Sub-routes */}
            <Route path="operasional">
              <Route path="produksi" element={<ProduksiLM />} />
              <Route path="perawatan" element={<PerawatanLM />} />
              <Route path="panen" element={<PanenLM />} />
              <Route path="vra" element={<VRALM />} />
            </Route>
            
            {/* Anggaran Sub-routes */}
            <Route path="anggaran">
              <Route path="rekap" element={<RekapAnggaranLM />} />
              <Route path="sorotan-pks" element={<SorotanPKSLM />} />
            </Route>
            
            {/* Umum & Kontrak Sub-routes */}
            <Route path="umum-kontrak" element={<UmumKontrakLM />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;