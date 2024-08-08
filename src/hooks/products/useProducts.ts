import { useGetProducts } from './useGetProducts';

const useProducts = () => {
  const { produtos } = useGetProducts();

  const getStocks = (): number[] => {
    const allStatuses = [...new Set(produtos?.map((product) => product.stock))];
    return allStatuses;
  };

  const getSizes = (): string[] => {
    const allSizes = [
      ...new Set(
        produtos
          ?.map((product) => product.size)
          .flat()
          .sort()
      ),
    ];
    return allSizes;
  };

  const getColors = (): string[] => {
    const allColors = [...new Set(produtos?.map((product) => product.color).flat())];
    return allColors;
  };

  const getCategories = (): string[] => {
    const allCategories = [
      ...new Set(produtos?.map((product) => product.name.split(' ')[0].trim())),
    ];
    return allCategories;
  };

  const stock = getStocks().map((status: number) => ({
    value: status.toString(),
    label: status.toString(),
  }));

  const sizes = getSizes().map((size: string) => ({
    value: size,
    label: size,
  }));

  const colors = getColors().map((color: string) => ({
    value: color,
    label: color,
  }));

  const categories = getCategories().map((category: string) => ({
    value: category,
    label: category,
  }));

  return { categories, stock, colors, sizes };
};

export default useProducts;
