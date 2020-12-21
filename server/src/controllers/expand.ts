import { RequestHandler, Request, Response, NextFunction } from 'express';

import { fetch } from './../models/shortUrl';

export const expandURL: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
    const short = req.params.short;
    if(!short) {
        console.warn('Missing short id :O');
        res.sendStatus(400);
        return;
    }

    const origin = await fetch(short).catch((err) => {
        if (err) {
            console.warn('Failed to fetch original url from redis');
            res.sendStatus(500);
            next(err);
            return;
        }
    });

    if(!origin) {
        res.sendStatus(404);
        next();
        return;
    }

    res.redirect(origin as string);
    return;
}
