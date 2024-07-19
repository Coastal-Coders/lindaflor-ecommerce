import React from 'react';
import { CheckIcon, PlusCircledIcon } from '@radix-ui/react-icons';
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
  facets: Map<string, number>;
}

export function FacetedFilterView({
  title,
  options,
  selectedFilters,
  setSelectedFilters,
  facets,
}: iFilterProps) {
  const selectedValues = new Set(Array.from(selectedFilters[title!] ?? []));

  const handleSelect = (value: string) => {
    setSelectedFilters((prev) => {
      const newFilters = { ...prev };
      const filterSet = new Set(Array.from(selectedFilters[title!] ?? []));
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
        className='w-[170px] p-0 sm:w-[250px]'
        align='start'
      >
        <Command className='bg-background'>
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
                    className='font-semibold'
                  >
                    <div
                      className={cn(
                        'mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-black',
                        isSelected
                          ? 'bg-primary text-primary-foreground'
                          : 'opacity-50 [&_svg]:invisible'
                      )}
                    >
                      <CheckIcon className={cn('size-4 text-black')} />
                    </div>
                    {option.icon && <option.icon className='mr-2 size-4 text-muted-foreground' />}
                    <span>{option.label}</span>
                    {facets.get(option.value) != null && (
                      <span className='ml-auto flex size-4 items-center justify-center font-mono text-xs'>
                        {facets.get(option.value)}
                      </span>
                    )}
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
