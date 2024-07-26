'use client';
import React from 'react';
import { useAlert } from '@/utils/AlertProvider/AlertProvider';
import { Alert, AlertDescription, AlertTitle } from './ui/Alert';

const AlertGlobal = () => {
  const { alert } = useAlert();

  if (!alert) return null;

  return (
    <Alert className='absolute bottom-20 right-3 w-fit flex-col items-start border border-black bg-primary p-2 shadow-lg shadow-black'>
      <AlertTitle className='font-bold text-secondary'>{alert.title}</AlertTitle>
      <AlertDescription className='font-semibold text-secondary'>
        {alert.description}
      </AlertDescription>
    </Alert>
  );
};

export default AlertGlobal;
