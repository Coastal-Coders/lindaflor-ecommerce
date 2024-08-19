import { getServerSession } from 'next-auth';
//import { Options } from '@/app/api/auth/[...nextauth]/Options';

// Função para obter a sessão atual
export async function getSession() {
  return await getServerSession();
}

// Função para obter o usuário atual
export async function getCurrentUser() {
  const session = await getSession();
  return session?.user;
}
