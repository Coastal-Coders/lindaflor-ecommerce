'use client';
import { ColumnDef } from '@tanstack/react-table';
import { statuses } from '../data/data';
import { Task } from '../data/schema';
import { DataTableColumnHeader } from './DataTableColumnHeader';
import { DataTableRowActions } from './DataTableRowActions';

export const Columns: ColumnDef<Task>[] = [
  {
    accessorKey: 'id',
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title='Id'
      />
    ),
    cell: ({ row }) => (
      <div className='flex items-center'>
        <span>{row.getValue('id')}</span>
      </div>
    ),
    enableHiding: false,
    filterFn: (row, id, value: string) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: 'nome',
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title='Nome'
      />
    ),
    cell: ({ row }) => {
      return (
        <div className='flex items-center'>
          <span>{row.getValue('nome')}</span>
        </div>
      );
    },
  },
  {
    accessorKey: 'preço',
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title='Preço'
      />
    ),
    cell: ({ row }) => {
      return (
        <div className='flex items-center'>
          <span>R$ {row.getValue('preço')}</span>
        </div>
      );
    },
    filterFn: (row, id, value: string) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: 'cor',
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title='Cor'
      />
    ),
    cell: ({ row }) => {
      return (
        <div className='flex items-center'>
          <span>{row.getValue('cor')}</span>
        </div>
      );
    },
    filterFn: (row, id, value: string) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: 'tamanho',
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title='Tamanho'
      />
    ),
    cell: ({ row }) => {
      return (
        <div className='flex items-center'>
          <span>{row.getValue('tamanho')}</span>
        </div>
      );
    },
    filterFn: (row, id, value: string) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: 'status',
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title='Status'
      />
    ),
    cell: ({ row }) => {
      const status = statuses.find((status) => status.value === row.getValue('status'));
      const Icon = status?.icon;
      if (!status) {
        return null;
      }

      return (
        <div className='flex w-[100px] items-center'>
          {Icon && <status.icon className='mr-2 size-4 text-muted-foreground' />}
          <span>{status.label}</span>
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
