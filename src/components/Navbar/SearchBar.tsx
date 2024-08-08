'use client';

import { ChangeEvent, useState } from 'react';
import { Search } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Input } from '@/components/ui/Input';
import { useClickOutside } from '@/hooks/Navigation';
import { AddProduct } from '@/hooks/products/useAddProduct';
import { useGetProducts } from '@/hooks/products/useGetProducts';

const SearchBar = () => {
  {
    /* TODO: Make a custom hook */
  }
  const { produtos } = useGetProducts();
  const [productsFilter, setProductsFilter] = useState<AddProduct[]>([]);
  const [showProducts, setShowProducts] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleOutsideClick = () => {
    setShowProducts(false);
    setInputValue('');
  };

  const { ref, isFocused, setIsFocused } = useClickOutside<HTMLFormElement>({
    initialIsFocused: false,
    onOutsideClick: handleOutsideClick,
  });

  function Filter(nome: string) {
    if (nome.trim() === '') {
      setProductsFilter([]);
    } else {
      setProductsFilter(
        produtos?.filter((e: AddProduct) =>
          e.name.toLowerCase().includes(nome.trim().toLowerCase())
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
      <form
        className={`flex flex-row`}
        ref={ref}
      >
        {isFocused && (
          <span className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2 text-primary-foreground'>
            <Search className='size-5' />
          </span>
        )}
        <Input
          type='search'
          placeholder='Pesquisar'
          className={`max-w-[250px] rounded-full xl:max-w-[350px] ${isFocused ? 'pl-8' : ''}`}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onChange={handleFilter}
          value={inputValue}
        />
      </form>
      {showProducts && (
        <span
          className={`absolute mt-1 max-h-52 w-full overflow-y-auto rounded-md bg-muted text-foreground shadow-lg ${showProducts ? 'border-x border-black shadow-black' : ''}`}
        >
          {productsFilter.map((product) => (
            <Link
              href={'/'}
              key={product.id}
              className='flex items-center border-b border-secondary p-2 hover:border-primary-foreground hover:bg-secondary'
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
              <h2 className='px-1 text-base font-semibold'>{product.name}</h2>
            </Link>
          ))}
        </span>
      )}
    </div>
  );
};

export default SearchBar;
