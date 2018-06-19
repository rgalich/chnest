import { Injectable, Inject, HttpStatus, HttpException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Ingredient } from './ingredient.entity';
import { IngredientDto } from './dtos/ingredientDto';
import { plainToClass } from 'class-transformer';

@Injectable()
export class IngredientService {
  constructor(
    @Inject('IngredientRepositoryToken')
    private readonly ingredientRepository: Repository<Ingredient>,
  ) {}

  async findAll(): Promise<IngredientDto[]> {
    const response = await this.ingredientRepository.find();
    return plainToClass(IngredientDto, response);
  }

  async create(ingredient: IngredientDto): Promise<IngredientDto> {
    await this.ingredientRepository.save(ingredient);

    return plainToClass(IngredientDto, ingredient);
  }
}