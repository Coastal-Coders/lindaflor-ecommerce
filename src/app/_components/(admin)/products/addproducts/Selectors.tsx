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
    cor?: string;
  }[];
  selectedValues: Set<string>;
  // eslint-disable-next-line no-unused-vars
  onChange: (values: Set<string>) => void;
}
export const colorOptions = [
  { label: 'Vermelho', value: 'VERMELHO', cor: '#FF0000' },
  { label: 'Verde', value: 'VERDE', cor: '#008000' },
  { label: 'Azul', value: 'AZUL', cor: '#0000FF' },
  { label: 'Amarelo', value: 'AMARELO', cor: '#FFFF00' },
  { label: 'Ciano', value: 'CIANO', cor: '#00FFFF' },
  { label: 'Magenta', value: 'MAGENTA', cor: '#FF00FF' },
  { label: 'Laranja', value: 'LARANJA', cor: '#FFA500' },
  { label: 'Rosa', value: 'ROSA', cor: '#FFC0CB' },
  { label: 'Roxo', value: 'ROXO', cor: '#800080' },
  { label: 'Marrom', value: 'MARROM', cor: '#A52A2A' },
  { label: 'Cinza', value: 'CINZA', cor: '#808080' },
  { label: 'Bege', value: 'BEGE', cor: '#F5F5DC' },
  { label: 'Turquesa', value: 'TURQUESA', cor: '#40E0D0' },
  { label: 'Oliva', value: 'OLIVA', cor: '#808000' },
  { label: 'Roxo Claro', value: 'ROXO CLARO', cor: '#D8BFD8' },
  { label: 'Lavanda', value: 'LAVANDA', cor: '#E6E6FA' },
  { label: 'Dourado', value: 'DOURADO', cor: '#FFD700' },
  { label: 'Prata', value: 'PRATA', cor: '#C0C0C0' },
  { label: 'Vinho', value: 'VINHO', cor: '#800000' },
  { label: 'Verde Limão', value: 'VERDE LIMÃO', cor: '#00FF00' },
  { label: 'Verde Oliva', value: 'VERDE OLIVA', cor: '#6B8E23' },
  { label: 'Rosa Claro', value: 'ROSA CLARO', cor: '#FFB6C1' },
  { label: 'Coral', value: 'CORAL', cor: '#FF7F50' },
  { label: 'Salmon', value: 'SALMON', cor: '#FA8072' },
  { label: 'Índigo', value: 'ÍNDIGO', cor: '#4B0082' },
  { label: 'Menta', value: 'MENTA', cor: '#98FF98' },
  { label: 'Azeitona', value: 'AZEITONA', cor: '#6F4F28' },
  { label: 'Tangerina', value: 'TANGERINA', cor: '#FF6347' },
  { label: 'Ambar', value: 'AMBAR', cor: '#FFBF00' },
  { label: 'Bordô', value: 'BORDÔ', cor: '#800020' },
  { label: 'Laranja Claro', value: 'LARANJA CLARO', cor: '#FFDAB9' },
  { label: 'Azul Claro', value: 'AZUL CLARO', cor: '#ADD8E6' },
  { label: 'Amarelo Claro', value: 'AMARELO CLARO', cor: '#FFFFE0' },
  { label: 'Cinza Claro', value: 'CINZA CLARO', cor: '#D3D3D3' },
  { label: 'Preto', value: 'PRETO', cor: '#000000' },
  { label: 'Branco', value: 'BRANCO', cor: '#FFFFFF' },
  { label: 'Marfim', value: 'MARFIM', cor: '#FFFFF0' },
  { label: 'Rosa Escuro', value: 'ROSA ESCURO', cor: '#C71585' },
  { label: 'Azul Escuro', value: 'AZUL ESCURO', cor: '#00008B' },
  { label: 'Verde Escuro', value: 'VERDE ESCURO', cor: '#006400' },
  { label: 'Roxo Escuro', value: 'ROXO ESCURO', cor: '#4B0082' },
  { label: 'Café', value: 'CAFÉ', cor: '#4B2E2A' },
  { label: 'Amarelo Ocre', value: 'AMARELO OCRE', cor: '#CC7722' },
  { label: 'Caramelo', value: 'CARAMELO', cor: '#FFDAB9' },
  { label: 'Ceruleano', value: 'CERULEANO', cor: '#007BA7' },
  { label: 'Lima', value: 'LIMA', cor: '#BFFF00' },
  { label: 'Gelo', value: 'GELO', cor: '#F0F8FF' },
  { label: 'Ametista', value: 'AMETISTA', cor: '#9966CC' },
  { label: 'Verde Água', value: 'VERDE ÁGUA', cor: '#00FFCC' },
  { label: 'Verde Floresta', value: 'VERDE FLORESTA', cor: '#228B22' },
  { label: 'Lavanda Claro', value: 'LAVANDA CLARO', cor: '#E0B0FF' },
  { label: 'Carvalho', value: 'CARVALHO', cor: '#8B4513' },
  { label: 'Violetas', value: 'VIOLETAS', cor: '#EE82EE' },
  { label: 'Marron Claro', value: 'MARRON CLARO', cor: '#A0522D' },
  { label: 'Açafrão', value: 'AÇAFRÃO', cor: '#F4C430' },
  { label: 'Escarlate', value: 'ESCARLATE', cor: '#FF2400' },
  { label: 'Rosa Antigo', value: 'ROSA ANTIGO', cor: '#D2B48C' },
  { label: 'Água Marinha', value: 'ÁGUA MARINHA', cor: '#7FFFD4' },
  { label: 'Celeste', value: 'CELESTE', cor: '#87CEEB' },
  { label: 'Azul Céu', value: 'AZUL CÉU', cor: '#00BFFF' },
  { label: 'Prata Claro', value: 'PRATA CLARO', cor: '#DCDCDC' },
  { label: 'Vermelho Escuro', value: 'VERMELHO ESCURO', cor: '#8B0000' },
  { label: 'Borgonha', value: 'BORGONHA', cor: '#8C0032' },
  { label: 'Rosa Choque', value: 'ROSA CHOQUE', cor: '#FF007F' },
  { label: 'Rosa Neve', value: 'ROSA NEVE', cor: '#FAEBD7' },
  { label: 'Salmon Claro', value: 'SALMON CLARO', cor: '#FA8072' },
  { label: 'Amarelo Dourado', value: 'AMARELO DOURADO', cor: '#FFD700' },
  { label: 'Ouro Velho', value: 'OURO VELHO', cor: '#CFB53B' },
  { label: 'Azul Cobalto', value: 'AZUL COBALTO', cor: '#0047AB' },
  { label: 'Verde Musgo', value: 'VERDE MUSGO', cor: '#8A9A5B' },
  { label: 'Bege Claro', value: 'BEGE CLARO', cor: '#F5F5DC' },
  { label: 'Cinza Escuro', value: 'CINZA ESCURO', cor: '#A9A9A9' },
  { label: 'Pêssego', value: 'PÊSSEGO', cor: '#FFDAB9' },
  { label: 'Laranja Escuro', value: 'LARANJA ESCURO', cor: '#FF8C00' },
  { label: 'Lima Claro', value: 'LIMA CLARO', cor: '#00FF00' },
  { label: 'Caramelo Claro', value: 'CARAMELO CLARO', cor: '#F5DEB3' },
  { label: 'Neve', value: 'NEVE', cor: '#FFFAFA' },
  { label: 'Verde Pastel', value: 'VERDE PASTEL', cor: '#77DD77' },
  { label: 'Areia', value: 'AREIA', cor: '#F4A460' },
  { label: 'Cinza Azulado', value: 'CINZA AZULADO', cor: '#B0C4DE' },
  { label: 'Roxo Profundo', value: 'ROXO PROFUNDO', cor: '#4B0082' },
  { label: 'Verde Militar', value: 'VERDE MILITAR', cor: '#4B5320' },
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
                variant='secondary'
                className='rounded-md border-black px-2 font-normal lg:hidden'
              >
                {selectedValues.size}
              </Badge>
              <div className='hidden space-x-1 lg:flex'>
                {selectedValues.size > 2 ? (
                  <Badge
                    variant='secondary'
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
                        variant='secondary'
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
        className='z-10 max-h-60 w-full overflow-y-auto rounded-md border border-black bg-background'
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
                    className='my-2 flex w-10/12 cursor-pointer items-center rounded-md text-base font-semibold transition duration-500 ease-in-out hover:scale-95'
                  >
                    <div
                      className={cn(
                        'mr-2 flex h-6 w-6 items-center justify-center rounded-sm border border-black bg-background',
                        isSelected ? 'text-primary-foreground' : '[&_svg]:invisible'
                      )}
                    >
                      <CheckIcon className={cn('size-6 text-black')} />
                    </div>
                    <span
                      style={{
                        backgroundColor: `${option.value.length <= 3 ? 'primary' : option.cor}`,
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
                  className='my-1 cursor-pointer justify-center rounded-sm border border-black bg-primary/80 text-center text-base transition duration-500 ease-in-out hover:scale-95 hover:font-semibold'
                >
                  {options.length > 0 &&
                    (options[0].value.length <= 3 ? 'Limpar Tamanhos' : 'Limpar Cores')}
                </CommandItem>
              </CommandGroup>
            </>
          )}
        </Command>
      </PopoverContent>
    </Popover>
  );
};
