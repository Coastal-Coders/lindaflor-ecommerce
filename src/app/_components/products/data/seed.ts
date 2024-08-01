import { faker } from '@faker-js/faker';
import fs from 'fs';
import path from 'path';
import { stock } from './data';

const tasks = Array.from({ length: 100 }, () => ({
  id: `TASK-${faker.number.int({ min: 1000, max: 9999 })}`,
  nome: faker.hacker.phrase().replace(/^./, (letter) => letter.toUpperCase()),
  status: faker.helpers.arrayElement(stock).value,
}));

fs.writeFileSync(path.join(__dirname, 'tasks.json'), JSON.stringify(tasks, null, 2));

console.log('✅ Tasks data generated.');
