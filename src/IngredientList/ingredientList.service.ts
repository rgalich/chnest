import { Injectable, Inject, HttpStatus, HttpException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { IngredientList } from './ingredientList.entity';
import { IngredientListDto } from './dtos/ingredientListDto';
import { plainToClass } from 'class-transformer';
import { CreateIngredientListDto } from './dtos/create.ingredientListDto';

@Injectable()
export class IngredientListService {
  constructor(
    @Inject('IngredientListRepositoryToken')
    private readonly ingredientListRepository: Repository<IngredientList>,
  ) {}

  async findAll(): Promise<IngredientListDto[]> {
    const response = await this.ingredientListRepository.find({join: {
      alias: IngredientList.name,
      leftJoinAndSelect: {
        ingredient: `${IngredientList.name}.ingredient`,
      },
    }});
    return plainToClass(IngredientListDto, response);
  }

  async create(ingredientList: CreateIngredientListDto): Promise<IngredientListDto> {

    await this.ingredientListRepository.save(ingredientList);

    return plainToClass(IngredientListDto, ingredientList);
  }
}