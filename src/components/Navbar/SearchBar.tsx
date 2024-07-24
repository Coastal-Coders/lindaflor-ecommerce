'use client';

import { ChangeEvent, useState } from 'react';
import { Search } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Products } from '@/app/_components/products/data/schema';
import { Input } from '@/components/ui/Input';
import * as produs from '../../app/_components/products/data/tasks.json';

const produtos = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return produs.map((e: any) => e);
};

const SearchBar = () => {
  {
    /* TODO: Make a custom hook */
  }
  const [isFocused, setIsFocused] = useState(false);

  const [products] = useState<Products[]>(produtos);
  const [productsFilter, setProductsFilter] = useState<Products[]>([]);
  const [showProducts, setShowProducts] = useState(false);
  const [inputValue, setInputValue] = useState('');

  function Filter(nome: string) {
    if (nome.trim() === '') {
      setProductsFilter([]);
    } else {
      setProductsFilter(
        products?.filter((e: Products) =>
          e.nome.toLowerCase().includes(nome.trim().toLowerCase())
        ) ?? []
      );
    }
    setShowProducts(true);
  }
  const handleProductClick = () => {
    setShowProducts(false);
    setInputValue('');
  };
  const handleFilter = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setInputValue(inputValue);
    Filter(inputValue);
  };

  return (
    <div className='relative w-full'>
      <form className={`flex flex-row ${isFocused ? '' : 'pl-5'}`}>
        {isFocused && (
          <span className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2 text-primary-foreground'>
            <Search className='size-5' />
          </span>
        )}
        <Input
          type='search'
          placeholder='Pesquisar'
          className={`rounded-l-full ${isFocused ? 'pl-8' : ''}`}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onChange={handleFilter}
          value={inputValue}
        />
        <span className='inset-y-0 right-0 flex items-center rounded-r-full bg-primary/50 pl-1 pr-3 text-primary-foreground hover:cursor-pointer'>
          <Search className='size-5' />
        </span>
      </form>

      {/*TODO: Handle click outside and hide the results */}
      {showProducts && (
        <span
          className={`absolute mt-1 max-h-52 w-full overflow-y-auto rounded-md bg-muted text-foreground shadow-lg ${showProducts ? 'border-x border-black shadow-black' : ''}`}
        >
          {productsFilter.map((product) => (
            <Link
              href={'/'}
              key={product.id}
              className='flex items-center border-b border-secondary p-2 hover:border-primary hover:bg-secondary'
              onClick={handleProductClick}
            >
              <Image
                src={
                  'https://images.pexels.com/photos/325876/pexels-photo-325876.jpeg?auto=compress&cs=tinysrgb&w=300'
                }
                alt='produtosImage'
                width={30}
                height={30}
                className='min-h-[50px] min-w-[40px]'
              />
              <h2 className='px-1 text-base font-semibold'>{product.nome}</h2>
            </Link>
          ))}
        </span>
      )}
    </div>
  );
};

export default SearchBar;
