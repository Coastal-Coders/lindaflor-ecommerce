'use client';
import React from 'react';
import { useAlert } from '@/utils/AlertProvider/AlertProvider';
import { Alert, AlertDescription, AlertTitle } from './ui/Alert';

const AlertGlobal = () => {
  const { alert } = useAlert();

  if (!alert) return null;

  return (
    <Alert
      variant={alert.variant}
      className='absolute bottom-20 right-3 flex w-fit flex-col shadow-lg shadow-black'
    >
      <AlertTitle className='font-bold'>{alert.title}</AlertTitle>
      <AlertDescription className='font-semibold'>{alert.description}</AlertDescription>
    </Alert>
  );
};

export default AlertGlobal;
