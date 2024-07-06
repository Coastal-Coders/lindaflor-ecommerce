import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import axios from 'axios';

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
      await axios.post('http://localhost:3001/auth/logout', {
        withCredentials: true,
      });

      router.push('/');
    } catch (error) {
      console.error(error);
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
