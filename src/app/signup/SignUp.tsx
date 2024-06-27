'use client';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { useSignUp } from '@/hooks/auth';

export function SignUp() {
  const { handleSubmit, errors, register } = useSignUp();

  return (
    <main className='flex min-h-screen items-center'>
      <Card className='mx-auto sm:max-w-md'>
        <CardHeader>
          <CardTitle>Cadastro</CardTitle>
          <CardDescription>Entre com suas informações</CardDescription>
        </CardHeader>
        <CardContent>
          <form
            className='grid gap-4'
            onSubmit={(event) => void handleSubmit(event)}
          >
            <div className='grid grid-cols-2 gap-4'>
              <div className='grid gap-2'>
                <Label htmlFor='name'>Nome</Label>
                <Input
                  id='name'
                  placeholder='Max'
                  {...register('name', { required: true })}
                />
                {errors.name && <span className='text-red-500'>{errors.name.message}</span>}
              </div>
              <div className='grid gap-2'>
                <Label htmlFor='surname'>Sobrenome</Label>
                <Input
                  id='surname'
                  placeholder='Robinson'
                  {...register('surname', { required: true })}
                />
                {errors.surname && <span className='text-red-500'>{errors.surname.message}</span>}
              </div>
            </div>
            <div className='grid gap-2'>
              <Label htmlFor='email'>Email</Label>
              <Input
                id='email'
                type='email'
                placeholder='m@example.com'
                autoComplete='email'
                {...register('email', { required: true })}
              />
            </div>
            {errors.email && <span className='text-red-500'>{errors.email.message}</span>}
            <div className='grid gap-2'>
              <Label htmlFor='password'>Senha</Label>
              <Input
                id='password'
                type='password'
                autoComplete='password'
                {...register('password', { required: true })}
              />
              {errors.password && <span className='text-red-500'>{errors.password.message}</span>}
            </div>

            {/* <div className='grid gap-2'>
              <Label htmlFor='confirmPassword'>Confirmar senha</Label>
              <Input
                id='confirmPassword'
                type='password'
                autoComplete='password'
              />
            </div> */}
            {errors.root && <span className='text-center text-red-500'>{errors.root.message}</span>}
            <Button
              type='submit'
              className='w-full'
            >
              Criar conta
            </Button>
          </form>
          <div className='my-4 grid gap-4'>
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
