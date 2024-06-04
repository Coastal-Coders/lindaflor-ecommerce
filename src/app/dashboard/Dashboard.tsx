import DashboardHeader from '@/components/DashboardPage/DashboardHeader';
import InfoCards from '@/components/DashboardPage/InfoCards';
import RecentSales from '@/components/DashboardPage/RecentSales';
import Transactions from '@/components/DashboardPage/Transactions';

export function Dashboard() {
  return (
    <div className='flex min-h-screen w-full flex-col'>
      <header className='sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6'>
        <DashboardHeader />
      </header>
      <main className='flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8'>
        <div className='grid grid-cols-2 gap-4 md:gap-8 lg:grid-cols-4'>
          {/*Cards de Informações Totais */}
          <InfoCards />
        </div>
        <div className='grid grid-cols-2 gap-4 sm:grid-cols-1 md:grid-cols-1 md:gap-8'>
          {/*Transações Recentes */}
          <Transactions />
          {/*Vendas Recentes */}
          <RecentSales />
        </div>
      </main>
    </div>
  );
}
