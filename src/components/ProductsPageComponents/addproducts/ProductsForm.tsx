'use client';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/Button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/Form';
import { Input } from '@/components/ui/Input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/Select';
import { toast } from '@/components/ui/UseToast';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const profileFormSchema = z.object({
  nome: z
    .string()
    .min(2, {
      message: 'Produto must be at least 2 characters.',
    })
    .max(30, {
      message: 'Produto must not be longer than 30 characters.',
    }),
  preço: z
    .string()
    .regex(/^\d+(\.\d{1,2})?$/, {
      message: 'Preço deve ser um número válido com até duas casas decimais.',
    })
    .transform((val) => parseFloat(val)),
  cor: z
    .string()
    .min(2, {
      message: 'Produto must be at least 2 characters.',
    })
    .max(30, {
      message: 'Produto must not be longer than 30 characters.',
    }),
  tamanho: z.string(),
  quantidade: z
    .string()
    .regex(/^\d+$/, {
      message: 'Quantidade deve ser um número inteiro válido.',
    })
    .transform((val) => parseInt(val, 10)),
});

type ProfileFormValues = z.infer<typeof profileFormSchema>;

// This can come from your database or API.

export function ProductsForm() {
  const router = useRouter();
  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    mode: 'onChange',
  });

  function onSubmit(data: ProfileFormValues) {
    toast({
      title: 'You submitted the following values:',
      description: (
        <pre className='mt-2 w-[340px] rounded-md bg-slate-950 p-4'>
          <code className='text-white'>{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
    console.log(data);
    router.push('/products/admin');
  }

  return (
    <Form {...form}>
      <form
        onSubmit={(event) => void form.handleSubmit(onSubmit)(event)}
        className='space-y-8'
      >
        <FormField
          control={form.control}
          name='nome'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome do Produto</FormLabel>
              <FormControl>
                <Input
                  placeholder='Ex: Camisa Polo'
                  className='ring-1 focus-visible:right-1 focus-visible:outline-none focus-visible:ring-gray-400 focus-visible:ring-offset-0'
                  {...field}
                />
              </FormControl>
              <FormDescription>teste teste camisa polo.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='preço'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Preço</FormLabel>
              <FormControl>
                <Input
                  placeholder='Ex: 10.50'
                  className='ring-1 focus-visible:right-1 focus-visible:outline-none focus-visible:ring-gray-400 focus-visible:ring-offset-0'
                  {...field}
                />
              </FormControl>
              <FormDescription>esse é o preço do produto</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='cor'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Cores</FormLabel>
              <Select
                onValueChange={field.onChange}
                defaultValue={field.value}
              >
                <FormControl>
                  <SelectTrigger className='ring-1 focus-visible:right-1 focus-visible:outline-none focus-visible:ring-gray-400 focus-visible:ring-offset-0'>
                    <SelectValue placeholder='Selecione a Cor do Produto' />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value='Vermelho'>Vermelho</SelectItem>
                  <SelectItem value='Azul'>Azul</SelectItem>
                  <SelectItem value='Preto'>Preto</SelectItem>
                </SelectContent>
              </Select>
              <FormDescription>Cores teste</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='tamanho'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tamanhos</FormLabel>
              <Select
                onValueChange={field.onChange}
                defaultValue={field.value}
              >
                <FormControl>
                  <SelectTrigger className='ring-1 focus-visible:right-1 focus-visible:outline-none focus-visible:ring-gray-400 focus-visible:ring-offset-0'>
                    <SelectValue placeholder='Selecione o Tamanho do Produto' />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value='P'>P</SelectItem>
                  <SelectItem value='M'>M</SelectItem>
                  <SelectItem value='G'>G</SelectItem>
                </SelectContent>
              </Select>
              <FormDescription>Tamanhos Teste.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='quantidade'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Quantidade </FormLabel>
              <FormControl>
                <Input
                  placeholder='10'
                  className='ring-1 focus-visible:right-1 focus-visible:outline-none focus-visible:ring-gray-400 focus-visible:ring-offset-0'
                  {...field}
                />
              </FormControl>
              <FormDescription>Quantidade a ser adicionada em estoque</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type='submit'
          size={'lg'}
          variant={'default'}
          className='bg-primary'
        >
          Cadastrar Produto
        </Button>
      </form>
    </Form>
  );
}
