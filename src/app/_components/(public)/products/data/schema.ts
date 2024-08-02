import { z } from 'zod';

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const productsSchema = z.object({
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
  size: z.array(z.string()).min(1, { message: 'Selecione pelo menos um tamanho' }),
  stock: z
    .string({ required_error: 'Quantidade é obrigatória' })
    .regex(/^\d+$/, {
      message: 'Quantidade deve ser um número inteiro válido.',
    })
    .transform((val) => parseInt(val, 10)),
});

export type Products = z.infer<typeof productsSchema>;
