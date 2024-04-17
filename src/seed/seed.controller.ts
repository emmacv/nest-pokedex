import { Controller, Get } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import axios from 'axios';
import { Model } from 'mongoose';
import { AxiosAdapter } from 'src/common/adapters/axios.adapter';
import { Pokemon } from 'src/pokemon/entities/pokemon.entity';

@Controller('seed')
export class SeedController {
  constructor(
    @InjectModel(Pokemon.name) private readonly pokemonModel: Model<Pokemon>,
    private readonly http: AxiosAdapter,
  ) {}

  @Get()
  async generateSeed() {
    // const r = await (
    //   await fetch('https://pokeapi.co/api/v2/pokemon?limit=650')
    // ).json();
    await this.pokemonModel.deleteMany({});

    const { results } = await this.http.get<PokemonResult>(
      'https://pokeapi.co/api/v2/pokemon?limit=100',
    );

    const newPokemonArray = results.map(({ name, url }) => {
      const no = +url.split('/').reverse()[1];

      return {
        name,
        no,
      };
    }) as Pokemon[];

    await this.pokemonModel.insertMany(newPokemonArray);

    return results;
  }
}
