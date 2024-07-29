'use client';
import React, { createContext, ReactNode, useContext, useState } from 'react';

type AlertVariant = 'default' | 'success' | 'warning' | 'info' | 'error';

interface AlertContextProps {
  alert: { title: string; description: string; variant: AlertVariant } | null;
  // eslint-disable-next-line no-unused-vars
  setAlert: (title: string, description: string, variant?: AlertVariant) => void;
}

const AlertContext = createContext<AlertContextProps | undefined>(undefined);

export const AlertProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [alert, setAlertState] = useState<{
    title: string;
    description: string;
    variant: AlertVariant;
  } | null>(null);

  const setAlert = (title: string, description: string, variant: AlertVariant = 'default') => {
    setAlertState({ title, description, variant });
    setTimeout(() => setAlertState(null), 4000);
  };

  return <AlertContext.Provider value={{ alert, setAlert }}>{children}</AlertContext.Provider>;
};

export const useAlert = (): AlertContextProps => {
  const context = useContext(AlertContext);
  if (context === undefined) {
    throw new Error('useAlert must be used within an AlertProvider');
  }
  return context;
};
