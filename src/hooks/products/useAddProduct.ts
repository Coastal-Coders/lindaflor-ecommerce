import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { z } from 'zod';
import api from '@/services/api';
import { useAlert } from '@/utils/AlertProvider/AlertProvider';

export const addProductSchema = z.object({
  //TODO:REMOVER OU TROCAR O ID PARA STRING, POSSIVELMENTE REMOVER
  id: z.number().nonnegative(),
  name: z.string({ required_error: 'Nome é obrigatória' }).max(30, {
    message: 'Nome do produto não pode ter mais de 30 caracteres',
  }),
  description: z.string({ required_error: 'Descrição é obrigatória' }).max(255, {
    message: 'Descrição do produto não pode ter mais de 255 caracteres',
  }),
  price: z
    .string({ required_error: 'Preço é obrigatório' })
    .regex(/^\d+(\.\d{1,2})?$/, {
      message: 'Preço deve ser um número válido com até duas casas decimais.',
    })
    .transform((val) => parseFloat(val)),
  color: z.array(z.string()).min(1, { message: 'Selecione pelo menos uma cor' }),
  //image: z.string().url({ message: 'imagem inválida' }),
  size: z.array(z.string()).min(1, { message: 'Selecione pelo menos um tamanho' }),
  stock: z
    .string({ required_error: 'Quantidade é obrigatória' })
    .regex(/^\d+$/, {
      message: 'Quantidade deve ser um número inteiro válido.',
    })
    .transform((val) => parseInt(val, 10)),
});

export type AddProduct = z.infer<typeof addProductSchema>;

const useFormValidation = () => {
  return useForm<AddProduct>({
    resolver: zodResolver(addProductSchema),
    mode: 'onChange',
  });
};

const useAddProduct = () => {
  const router = useRouter();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useFormValidation();
  const { setAlert } = useAlert();

  const onSubmit: SubmitHandler<AddProduct> = async (data, event) => {
    event?.preventDefault();

    try {
      await api.post('/products', data);
      setAlert('Success', 'Produto cadastrado com sucesso', 'success');
      router.push('/admin/products');
    } catch (error) {
      setAlert('Fail', 'Error ao Cadastrar', 'error');
      throw new Error('Erro ao cadastrar produto');
    }
  };
  return {
    errors,
    control,
    useFormValidation,
    handleSubmit: handleSubmit(onSubmit),
  };
};

export default useAddProduct;
