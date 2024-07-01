import { promises as fs } from 'fs';
import path from 'path';
import { z } from 'zod';
import { productsSchema } from '../../data/schema';
import { Columns } from './components/Columns';
import { DataTable } from './components/DataTable';

async function getProducts() {
  const data = await fs.readFile(
    path.join(process.cwd(), 'src/components/ProductsPageComponents/data/tasks.json')
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
          <DataTable
            data={produtcs}
            columns={Columns}
          />
        </main>
      </div>
    </>
  );
}
