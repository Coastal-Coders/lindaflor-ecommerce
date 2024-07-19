'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/Form';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { useSignIn } from '@/hooks/auth';

export function SignIn() {
  const { useFormValidation, handleSubmit, errors, control } = useSignIn();

  return (
    <div className='grid min-h-screen w-full lg:grid-cols-2'>
      <div className='hidden max-h-screen bg-muted lg:block'>
        <Image
          src='/Biquini.jpg'
          width={1920}
          height={1080}
          priority
          alt='Login Image'
          className='size-full object-cover'
        />
      </div>

      <div className='flex items-center justify-center p-6 lg:p-10'>
        <div className='mx-auto w-full max-w-md space-y-6'>
          <div className='space-y-2 text-center'>
            <h1 className='text-3xl font-bold'>Entrar</h1>
            <p className='text-xs text-muted-foreground'>
              Entre com seu email e senha{/* ou com o Google*/}
            </p>
          </div>
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
              <div className='space-y-2'>
                <div className='flex items-center justify-between'>
                  <Label htmlFor='password'>Senha</Label>
                  <Link
                    href='#'
                    className='text-sm text-primary underline'
                    prefetch={false}
                  >
                    Esqueceu sua senha?
                  </Link>
                </div>
                <FormField
                  control={control}
                  name='password'
                  render={({ field }) => (
                    <FormItem>
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
              </div>
              {errors.root && (
                <p className='text-center text-sm font-medium text-destructive'>
                  {errors.root.message}
                </p>
              )}
              <Button
                type='submit'
                className='w-full'
              >
                Entrar
              </Button>
            </form>
          </Form>

          {/* 
          TODO: Implement Google Sign-In in the backend
          <Button
            variant='outline'
            className='w-full'
          >
            Login com o Google
          </Button> */}
          <p className='text-center text-sm text-muted-foreground'>
            Não tem uma conta?{' '}
            <Link
              href='/signup'
              className='underline'
            >
              Crie uma conta
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
