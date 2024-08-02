import * as productsData from './tasks.json';

const getStocks = (): number[] => {
  const allStatuses = [...new Set(productsData.map((product) => product.stock))];
  return allStatuses;
};

const getSizes = (): string[] => {
  const allSizes = [
    ...new Set(
      productsData
        .map((product) => product.size)
        .flat()
        .sort()
    ),
  ];
  return allSizes;
};

const getColors = (): string[] => {
  const allColors = [...new Set(productsData.map((product) => product.color).flat())];
  return allColors;
};

const getCategories = (): string[] => {
  const allCategories = [
    ...new Set(productsData.map((product) => product.name.split(' ')[0].trim())),
  ];
  return allCategories;
};

export const stock = getStocks().map((status: number) => ({
  value: status.toString(),
  label: status.toString(),
}));

export const sizes = getSizes().map((size: string) => ({
  value: size,
  label: size,
}));

export const colors = getColors().map((color: string) => ({
  value: color,
  label: color,
}));

export const categories = getCategories().map((category: string) => ({
  value: category,
  label: category,
}));
