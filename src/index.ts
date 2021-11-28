import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import logger from './common/logger';
import router from './routes';
import { connectDb } from './common/database';
const app = express();
const port = 3000;

dotenv.config();

connectDb();

app.use(express.json());

app.use((req, _, next) => {
  logger.info(`${req.method} ${req.path}`, { body: req.body });
  next();
});

app.use('/api', router);

// 404
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use((err: Error, req: Request, res: Response, _) => {
  res
    .status(err.status || 500)
    .json({ error: err ? err.message : 'Internal server error' });
});

app.listen(port, () => {
  console.log(`Recipe backend listening at: ${port}`);
});
