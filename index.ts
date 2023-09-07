// sample code for using the library
import { createClient } from "redis";
import { RedisCache } from "./redis-cache";

const redisClient = createClient({
  host: "localhost",
  port: 6379,
  password: "password",
});

const redisCache = new RedisCache(redisClient);
