import { Controller, Get } from '@nestjs/common';
import axios from 'axios';
import { PokemonResult } from 'src/types/pokemon-results';

@Controller('seed')
export class SeedController {
  constructor() {}

  @Get()
  async generateSeed() {
    // const r = await (
    //   await fetch('https://pokeapi.co/api/v2/pokemon?limit=650')
    // ).json();
    const r = await axios.get<PokemonResult>(
      'https://pokeapi.co/api/v2/pokemon?limit=650',
    );

    r.data.results.forEach((pokemon) => {
      const id = pokemon.url.split('/').reverse()[1];

      console.log(`Pokemon ${id}: ${pokemon.name}`);
    });

    return r.data.results;
  }
}
