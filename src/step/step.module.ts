import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { stepProviders } from './step.providers';
import { StepService } from './step.service';
import { StepController } from './step.controller';

@Module({
  imports: [DatabaseModule],
  providers: [
    ...stepProviders,
    StepService,
  ],
  controllers: [StepController],
  exports: [StepService],
})
export class StepModule {}