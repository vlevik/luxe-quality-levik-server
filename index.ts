import { createServer } from './src/createServer';

createServer()
  .listen(3000, async () => {
    // eslint-disable-next-line no-console
    console.log('Server is running on localhost:3000');
  });
