import redisClient, { getAsync } from './../configs/redis';

// Solution for encode strings adapted from: https://stackoverflow.com/questions/742013/how-do-i-create-a-url-shortener#742047
const ALPHABET = '23456789bcdfghjkmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ', BASE = ALPHABET.length;

/**
 * takes an ID and turns it into a short string
 * @param num 
 */
export function encode(id: number): string {
    let str: string = '';
    while (id > 0) {
        str = ALPHABET.charAt(id % BASE) + str;
        id = Math.floor(id / BASE);
    }
    return str;
}

/**
 * Saves the new entry in the database
 * 
 * @param id encoded short string 
 * @param origin origin long url
 */
export function register(id: string, origin: string): void {
    redisClient.set(id, origin, function(_, res) {
       console.info(`REDIS: New entry ${id}`);
    });
}

/**
 * This is not ideal, but I don't feel like wrapping it in a promise :D
 * 
 * @param id 
 */
export async function fetch(id: string): Promise<string | null> {
    return getAsync(id);   
}
