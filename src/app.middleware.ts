import { Injectable, NestMiddleware } from '@nestjs/common';
import type {Express, NextFunction, Request, Response} from 'express';
import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import { ApplicationModule } from './app.module';

export const bootstrap = async (express: Express.Application, prefix: string) => {
  const app = await NestFactory.create(ApplicationModule);
  app.setGlobalPrefix(prefix);
  await app.init();
  express.use(app.getHttpAdapter().getInstance())
  return app;
}

