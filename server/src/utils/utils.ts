//import { Request, Response, NextFunction } from 'express';

/**
 * TODO: make this into a middleware
 * @param o 
 */
export function isEmpty(o: Object): boolean {
   return !Object.keys(o).length;
}
