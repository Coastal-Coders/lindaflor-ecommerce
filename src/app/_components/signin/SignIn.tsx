'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Loading from '@/components/Loading';
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
  const { useFormValidation, handleSubmit, errors, control, isSubmitting } = useSignIn();

  return (
    <div className='grid h-screen w-full lg:grid-cols-2'>
      <div className='relative m-5 hidden h-auto lg:block'>
        <Image
          src='/Biquini.jpg'
          alt='Login Image'
          fill
          priority
          quality={100}
          className='hidden overflow-hidden rounded-md object-cover shadow-md shadow-secondary lg:block'
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
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
                disabled={isSubmitting}
              >
                {isSubmitting ? <Loading /> : 'Entrar'}
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
