import express from 'express';
import logger from './common/logger';
import router from './routes';
const app = express();
const port = 3000;

app.use(express.json());

app.use((req, _, next) => {
  logger.info(`${req.method} ${req.path}`, { body: req.body });
  next();
});

app.use(router);

app.listen(port, () => {
  console.log(`Recipe backend listening at: ${port}`);
});
