import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { recipeProviders } from './recipe.providers';
import { RecipeService } from './recipe.service';
import { RecipeController } from './recipe.controller';

@Module({
  imports: [DatabaseModule],
  providers: [
    ...recipeProviders,
    RecipeService,
  ],
  controllers: [RecipeController],
})
export class UnitModule {}