'use client';
import React, { useEffect, useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/Table';

const Tamanhos = [
  {
    label: 'PP',
    manequim: '34',
    busto: '76~82',
    cintura: '58~62',
    quadril: '84~88',
  },
  {
    label: 'P',
    manequim: '36/38',
    busto: '80~84',
    cintura: '72~76',
    quadril: '90~96',
  },
  {
    label: 'M',
    manequim: '40',
    busto: '84~90',
    cintura: '76~82',
    quadril: '96~102',
  },
  {
    label: 'G',
    manequim: '42',
    busto: '90~94',
    cintura: '82~88',
    quadril: '102~108',
  },
  {
    label: 'GG',
    manequim: '44',
    busto: '94~106',
    cintura: '88~92',
    quadril: '108~114',
  },
  {
    label: 'XG',
    manequim: '46/48',
    busto: '104~112',
    cintura: '92~98',
    quadril: '114~120',
  },
  {
    label: 'G1',
    manequim: '50',
    busto: '112~118',
    cintura: '98~104',
    quadril: '120~126',
  },
  {
    label: 'G2',
    manequim: '52',
    busto: '118~124',
    cintura: '104~110',
    quadril: '126~132',
  },
];

const Sizes = () => {
  const [isScreenMediumOrAbove, setIsScreenMediumOrAbove] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsScreenMediumOrAbove(window.innerWidth >= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='m-auto items-center justify-center overflow-x-auto py-10 md:w-4/5 lg:w-2/3'>
      <h1 className='mx-auto w-fit rounded-md bg-secondary p-2 text-center text-xl font-semibold text-primary shadow-md shadow-primary'>
        Tabela de Medidas
      </h1>
      <div className='mx-2 my-10 rounded-md border bg-secondary text-primary'>
        <Table>
          {isScreenMediumOrAbove ? (
            <>
              <TableHeader>
                <TableRow className='hover:bg-secondary'>
                  <TableHead></TableHead>
                  {Tamanhos.map((sizes) => (
                    <TableHead
                      key={sizes.label}
                      className='text-center font-bold text-primary sm:px-1 md:px-1'
                    >
                      {sizes.label}
                    </TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className='text-center hover:bg-secondary'>
                  <TableCell className='font-semibold'>Manequim</TableCell>
                  {Tamanhos.map((sizes) => (
                    <TableCell
                      key={`${sizes.label}-manequim`}
                      className='break-words sm:p-1 sm:text-[10px] md:p-1 md:text-[13px] lg:text-base'
                    >
                      {sizes.manequim}
                    </TableCell>
                  ))}
                </TableRow>
                <TableRow className='text-center hover:bg-secondary'>
                  <TableCell className='font-semibold'>Busto</TableCell>
                  {Tamanhos.map((sizes) => (
                    <TableCell
                      key={`${sizes.label}-busto`}
                      className='break-words sm:p-1 sm:text-[10px] md:p-1 md:text-[13px] lg:text-base'
                    >
                      {sizes.busto}
                    </TableCell>
                  ))}
                </TableRow>
                <TableRow className='text-center hover:bg-secondary'>
                  <TableCell className='font-semibold'>Cintura</TableCell>
                  {Tamanhos.map((sizes) => (
                    <TableCell
                      key={`${sizes.label}-cintura`}
                      className='break-words sm:p-1 sm:text-[10px] md:p-1 md:text-[13px] lg:text-base'
                    >
                      {sizes.cintura}
                    </TableCell>
                  ))}
                </TableRow>
                <TableRow className='text-center hover:bg-secondary'>
                  <TableCell className='font-semibold'>Quadril</TableCell>
                  {Tamanhos.map((sizes) => (
                    <TableCell
                      key={`${sizes.label}-quadril`}
                      className='break-words sm:p-1 sm:text-[10px] md:p-1 md:text-[13px] lg:text-base'
                    >
                      {sizes.quadril}
                    </TableCell>
                  ))}
                </TableRow>
              </TableBody>
            </>
          ) : (
            <>
              <TableHeader>
                <TableRow className='hover:bg-secondary'>
                  <TableHead></TableHead>
                  <TableHead className='text-center font-bold text-primary sm:px-1 md:px-1'>
                    Manequim
                  </TableHead>
                  <TableHead className='text-center font-bold text-primary sm:px-1 md:px-1'>
                    Busto
                  </TableHead>
                  <TableHead className='text-center font-bold text-primary sm:px-1 md:px-1'>
                    Cintura
                  </TableHead>
                  <TableHead className='text-center font-bold text-primary sm:px-1 md:px-1'>
                    Quadril
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {Tamanhos.map((sizes) => (
                  <TableRow
                    key={sizes.label}
                    className='items-center justify-center text-center text-base hover:bg-secondary'
                  >
                    <TableCell className='font-bold text-primary sm:px-1 md:px-1'>
                      {sizes.label}
                    </TableCell>
                    <TableCell>{sizes.manequim}</TableCell>
                    <TableCell>{sizes.busto}</TableCell>
                    <TableCell>{sizes.cintura}</TableCell>
                    <TableCell>{sizes.quadril}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </>
          )}
        </Table>
      </div>
      <p className='mx-auto w-fit rounded-md bg-secondary p-2 text-center text-base font-semibold text-primary shadow-md shadow-primary'>
        As medidas podem variar em caso de biquínis encomendados
      </p>
    </div>
  );
};

export default Sizes;
