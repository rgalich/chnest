import { Injectable, Inject, HttpStatus, HttpException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Step } from './step.entity';

@Injectable()
export class StepService {
  constructor(
    @Inject('StepRepositoryToken')
    private readonly recipeRepository: Repository<Step>,
  ) {}

  // async findAll(): Promise<UnitDto[]> {
  //   const response = await this.unitRepository.find();
  //   return plainToClass(UnitDto, response);
  // }
}