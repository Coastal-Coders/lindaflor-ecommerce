import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import { z } from 'zod';
//import api from '@/services/api';
import { Auth } from '@/types/Auth';
import { useAlert } from '@/utils/AlertProvider/AlertProvider';

const schema = z.object({
  email: z.string({ required_error: 'Email é obrigatório' }).email({ message: 'Email inválido' }),
  password: z
    .string({ required_error: 'Senha é obrigatória' })
    .min(1, { message: 'Senha é obrigatória' }),
});

const useFormValidation = () => {
  return useForm<Auth>({
    resolver: zodResolver(schema),
    mode: 'onChange',
  });
};

const useSignIn = () => {
  const router = useRouter();

  const {
    control,
    handleSubmit,
    setError,
    formState: { isSubmitting, isLoading, errors },
  } = useFormValidation();
  const { setAlert } = useAlert();

  const onSubmit: SubmitHandler<Auth> = async (data, event) => {
    event?.preventDefault();

    try {
      await signIn('credentials', {
        email: data.email,
        password: data.password,
        redirect: false,
        callbackUrl: '/',
      });
      //await api.post('/auth/local/signin', data);
      setAlert('Sucess', 'LogIn Realizado com Sucesso', 'success');
      router.push('/');
    } catch (error) {
      setAlert('Error', 'Falha ao Logar', 'error');
      setError('root', { message: 'Email ou senha inválidos' });
    }
  };

  return {
    control,
    errors,
    isSubmitting,
    isLoading,
    useFormValidation,
    handleSubmit: handleSubmit(onSubmit),
    setError,
  };
};

export default useSignIn;
