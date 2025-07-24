import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronRight, X } from 'lucide-react';
import { useSidebarStore } from '../../store/sidebarStore';
import { menuItems, MenuItem } from '../../data/menuData';

const SideNav: React.FC = () => {
  const location = useLocation();
  const {
    isOpen,
    isMobile,
    expandedMenus,
    activeMenu,
    toggleSidebar,
    closeSidebar,
    setMobile,
    setActiveMenu,
    toggleMenu,
  } = useSidebarStore();

  // Handle responsive behavior
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 1024;
      setMobile(mobile);
      if (mobile && isOpen) {
        // Auto-close on mobile when screen becomes small
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [setMobile, isOpen]);

  // Set active menu based on current route
  useEffect(() => {
    const findActiveMenu = (items: MenuItem[], path: string): string | null => {
      for (const item of items) {
        if (item.path === path) {
          return item.id;
        }
        if (item.children) {
          const found = findActiveMenu(item.children, path);
          if (found) return found;
        }
      }
      return null;
    };

    const active = findActiveMenu(menuItems, location.pathname);
    setActiveMenu(active);
  }, [location.pathname, setActiveMenu]);

  const renderMenuItem = (item: MenuItem, level: number = 0) => {
    const hasChildren = item.children && item.children.length > 0;
    const isExpanded = expandedMenus.includes(item.id);
    const isActive = activeMenu === item.id;
    const Icon = item.icon;

    const handleClick = () => {
      if (hasChildren) {
        toggleMenu(item.id);
      } else if (isMobile) {
        closeSidebar();
      }
    };

    const menuItemContent = (
      <motion.div
        className={`
          flex items-center justify-between w-full px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200
          ${level === 0 ? 'mb-1' : 'mb-0.5'}
          ${level > 0 ? `ml-${Math.min(level * 4, 8)} pl-${Math.min(level * 2, 6)}` : ''}
          ${isActive 
            ? 'bg-blue-100 text-blue-700 border-l-4 border-blue-500' 
            : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
          }
          ${hasChildren ? 'cursor-pointer' : ''}
        `}
        onClick={handleClick}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <div className="flex items-center space-x-3">
          <Icon className={`h-4 w-4 ${isActive ? 'text-blue-600' : 'text-gray-500'}`} />
          <span className="truncate">{item.label}</span>
          {item.badge && (
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
              {item.badge}
            </span>
          )}
        </div>
        {hasChildren && (
          <motion.div
            animate={{ rotate: isExpanded ? 90 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronRight className="h-4 w-4 text-gray-400" />
          </motion.div>
        )}
      </motion.div>
    );

    return (
      <div key={item.id} className="w-full">
        {item.path ? (
          <Link to={item.path} className="block w-full">
            {menuItemContent}
          </Link>
        ) : (
          menuItemContent
        )}
        
        <AnimatePresence>
          {hasChildren && isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <div className={`${level === 0 ? 'ml-2 border-l-2 border-gray-200 pl-2' : ''} space-y-1`}>
                {item.children?.map((child) => renderMenuItem(child, level + 1))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  const sidebarVariants = {
    open: {
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30,
      },
    },
    closed: {
      x: isMobile ? '-100%' : '-280px',
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30,
      },
    },
  };

  const overlayVariants = {
    open: { opacity: 1, pointerEvents: 'auto' as const },
    closed: { opacity: 0, pointerEvents: 'none' as const },
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isMobile && (
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
              variants={overlayVariants}
              initial="closed"
              animate="open"
              exit="closed"
              onClick={closeSidebar}
            />
          )}
        </AnimatePresence>
      )}

      {/* Sidebar */}
      <motion.aside
        className={`
          fixed top-0 left-0 h-full bg-white shadow-lg border-r border-gray-200 z-50
          ${isMobile ? 'w-80' : 'w-72'}
          lg:relative lg:z-auto
        `}
        variants={sidebarVariants}
        initial="closed"
        animate={isOpen ? 'open' : 'closed'}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">ERP</span>
              </div>
              <div>
                <h2 className="font-semibold text-gray-900">ERP Kebun Sawit</h2>
                <p className="text-xs text-gray-500">Management System</p>
              </div>
            </div>
            {isMobile && (
              <button
                onClick={closeSidebar}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <X className="h-5 w-5 text-gray-500" />
              </button>
            )}
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto p-4 space-y-1">
            <div className="space-y-1">
              {menuItems.map((item) => renderMenuItem(item))}
            </div>
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-gray-200">
            <div className="text-xs text-gray-500 text-center">
              <p>© 2024 ERP Kebun Sawit</p>
              <p>Version 1.0.0</p>
            </div>
          </div>
        </div>
      </motion.aside>
    </>
  );
};

export default SideNav;