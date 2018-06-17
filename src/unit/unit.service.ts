import { Injectable, Inject, HttpStatus, HttpException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Unit } from './unit.entity';
import { UnitDto } from './dtos/unitDto';
import { plainToClass } from 'class-transformer';

@Injectable()
export class UnitService {
  constructor(
    @Inject('UnitRepositoryToken')
    private readonly unitRepository: Repository<Unit>,
  ) {}

  async findAll(): Promise<UnitDto[]> {
    const response = await this.unitRepository.find();
    return plainToClass(UnitDto, response);
  }
}