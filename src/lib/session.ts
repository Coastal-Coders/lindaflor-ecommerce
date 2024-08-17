import { getServerSession } from 'next-auth';
import { Options } from '@/hooks/auth/NextAuth';

// Função para obter a sessão atual
export async function getSession() {
  return await getServerSession(Options);
}

// Função para obter o usuário atual
export async function getCurrentUser() {
  const session = await getSession();
  return session?.user;
}
