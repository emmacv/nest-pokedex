import { Module } from '@nestjs/common';
import { Http } from './http';

@Module({
  providers: [Http],
})
export class HttpModule {}
