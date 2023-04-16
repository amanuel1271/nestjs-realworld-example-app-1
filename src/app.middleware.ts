import { Injectable, NestMiddleware } from '@nestjs/common';
import type {Express, NextFunction, Request, Response} from 'express';
import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import { ApplicationModule } from './app.module';

const bootstrap = async (express: Express.Application, prefix: string) => {
  const app = await NestFactory.create(ApplicationModule, new ExpressAdapter(express));
  app.setGlobalPrefix(prefix);
  await app.init();
  return app;
}

@Injectable()
export class AppMiddleware implements NestMiddleware {
  bootstrap: any;

  constructor(private expressInstance: Express.Application, prefix: string) {
    this.bootstrap = bootstrap(this.expressInstance, prefix);
  }

  use(req: Request, res: Response, next: NextFunction) {
    return this.bootstrap;
  }
}