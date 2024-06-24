import { CheckCircledIcon, CrossCircledIcon } from '@radix-ui/react-icons';
import * as L from './tasks.json';

const sts = (): string[] => {
  const allStatuses = [...new Set(L.map((e) => e.status))];
  return allStatuses;
};
const size = (): string[] => {
  const allSizes = [...new Set(L.map((e) => e.tamanho).sort())];
  return allSizes;
};
const color = (): string[] => {
  const allColors = [...new Set(L.map((e) => e.cor))];
  return allColors;
};
const peça = (): string[] => {
  const allPeças = [...new Set(L.map((e) => e.nome.split(' ')[0].trim()))];
  return allPeças;
};
const ico = (sts: string) => {
  return sts === 'Disponível' ? CheckCircledIcon : CrossCircledIcon;
};
export const statuses = sts().map((status: string) => ({
  value: status,
  label: status,
  icon: ico(status),
}));
export const tamanho = size().map((s: string) => ({
  value: s,
  label: s,
}));
export const cor = color().map((c: string) => ({
  value: c,
  label: c,
}));
export const Peças = peça().map((p: string) => ({
  value: p,
  label: p,
}));
