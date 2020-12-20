import { RequestHandler, Request, Response, NextFunction } from 'express';

import { isEmpty } from './../utils/utils';

export const shortenURL: RequestHandler = (req: Request, res: Response, next: NextFunction) => {
    if(isEmpty(req.query) || req.query.url === "") {
        res.sendStatus(400);
        return;
    }

    //

    res.sendStatus(200);
    return;
}
