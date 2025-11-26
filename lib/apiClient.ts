// lib/apiClient.ts
import axios from 'axios';

const envBase = process.env.NEXT_PUBLIC_API_BASE_URL || '';
const isBrowser = typeof window !== 'undefined';

const baseURL = (() => {
  if (!envBase) return '/api/v1';

  // In browser on an HTTPS page, avoid requesting an HTTP URL (mixed content).
  if (isBrowser && window.location.protocol === 'https:' && envBase.startsWith('http://')) {
    // If the env base points to localhost, fall back to a relative path to avoid mixed-content.
    if (/localhost|127\.0\.0\.1/.test(envBase)) return '/api/v1';
    // Otherwise upgrade the protocol to HTTPS.
    return envBase.replace(/^http:\/\//, 'https://');
  }

  return envBase;
})();

const apiClient = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default apiClient;
