import { useRouter } from 'next/navigation';
import { useForm, SubmitHandler } from 'react-hook-form';
import api from '@/services/api';
import { Auth } from '@/types/Auth';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

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
    formState: { errors },
  } = useFormValidation();

  const onSubmit: SubmitHandler<Auth> = async (data, event) => {
    event?.preventDefault();
    try {
      await api.post('http://localhost:3001/auth/local/signin', data);

      router.push('/dashboard');
    } catch (error) {
      setError('root', { message: 'Email ou senha inválidos' });
    }
  };

  return {
    control,
    errors,
    useFormValidation,
    handleSubmit: handleSubmit(onSubmit),
    setError,
  };
};

export default useSignIn;
