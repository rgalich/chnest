import { Injectable, Inject, HttpStatus, HttpException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Ingredient } from './ingredient.entity';
import { IngredientDto } from './dtos/ingredientDto';
import { CreateIngredientDto } from './dtos/create.ingredientDto';
import { plainToClass } from 'class-transformer';

@Injectable()
export class IngredientService {
  constructor(
    @Inject('IngredientRepositoryToken')
    private readonly ingredientRepository: Repository<Ingredient>,
  ) {}

  async findAll(): Promise<IngredientDto[]> {
    const response = await this.ingredientRepository.find();
    return plainToClass(IngredientDto, response);
  }

  async create(ingredient: CreateIngredientDto): Promise<IngredientDto> {
    try {
      await this.ingredientRepository.save(ingredient);

      return plainToClass(IngredientDto, ingredient);
    }
    catch (e) {
      switch (e.name) {
        case 'QueryFailedError': {
          throw new HttpException({
            status: HttpStatus.CONFLICT,
            error: 'Duplicate ingredient',
          }, HttpStatus.CONFLICT);
          break;
        }
        default: {
           break;
        }
     }
    }
  }
}