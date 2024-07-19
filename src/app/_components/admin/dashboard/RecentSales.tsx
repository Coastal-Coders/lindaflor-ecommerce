import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/Avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';

const RecentSales = () => {
  return (
    <>
      <Card className='bg-background'>
        <CardHeader>
          <CardTitle>Recent Sales</CardTitle>
        </CardHeader>
        <CardContent className='grid gap-8'>
          <div className='flex items-center gap-4'>
            <Avatar className='hidden size-9 sm:flex'>
              <AvatarImage
                src=''
                alt='Avatar'
              />
              <AvatarFallback>OM</AvatarFallback>
            </Avatar>
            <div className='grid gap-1'>
              <p className='text-sm font-semibold leading-none'>Olivia Martin</p>
              <p className='text-sm text-muted-foreground'>olivia.martin@email.com</p>
            </div>
            <div className='ml-auto font-semibold'>+$1,999.00</div>
          </div>
          <div className='flex items-center gap-4'>
            <Avatar className='hidden size-9 sm:flex'>
              <AvatarImage
                src=''
                alt='Avatar'
              />
              <AvatarFallback>JL</AvatarFallback>
            </Avatar>
            <div className='grid gap-1'>
              <p className='text-sm font-semibold leading-none'>Jackson Lee</p>
              <p className='text-sm text-muted-foreground'>jackson.lee@email.com</p>
            </div>
            <div className='ml-auto font-semibold'>+$39.00</div>
          </div>
          <div className='flex items-center gap-4'>
            <Avatar className='hidden size-9 sm:flex'>
              <AvatarImage
                src=''
                alt='Avatar'
              />
              <AvatarFallback>IN</AvatarFallback>
            </Avatar>
            <div className='grid gap-1'>
              <p className='text-sm font-semibold leading-none'>Isabella Nguyen</p>
              <p className='text-sm text-muted-foreground'>isabella.nguyen@email.com</p>
            </div>
            <div className='ml-auto font-semibold'>+$299.00</div>
          </div>
          <div className='flex items-center gap-4'>
            <Avatar className='hidden size-9 sm:flex'>
              <AvatarImage
                src=''
                alt='Avatar'
              />
              <AvatarFallback>WK</AvatarFallback>
            </Avatar>
            <div className='grid gap-1'>
              <p className='text-sm font-semibold leading-none'>William Kim</p>
              <p className='text-sm text-muted-foreground'>will@email.com</p>
            </div>
            <div className='ml-auto font-semibold'>+$99.00</div>
          </div>
          <div className='flex items-center gap-4'>
            <Avatar className='hidden size-9 sm:flex'>
              <AvatarImage
                src=''
                alt='Avatar'
              />
              <AvatarFallback>SD</AvatarFallback>
            </Avatar>
            <div className='grid gap-1'>
              <p className='text-sm font-semibold leading-none'>Sofia Davis</p>
              <p className='text-sm text-muted-foreground'>sofia.davis@email.com</p>
            </div>
            <div className='ml-auto font-semibold'>+$39.00</div>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default RecentSales;
