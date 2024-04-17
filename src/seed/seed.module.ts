import { Module } from '@nestjs/common';
import { SeedController } from './seed.controller';
import { CommonModule } from 'src/common/common.module';
import { PokemonModule } from 'src/pokemon/pokemon.module';

@Module({
  controllers: [SeedController],
  imports: [CommonModule, PokemonModule],
})
export class SeedModule {}
