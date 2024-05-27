import { useEffect, useState } from 'react';

const availableThemes = ['light', 'dark', 'orange'];

const applyTheme = (theme: string) => {
  document.documentElement.classList.remove(...availableThemes);
  if (theme === 'system') {
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
    document.documentElement.classList.add(systemTheme);
  } else {
    document.documentElement.classList.add(theme);
  }
};

const useTheme = () => {
  const [theme, setTheme] = useState('system');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'system';
    applyTheme(savedTheme);
    setTheme(savedTheme);

    if (savedTheme === 'system') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

      const handleSystemThemeChange = (e: MediaQueryListEvent) => {
        if (theme === 'system') {
          const newSystemTheme = e.matches ? 'dark' : 'light';
          document.documentElement.classList.remove(...availableThemes);
          document.documentElement.classList.add(newSystemTheme);
        }
      };

      mediaQuery.addEventListener('change', handleSystemThemeChange);

      return () => {
        mediaQuery.removeEventListener('change', handleSystemThemeChange);
      };
    }
  }, [theme]);

  const handleThemeChange = (newTheme: string) => {
    if (newTheme === 'system') {
      localStorage.removeItem('theme');
    } else {
      localStorage.setItem('theme', newTheme);
    }
    applyTheme(newTheme);
    setTheme(newTheme);
  };

  return { theme, setTheme: handleThemeChange };
};

export default useTheme;
