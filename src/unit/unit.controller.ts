import { Controller, Get, Post, Body } from '@nestjs/common';
import { UnitService } from './unit.service';
import { UnitDto } from './dtos/unitDto';
import { ApiUseTags, ApiBearerAuth, ApiResponse, ApiOperation } from '@nestjs/swagger';

@ApiUseTags('unit')
@Controller('unit')
export class UnitController {
    constructor(private readonly unitService: UnitService) {}

    @Get()
    @ApiOperation({ title: 'Find all unit' })
    @ApiResponse({
        status: 200,
        description: 'The record has been successfully',
      })
    async findAll(): Promise<UnitDto[]> {
        return this.unitService.findAll();
    }
}
