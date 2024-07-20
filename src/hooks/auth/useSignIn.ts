import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { z } from 'zod';
import { NODE_ENV, uri } from '@/constants/environment-variables';
import api from '@/services/api';
import { Auth } from '@/types/Auth';

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
    formState: { isSubmitting, errors },
  } = useFormValidation();

  const onSubmit: SubmitHandler<Auth> = async (data, event) => {
    event?.preventDefault();

    const baseURL = uri[NODE_ENV];
    const apiURL = `${baseURL}/auth/local/signin`;

    try {
      await api.post(apiURL, data);

      router.push('/dashboard');
    } catch (error) {
      setError('root', { message: 'Email ou senha inválidos' });
    }
  };

  return {
    control,
    errors,
    isSubmitting,
    useFormValidation,
    handleSubmit: handleSubmit(onSubmit),
    setError,
  };
};

export default useSignIn;
