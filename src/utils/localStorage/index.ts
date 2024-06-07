export const APP_KEY = 'APPKEY';

export function getStorageItem<T>(key: string): T | null {
  if (typeof window === 'undefined') return null;

  const data = window.localStorage.getItem(`${APP_KEY}_${key}`);

  if (data == null) return null;

  try {
    return JSON.parse(data) as T;
  } catch (error) {
    console.error('Error parsing JSON from localStorage', error);
    return null;
  }
}

export function setStorageItem(key: string, value: unknown): void {
  if (typeof window === 'undefined') return;

  try {
    const data = JSON.stringify(value);
    window.localStorage.setItem(`${APP_KEY}_${key}`, data);
  } catch (error) {
    console.error('Error setting JSON to localStorage', error);
  }
}
