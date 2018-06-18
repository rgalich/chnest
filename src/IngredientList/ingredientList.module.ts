import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { ingredientListProviders } from './ingredientList.providers';
import { IngredientListService } from './ingredientList.service';
import { IngredientListController } from './ingredientList.controller';

@Module({
  imports: [DatabaseModule],
  providers: [
    ...ingredientListProviders,
    IngredientListService,
  ],
  controllers: [IngredientListController],
  exports: [IngredientListService],
})
export class IngredientListModule {}