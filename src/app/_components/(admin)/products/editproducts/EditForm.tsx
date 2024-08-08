'use client';

import React from 'react';
import { Form } from 'react-hook-form';
import { Button } from '@/components/ui/Button';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/Form';
import { Input } from '@/components/ui/Input';
import { AddProduct } from '@/hooks/products/useAddProduct';
import useEditProduct from '@/hooks/products/useEditProduct';
import { colorOptions, Selectors, sizeOptions } from '../addproducts/Selectors';

const EditForm = ({ produto }: { produto: AddProduct }) => {
  const { control, errors, handleSubmit } = useEditProduct(produto);
  return (
    <>
      <Form>
        <form
          onSubmit={(e) => void handleSubmit(e)}
          className='w-10/12 space-y-8'
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
                <Selectors
                  title='Cores'
                  options={colorOptions}
                  selectedValues={new Set(field.value)}
                  onChange={(values) => field.onChange(Array.from(values))}
                />
                {errors.color && <FormMessage>{errors.color.message}</FormMessage>}
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name='size'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tamanhos</FormLabel>
                <Selectors
                  title='Tamanhos'
                  options={sizeOptions}
                  selectedValues={new Set(field.value)}
                  onChange={(values) => field.onChange(Array.from(values))}
                />
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
            variant={'secondary'}
            className='w-full text-base font-semibold ring-1 ring-black hover:scale-105'
          >
            Cadastrar Produto
          </Button>
        </form>
      </Form>
    </>
  );
};

export default EditForm;
