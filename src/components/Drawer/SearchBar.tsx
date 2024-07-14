import { Search } from 'lucide-react';
import { Input } from '@/components/ui/Input';

const SearchBar = () => {
  return (
    <>
      <form className='m-auto flex-1'>
        <div className='relative'>
          <Search className='absolute left-2.5 top-2.5 size-4 text-muted-foreground' />
          <Input
            type='search'
            placeholder='Procure suas roupas aqui...'
            className='w-[350px] pl-8 outline-none ring-1 hover:ring-1 hover:ring-gray-400 focus-visible:ring-1 focus-visible:ring-gray-300 focus-visible:ring-offset-0 sm:w-[160px] sm:placeholder:text-[12px] md:w-[250px] lg:w-[300px]'
          />
        </div>
      </form>
    </>
  );
};

export default SearchBar;
