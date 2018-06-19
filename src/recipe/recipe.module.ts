import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { recipeProviders } from './recipe.providers';
import { RecipeService } from './recipe.service';
import { RecipeController } from './recipe.controller';
import { IngredientListModule } from 'ingredientList/ingredientList.module';
import { StepModule } from 'step/step.module';

@Module({
  imports: [DatabaseModule, IngredientListModule, StepModule],
  providers: [
    ...recipeProviders,
    RecipeService,
  ],
  controllers: [RecipeController],
})
export class RecipeModule {}