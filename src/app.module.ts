import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IngredientController } from './controllers/ingredient.controller';

@Module({
  imports: [],
  controllers: [AppController, IngredientController],
  providers: [AppService]
})
export class AppModule {}
