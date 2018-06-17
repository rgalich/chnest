import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { ingredientProviders } from './ingredient.providers';
import { IngredientService } from './ingredient.service';
import { IngredientController } from './ingredient.controller';

@Module({
  imports: [DatabaseModule],
  providers: [
    ...ingredientProviders,
    IngredientService,
  ],
  controllers: [IngredientController],
})
export class IngredientModule {}