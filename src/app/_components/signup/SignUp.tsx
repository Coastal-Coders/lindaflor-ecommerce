'use client';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { Form, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/Form';
import { Input } from '@/components/ui/Input';
import { useSignUp } from '@/hooks/auth';

export function SignUp() {
  const { useFormValidation, handleSubmit, errors, control } = useSignUp();

  return (
    <main className='flex min-h-screen items-center'>
      <Card className='mx-auto sm:max-w-md'>
        <CardHeader>
          <CardTitle>Cadastro</CardTitle>
          <CardDescription>Entre com suas informações</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...useFormValidation()}>
            <form
              className='grid gap-4'
              onSubmit={(e) => void handleSubmit(e)}
            >
              <div className='grid grid-cols-2 gap-4'>
                <FormField
                  control={control}
                  name='name'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor='name'>Nome</FormLabel>
                      <Input
                        id='name'
                        placeholder='Max'
                        {...field}
                      />
                      {errors.name && <FormMessage>{errors.name.message}</FormMessage>}
                    </FormItem>
                  )}
                />
                <FormField
                  control={control}
                  name='surname'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor='surname'>Sobrenome</FormLabel>
                      <Input
                        id='surname'
                        placeholder='Robinson'
                        {...field}
                      />
                      {errors.surname && <FormMessage>{errors.surname.message}</FormMessage>}
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={control}
                name='email'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor='email'>Email</FormLabel>
                    <Input
                      id='email'
                      type='email'
                      placeholder='m@example.com'
                      autoComplete='email'
                      {...field}
                    />
                    {errors.email && <FormMessage>{errors.email.message}</FormMessage>}
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name='password'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor='password'>Senha</FormLabel>
                    <Input
                      id='password'
                      type='password'
                      autoComplete='password'
                      {...field}
                    />
                    {errors.password && <FormMessage>{errors.password.message}</FormMessage>}
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name='confirmPassword'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor='confirmPassword'>Confirmar Senha</FormLabel>
                    <Input
                      id='confirmPassword'
                      type='password'
                      autoComplete='password'
                      {...field}
                    />
                    {errors.confirmPassword && (
                      <FormMessage>{errors.confirmPassword.message}</FormMessage>
                    )}
                  </FormItem>
                )}
              />
              {errors.root && (
                <span className='text-center text-sm font-medium text-destructive'>
                  {errors.root.message}
                </span>
              )}
              <Button
                type='submit'
                className='w-full'
              >
                Criar conta
              </Button>
            </form>
          </Form>
          <div className='mt-4 grid gap-4'>
            <Button
              variant='outline'
              className='w-full'
            >
              Criar conta com o Google
            </Button>
            <div className='text-center text-sm'>
              Já tem uma conta?{' '}
              <Link
                href='/signin'
                className='underline'
              >
                Entrar
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
