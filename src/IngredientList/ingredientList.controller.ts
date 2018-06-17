import { Controller, Get, Post, Body } from '@nestjs/common';
import { IngredientListService } from './ingredientList.service';
import { IngredientListDto } from './dtos/ingredientListDto';
import { ApiUseTags, ApiBearerAuth, ApiResponse, ApiOperation } from '@nestjs/swagger';

@ApiUseTags('ingredientList')
@Controller('ingredientList')
export class IngredientListController {
    constructor(private readonly ingredientListService: IngredientListService) {}

    @Get()
    @ApiOperation({ title: 'Find all ingredientList' })
    @ApiResponse({
        status: 200,
        description: 'The record has been successfully',
      })
    async findAll(): Promise<IngredientListDto[]> {
        return this.ingredientListService.findAll();
    }
}
