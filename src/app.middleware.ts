import { Injectable, NestMiddleware } from '@nestjs/common';
import type {Express} from 'express';
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

  constructor(private expressInstance: Express.Application) {}

  use(req: any, res: any, next: () => void) {
    console.log('In Nest middleware');
    return bootstrap(this.expressInstance);
  }
}