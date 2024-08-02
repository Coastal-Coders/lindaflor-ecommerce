import { promises as fs } from 'fs';
import Link from 'next/link';
import path from 'path';
import { z } from 'zod';
import { productsSchema } from '@/app/_components/(public)/products/data';
import { Button } from '@/components/ui/Button';
import { Columns } from './Columns';
import { DataTable } from './DataTable';
import { Products } from '../../(public)/products/data/schema';

async function getProducts() {
  const data = await fs.readFile(
    path.join(process.cwd(), 'src/app/_components/(public)/products/data/tasks.json')
  );
  const produtcs = JSON.parse(data.toString());
  const transformedProducts = produtcs.map((product: Products) => ({
    ...product,
    price: String(product.price),
    stock: String(product.stock),
  }));

  return z.array(productsSchema).parse(transformedProducts);
}

export async function Product() {
  const produtcs = await getProducts();
  return (
    <>
      <div className='flex min-h-screen w-full flex-col'>
        <main className='flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8'>
          <Link
            href={'/admin/products/addproducts'}
            className='w-fit transition duration-500 ease-in-out hover:scale-105'
          >
            <Button
              variant={'ghost'}
              className='font-semibold text-secondary shadow-sm shadow-black'
            >
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
