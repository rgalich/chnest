import { Injectable } from '@nestjs/common';
import { ConfigService } from './config/config.service';

@Injectable()
export class AppService {
  constructor(config: ConfigService) {

  }

  root(): string {
    return 'Hello World!';
  }
}
