import React from 'react';
import { BarChart3, TrendingUp, Users, DollarSign } from 'lucide-react';

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard ERP Kebun Sawit</h1>
          <p className="text-gray-600 mt-1">Selamat datang di sistem manajemen kebun sawit</p>
        </div>
        <div className="text-sm text-gray-500">
          {new Date().toLocaleDateString('id-ID', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Produksi Bulan Ini</p>
              <p className="text-2xl font-bold text-gray-900">2,450 Ton</p>
            </div>
            <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center">
              <BarChart3 className="h-6 w-6 text-green-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
            <span className="text-green-600">+12.5%</span>
            <span className="text-gray-600 ml-1">dari bulan lalu</span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Luas Area Panen</p>
              <p className="text-2xl font-bold text-gray-900">1,250 Ha</p>
            </div>
            <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <BarChart3 className="h-6 w-6 text-blue-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <TrendingUp className="h-4 w-4 text-blue-500 mr-1" />
            <span className="text-blue-600">+8.2%</span>
            <span className="text-gray-600 ml-1">dari target</span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Karyawan</p>
              <p className="text-2xl font-bold text-gray-900">856</p>
            </div>
            <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <Users className="h-6 w-6 text-purple-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <span className="text-gray-600">Aktif hari ini:</span>
            <span className="text-purple-600 ml-1 font-medium">742</span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Pendapatan Bulan Ini</p>
              <p className="text-2xl font-bold text-gray-900">Rp 15.2M</p>
            </div>
            <div className="h-12 w-12 bg-yellow-100 rounded-lg flex items-center justify-center">
              <DollarSign className="h-6 w-6 text-yellow-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
            <span className="text-green-600">+18.7%</span>
            <span className="text-gray-600 ml-1">dari bulan lalu</span>
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Chart Placeholder */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Grafik Produksi Bulanan</h3>
          <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
            <div className="text-center text-gray-500">
              <BarChart3 className="h-12 w-12 mx-auto mb-2" />
              <p>Grafik akan diimplementasi di tahap selanjutnya</p>
            </div>
          </div>
        </div>

        {/* Recent Activities */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Aktivitas Terbaru</h3>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900">Panen Blok A-12 selesai</p>
                <p className="text-sm text-gray-500">2 jam yang lalu</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900">Laporan keuangan bulan Oktober</p>
                <p className="text-sm text-gray-500">5 jam yang lalu</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900">Pemeliharaan mesin pabrik</p>
                <p className="text-sm text-gray-500">1 hari yang lalu</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900">Update data karyawan</p>
                <p className="text-sm text-gray-500">2 hari yang lalu</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Status Info */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <BarChart3 className="h-5 w-5 text-blue-600" />
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-blue-800">
              Tahap 1 - Struktur & Routing Selesai
            </h3>
            <div className="mt-2 text-sm text-blue-700">
              <p>✅ Struktur folder lengkap telah dibuat</p>
              <p>✅ Routing React Router telah dikonfigurasi</p>
              <p>✅ Stub komponen untuk semua halaman telah dibuat</p>
              <p className="mt-2 font-medium">Siap untuk Tahap 2: Implementasi Navigasi & Layout</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;