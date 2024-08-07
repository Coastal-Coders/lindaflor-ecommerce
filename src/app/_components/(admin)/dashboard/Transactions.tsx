import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/Table';

const Transactions = () => {
  return (
    <>
      <Card className='border border-black bg-primary shadow-sm shadow-black lg:col-span-2 xl:col-span-2'>
        <CardHeader className='flex flex-row items-center'>
          <div className='grid gap-2'>
            <CardTitle>Transactions</CardTitle>
            <CardDescription>Recent transactions from your store.</CardDescription>
          </div>
          <Button
            asChild
            size='sm'
            variant={'secondary'}
            className='ml-auto gap-1 border border-black text-black shadow-black transition duration-500 ease-in-out hover:scale-95'
          >
            <Link href='#'>
              View All
              <ArrowUpRight className='size-4' />
            </Link>
          </Button>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className='font-semibold text-black'>Customer</TableHead>
                <TableHead className='font-semibold text-black'>Type</TableHead>
                <TableHead className='font-semibold text-black'>Status</TableHead>
                <TableHead className='font-semibold text-black'>Date</TableHead>
                <TableHead className='text-right font-semibold text-black'>Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>
                  <div className='font-medium'>Liam Johnson</div>
                  <div className='hidden text-sm text-muted-foreground md:inline'>
                    liam@example.com
                  </div>
                </TableCell>
                <TableCell className='font-medium'>Sale</TableCell>
                <TableCell className='font-medium'>
                  <Badge
                    className='text-xs'
                    variant='outline'
                  >
                    Approved
                  </Badge>
                </TableCell>
                <TableCell className='font-medium'>2023-06-23</TableCell>
                <TableCell className='text-right'>$250.00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <div className='font-medium'>Olivia Smith</div>
                  <div className='hidden text-sm text-muted-foreground md:inline-flex'>
                    olivia@example.com
                  </div>
                </TableCell>
                <TableCell className='font-medium'>Refund</TableCell>
                <TableCell className='font-medium'>
                  <Badge
                    className='text-xs'
                    variant='outline'
                  >
                    Declined
                  </Badge>
                </TableCell>
                <TableCell className='font-medium'>2023-06-24</TableCell>
                <TableCell className='text-right'>$150.00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <div className='font-medium'>Noah Williams</div>
                  <div className='hidden text-sm text-muted-foreground md:inline'>
                    noah@example.com
                  </div>
                </TableCell>
                <TableCell className='font-medium'>Subscription</TableCell>
                <TableCell className='font-medium'>
                  <Badge
                    className='text-xs'
                    variant='outline'
                  >
                    Approved
                  </Badge>
                </TableCell>
                <TableCell className='font-medium'>2023-06-25</TableCell>
                <TableCell className='text-right'>$350.00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <div className='font-medium'>Emma Brown</div>
                  <div className='hidden text-sm text-muted-foreground md:inline'>
                    emma@example.com
                  </div>
                </TableCell>
                <TableCell className='font-medium'>Sale</TableCell>
                <TableCell className='font-medium'>
                  <Badge
                    className='text-xs'
                    variant='outline'
                  >
                    Approved
                  </Badge>
                </TableCell>
                <TableCell className='font-medium'>2023-06-26</TableCell>
                <TableCell className='text-right'>$450.00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <div className='font-medium'>Liam Johnson</div>
                  <div className='hidden text-sm text-muted-foreground md:inline'>
                    liam@example.com
                  </div>
                </TableCell>
                <TableCell className='font-medium'>Sale</TableCell>
                <TableCell className='font-medium'>
                  <Badge
                    className='text-xs'
                    variant='outline'
                  >
                    Approved
                  </Badge>
                </TableCell>
                <TableCell className='font-medium'>2023-06-27</TableCell>
                <TableCell className='text-right'>$550.00</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </>
  );
};

export default Transactions;
