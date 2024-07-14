import { ChangeEvent, useState } from 'react';
import { Search } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Products } from '@/app/_components/products/data/schema';
import { Input } from '@/components/ui/Input';
import * as produs from '../app/_components/products/data/tasks.json';

const produtos = () => {
  return produs.map((e) => e);
};

const SearchBar = () => {
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
    <div className='relative'>
      <form className='relative flex'>
        <Search className='absolute bottom-3 left-2.5 size-4 text-muted-foreground' />
        <Input
          type='search'
          placeholder='Procure suas roupas aqui...'
          className='w-[170px] pl-8 text-[12px] outline-none ring-1 hover:ring-1 hover:ring-gray-400 focus-visible:ring-1 focus-visible:ring-gray-300 focus-visible:ring-offset-0 sm:w-[200px] sm:placeholder:text-sm lg:w-[300px]'
          onChange={handleFilter}
          value={inputValue}
        />
      </form>
      {showProducts && (
        <ul
          className={`absolute mt-1 max-h-52 w-[170px] overflow-y-auto rounded-md bg-background text-primary shadow-lg sm:w-[200px] lg:w-[300px] ${showProducts ? 'border-x border-black shadow-lg shadow-black' : ''}`}
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
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
