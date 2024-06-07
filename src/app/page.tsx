'use client';
import { useEffect, useState } from 'react';
import { ThemeToogle } from '@/components/ThemeToogle';

export default function Home() {
  const [data, setData] = useState<string | null>(null);

  useEffect(() => {
    fetch('http://localhost:3001/')
      .then((response) => response.text())
      .then((data) => setData(data))
      .catch((error) => console.error('Error:', error));
  }, []);

  return (
    <main className='min-h-screen transition-colors duration-75'>
      <ThemeToogle />
      <div>
        <h1>Welcome to Next.js!</h1>
        <p>{data}</p>
      </div>
    </main>
  );
}
