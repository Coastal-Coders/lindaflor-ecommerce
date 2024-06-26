import { z } from 'zod';

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const productsSchema = z.object({
  id: z.string(),
  nome: z.string(),
  preço: z.number().multipleOf(0.01),
  cor: z.string(),
  tamanho: z.string(),
  status: z.string(),
});

export type Products = z.infer<typeof productsSchema>;
