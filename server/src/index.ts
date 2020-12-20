import express, { Request, Response, NextFunction } from 'express';

import redisClient from './configs/redis';
import shortenRoutes from './routes/shorten';

process.on('uncaughtException', e => {
  console.log(e);
  process.exit(1);
});

process.on('unhandledRejection', e => {
  console.log(e);
  process.exit(1);
});

const app = express();
const PORT = process.env.PORT || 3000;

app.use((req: Request, res: Response, next: NextFunction) => {
  console.log(`${req.method} ${req.path}`);
  next();
  return;
});

app.use('/shorten', shortenRoutes);

//error handler middleware TODO: proper error handling :D
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: err.message });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);

  redisClient.on('connect', function() {
    console.log('Connected to redis');
  });

  redisClient.on('error', function (err: Error) {
    console.log('Something went wrong ' + err);
  });

});
