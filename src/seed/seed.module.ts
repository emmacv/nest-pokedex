import { Module } from '@nestjs/common';
import { SeedController } from './seed.controller';
import { CommonModule } from 'src/common/common.module';

@Module({
  controllers: [SeedController],
  imports: [CommonModule],
})
export class SeedModule {}
