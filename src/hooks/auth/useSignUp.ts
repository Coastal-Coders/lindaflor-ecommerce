import { useRouter } from 'next/navigation';
import { SubmitHandler, useForm } from 'react-hook-form';
import { SignUpUser } from '@/@types/SignUpUser';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { z } from 'zod';

const schema = z.object({
  name: z.string().min(2, { message: 'Nome deve ter no mínimo 2 caracteres' }),
  surname: z.string().min(2, { message: 'Sobrenome deve ter no mínimo 2 caracteres' }),
  email: z.string().email({ message: 'Email inválido' }),
  password: z.string().min(8, { message: 'Senha deve ter no mínimo 8 caracteres' }),
});

const useSignUp = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<SignUpUser>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<SignUpUser> = async (data, event) => {
    event?.preventDefault();

    console.log(data);
    try {
      await axios.post<SignUpUser>('http://localhost:3001/auth/local/signup', data);
      router.push('/signin');
    } catch (error) {
      setError('root', { message: 'Erro ao cadastrar usuário' });
    }
  };
  return {
    handleSubmit: handleSubmit(onSubmit),
    register,
    errors,
  };
};

export default useSignUp;
