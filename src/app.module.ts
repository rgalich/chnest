import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from './config/config.module';
import { IngredientModule } from './ingredient/ingredient.module';

@Module({
  imports: [ConfigModule, IngredientModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
