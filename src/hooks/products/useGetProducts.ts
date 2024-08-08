import { useQuery } from '@tanstack/react-query';
import { getProductById, getProducts } from '@/services/GetProducts';

export function useGetProducts() {
  const {
    data: produtos,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ['produtos'],
    queryFn: getProducts,
  });
  return { produtos, isError, isLoading };
}

export function useGetProductsById(id: number) {
  const {
    data: produto,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ['produto'],
    queryFn: () => getProductById(id),
  });
  return { produto, isError, isLoading };
}
