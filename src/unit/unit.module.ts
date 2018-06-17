import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { unitProviders } from './unit.providers';
import { UnitService } from './unit.service';
import { UnitController } from './unit.controller';

@Module({
  imports: [DatabaseModule],
  providers: [
    ...unitProviders,
    UnitService,
  ],
  controllers: [UnitController],
})
export class UnitModule {}