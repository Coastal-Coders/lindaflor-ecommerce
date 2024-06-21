/* eslint-disable @typescript-eslint/no-unsafe-call */
import { useRouter } from 'next/navigation';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Auth } from '@/@types/auth';
import { Tokens } from '@/@types/tokens';
import axios from 'axios';
import { setCookie } from 'cookies-next';

const useSignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Auth>();
  const router = useRouter();

  const onSubmit: SubmitHandler<Auth> = async (data) => {
    try {
      const response = await axios.post<Tokens>('http://localhost:3001/auth/local/signin', data);
      const { accessToken, refreshToken } = response.data;

      setCookie('accessToken', accessToken, { httpOnly: true });
      setCookie('refreshToken', refreshToken, { httpOnly: true });

      router.push('/dashboard');
    } catch (error) {
      console.error('Error logging in', error);
    }
  };

  return { register, handleSubmit, onSubmit, errors };
};

export default useSignIn;
