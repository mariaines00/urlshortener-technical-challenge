import { RequestHandler, Request, Response, NextFunction } from 'express';

//import { decode, fetch } from './../models/shortUrl';

export const expandURL: RequestHandler = (req: Request, res: Response, next: NextFunction) => {
    res.sendStatus(501);
}
