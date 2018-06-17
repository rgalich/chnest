import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from './config/config.module';
import { IngredientModule } from './ingredient/ingredient.module';
import { UnitModule } from './unit/unit.module';
import { IngredientListModule } from './IngredientList/ingredientList.module';

@Module({
  imports: [ConfigModule, IngredientModule, UnitModule, IngredientListModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
