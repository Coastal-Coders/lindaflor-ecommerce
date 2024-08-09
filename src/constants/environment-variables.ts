import packageJson from '@/../package.json';

const { version } = packageJson;

const uri: { [key: string]: string } = {
  development: 'http://localhost:3001/api/v1',
  production: '_',
  test: 'https://',
};

const NODE_ENV = process.env.NODE_ENV;

export { NODE_ENV, uri, version };
