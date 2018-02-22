import { BaseRoute } from "./base";
import { Application, Router, Request, Response, NextFunction } from 'express';
import * as path from "path";
import * as express from "express";

interface BuildJob {
  buildId: number;
  durationSeconds: number;
}

interface BuildArtifact {
  buildId: number;
  url: string;
  absolutePath: string;
  timeCreated: Date;
  lastAccessed: Date;
}

export class BuildsRoute extends BaseRoute {
  static create(router: Router, app: Application) {
    // his.app.use(express.static(path.join(__dirname, '..', "public")));


    // GET list of buildJobs

    // GET individual buildJobs by buildId

    // Add a new buildJob

    // Delete a buildJob

    // Update a buildJob

    // Add a new site

    // Get list of sites

    // Get site by siteId

    // Delete a site

    // Update a site

    router.get('/builds/api/:buildId', function (req: Request, res: Response, next: NextFunction) {
      const buildsReq = `buildId=${JSON.stringify(req.params, null, '\t')} respond to req from url ${req.url}}`;
      console.log(buildsReq);
      // if ((req.params.buildId) {
      //   return build
      // }
      next();
    });

    //
    // const swaggerUi = require('swagger-ui-express');
    // const swaggerDocument = require('./swagger.json');
    //
    // app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

  }



}