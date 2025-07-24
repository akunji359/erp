import React from 'react';
import { FileText, Settings, Users } from 'lucide-react';

interface PageStubProps {
  title: string;
  description?: string;
  module: string;
}

const PageStub: React.FC<PageStubProps> = ({ title, description, module }) => {
  const getIcon = () => {
    switch (module.toLowerCase()) {
      case 'administrator':
        return <Settings className="h-8 w-8 text-blue-600" />;
      case 'setup':
        return <Settings className="h-8 w-8 text-green-600" />;
      case 'keuangan':
        return <FileText className="h-8 w-8 text-yellow-600" />;
      case 'pengadaan':
        return <FileText className="h-8 w-8 text-purple-600" />;
      case 'kebun':
        return <FileText className="h-8 w-8 text-green-600" />;
      case 'pabrik':
        return <FileText className="h-8 w-8 text-orange-600" />;
      case 'infrastruktur':
        return <FileText className="h-8 w-8 text-gray-600" />;
      case 'pemasaran':
        return <FileText className="h-8 w-8 text-red-600" />;
      case 'sdm':
        return <Users className="h-8 w-8 text-blue-600" />;
      case 'anggaran':
        return <FileText className="h-8 w-8 text-indigo-600" />;
      case 'umum':
        return <FileText className="h-8 w-8 text-gray-600" />;
      case 'kontrak':
        return <FileText className="h-8 w-8 text-brown-600" />;
      case 'legal':
        return <FileText className="h-8 w-8 text-red-700" />;
      case 'gis':
        return <FileText className="h-8 w-8 text-green-700" />;
      case 'laporan manajemen':
        return <FileText className="h-8 w-8 text-purple-700" />;
      default:
        return <FileText className="h-8 w-8 text-gray-600" />;
    }
  };

  return (
    <div className="min-h-96 flex items-center justify-center">
      <div className="text-center max-w-md mx-auto">
        <div className="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-6">
          {getIcon()}
        </div>
        
        <h1 className="text-2xl font-bold text-gray-900 mb-2">{title}</h1>
        
        <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mb-4">
          {module}
        </div>
        
        {description && (
          <p className="text-gray-600 mb-6">{description}</p>
        )}
        
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <div className="flex items-center justify-center space-x-2">
            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
            <span className="text-sm text-yellow-800 font-medium">
              Halaman dalam pengembangan
            </span>
          </div>
          <p className="text-xs text-yellow-700 mt-2">
            Komponen ini akan diimplementasi pada tahap selanjutnya
          </p>
        </div>
      </div>
    </div>
  );
};

export default PageStub;