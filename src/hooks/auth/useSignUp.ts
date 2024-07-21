import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { z } from 'zod';
import { NODE_ENV, uri } from '@/constants/environment-variables';
import api from '@/services/api';
import { SignUpUser } from '@/types/SignUpUser';

const schema = z
  .object({
    name: z.string({ required_error: 'Nome é obrigatório' }),
    surname: z.string({ required_error: 'Sobrenome é obrigatório' }),
    email: z.string({ required_error: 'Email é obrigatório' }).email({ message: 'Email inválido' }),
    password: z
      .string({ required_error: 'Senha é obrigatória' })
      .min(8, { message: 'Senha deve ter no mínimo 8 caracteres' }),
    confirmPassword: z.string({ required_error: 'Confirme a senha' }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'As senhas não correspondem',
    path: ['confirmPassword'],
  });

const useFormValidation = () => {
  return useForm<SignUpUser>({
    resolver: zodResolver(schema),
    mode: 'onChange',
  });
};

const useSignUp = () => {
  const router = useRouter();

  const {
    control,
    handleSubmit,
    setError,
    formState: { isSubmitting, errors },
  } = useFormValidation();

  const onSubmit: SubmitHandler<SignUpUser> = async (data, event) => {
    event?.preventDefault();

    const baseURL = uri[NODE_ENV];
    const apiURL = `${baseURL}/auth/local/signup`;

    try {
      await api.post<SignUpUser>(apiURL, data);

      router.push('/signin');
    } catch (error) {
      setError('root', { message: 'Erro ao cadastrar usuário' });
    }
  };
  return {
    handleSubmit: handleSubmit(onSubmit),
    useFormValidation,
    setError,
    control,
    errors,
    isSubmitting,
  };
};

export default useSignUp;
