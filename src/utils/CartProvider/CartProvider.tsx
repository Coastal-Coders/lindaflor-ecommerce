'use client';

import React, { createContext, ReactNode, useContext, useReducer } from 'react';
import { Products } from '@/app/_components/(public)/products/data/schema';

interface CartState {
  products: (Products & { quantity: number })[];
  totalItems: number;
}

type CartAction =
  | { type: 'ADD_TO_CART'; product: Products }
  | { type: 'REMOVE_FROM_CART'; productId: number }
  | { type: 'CLEAR_CART' };

const initialCartState: CartState = {
  products: [],
  totalItems: 0,
};

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const productExists = state.products.find((product) => product.id === action.product.id);
      if (productExists != null) {
        return {
          ...state,
          products: state.products.map((product) =>
            product.id === action.product.id
              ? { ...product, quantity: product.quantity + 1 }
              : product
          ),
        };
      }
      return {
        ...state,
        products: [...state.products, { ...action.product, quantity: 1 }],
        totalItems: state.totalItems + 1,
      };
    }
    case 'REMOVE_FROM_CART': {
      const productToRemove = state.products.find((product) => product.id === action.productId);
      if (productToRemove) {
        return {
          ...state,
          products: state.products.filter((product) => product.id !== action.productId),
          totalItems: state.totalItems - productToRemove.quantity,
        };
      }
      return state;
    }
    case 'CLEAR_CART': {
      return initialCartState;
    }
    default:
      return state;
  }
};

interface CartProviderProps {
  children: ReactNode;
}

const CartContext = createContext<{
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
}>({
  state: initialCartState,
  dispatch: () => null,
});

export const CartProvider = ({ children }: CartProviderProps) => {
  const [state, dispatch] = useReducer(cartReducer, initialCartState);

  return <CartContext.Provider value={{ state, dispatch }}>{children}</CartContext.Provider>;
};

export const useCart = () => useContext(CartContext);
