import { Injectable, Inject, HttpStatus, HttpException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { plainToClass } from 'class-transformer';
import { Recipe } from './recipe.entity';
import { CreateRecipeDto } from './dtos/create.recipeDto';
import { RecipeDto } from './dtos/recipeDto';
import { IngredientListService } from '../IngredientList/ingredientList.service';
import { IngredientListDto } from 'IngredientList/dtos/ingredientListDto';

@Injectable()
export class RecipeService {
  constructor(
    @Inject('RecipeRepositoryToken')
    private readonly recipeRepository: Repository<Recipe>,
    private readonly ingredientListService: IngredientListService,
  ) {}

  // async findAll(): Promise<UnitDto[]> {
  //   const response = await this.unitRepository.find();
  //   return plainToClass(UnitDto, response);
  // }

  async create(recipe: CreateRecipeDto): Promise<RecipeDto> {

    await this.recipeRepository.save(recipe);

    for (const ingredientList of recipe.ingredientLists) {
      ingredientList.recipe.id = (recipe as RecipeDto).id;
      await this.ingredientListService.create(ingredientList);
    }
    return plainToClass(RecipeDto, recipe);
  }
}