'use client';
import Image from 'next/image';
import Link from 'next/link';
import Loading from '@/components/Loading';
import { Button } from '@/components/ui/Button';
import { Form, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/Form';
import { Input } from '@/components/ui/Input';
import { useSignUp } from '@/hooks/auth';

export function SignUp() {
  const { useFormValidation, handleSubmit, errors, control, isSubmitting } = useSignUp();

  return (
    <div className='grid w-full p-5 lg:grid-cols-2'>
      <div className='flex items-center justify-center p-6 lg:p-10'>
        <div className='mx-auto w-full max-w-lg space-y-6'>
          <div className='space-y-1 text-center'>
            <h1 className='text-3xl font-bold'>Crie sua conta</h1>
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
              <FormField
                control={control}
                name='name'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor='name'>Nome</FormLabel>
                    <Input
                      id='name'
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
                      {...field}
                    />
                    {errors.surname && <FormMessage>{errors.surname.message}</FormMessage>}
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name='email'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor='email'>Email</FormLabel>
                    <Input
                      id='email'
                      type='email'
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
      <div className='hidden max-h-screen lg:block'>
        <Image
          src='/Maiô.jpg'
          alt='Imagem ilustrativa'
          width={1920}
          height={1080}
          priority
          className='size-full overflow-hidden rounded-md object-cover shadow-md shadow-secondary'
        />
      </div>
    </div>
  );
}
