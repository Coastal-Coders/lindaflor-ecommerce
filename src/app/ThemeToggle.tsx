'use client';

import useTheme from '@/utils/theme/useTheme';

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const options = [
    { icon: 'L', text: 'light' },
    { icon: 'D', text: 'dark' },
    { icon: 'S', text: 'system' },
    { icon: 'O', text: 'orange' },
  ];

  return (
    <div className='fixed right-10 top-5 rounded-lg bg-primary'>
      {options?.map((opt) => (
        <button
          key={opt.text}
          onClick={() => setTheme(opt.text)}
          className={`${theme === opt.text && 'text-tertiary'} m-1 size-8 rounded-lg bg-primary text-xl font-bold text-content`}
        >
          {opt.icon}
        </button>
      ))}
    </div>
  );
};

export default ThemeToggle;
