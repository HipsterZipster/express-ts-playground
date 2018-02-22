import { NextFunction, Request, Response, Router } from 'express';
import { BaseRoute } from './base';

export class IndexRoute extends BaseRoute {
  /**
   * Create the routes.
   */
  static create(router: Router) {
    //log
    console.log('[IndexRoute::create] Creating index route.');

    //add home page route
    router.get('/', (req: Request, res: Response, next: NextFunction) => {
      new IndexRoute().index(req, res, next);
    });
  }

  /**
   * The home page route.
   */
  index(req: Request, res: Response, next: NextFunction) {
    //set custom title
    this.title = 'Home | Tour of Heros';

    //set message
    let options: Object = {
      message: 'Welcome to the Tour of Heros'
    };

    //render template
    this.render(req, res, 'index', options);
  }
}
