'use client';
import React, { createContext, ReactNode, useContext, useState } from 'react';

interface AlertContextProps {
  alert: { title: string; description: string } | null;
  // eslint-disable-next-line no-unused-vars
  setAlert: (title: string, description: string) => void;
}

const AlertContext = createContext<AlertContextProps | undefined>(undefined);

export const AlertProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [alert, setAlertState] = useState<{
    title: string;
    description: string;
  } | null>(null);

  const setAlert = (title: string, description: string) => {
    setAlertState({ title, description });
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
