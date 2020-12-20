// Adapted from: https://stackoverflow.com/questions/742013/how-do-i-create-a-url-shortener#742047

const ALPHABET = '23456789bcdfghjkmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ-_', BASE = ALPHABET.length;

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
 * takes a short string and turns it into an ID
 * 
 * @param str 
 */
export function decode(str: string): number {
    let num: number = 0;
    for (let i = 0, len = str.length; i < len; i++) {
        num *= BASE + ALPHABET.indexOf(str.charAt(i));
    }
    return num;
}
