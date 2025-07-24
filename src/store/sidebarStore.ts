import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface SidebarState {
  isOpen: boolean;
  isMobile: boolean;
  activeMenu: string | null;
  expandedMenus: string[];
  toggleSidebar: () => void;
  closeSidebar: () => void;
  openSidebar: () => void;
  setMobile: (isMobile: boolean) => void;
  setActiveMenu: (menu: string | null) => void;
  toggleMenu: (menuId: string) => void;
  expandMenu: (menuId: string) => void;
  collapseMenu: (menuId: string) => void;
}

export const useSidebarStore = create<SidebarState>()(
  persist(
    (set, get) => ({
      isOpen: true,
      isMobile: false,
      activeMenu: null,
      expandedMenus: [],
      
      toggleSidebar: () => set((state) => ({ isOpen: !state.isOpen })),
      closeSidebar: () => set({ isOpen: false }),
      openSidebar: () => set({ isOpen: true }),
      setMobile: (isMobile) => set({ isMobile }),
      setActiveMenu: (menu) => set({ activeMenu: menu }),
      
      toggleMenu: (menuId) => set((state) => ({
        expandedMenus: state.expandedMenus.includes(menuId)
          ? state.expandedMenus.filter(id => id !== menuId)
          : [...state.expandedMenus, menuId]
      })),
      
      expandMenu: (menuId) => set((state) => ({
        expandedMenus: state.expandedMenus.includes(menuId)
          ? state.expandedMenus
          : [...state.expandedMenus, menuId]
      })),
      
      collapseMenu: (menuId) => set((state) => ({
        expandedMenus: state.expandedMenus.filter(id => id !== menuId)
      })),
    }),
    {
      name: 'sidebar-storage',
      partialize: (state) => ({ 
        isOpen: state.isOpen, 
        expandedMenus: state.expandedMenus 
      }),
    }
  )
);