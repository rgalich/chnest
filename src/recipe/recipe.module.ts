import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { recipeProviders } from './recipe.providers';
import { RecipeService } from './recipe.service';
import { RecipeController } from './recipe.controller';
import { IngredientListModule } from '../IngredientList/ingredientList.module';

@Module({
  imports: [DatabaseModule, IngredientListModule],
  providers: [
    ...recipeProviders,
    RecipeService,
  ],
  controllers: [RecipeController],
})
export class RecipeModule {}