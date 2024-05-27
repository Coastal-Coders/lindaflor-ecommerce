import * as S from './styles';
import ThemeToggle from './ThemeToggle';

export default function Home() {
  return (
    <main className='min-h-screen'>
      <ThemeToggle />
      <S.Test>Hello World!</S.Test>
    </main>
  );
}
