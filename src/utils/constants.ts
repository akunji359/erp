// Application constants

export const APP_NAME = 'ERP Kebun Sawit';
export const APP_VERSION = '1.0.0';

// Routes
export const ROUTES = {
  DASHBOARD: '/dashboard',
  ADMINISTRATOR: '/administrator',
  SETUP: '/setup',
  KEUANGAN: '/keuangan',
  PENGADAAN: '/pengadaan',
  KEBUN: '/kebun',
  PABRIK: '/pabrik',
  INFRASTRUKTUR: '/infrastruktur',
  PEMASARAN: '/pemasaran',
  SDM: '/sdm',
  ANGGARAN: '/anggaran',
  UMUM: '/umum',
  KONTRAK: '/kontrak',
  LEGAL: '/legal',
  GIS: '/gis',
  LAPORAN_MANAJEMEN: '/laporan-manajemen',
} as const;

// API Endpoints
export const API_ENDPOINTS = {
  AUTH: '/api/auth',
  USERS: '/api/users',
  // Add more endpoints as needed
} as const;

// Local Storage Keys
export const STORAGE_KEYS = {
  AUTH_TOKEN: 'erp_auth_token',
  USER_DATA: 'erp_user_data',
  THEME: 'erp_theme',
  SIDEBAR_STATE: 'erp_sidebar_state',
} as const;