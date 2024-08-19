import { NextAuthOptions, User } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import api from '@/services/api';

export const Options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'email', type: 'text' },
        password: { label: 'password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials) {
          return null;
        }
        try {
          // Explicitly type the response from the API
          const response = await api.post<{ user: User }>('/auth/local/signin', {
            email: credentials?.email,
            password: credentials?.password,
          });

          // Access the user from the response data
          const user = response.data.user;

          // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
          if (user && user.id) {
            return user;
          }
        } catch (error) {
          console.error('Login failed:', error);
        }

        // Return null if login fails
        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
      if (session?.user) {
        session.user.id = token.id as string;
      }
      return session;
    },
  },
  pages: {
    signIn: '/signin',
    error: '/signin',
  },
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === 'development',
};
