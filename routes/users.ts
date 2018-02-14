import { BaseRoute } from "./base";
import { Router, Request, Response, NextFunction } from 'express';

export class UsersRoute extends BaseRoute {
  static create(router: Router) {
    /* GET users listing. */
    router.get('/users', function (req: Request, res: Response, next: NextFunction) {
      res.send('respond with a resource');
    });
  }
}
