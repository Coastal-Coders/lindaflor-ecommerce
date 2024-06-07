import { getStorageItem } from '@/utils';

export function checkUserAuthenticated(): boolean {
  const userToken: string | null = getStorageItem(process.env.NEXT_PUBLIC_USER_TOKEN);

  return !(userToken == null);
}
