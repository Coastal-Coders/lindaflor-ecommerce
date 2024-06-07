import { expect } from '@jest/globals';
import { APP_KEY } from '@/utils/localStorage';
import { checkUserAuthenticated } from './';

beforeEach(() => {
  window.localStorage.clear();
});

describe('checkUserAuthenticated', () => {
  it('should return true when user is authenticated', () => {
    const token = 'token';
    window.localStorage.setItem(
      `${APP_KEY}_${process.env.NEXT_PUBLIC_USER_TOKEN}`,
      JSON.stringify({ token })
    );

    expect(checkUserAuthenticated()).toEqual(true);
  });

  it('should return false when user is not authenticated', () => {
    expect(checkUserAuthenticated()).toEqual(false);
  });
});
