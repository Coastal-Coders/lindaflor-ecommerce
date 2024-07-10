'use client';
import Link from 'next/link';
import React from 'react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/Form';
import { Input } from '@/components/ui/Input';
import { useSignIn } from '@/hooks/auth';

export function SignIn() {
  const { useFormValidation, handleSubmit, errors, control } = useSignIn();

  return (
    <main className='flex min-h-screen items-center'>
      <Card className='mx-auto'>
        <CardHeader>
          <CardTitle className='text-2xl'>Login</CardTitle>
          <CardDescription>Entre com sua conta</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...useFormValidation()}>
            <form
              className='grid gap-4'
              onSubmit={(e) => void handleSubmit(e)}
            >
              <FormField
                control={control}
                name='email'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        type='email'
                        autoComplete='email'
                        {...field}
                      />
                    </FormControl>
                    {errors.email && <FormMessage>{errors.email.message}</FormMessage>}
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name='password'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Senha</FormLabel>
                    <FormControl>
                      <Input
                        type='password'
                        autoComplete='password'
                        {...field}
                      />
                    </FormControl>
                    {errors.password && <FormMessage>{errors.password.message}</FormMessage>}
                  </FormItem>
                )}
              />
              {errors.root && <div className='text-center text-red-500'>{errors.root.message}</div>}
              <Button
                type='submit'
                className='w-full'
              >
                Entrar
              </Button>
            </form>
          </Form>
          <div className='mt-4'>
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
