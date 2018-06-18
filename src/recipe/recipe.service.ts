import { Injectable, Inject, HttpStatus, HttpException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { plainToClass } from 'class-transformer';
import { Recipe } from './recipe.entity';
import { CreateRecipeDto } from './dtos/create.recipeDto';
import { RecipeDto } from './dtos/recipeDto';

@Injectable()
export class RecipeService {
  constructor(
    @Inject('RecipeRepositoryToken')
    private readonly recipeRepository: Repository<Recipe>,
  ) {}

  // async findAll(): Promise<UnitDto[]> {
  //   const response = await this.unitRepository.find();
  //   return plainToClass(UnitDto, response);
  // }

  async create(recipe: CreateRecipeDto): Promise<RecipeDto> {

      await this.recipeRepository.save(recipe);

      return plainToClass(RecipeDto, recipe);
  }
}