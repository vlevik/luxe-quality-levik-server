import express from 'express';
import cors from 'cors';
import { adsRouter } from './routes/ads.route';
import { connect } from './models/init';

connect();

const createServer = () => {
  const server = express();
  server.use(cors());

	server.use('/ads', adsRouter);

  return server;
}

export { createServer };
