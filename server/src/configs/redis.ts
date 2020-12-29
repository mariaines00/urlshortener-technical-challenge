import * as redis from 'redis';
import { promisify }  from 'util';

const redisClient = redis.createClient(process.env.REDIS_URL as string);

export const getAsync = promisify(redisClient.get).bind(redisClient);

export default redisClient;
