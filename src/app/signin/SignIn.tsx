import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';

export function SignIn() {
  return (
    <main className='flex min-h-screen items-center'>
      <Card className='mx-auto'>
        <CardHeader>
          <CardTitle className='text-2xl'>Login</CardTitle>
          <CardDescription>Entre com sua conta</CardDescription>
        </CardHeader>
        <CardContent>
          <div className='grid gap-4'>
            <div className='grid gap-2'>
              <Label htmlFor='email'>Email</Label>
              <Input
                id='email'
                type='email'
                placeholder='m@example.com'
                required
              />
            </div>
            <div className='grid gap-2'>
              <div className='flex items-center'>
                <Label htmlFor='password'>Senha</Label>
                <Link
                  href='#'
                  className='ml-auto inline-block text-sm underline'
                >
                  Esqueceu sua senha?
                </Link>
              </div>
              <Input
                id='password'
                type='password'
                required
              />
            </div>
            <Button
              type='submit'
              className='w-full'
            >
              Entrar
            </Button>
            <Button
              variant='outline'
              className='w-full'
            >
              Login com o Google
            </Button>
          </div>
          <div className='mt-4 text-center text-sm'>
            Não tem uma conta?{' '}
            <Link
              href='/signup'
              className='underline'
            >
              Crie uma conta
            </Link>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
