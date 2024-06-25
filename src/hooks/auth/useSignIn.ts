import { useRouter } from 'next/navigation';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Auth } from '@/@types/auth';
import { Tokens } from '@/@types/tokens';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { getCookie, setCookie } from 'cookies-next';
import { z } from 'zod';

const schema = z.object({
  email: z.string().email({ message: 'Email inválido' }),
  password: z.string().refine((data) => data.trim() !== '', { message: 'Senha é obrigatória' }),
});

const useSignIn = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<Auth>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<Auth> = async (data, event) => {
    event?.preventDefault();
    try {
      const response = await axios.post<Tokens>('http://localhost:3001/auth/local/signin', data);
      const { accessToken, refreshToken } = response.data;

      setCookie('accessToken', accessToken, { httpOnly: true });
      setCookie('refreshToken', refreshToken, { httpOnly: true });

      console.log(getCookie('accessToken'));

      setError('email', { message: 'Email inválido' });
      router.push('/dashboard');
    } catch (error) {
      console.error('Unexpected error', error);
    }
  };

  return {
    register,
    handleSubmit,
    onSubmit,
    errors,
  };
};

export default useSignIn;
