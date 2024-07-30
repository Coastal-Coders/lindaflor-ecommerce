'use client';
import React from 'react';
import { Popover, PopoverContent, PopoverTrigger } from '@radix-ui/react-popover';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from 'cmdk';
import { CheckIcon } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Separator } from '@/components/ui/Separator';
import { cn } from '@/lib/utils';

interface SelectorsProps {
  title: string;
  options: {
    label: string;
    value: string;
  }[];
  selectedValues: Set<string>;
  // eslint-disable-next-line no-unused-vars
  onChange: (values: Set<string>) => void;
}
export const colorOptions = [
  { label: 'Vermelho', value: '#FF0000' },
  { label: 'Verde', value: '#008000' },
  { label: 'Azul', value: '#0000FF' },
  { label: 'Amarelo', value: '#FFFF00' },
  { label: 'Ciano', value: '#00FFFF' },
  { label: 'Magenta', value: '#FF00FF' },
  { label: 'Laranja', value: '#FFA500' },
  { label: 'Rosa', value: '#FFC0CB' },
  { label: 'Roxo', value: '#800080' },
  { label: 'Marrom', value: '#A52A2A' },
  { label: 'Cinza', value: '#808080' },
  { label: 'Bege', value: '#F5F5DC' },
  { label: 'Turquesa', value: '#40E0D0' },
  { label: 'Oliva', value: '#808000' },
  { label: 'Roxo Claro', value: '#D8BFD8' },
  { label: 'Lavanda', value: '#E6E6FA' },
  { label: 'Dourado', value: '#FFD700' },
  { label: 'Prata', value: '#C0C0C0' },
  { label: 'Vinho', value: '#800000' },
  { label: 'Verde Limão', value: '#00FF00' },
  { label: 'Verde Oliva', value: '#6B8E23' },
  { label: 'Rosa Claro', value: '#FFB6C1' },
  { label: 'Coral', value: '#FF7F50' },
  { label: 'Salmon', value: '#FA8072' },
  { label: 'Índigo', value: '#4B0082' },
  { label: 'Menta', value: '#98FF98' },
  { label: 'Azeitona', value: '#6F4F28' },
  { label: 'Tangerina', value: '#FF6347' },
  { label: 'Ambar', value: '#FFBF00' },
  { label: 'Bordô', value: '#800020' },
  { label: 'Laranja Claro', value: '#FFDAB9' },
  { label: 'Azul Claro', value: '#ADD8E6' },
  { label: 'Amarelo Claro', value: '#FFFFE0' },
  { label: 'Cinza Claro', value: '#D3D3D3' },
  { label: 'Preto', value: '#000000' },
  { label: 'Branco', value: '#FFFFFF' },
  { label: 'Marfim', value: '#FFFFF0' },
  { label: 'Rosa Escuro', value: '#C71585' },
  { label: 'Azul Escuro', value: '#00008B' },
  { label: 'Verde Escuro', value: '#006400' },
  { label: 'Roxo Escuro', value: '#4B0082' },
  { label: 'Café', value: '#4B2E2A' },
  { label: 'Amarelo Ocre', value: '#CC7722' },
  { label: 'Caramelo', value: '#FFDAB9' },
  { label: 'Ceruleano', value: '#007BA7' },
  { label: 'Lima', value: '#BFFF00' },
  { label: 'Gelo', value: '#F0F8FF' },
  { label: 'Ametista', value: '#9966CC' },
  { label: 'Verde Água', value: '#00FFCC' },
  { label: 'Verde Floresta', value: '#228B22' },
  { label: 'Lavanda Claro', value: '#E0B0FF' },
  { label: 'Carvalho', value: '#8B4513' },
  { label: 'Violetas', value: '#EE82EE' },
  { label: 'Marron Claro', value: '#A0522D' },
  { label: 'Açafrão', value: '#F4C430' },
  { label: 'Escarlate', value: '#FF2400' },
  { label: 'Rosa Antigo', value: '#D2B48C' },
  { label: 'Água Marinha', value: '#7FFFD4' },
  { label: 'Celeste', value: '#87CEEB' },
  { label: 'Azul Céu', value: '#00BFFF' },
  { label: 'Prata Claro', value: '#DCDCDC' },
  { label: 'Vermelho Escuro', value: '#8B0000' },
  { label: 'Borgonha', value: '#8C0032' },
  { label: 'Rosa Choque', value: '#FF007F' },
  { label: 'Rosa Neve', value: '#FAEBD7' },
  { label: 'Salmon Claro', value: '#FA8072' },
  { label: 'Amarelo Dourado', value: '#FFD700' },
  { label: 'Ouro Velho', value: '#CFB53B' },
  { label: 'Azul Cobalto', value: '#0047AB' },
  { label: 'Verde Musgo', value: '#8A9A5B' },
  { label: 'Bege Claro', value: '#F5F5DC' },
  { label: 'Cinza Escuro', value: '#A9A9A9' },
  { label: 'Pêssego', value: '#FFDAB9' },
  { label: 'Laranja Escuro', value: '#FF8C00' },
  { label: 'Lima Claro', value: '#00FF00' },
  { label: 'Caramelo Claro', value: '#F5DEB3' },
  { label: 'Neve', value: '#FFFAFA' },
  { label: 'Verde Pastel', value: '#77DD77' },
  { label: 'Areia', value: '#F4A460' },
  { label: 'Gelo Claro', value: '#F0FFFF' },
  { label: 'Lilás', value: '#D8BFD8' },
  { label: 'Turquesa Claro', value: '#E0FFFF' },
  { label: 'Pêssego Claro', value: '#FFDAB9' },
  { label: 'Carvalho Claro', value: '#D2B48C' },
  { label: 'Marrom Escuro', value: '#3E2723' },
  { label: 'Bege Rosado', value: '#D8BFD8' },
  { label: 'Chocolate', value: '#D2691E' },
  { label: 'Rosa Choque Claro', value: '#FF69B4' },
  { label: 'Cobre', value: '#B87333' },
  { label: 'Laranja Avermelhado', value: '#FF4500' },
  { label: 'Verde Neon', value: '#39FF14' },
  { label: 'Roxo Pastel', value: '#D8BFD8' },
  { label: 'Púrpura', value: '#800080' },
  { label: 'Azul Pastel', value: '#B0E0E6' },
  { label: 'Rosa Pastel', value: '#F5B7B1' },
  { label: 'Azul Celeste', value: '#87CEEB' },
  { label: 'Púrpura Claro', value: '#DDA0DD' },
  { label: 'Pera', value: '#B5B300' },
  { label: 'Gelo Claro', value: '#F0F8FF' },
  { label: 'Coral Claro', value: '#F08080' },
  { label: 'Dourado Claro', value: '#FAFAD2' },
  { label: 'Ocre Claro', value: '#C0C0C0' },
  { label: 'Caramelo Avermelhado', value: '#C04000' },
];
export const sizeOptions = [
  { label: 'Extra Pequeno', value: 'XS' },
  { label: 'Pequeno', value: 'S' },
  { label: 'Médio', value: 'M' },
  { label: 'Grande', value: 'L' },
  { label: 'Extra Grande', value: 'XL' },
  { label: 'XXL', value: 'XXL' },
  { label: '3XL', value: '3XL' },
  { label: '4XL', value: '4XL' },
  { label: '5XL', value: '5XL' },
  { label: '6XL', value: '6XL' },
  { label: '7XL', value: '7XL' },
  { label: '8XL', value: '8XL' },
];
export const Selectors = ({ title, options, selectedValues, onChange }: SelectorsProps) => {
  const handleSelect = (value: string) => {
    const newValues = new Set(selectedValues);
    if (newValues.has(value)) {
      newValues.delete(value);
    } else {
      newValues.add(value);
    }
    onChange(newValues);
  };
  const handleClearFilters = () => {
    onChange(new Set());
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant='outline'
          size='sm'
          className='h-10 w-full justify-start border-dashed text-base ring-1 focus-visible:right-1 focus-visible:outline-none focus-visible:ring-gray-400 focus-visible:ring-offset-0'
        >
          {title}
          {selectedValues.size > 0 && (
            <>
              <Separator
                orientation='vertical'
                className='mx-2 h-4'
              />
              <Badge
                variant='default'
                className='rounded-md border-black px-2 font-normal lg:hidden'
              >
                {selectedValues.size}
              </Badge>
              <div className='hidden space-x-1 lg:flex'>
                {selectedValues.size > 2 ? (
                  <Badge
                    variant='default'
                    className='rounded-md border-black px-2 font-normal'
                  >
                    {selectedValues.size} selected
                  </Badge>
                ) : (
                  Array.from(selectedValues).map((value) => {
                    const option = options.find((opt) => opt.value === value);
                    return (
                      <Badge
                        key={value}
                        variant='default'
                        className='rounded-md border-black px-1 font-normal'
                      >
                        {option?.label}
                      </Badge>
                    );
                  })
                )}
              </div>
            </>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className='z-10 max-h-60 w-full overflow-y-auto rounded-md border border-black bg-primary'
        align='start'
      >
        <Command className='m-1'>
          <CommandInput
            placeholder={title}
            style={{
              borderBottom: '2px solid black',
              minHeight: '5%',
              width: '100%',
              marginTop: '4px',
              marginBottom: '8px',
              fontSize: '14px',
              paddingBottom: '4px',
              paddingTop: '4px',
            }}
            className='placeholder:text-black'
          />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup>
              {options.map((option) => {
                const isSelected = selectedValues.has(option.value);
                return (
                  <CommandItem
                    key={option.value}
                    onSelect={() => handleSelect(option.value)}
                    className='my-2 flex w-10/12 cursor-pointer items-center rounded-md text-base font-semibold hover:bg-slate-200'
                  >
                    <div
                      className={cn(
                        'mr-2 flex h-6 w-6 items-center justify-center rounded-sm border border-black',
                        isSelected
                          ? 'bg-primary text-primary-foreground'
                          : 'opacity-50 [&_svg]:invisible'
                      )}
                    >
                      <CheckIcon className={cn('size-6 text-black')} />
                    </div>
                    <span
                      style={{
                        backgroundColor: `${option.value.length <= 4 ? 'primary' : option.value}`,
                      }}
                      className='w-full rounded-md p-1'
                    >
                      {option.label}
                    </span>
                  </CommandItem>
                );
              })}
            </CommandGroup>
          </CommandList>
          {selectedValues.size > 0 && (
            <>
              <CommandSeparator />
              <CommandGroup>
                <CommandItem
                  onSelect={handleClearFilters}
                  className='my-1 cursor-pointer justify-center rounded-sm border border-black bg-background/80 text-center text-base hover:font-semibold'
                >
                  {options.length > 0 &&
                    (options[0].value.length <= 4 ? 'Limpar Tamanhos' : 'Limpar Cores')}
                </CommandItem>
              </CommandGroup>
            </>
          )}
        </Command>
      </PopoverContent>
    </Popover>
  );
};
