'use client';

import React from 'react';
import { Button } from '@/components/ui/Button';
import {
  Form,
  FormControl,
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
import useAddProduct from '@/hooks/products/useAddProduct';

export function ProductsForm() {
  const { useFormValidation, handleSubmit, control, errors } = useAddProduct();
  return (
    <>
      <Form {...useFormValidation()}>
        <form
          onSubmit={(e) => void handleSubmit(e)}
          className='space-y-8'
        >
          <FormField
            control={control}
            name='name'
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
                {errors.name && <FormMessage>{errors.name?.message}</FormMessage>}
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name='description'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Descrição do Produto</FormLabel>
                <FormControl>
                  <Input
                    placeholder='Ex: Camisa Polo'
                    className='ring-1 focus-visible:right-1 focus-visible:outline-none focus-visible:ring-gray-400 focus-visible:ring-offset-0'
                    {...field}
                  />
                </FormControl>
                {errors.description && <FormMessage>{errors.description?.message}</FormMessage>}
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name='price'
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
                {errors.price && <FormMessage>{errors.price?.message}</FormMessage>}
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name='color'
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
                {errors.color && <FormMessage>{errors.color?.message}</FormMessage>}
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name='size'
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
                {errors.size && <FormMessage>{errors.size?.message}</FormMessage>}
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name='stock'
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
                {errors.stock && <FormMessage>{errors.stock?.message}</FormMessage>}
              </FormItem>
            )}
          />
          {errors.root && (
            <div className='text-center text-sm font-medium text-destructive'>
              {errors.root.message}
            </div>
          )}
          <Button
            type='submit'
            size='lg'
            variant={'default'}
            className='w-full bg-background ring-1 hover:scale-105 hover:bg-background/80'
          >
            Cadastrar Produto
          </Button>
        </form>
      </Form>
    </>
  );
}
