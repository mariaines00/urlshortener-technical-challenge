import * as redis from 'redis';

const redisClient = redis.createClient(process.env.REDIS_URL as string);

export default redisClient;
