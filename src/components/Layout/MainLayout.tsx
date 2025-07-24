import React from 'react';
import { Outlet } from 'react-router-dom';
import { motion } from 'framer-motion';
import SideNav from './SideNav';
import TopBar from './TopBar';
import { useSidebarStore } from '../../store/sidebarStore';

const MainLayout: React.FC = () => {
  const { isOpen, isMobile } = useSidebarStore();

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <SideNav />
      
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-h-screen">
        {/* TopBar */}
        <TopBar />
        
        {/* Page Content */}
        <motion.main 
          className={`
            flex-1 p-4 lg:p-6 transition-all duration-300 ease-in-out
            ${!isMobile && isOpen ? 'lg:ml-0' : ''}
          `}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="max-w-7xl mx-auto">
            <Outlet />
          </div>
        </motion.main>
      </div>
    </div>
  );
};

export default MainLayout;