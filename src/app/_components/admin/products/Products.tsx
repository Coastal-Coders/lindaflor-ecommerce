import { promises as fs } from 'fs';
import Link from 'next/link';
import path from 'path';
import { z } from 'zod';
import { productsSchema } from '@/app/_components/products/data';
import { Button } from '@/components/ui/Button';
import { Columns } from './Columns';
import { DataTable } from './DataTable';

async function getProducts() {
  const data = await fs.readFile(
    path.join(process.cwd(), 'src/app/_components/products/data/tasks.json')
  );
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const produtcs = JSON.parse(data.toString());

  return z.array(productsSchema).parse(produtcs);
}

export async function Products() {
  const produtcs = await getProducts();
  return (
    <>
      <div className='flex min-h-screen w-full flex-col'>
        <main className='flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8'>
          <Link href={'/admin/products/addproducts'}>
            <Button className='w-fit bg-primary font-semibold text-secondary hover:scale-105 hover:bg-primary/80'>
              Adicionar Produtos
            </Button>
          </Link>
          <DataTable
            data={produtcs}
            columns={Columns}
          />
        </main>
      </div>
    </>
  );
}
