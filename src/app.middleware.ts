import { Injectable, NestMiddleware } from '@nestjs/common';
import type {Express, NextFunction, Request, Response} from 'express';
import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import { ApplicationModule } from './app.module';

const bootstrap = async (express: Express.Application) => {
  const app = await NestFactory.create(ApplicationModule, new ExpressAdapter(express));
  await app.init();
  return app;
}

@Injectable()
export class AppMiddleware implements NestMiddleware {
  bootstrap: any;

  constructor(private expressInstance: Express.Application) {
    this.bootstrap = bootstrap(this.expressInstance);
  }

  use(req: Request, res: Response, next: NextFunction) {
    console.log('In Nest middleware');
    return this.bootstrap;
  }
}