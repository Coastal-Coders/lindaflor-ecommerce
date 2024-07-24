'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Loading from '@/components/Loading';
import { Alert, AlertDescription } from '@/components/ui/Alert';
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
import { useSignIn } from '@/hooks/auth';

export function SignIn() {
  const { useFormValidation, handleSubmit, errors, control, isSubmitting } = useSignIn();

  return (
    <div className='grid h-screen w-full lg:grid-cols-2'>
      <div className='relative m-5 hidden h-auto lg:block'>
        <Image
          src='/Biquíni.jpg'
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
              <FormField
                control={control}
                name='password'
                render={({ field }) => (
                  <FormItem className='grid grid-cols-[auto,1fr] items-center'>
                    <FormLabel className='col-span-1'>Senha</FormLabel>
                    {/* TODO: Implement password recovery */}
                    <Link
                      href='#'
                      className='col-span-1 text-end text-sm text-primary underline'
                    >
                      Esqueceu sua senha?
                    </Link>
                    <FormControl className='col-span-2'>
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

              {errors.root && (
                <Alert variant='error'>
                  <AlertDescription>{errors.root.message}</AlertDescription>
                </Alert>
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
