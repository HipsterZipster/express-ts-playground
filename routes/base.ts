import { Request, Response } from "express";

export class BaseRoute {

  protected title: string;
  private scripts: string[];

  constructor() {
    //initialize variables
    this.title = "Express JS";
    this.scripts = [];
  }

  /**
   * Add a JS external file to the request.
   *
   * @param src {string} The src to the external JS file.
   */
  addScript(src: string): BaseRoute {
    this.scripts.push(src);
    return this;
  }

  /**
   * Render a page.
   *
   * @class BaseRoute
   * @method render
   * @param req {Request} The request object.
   * @param res {Response} The response object.
   * @param view {String} The view to render.
   * @param options {Object} Additional options to append to the view's local scope.
   * @return void
   */
  render(req: Request, res: Response, view: string, options?: Object) {
    //add constants
    res.locals.BASE_URL = "/";

    //add scripts
    res.locals.scripts = this.scripts;

    //add title
    res.locals.title = this.title;

    //render view
    res.render(view, options);
  }
}
