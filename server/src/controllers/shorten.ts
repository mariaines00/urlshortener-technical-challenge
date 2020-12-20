import { RequestHandler, Request, Response, NextFunction } from 'express';

import { isEmpty, isValidURL } from './../utils/utils';
import { encode, register } from './../models/shortUrl';

export const shortenURL: RequestHandler = (req: Request, res: Response, next: NextFunction) => {
    if(isEmpty(req.query) || req.query.url === "") {
        console.warn('No url provided');
        res.sendStatus(400);
        return;
    }
    const url = req.query.url as string;

    if(!isValidURL(url)) {
        console.warn('Invalid url provided');
        res.sendStatus(400);
        return;
    }

    const time = Date.now();
    const id = encode(time);

    register(id, url);

    res.sendStatus(200);
    return;
}
