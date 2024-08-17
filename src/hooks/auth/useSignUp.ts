import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { z } from 'zod';
import api from '@/services/api';
import { SignUpUser } from '@/types/SignUpUser';
import { useAlert } from '@/utils/AlertProvider/AlertProvider';

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
    formState: { isLoading, isSubmitting, errors },
  } = useFormValidation();
  const { setAlert } = useAlert();

  const onSubmit: SubmitHandler<SignUpUser> = async (data, event) => {
    event?.preventDefault();

    try {
      await api.post<SignUpUser>('/auth/local/signup', data);
      setAlert('Sucess', 'Cadastro Realizado com Sucesso', 'success');

      router.push('/signin');
    } catch (error) {
      setError('root', { message: 'Erro ao cadastrar usuário' });
      setAlert('Error', 'Falha ao Cadastrar', 'error');
    }
  };
  return {
    handleSubmit: handleSubmit(onSubmit),
    useFormValidation,
    setError,
    control,
    errors,
    isSubmitting,
    isLoading,
  };
};

export default useSignUp;
