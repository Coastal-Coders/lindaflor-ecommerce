import React from 'react';
import * as ToastPrimitives from '@radix-ui/react-toast';
import { Toast, ToastAction } from '.';

type ToastProps = React.ComponentPropsWithoutRef<typeof Toast>;
type ToastActionElement = React.ReactElement<typeof ToastAction>;

const ToastProvider = ToastPrimitives.Provider;

export { type ToastProps, type ToastActionElement, ToastProvider };
