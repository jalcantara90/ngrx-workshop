

import {Request, Response} from 'express';
import {authenticate} from './db-data';

export function loginUser(req: Request, res: Response) {

    console.log('User login attempt ...');

    const {email, password} = req.body;
    const {password: pwd, ...user } = authenticate(email, password);

    if (user) {
      res.status(200).json(user);
    } else {
      res.sendStatus(403);
    }

}


