import { Get, Controller, Header } from '@nestjs/common';

@Controller('me')
export class AppController {
  @Get()
  root(): Object {
    return  {
      "id": "",
      "email": "",
      "language": "",
      "timezone": "",
      "suspend": {},
      "marketing_mail": false,
      "subscriptions": {
        "marketing_mail": false,
        "marketing_push": true,
        "marketing_sms": true,
        "nighttime_push": true
      },
      "marketing_privacy": true,
      "block_unknown_user": false,
      "uid": "",
      "transfer": {
        "allow_withdrawal": true,
        "allow_deposit": true
      }
    }
  }
}