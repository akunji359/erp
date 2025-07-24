import React from 'react';
import { Outlet } from 'react-router-dom';

const MainLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* TODO: Add SideNav and TopBar components here in Stage 2 */}
      <div className="flex flex-col min-h-screen">
        {/* TopBar Placeholder */}
        <header className="bg-white shadow-sm border-b border-gray-200 h-16 flex items-center justify-between px-6">
          <div className="flex items-center">
            <h1 className="text-xl font-semibold text-gray-800">ERP Kebun Sawit</h1>
          </div>
          <div className="text-sm text-gray-600">
            Layout akan diimplementasi di Tahap 2
          </div>
        </header>

        {/* Main Content Area */}
        <div className="flex flex-1">
          {/* SideNav Placeholder */}
          <aside className="w-64 bg-white shadow-sm border-r border-gray-200">
            <div className="p-4">
              <div className="text-sm text-gray-600 mb-4">
                Navigation akan diimplementasi di Tahap 2
              </div>
              <div className="space-y-2">
                <div className="h-8 bg-gray-100 rounded"></div>
                <div className="h-8 bg-gray-100 rounded"></div>
                <div className="h-8 bg-gray-100 rounded"></div>
                <div className="h-8 bg-gray-100 rounded"></div>
                <div className="h-8 bg-gray-100 rounded"></div>
              </div>
            </div>
          </aside>

          {/* Page Content */}
          <main className="flex-1 p-6">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;