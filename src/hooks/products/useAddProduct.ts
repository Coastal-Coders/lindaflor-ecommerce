import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { z } from 'zod';
import { useAlert } from '@/utils/AlertProvider/AlertProvider';
//import { set } from 'cypress/types/lodash';
//import { NODE_ENV, uri } from '@/constants/environment-variables';
//import api from '@/services/api';

const addProductSchema = z.object({
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
  color: z.string({ required_error: 'Cor é obrigatório' }).max(30, {
    message: 'Produto must not be longer than 30 characters.',
  }),
  size: z.string({ required_error: 'Tamanho é obrigatório' }).max(15, {
    message: 'Tamanho do produto não pode ter mais de 15 caracteres',
  }),
  stock: z
    .string({ required_error: 'Quantidade é obrigatória' })
    .regex(/^\d+$/, {
      message: 'Quantidade deve ser um número inteiro válido.',
    })
    .transform((val) => parseInt(val, 10)),
});

type AddProduct = z.infer<typeof addProductSchema>;

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

    // const baseURL = uri[NODE_ENV];
    //const apiURL = `${baseURL}/products`;

    try {
      //await api.post(apiURL, data);
      console.log(data);
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
