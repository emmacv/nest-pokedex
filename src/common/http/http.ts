import { Injectable } from '@nestjs/common';

@Injectable()
export class Http {
  async get() {
    return 'Hello World!';
  }
}
