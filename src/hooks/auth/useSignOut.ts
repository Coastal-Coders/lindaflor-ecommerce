import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import api from '@/services/api';

const useSignOut = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  const signOut = async () => {
    try {
      await api.post('http://localhost:3001/auth/logout', {});

      router.push('/');
    } catch (error) {
      setError('root', { message: 'Erro ao sair' });
    }
  };

  return {
    handleSubmit: handleSubmit(signOut),
    register,
    errors,
  };
};

export default useSignOut;
