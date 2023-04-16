import { Get, Controller, Header } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  @Header('content-type', 'text/html')
  root(): string {
    return  Object
      .entries({hello: "hello world", bye: "bye world"})
      .map(([key, value]) => `key(${key}): value(${value})`)
      .join('\n');
  }
}