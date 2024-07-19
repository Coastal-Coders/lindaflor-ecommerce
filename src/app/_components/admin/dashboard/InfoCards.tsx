import { Activity, CreditCard, DollarSign, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';

const InfoCards = () => {
  return (
    <>
      <Card className='bg-background'>
        <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
          <CardTitle className='text-sm font-medium'>Total Revenue</CardTitle>
          <DollarSign className='size-4 text-black' />
        </CardHeader>
        <CardContent>
          <div className='text-2xl font-bold'>$45,231.89</div>
          <p className='text-xs text-muted-foreground'>+20.1% from last month</p>
        </CardContent>
      </Card>
      <Card className='bg-background'>
        <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
          <CardTitle className='text-sm font-medium'>Subscriptions</CardTitle>
          <Users className='size-4 text-black' />
        </CardHeader>
        <CardContent>
          <div className='text-2xl font-bold'>+2350</div>
          <p className='text-xs text-muted-foreground'>+180.1% from last month</p>
        </CardContent>
      </Card>
      <Card className='bg-background'>
        <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
          <CardTitle className='text-sm font-medium'>Sales</CardTitle>
          <CreditCard className='size-4 text-black' />
        </CardHeader>
        <CardContent>
          <div className='text-2xl font-bold'>+12,234</div>
          <p className='text-xs text-muted-foreground'>+19% from last month</p>
        </CardContent>
      </Card>
      <Card className='bg-background'>
        <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
          <CardTitle className='text-sm font-medium'>Active Now</CardTitle>
          <Activity className='size-4 text-black' />
        </CardHeader>
        <CardContent>
          <div className='text-2xl font-bold'>+573</div>
          <p className='text-xs text-muted-foreground'>+201 since last hour</p>
        </CardContent>
      </Card>
    </>
  );
};

export default InfoCards;
