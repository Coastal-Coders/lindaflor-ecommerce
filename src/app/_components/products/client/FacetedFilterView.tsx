import React from 'react';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from '@/components/ui/Command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/Popover';
import { Separator } from '@/components/ui/Separator';
import { CheckIcon, PlusCircledIcon } from '@radix-ui/react-icons';
import { cn } from '@/lib/utils';

interface iFilterProps {
  selectedFilters: {
    [key: string]: Set<string>;
  };
  setSelectedFilters: React.Dispatch<
    React.SetStateAction<{
      [key: string]: Set<string>;
    }>
  >;
  title?: string;
  options: {
    label: string;
    value: string;
    icon?: React.ComponentType<{ className?: string }>;
  }[];
}

export function FacetedFilterView({
  title,
  options,
  selectedFilters,
  setSelectedFilters,
}: iFilterProps) {
  const handleSelect = (value: string) => {
    setSelectedFilters((prev) => {
      const newFilters = { ...prev };
      const filterSet = newFilters[title!] instanceof Set ? newFilters[title!] : new Set<string>();
      if (filterSet.has(value)) {
        filterSet.delete(value);
      } else {
        filterSet.add(value);
      }
      newFilters[title!] = filterSet;
      return newFilters;
    });
  };

  const handleClearFilters = () => {
    setSelectedFilters((prev) => {
      const newFilters = { ...prev };
      delete newFilters[title!];
      return newFilters;
    });
  };

  const selectedValues =
    selectedFilters[title!] instanceof Set ? selectedFilters[title!] : new Set<string>();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant='outline'
          size='sm'
          className='h-8 border-dashed'
        >
          <PlusCircledIcon className='mr-2 size-4' />
          {title}
          {selectedValues.size > 0 && (
            <>
              <Separator
                orientation='vertical'
                className='mx-2 h-4'
              />
              <Badge
                variant='secondary'
                className='rounded-sm px-1 font-normal lg:hidden'
              >
                {selectedValues.size}
              </Badge>
              <div className='hidden space-x-1 lg:flex'>
                {selectedValues.size > 2 ? (
                  <Badge
                    variant='secondary'
                    className='rounded-sm px-1 font-normal'
                  >
                    {selectedValues.size} selected
                  </Badge>
                ) : (
                  Array.from(selectedValues).map((value) => {
                    const option = options.find((opt) => opt.value === value);
                    return (
                      <Badge
                        variant='secondary'
                        key={value}
                        className='rounded-sm px-1 font-normal'
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
        className='w-[200px] p-0 sm:w-[170px]'
        align='start'
      >
        <Command>
          <CommandInput placeholder={title} />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup>
              {options.map((option) => {
                const isSelected = selectedValues.has(option.value);
                return (
                  <CommandItem
                    key={option.value}
                    onSelect={() => handleSelect(option.value)}
                  >
                    <div
                      className={cn(
                        'mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary',
                        isSelected
                          ? 'bg-primary text-primary-foreground'
                          : 'opacity-50 [&_svg]:invisible'
                      )}
                    >
                      <CheckIcon className={cn('size-4')} />
                    </div>
                    {option.icon && <option.icon className='mr-2 size-4 text-muted-foreground' />}
                    <span>{option.label}</span>
                  </CommandItem>
                );
              })}
            </CommandGroup>
            {selectedValues.size > 0 && (
              <>
                <CommandSeparator />
                <CommandGroup>
                  <CommandItem
                    onSelect={handleClearFilters}
                    className='justify-center text-center'
                  >
                    Clear filters
                  </CommandItem>
                </CommandGroup>
              </>
            )}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

export default FacetedFilterView;
