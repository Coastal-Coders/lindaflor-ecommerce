import { NextAuthOptions, User } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import api from '@/services/api';

export const Options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        try {
          // Explicitly type the response from the API
          const response = await api.post<{ user: User }>('/auth/local/signup', {
            username: credentials?.username,
            password: credentials?.password,
          });

          // Access the user from the response data
          const user = response.data.user;

          if (user != null && user.id != null) {
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
      if (user != null) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user != null) {
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
