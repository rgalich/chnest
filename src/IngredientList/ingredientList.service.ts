import { Injectable, Inject, HttpStatus, HttpException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { IngredientList } from './ingredientList.entity';
import { IngredientListDto } from './dtos/ingredientListDto';
import { plainToClass } from 'class-transformer';

@Injectable()
export class IngredientListService {
  constructor(
    @Inject('IngredientListRepositoryToken')
    private readonly ingredientListRepository: Repository<IngredientList>,
  ) {}

  async findAll(): Promise<IngredientListDto[]> {
    const response = await this.ingredientListRepository.find();
    return plainToClass(IngredientListDto, response);
  }
}