'use client';

import Image from 'next/image';
import Link from 'next/link';
import Loading from '@/components/Loading';
import { Alert, AlertDescription } from '@/components/ui/Alert';
import { Button } from '@/components/ui/Button';
import { Form, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/Form';
import { Input } from '@/components/ui/Input';
import { useSignUp } from '@/hooks/auth';

type FormFieldType = {
  name: 'name' | 'surname' | 'email' | 'password' | 'confirmPassword';
  label: string;
  type: string;
  autoComplete?: string;
};

const formFields: FormFieldType[] = [
  { name: 'name', label: 'Nome', type: 'text' },
  { name: 'surname', label: 'Sobrenome', type: 'text' },
  { name: 'email', label: 'Email', type: 'email', autoComplete: 'email' },
  { name: 'password', label: 'Senha', type: 'password', autoComplete: 'password' },
  { name: 'confirmPassword', label: 'Confirmar Senha', type: 'password', autoComplete: 'password' },
];

export function SignUp() {
  const { useFormValidation, handleSubmit, errors, control, isSubmitting } = useSignUp();
  return (
    <div className='grid min-h-dvh w-full lg:grid-cols-2'>
      <div className='flex items-center justify-center p-6 lg:p-10'>
        <div className='mx-auto w-full max-w-lg space-y-6'>
          <div className='space-y-1 text-center'>
            <h1 className='text-3xl font-bold sm:text-lg sm:font-semibold'>Crie sua conta</h1>
            <p className='text-xs text-muted-foreground'>
              Já possui uma conta?{' '}
              <Link
                href='/signin'
                className='underline'
                prefetch={false}
              >
                Faça login
              </Link>
            </p>
          </div>
          <Form {...useFormValidation()}>
            <form
              className='grid gap-3'
              onSubmit={(e) => void handleSubmit(e)}
            >
              {formFields.map((field) => (
                <FormField
                  key={field.name}
                  control={control}
                  name={field.name}
                  render={({ field: formField }) => (
                    <FormItem>
                      <FormLabel htmlFor={field.name}>{field.label}</FormLabel>
                      <Input
                        id={field.name}
                        type={field.type}
                        autoComplete={field.autoComplete}
                        className='border border-black'
                        {...formField}
                      />
                      {errors[field.name] && (
                        <FormMessage>{errors[field.name]?.message}</FormMessage>
                      )}
                    </FormItem>
                  )}
                />
              ))}
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
                {isSubmitting ? <Loading /> : 'Cadastrar'}
              </Button>
            </form>
          </Form>
          {/* 
          // TODO: Implement Google Sign-Up in the backend
          <Button
          variant='outline'
          className='w-full'
          >
            Criar conta com o Google
            </Button> */}
        </div>
      </div>
      <div className='relative m-5 hidden h-auto lg:block'>
        <Image
          src='/Maiô.jpg'
          alt='Sign Up Image'
          fill
          priority
          quality={100}
          className='hidden overflow-hidden rounded-md object-cover shadow-md shadow-black lg:block'
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
        />
      </div>
    </div>
  );
}
