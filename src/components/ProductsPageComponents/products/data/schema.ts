import { z } from 'zod';

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const taskSchema = z.object({
  id: z.string(),
  nome: z.string(),
  preço: z.number().multipleOf(0.01),
  cor: z.string(),
  tamanho: z.string(),
  status: z.string(),
});

export type Task = z.infer<typeof taskSchema>;
