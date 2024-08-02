'use client';
import { ColumnDef } from '@tanstack/react-table';
import { DataTableColumnHeader, DataTableRowActions } from '.';
import { Products } from '../../(public)/products/data/schema';

export const Columns: ColumnDef<Products>[] = [
  {
    accessorKey: 'id',
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title='Id'
      />
    ),
    cell: ({ row }) => (
      <div className='ml-1 flex items-center'>
        <span>{row.getValue('id')}</span>
      </div>
    ),
    enableHiding: false,
    filterFn: (row, id, value: string) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: 'name',
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title='Nome'
      />
    ),
    cell: ({ row }) => {
      return (
        <div className='flex items-center'>
          <span>{row.getValue('name')}</span>
        </div>
      );
    },
  },
  {
    accessorKey: 'price',
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title='Preço'
      />
    ),
    cell: ({ row }) => {
      return (
        <div className='flex items-center'>
          <span>R$ {row.getValue('price')}</span>
        </div>
      );
    },
    filterFn: (row, id, value: string) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: 'color',
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title='Cor'
      />
    ),
    cell: ({ row }) => {
      return (
        <div className='flex items-center'>
          <span>{row.getValue('color')}</span>
        </div>
      );
    },
    filterFn: (row, id, value: string) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: 'size',
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title='Tamanho'
      />
    ),
    cell: ({ row }) => {
      return (
        <div className='flex items-center'>
          <span>{row.getValue('size')}</span>
        </div>
      );
    },
    filterFn: (row, id, value: string) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: 'stock',
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title='Estoque'
      />
    ),
    cell: ({ row }) => {
      return (
        <div className='flex items-center'>
          <span>{row.getValue('stock')} Peças</span>
        </div>
      );
    },
    filterFn: (row, id, value: string) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    id: 'actions',
    cell: () => <DataTableRowActions />,
  },
];
