import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { NODE_ENV, uri } from '@/constants/environment-variables';
import api from '@/services/api';
import { useAlert } from '@/utils/AlertProvider/AlertProvider';
import { AddProduct, addProductSchema } from './useAddProduct';

const useEditProduct = (produto: AddProduct) => {
  const router = useRouter();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<AddProduct>({
    resolver: zodResolver(addProductSchema),
    mode: 'onChange',
    defaultValues: produto,
  });
  const { setAlert } = useAlert();
  const onSubmit: SubmitHandler<AddProduct> = async (data, event) => {
    event?.preventDefault();

    const baseURL = uri[NODE_ENV];
    const apiURL = `${baseURL}/${data.id}`;

    try {
      await api.put(apiURL, data);
      setAlert('Success', 'Produto Alterado com sucesso', 'success');
      router.refresh;
    } catch (error) {
      setAlert('Fail', 'Error ao Alterar', 'error');
      throw new Error('Erro ao Alterar produto');
    }
  };
  return {
    errors,
    control,
    handleSubmit: handleSubmit(onSubmit),
  };
};

export default useEditProduct;
