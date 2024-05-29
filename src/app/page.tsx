import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/Input';
import { ThemeToogle } from '../components/ThemeToogle';

export default function Home() {
  return (
    <main className='min-h-screen transition-colors duration-75'>
      <ThemeToogle />
      <Button
        size={'lg'}
        variant={'ghost'}
      >
        fasjfioasjf
      </Button>
      <Input placeholder='CUICAasfagabvasasgas' />
    </main>
  );
}
