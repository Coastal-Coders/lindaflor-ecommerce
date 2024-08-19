import { DefaultSession } from 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
      name: string;
      email: string;
      password: string;
    } & DefaultSession['user'];
  }
  export interface User {
    id: string;
    name: string;
    email: string;
    password: string;
  }
}
