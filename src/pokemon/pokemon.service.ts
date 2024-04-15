import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';
import { Pokemon } from './entities/pokemon.entity';
import { Model, isValidObjectId } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class PokemonService {
  constructor(
    @InjectModel(Pokemon.name) private readonly pokemonModel: Model<Pokemon>,
  ) {}

  async create(createPokemonDto: CreatePokemonDto) {
    try {
      return await this.pokemonModel.create(createPokemonDto);
    } catch (error) {
      this.handleException(error, (reason) => `Duplicate pokemon: ${reason}`);
    }
  }

  findAll() {
    return `This action returns all pokemon`;
  }

  async findOne(slug: string) {
    let pokemon: Pokemon;

    if (isValidObjectId(slug)) {
      pokemon = await this.pokemonModel.findById(slug);

      if (!pokemon) throw new NotFoundException(`Pokemon #${slug} not found`);
    }

    if (!pokemon) {
      const isNumber = /^[0-9]+$/;
      const term = isNumber.test(slug) ? 'no' : 'name';

      pokemon = await this.pokemonModel.findOne({ [term]: slug });
      if (!pokemon) throw new NotFoundException(`Pokemon #${slug} not found`);
    }

    // if (!pokemon) pokemon = await this.pokemonModel.findOne({ name: slug });

    // if (!pokemon) throw new NotFoundException(`Pokemon #${slug} not found`);

    return pokemon;
  }

  async update(slug: string, updatePokemonDto: UpdatePokemonDto) {
    try {
      const pokemon = await this.findOne(slug);

      await pokemon.updateOne(updatePokemonDto, {
        new: true,
      });

      const newPokemon = { ...pokemon.toJSON(), ...updatePokemonDto };

      return newPokemon;
    } catch (error) {
      this.handleException(error, (reason) => `Duplicate pokemon: ${reason}`);
    }
  }

  async remove(id: string) {
    const r = this.pokemonModel.findByIdAndDelete(id);

    return r;
  }

  private handleException(error: any, message: (reason: any) => string) {
    if (error.code === 11000) {
      throw new BadRequestException(message(JSON.stringify(error.keyValue)));
    }

    throw new InternalServerErrorException(
      'Something went wrong, check the logs for more information.',
    );
  }
}
