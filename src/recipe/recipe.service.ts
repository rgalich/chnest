import { Injectable, Inject, HttpStatus, HttpException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Recipe } from './recipe.entity';

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
}