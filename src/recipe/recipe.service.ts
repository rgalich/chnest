import { Injectable, Inject, HttpStatus, HttpException } from '@nestjs/common';
import { Repository, Transaction } from 'typeorm';
import { plainToClass } from 'class-transformer';
import { Recipe } from './recipe.entity';
import { RecipeDto } from './dtos/recipeDto';
import { IngredientListService } from 'ingredientList/ingredientList.service';
import { StepService } from 'step/step.service';

@Injectable()
export class RecipeService {
  constructor(
    @Inject('RecipeRepositoryToken')
    private readonly recipeRepository: Repository<Recipe>,
    private readonly ingredientListService: IngredientListService,
    private readonly stepService: StepService,
  ) {}

  async create(recipe: RecipeDto): Promise<RecipeDto> {
    await this.recipeRepository.save(recipe);

    for (const ingredientList of recipe.ingredientLists) {
      ingredientList.recipe.id = recipe.id;
      await this.ingredientListService.create(ingredientList);
    }

    for (const step of recipe.steps) {
      step.recipe.id = recipe.id;
      await this.stepService.create(step);
    }

    return plainToClass(RecipeDto, recipe);
  }

  async update(recipe: RecipeDto): Promise<RecipeDto> {
    await this.recipeRepository.save(recipe);

    return plainToClass(RecipeDto, recipe);
  }
}