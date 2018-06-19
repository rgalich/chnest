import { Injectable, Inject, HttpStatus, HttpException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Step } from './step.entity';
import { StepDto } from './dtos/stepDto';
import { plainToClass } from 'class-transformer';

@Injectable()
export class StepService {
  constructor(
    @Inject('StepRepositoryToken')
    private readonly recipeRepository: Repository<Step>,
  ) {}

  async create(step: StepDto): Promise<StepDto> {

      await this.recipeRepository.save(step);

      return plainToClass(StepDto, step);
  }
}