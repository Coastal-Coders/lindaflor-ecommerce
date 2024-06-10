import { promises as fs } from 'fs';
import path from 'path';
import { z } from 'zod';
import { Columns } from './components/Columns';
import { DataTable } from './components/DataTable';
import { taskSchema } from './data/schema';

async function getTasks() {
  const data = await fs.readFile(
    path.join(process.cwd(), 'src/components/ProductsPageComponents/products/data/tasks.json')
  );

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const tasks = JSON.parse(data.toString());

  return z.array(taskSchema).parse(tasks);
}

export async function Products() {
  const tasks = await getTasks();
  return (
    <>
      <div className='flex min-h-screen w-full flex-col'>
        <main className='flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8'>
          <DataTable
            data={tasks}
            columns={Columns}
          />
        </main>
      </div>
    </>
  );
}
