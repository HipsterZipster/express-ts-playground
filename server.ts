import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';
import { Application, NextFunction, Request, Response, Router } from 'express';
import * as favicon from 'serve-favicon';
import * as logger from 'morgan';
import * as path from 'path';
import * as errorHandler from 'errorhandler';
import { IndexRoute } from './routes';
import { serveStatic } from 'serve-static';
import { UsersRoute } from './routes/users';
import { BuildsRoute } from './routes/builds';
import * as express from 'express';

export class Server {
  public app: Application;
  /**
   * Bootstrap the thing
   */
  public static bootstrap(): Server {
    return new Server();
  }

  constructor() {
    //create expressjs application
    this.app = express();

    //configure application
    this.config();

    //add routes
    this.routes();

    //add api
    this.api();
  }

  /**
   * Create REST API routes
   */
  public api() {
    //empty for now
  }

  /**
   * Configure application
   */
  public config() {
    console.log('__dirname', __dirname);
    //add static paths
    this.app.use(express.static(path.join(__dirname, '..', 'public')));

    // uncomment after placing your favicon in /public
    //this.app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

    //configure pug
    this.app.set('views', path.join(__dirname, '..', 'views'));
    this.app.set('view engine', 'ejs');

    //mount logger
    this.app.use(logger('dev'));

    //mount json form parser
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));

    //mount query string parser
    this.app.use(
      bodyParser.urlencoded({
        extended: true
      })
    );

    //mount cookie parser middleware
    this.app.use(cookieParser('SECRET_GOES_HERE'));

    // catch 404 and forward to error handler
    this.app.use(function(
      err: any,
      req: Request,
      res: Response,
      next: NextFunction
    ) {
      err.status = 404;
      next(err);
    });

    //error handling
    this.app.use(errorHandler());
  }

  /**
   * Create and return Router.
   */
  private routes() {
    let router: Router;
    router = Router();

    //IndexRoute
    IndexRoute.create(router);
    UsersRoute.create(router);
    BuildsRoute.create(router, this.app);

    //use router middleware
    this.app.use(router);
  }
}
