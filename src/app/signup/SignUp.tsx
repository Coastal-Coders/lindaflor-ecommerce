import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';

export function SignUp() {
  return (
    <main className='flex min-h-screen items-center'>
      <Card className='mx-auto sm:max-w-md'>
        <CardHeader>
          <CardTitle>Cadastro</CardTitle>
          <CardDescription>Entre com suas informações</CardDescription>
        </CardHeader>
        <CardContent>
          <div className='grid gap-4'>
            <div className='grid grid-cols-2 gap-4'>
              <div className='grid gap-2'>
                <Label htmlFor='first-name'>Nome</Label>
                <Input
                  id='first-name'
                  placeholder='Max'
                  required
                />
              </div>
              <div className='grid gap-2'>
                <Label htmlFor='last-name'>Sobrenome</Label>
                <Input
                  id='last-name'
                  placeholder='Robinson'
                  required
                />
              </div>
            </div>
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
              <Label htmlFor='password'>Senha</Label>
              <Input
                id='password'
                type='password'
              />
            </div>
            <div className='grid gap-2'>
              <Label htmlFor='confirmPassword'>Confirmar senha</Label>
              <Input
                id='confirmPassword'
                type='password'
              />
            </div>
            <Button
              type='submit'
              className='w-full'
            >
              Criar conta
            </Button>
            <Button
              variant='outline'
              className='w-full'
            >
              Criar conta com o Google
            </Button>
          </div>
          <div className='mt-4 text-center text-sm'>
            Já tem uma conta?{' '}
            <Link
              href='/signin'
              className='underline'
            >
              Entrar
            </Link>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
