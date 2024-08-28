import { NextAuthOptions, User } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import api from '@/services/api';

export const Options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'email', type: 'email' },
        password: { label: 'password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials) {
          return null;
        }
        try {
          const response = await api.post<{ user: User }>('/auth/local/signin', {
            email: credentials.email,
            password: credentials.password,
          });

          const user = response.data.user;
          if (user != null && user.id) {
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
        console.log(token.name);
      }
      return token;
    },
    async session({ session, token }) {
      if (session?.user != null) {
        session.user.id = token.id as string;
      }
      return session;
    },
  },
  pages: {
    //TODO:TIRAR COMENTARIO QUANDO ESTIVER FUNCIONAL
    signIn: '/signin',
    error: '/signin',
  },
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === 'development',
};
