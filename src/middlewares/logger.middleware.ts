import { NextApiRequest, NextApiResponse } from 'next';

export default function logger(
  request: NextApiRequest,
  response: NextApiResponse,
  next: () => void
) {
  let clientIp = (request.headers['x-forwarded-for'] as string) || request.socket.remoteAddress;

  console.log({
    url: request.url,
    clientIp,
  });

  return next();
}
